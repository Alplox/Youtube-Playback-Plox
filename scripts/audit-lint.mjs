#!/usr/bin/env node
/**
 * audit-lint.mjs
 *
 * Dependency-free static checker that enforces the mandatory rules from
 * AGENTS.md directly on youtube-playback-plox.user.js, plus release
 * consistency checks (version sync between .user.js / .meta.js /
 * changelog.md).
 *
 * Rules enforced:
 *  E-rules (fail):
 *   - E01  `var` usage (AGENTS §5)
 *   - E02  Direct `.innerHTML=` assignment outside the TrustedTypes policy path (AGENTS §2.3)
 *   - E03  Truly empty catch blocks (`catch { }`) without any handling/comment (AGENTS §Error handling)
 *   - E04  Forbidden identifiers: MINIPLAYER_SELECTORS, SHORTS_SELECTORS, domQueryCache (AGENTS §2.3)
 *   - E05  Unknown option keys passed to createElement() (silently ignored -> silent bugs)
 *   - V01  @version mismatch between .user.js and .meta.js
 *   - V02  changelog.md has no entry for the current @version
 *
 *  W-rules (warn only):
 *   - W01  SCRIPT_VERSION hardcoded fallback differs from @version
 *   - W02  logWarn/logError called without a string-literal module name as first argument
 *
 * Usage:
 *   node scripts/audit-lint.mjs [--file path/to/user.js]
 * Exit code 0 = clean (warnings allowed), 1 = errors found.
 */
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const FILE = resolve(process.argv.includes('--file') ? process.argv[process.argv.indexOf('--file') + 1] : 'youtube-playback-plox.user.js');
const META_FILE = resolve('youtube-playback-plox.meta.js');
const CHANGELOG_FILE = resolve('changelog.md');

const errors = [];
const warnings = [];
const report = (severity, code, line, message) => {
    const entry = `${code} ${resolve(FILE).split(/[\\/]/).pop()}:${line} ${message}`;
    (severity === 'error' ? errors : warnings).push(entry);
};

if (!existsSync(FILE)) {
    console.error(`FATAL: file not found: ${FILE}`);
    process.exit(1);
}
const source = readFileSync(FILE, 'utf8');

/** Line number (1-based) for a given index in source */
const lineOf = (src, idx) => src.slice(0, idx).split('\n').length;

/**
 * Removes // line comments and /* block comments while preserving strings,
 * so code-shape checks don't fire on documentation examples.
 */
function stripComments(src) {
    let out = '';
    let i = 0;
    let mode = 'code'; // code | line | block | squote | dquote | template
    while (i < src.length) {
        const c = src[i];
        const next = src[i + 1];
        if (mode === 'code') {
            if (c === '/' && next === '/') { mode = 'line'; i += 2; out += '  '; continue; }
            if (c === '/' && next === '*') { mode = 'block'; i += 2; out += '  '; continue; }
            if (c === "'") mode = 'squote';
            else if (c === '"') mode = 'dquote';
            else if (c === '`') mode = 'template';
            out += c; i++; continue;
        }
        if (mode === 'line') {
            if (c === '\n') { mode = 'code'; out += c; } else out += ' ';
            i++; continue;
        }
        if (mode === 'block') {
            if (c === '*' && next === '/') { mode = 'code'; out += '  '; i += 2; continue; }
            out += c === '\n' ? '\n' : ' ';
            i++; continue;
        }
        // inside strings: copy verbatim, honour escapes, close on matching quote
        out += c;
        if (c === '\\') { out += next ?? ''; i += 2; continue; }
        const close = mode === 'squote' ? "'" : mode === 'dquote' ? '"' : '`';
        if (c === close) mode = 'code';
        i++;
    }
    return out;
}

/**
 * Walks src from startIndex (position AFTER an opening bracket) returning the
 * index of the matching closing bracket, skipping strings, template literals
 * and regex-unaware comments (comments already stripped by caller when needed).
 */
function matchBracket(src, startIndex, openChar, closeChar) {
    let depth = 1;
    let i = startIndex;
    let mode = 'code';
    while (i < src.length) {
        const c = src[i];
        if (mode === 'code') {
            if (c === "'" ) { mode = 'squote'; }
            else if (c === '"') { mode = 'dquote'; }
            else if (c === '`') { mode = 'template'; }
            else if (c === '/' && src[i + 1] === '/') { mode = 'line'; i += 2; continue; }
            else if (c === '/' && src[i + 1] === '*') { mode = 'block'; i += 2; continue; }
            else {
                if (c === openChar) depth++;
                else if (c === closeChar) { depth--; if (depth === 0) return i; }
            }
            i++; continue;
        }
        if (mode === 'line') { if (c === '\n') mode = 'code'; i++; continue; }
        if (mode === 'block') { if (c === '*' && src[i + 1] === '/') { mode = 'code'; i += 2; continue; } i++; continue; }
        // string modes
        if (c === '\\') { i += 2; continue; }
        const close = mode === 'squote' ? "'" : mode === 'dquote' ? '"' : '`';
        if (c === close) mode = 'code';
        i++;
    }
    return -1;
}

// ---------------------------------------------------------------------------
// E01: `var` usage
// ---------------------------------------------------------------------------
{
    const code = stripComments(source);
    const re = /\bvar\s+[A-Za-z_$]/g;
    let m;
    while ((m = re.exec(code)) !== null) {
        report('error', 'E01', lineOf(source, m.index), "`var` usage is forbidden (use const/let): `" + code.slice(m.index, m.index + 20).trim() + "...`");
    }
}

// ---------------------------------------------------------------------------
// E02: direct .innerHTML= assignments outside the TrustedTypes policy path
// ---------------------------------------------------------------------------
{
    const code = stripComments(source);
    const re = /\.innerHTML\s*\+?=/g;
    let m;
    while ((m = re.exec(code)) !== null) {
        const lineStart = code.lastIndexOf('\n', m.index) + 1;
        const lineEnd = code.indexOf('\n', m.index);
        const lineText = code.slice(lineStart, lineEnd === -1 ? undefined : lineEnd);
        if (/policy\.createHTML/.test(lineText)) continue; // sanctioned TT sink
        report('error', 'E02', lineOf(source, m.index), "direct `.innerHTML=` assignment; use setInnerHTML() (AGENTS §2.3)");
    }
}

// ---------------------------------------------------------------------------
// E03: truly empty catch blocks
// ---------------------------------------------------------------------------
{
    // Checked on comment-stripped source: a catch whose body is only comments
    // counts as empty, and commented-out CODE lines are never flagged.
    const stripped = stripComments(source);
    const re = /catch(?:\s*\([^)]*\))?\s*\{/g;
    let m;
    while ((m = re.exec(stripped)) !== null) {
        const openIdx = m.index + m[0].length - 1;
        const closeIdx = matchBracket(stripped, openIdx + 1, '{', '}');
        if (closeIdx === -1) continue;
        const body = stripped.slice(openIdx + 1, closeIdx).trim();
        if (body.length === 0) {
            report('error', 'E03', lineOf(source, m.index), "empty catch block; must at least logWarn/logError (only best-effort cleanup may stay silent, add a comment)");
        }
    }
}

// ---------------------------------------------------------------------------
// E04: forbidden identifiers
// ---------------------------------------------------------------------------
{
    const code = stripComments(source);
    for (const ident of ['MINIPLAYER_SELECTORS', 'SHORTS_SELECTORS', 'domQueryCache']) {
        const re = new RegExp(`\\b${ident}\\b`, 'g');
        let m;
        while ((m = re.exec(code)) !== null) {
            report('error', 'E04', lineOf(source, m.index), `forbidden identifier \`${ident}\` (AGENTS §2.3)`);
        }
    }
}

// ---------------------------------------------------------------------------
// E05: createElement() called with unsupported option keys
// ---------------------------------------------------------------------------
{
    const ALLOWED_KEYS = new Set([
        'className', 'id', 'text', 'html', 'onClickEvent', 'events',
        'attributes', 'props', 'styles', 'children', 'store'
    ]);
    const codeNoComments = stripComments(source); // hoisted: O(1) per match, not per scan
    const callRe = /\bcreateElement\s*\(/g;
    let m;
    while ((m = callRe.exec(codeNoComments)) !== null) {
        const openIdx = m.index + m[0].length - 1;
        const closeIdx = matchBracket(codeNoComments, openIdx + 1, '(', ')');
        if (closeIdx === -1) continue;
        const argsText = codeNoComments.slice(openIdx + 1, closeIdx);

        // Split top-level arguments
        const args = [];
        let depth = 0, cur = '', mode = 'code';
        for (let i = 0; i < argsText.length; i++) {
            const c = argsText[i];
            if (mode === 'code') {
                if (c === "'" || c === '"' || c === '`') mode = c;
                if (c === '(' || c === '{' || c === '[') depth++;
                if (c === ')' || c === '}' || c === ']') depth--;
                if (c === ',' && depth === 0) { args.push(cur); cur = ''; continue; }
                cur += c;
            } else {
                cur += c;
                if (c === '\\') { cur += argsText[++i] ?? ''; continue; }
                if (c === mode) mode = 'code';
            }
        }
        args.push(cur);
        if (args.length < 2) continue;
        const optsArg = args[1].trim();
        if (!optsArg.startsWith('{')) continue; // variable/options object: skip
        const optsBodyStart = openIdx + 1 + argsText.indexOf(optsArg) + 1;
        const optsBodyEnd = matchBracket(codeNoComments, optsBodyStart, '{', '}');
        if (optsBodyEnd === -1) continue;
        const body = codeNoComments.slice(optsBodyStart, optsBodyEnd);

        // Extract top-level keys
        const keys = [];
        let kDepth = 0, kCur = '', kMode = 'code';
        for (let i = 0; i < body.length; i++) {
            const c = body[i];
            if (kMode === 'code') {
                if (c === "'" || c === '"' || c === '`') kMode = c;
                if (c === '(' || c === '{' || c === '[') kDepth++;
                if (c === ')' || c === '}' || c === ']') kDepth--;
                if (c === ',' && kDepth === 0) { keys.push(kCur); kCur = ''; continue; }
                kCur += c;
            } else {
                kCur += c;
                if (c === '\\') { kCur += body[++i] ?? ''; continue; }
                if (c === kMode) kMode = 'code';
            }
        }
        keys.push(kCur);

        for (const rawKey of keys) {
            const key = rawKey.trim();
            if (!key || key.startsWith('//')) continue;
            const keyNameMatch = key.match(/^(?:'([^']+)'|"([^"]+)"|([A-Za-z_$][\w$]*))\s*(?::|,|$)/);
            if (!keyNameMatch) continue;
            const keyName = keyNameMatch[1] ?? keyNameMatch[2] ?? keyNameMatch[3];
            // Skip spread and computed keys
            if (key.startsWith('...') || key.startsWith('[')) continue;
            if (!ALLOWED_KEYS.has(keyName)) {
                // Only flag explicit `key:` pairs; bare shorthands of known globals are rare here
                if (!new RegExp(`^${keyName}\\s*:`).test(key)) continue;
                report('error', 'E05', lineOf(source, m.index), `createElement() received unsupported option key "${keyName}" (silently ignored). Allowed: ${[...ALLOWED_KEYS].join(', ')}`);
            }
        }
        callRe.lastIndex = closeIdx; // continue after this call
    }
}

// ---------------------------------------------------------------------------
// W02: logWarn/logError first argument should be a string-literal module name
// ---------------------------------------------------------------------------
{
    const code = stripComments(source);
    const re = /\b(logWarn|logError)\s*\(/g;
    let m;
    while ((m = re.exec(code)) !== null) {
        const openIdx = m.index + m[0].length - 1;
        const closeIdx = matchBracket(code, openIdx + 1, '(', ')');
        if (closeIdx === -1) continue;
        const firstArg = code.slice(openIdx + 1, closeIdx).split(',')[0]?.trim() ?? '';
        if (firstArg && !/^['"`]/.test(firstArg)) {
            report('warning', 'W02', lineOf(source, m.index), `${m[1]}() first argument should be a string-literal module name, got: ${firstArg.slice(0, 40)}`);
        }
        re.lastIndex = closeIdx;
    }
}

// ---------------------------------------------------------------------------
// Version consistency checks
// ---------------------------------------------------------------------------
function extractVersion(filePath) {
    if (!existsSync(filePath)) return null;
    const src = readFileSync(filePath, 'utf8');
    const m = src.match(/^\/\/\s*@version\s+(\S+)\s*$/m);
    return m ? m[1] : null;
}

const userVersion = extractVersion(FILE);
const metaVersion = extractVersion(META_FILE);

if (!userVersion) {
    errors.push('V01 unable to read @version from youtube-playback-plox.user.js');
} else {
    if (metaVersion !== null && metaVersion !== userVersion) {
        errors.push(`V01 @version mismatch: .user.js=${userVersion} vs .meta.js=${metaVersion}`);
    }
    if (existsSync(CHANGELOG_FILE)) {
        const changelog = readFileSync(CHANGELOG_FILE, 'utf8');
        const headingRe = /^#{1,2}\s+(.+)$/gm;
        const found = [...changelog.matchAll(headingRe)].map(h => h[1].trim());
        if (!found.includes(userVersion)) {
            errors.push(`V02 changelog.md has no "# ${userVersion}" entry for the current @version`);
        }
    }
    // W01: hardcoded SCRIPT_VERSION fallback
    const fb = source.match(/GM_info\.script\.version\s*:\s*'([^']+)'/);
    if (fb && fb[1] !== userVersion) {
        warnings.push(`W01 hardcoded SCRIPT_VERSION fallback ('${fb[1]}') differs from @version (${userVersion})`);
    }
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------
for (const e of errors) console.error(`ERROR ${e}`);
for (const w of warnings) console.warn(`WARN  ${w}`);

console.log('----------------------------------------');
console.log(`audit-lint: ${errors.length} error(s), ${warnings.length} warning(s)`);
process.exit(errors.length > 0 ? 1 : 0);
