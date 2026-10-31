#!/usr/bin/env node
/**
 * scope-check.mjs
 *
 * Resolved-scope check for youtube-playback-plox.user.js: parses the file
 * into an ESTree AST and reports every identifier reference that does not
 * resolve to a declaration in scope (a `no-undef` equivalent).
 *
 * Why this exists: the file is a single ~19k-line IIFE, so a declaration
 * inside a block (`if (...) { const x = [] }`) is invisible to code after
 * that block. Two real bugs of that shape shipped undetected by
 * `node --check` and audit-lint:
 *   - `repairedRows` in getCompleteVideoSnapshot() broke every export/backup.
 *   - `snapshotTime` in performClearAllData() broke "delete all data".
 * Both were plain ReferenceErrors at runtime, not syntax errors.
 *
 * Dependencies (devDependencies): acorn (parser), eslint-scope (scope analysis).
 *
 * The known-globals allowlist covers browser + Tampermonkey/Violentmonkey
 * globals. Optional integrations that are probed with `typeof x !== 'undefined'`
 * (e.g. youtubeHelperApi, injected by other scripts) are ignored by name.
 *
 * Usage:
 *   node scripts/scope-check.mjs [--file path/to/user.js] [--allow name,name]
 * Exit code 0 = clean, 1 = unresolved references found.
 */
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import * as acorn from 'acorn';
import { analyze } from 'eslint-scope';

const argv = process.argv.slice(2);
const argValue = (flag, fallback) => (argv.includes(flag) ? argv[argv.indexOf(flag) + 1] : fallback);
const FILE = resolve(argValue('--file', 'youtube-playback-plox.user.js'));

if (!existsSync(FILE)) {
    console.error(`FATAL: file not found: ${FILE}`);
    process.exit(1);
}
const source = readFileSync(FILE, 'utf8');

/**
 * Browser, Web API and userscript-manager globals the userscript may use
 * without declaring them. Keep alphabetical-ish and grouped by origin.
 */
const KNOWN_GLOBALS = new Set([
    // Window / document
    'window', 'document', 'console', 'navigator', 'location', 'history', 'screen', 'performance',
    'crypto', 'self', 'top', 'parent', 'frames', 'globalThis', 'name', 'status',
    // Timers and scheduling
    'setTimeout', 'clearTimeout', 'setInterval', 'clearInterval', 'setImmediate', 'clearImmediate',
    'requestAnimationFrame', 'cancelAnimationFrame', 'queueMicrotask',
    // Network / data
    'fetch', 'XMLHttpRequest', 'Headers', 'Request', 'Response', 'FormData', 'Blob', 'File',
    'FileReader', 'URL', 'URLSearchParams', 'TextDecoder', 'TextEncoder', 'AbortController',
    'AbortSignal', 'structuredClone', 'BroadcastChannel', 'MessageChannel', 'MessagePort',
    'WebSocket', 'Worker', 'SharedWorker', 'EventSource', 'localStorage', 'sessionStorage',
    'indexedDB', 'IDBKeyRange', 'IDBDatabase', 'IDBTransaction', 'IDBObjectStore', 'IDBIndex',
    'IDBCursor', 'IDBCursorWithValue', 'IDBRequest', 'IDBOpenDBRequest', 'IDBVersionChangeEvent',
    'IDBFactory',
    // DOM
    'Node', 'NodeList', 'NodeFilter', 'Element', 'HTMLElement', 'HTMLVideoElement',
    'HTMLImageElement', 'HTMLAudioElement', 'HTMLDivElement', 'HTMLAnchorElement',
    'HTMLInputElement', 'HTMLTextAreaElement', 'HTMLSelectElement', 'HTMLButtonElement',
    'HTMLCanvasElement', 'HTMLIFrameElement', 'HTMLSpanElement', 'HTMLStyleElement',
    'HTMLUnknownElement', 'SVGElement', 'DocumentFragment', 'ShadowRoot', 'DOMParser',
    'XMLSerializer', 'DOMException', 'DOMRect', 'DOMRectReadOnly', 'Range', 'Selection',
    'Event', 'CustomEvent', 'EventTarget', 'UIEvent', 'FocusEvent', 'KeyboardEvent', 'MouseEvent',
    'PointerEvent', 'TouchEvent', 'InputEvent', 'SubmitEvent', 'CompositionEvent', 'WheelEvent',
    'DragEvent', 'ClipboardEvent', 'MessageEvent', 'ErrorEvent', 'PromiseRejectionEvent',
    'ProgressEvent', 'StorageEvent', 'HashChangeEvent', 'PopStateEvent', 'BeforeUnloadEvent',
    'PageTransitionEvent', 'MutationObserver', 'IntersectionObserver', 'ResizeObserver',
    'PerformanceObserver', 'getComputedStyle', 'matchMedia', 'getSelection', 'requestIdleCallback',
    'cancelIdleCallback', 'CSS', 'Image', 'Audio', 'Option', 'trustedTypes',
    // Language builtins (eslint-scope only models lexical scopes, not the
    // ECMAScript global object)
    'Object', 'Function', 'Array', 'String', 'Number', 'Boolean', 'Symbol', 'BigInt',
    'Math', 'JSON', 'Date', 'RegExp', 'Promise', 'Map', 'Set', 'WeakMap', 'WeakSet',
    'Error', 'EvalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError',
    'URIError', 'AggregateError', 'ArrayBuffer', 'SharedArrayBuffer', 'DataView',
    'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'Int8Array',
    'Int16Array', 'Int32Array', 'Float32Array', 'Float64Array', 'BigInt64Array',
    'BigUint64Array', 'Atomics', 'WeakRef', 'FinalizationRegistry', 'Intl',
    'Reflect', 'Proxy', 'btoa', 'atob', 'TextDecoder', 'TextEncoder', 'structuredClone',
    'parseInt', 'parseFloat', 'isNaN', 'isFinite', 'encodeURIComponent', 'decodeURIComponent',
    'encodeURI', 'decodeURI', 'escape', 'unescape', 'eval', 'NaN', 'Infinity', 'undefined',
    // Window dialogs / navigation helpers
    'alert', 'confirm', 'prompt', 'close', 'open', 'focus', 'blur', 'print', 'find',
    'scrollTo', 'scrollBy', 'stop', 'getSelection', 'trustedTypes',
    // Script-manager grants
    'GM_getValue', 'GM_setValue', 'GM_deleteValue', 'GM_listValues', 'GM_registerMenuCommand',
    'GM_unregisterMenuCommand', 'GM_xmlhttpRequest', 'GM_addStyle', 'GM_getResourceText',
    'GM_getResourceURL', 'GM_info', 'GM_openInTab', 'GM_setClipboard', 'GM_notification',
    'GM_addValueChangeListener', 'GM_removeValueChangeListener', 'unsafeWindow',
    // CommonJS interop (bundled @require payloads)
    'module', 'exports', 'require', '__dirname', '__filename'
]);

/**
 * Names that are intentionally optional and probed with `typeof x !== 'undefined'`,
 * so an unresolved reference is not a defect. Pass extra ones with --allow.
 */
const DEFAULT_OPTIONAL = [
    'youtubeHelperApi',
    'YTHelper', // legacy alias kept for the optional integration
    'chrome', 'browser', 'safari'
];
const OPTIONAL = new Set([
    ...DEFAULT_OPTIONAL,
    ...String(argValue('--allow', '')).split(',').map((name) => name.trim()).filter(Boolean)
]);

let ast;
try {
    ast = acorn.parse(source, { ecmaVersion: 'latest', sourceType: 'script', locations: true, ranges: true });
} catch (error) {
    console.error(`FATAL: parse error in ${FILE}: ${error.message}`);
    process.exit(1);
}

const scopeManager = analyze(ast, {
    ecmaVersion: 2022,
    sourceType: 'script',
    optimistic: true,
    ignoreEval: true,
    impliedStrict: false
});

/** Nearest enclosing named function, for readable diagnostics. */
const enclosingFunction = (scope) => {
    let current = scope;
    while (current) {
        if (current.type === 'function') return current.block.id?.name || '<anonymous>';
        current = current.upper;
    }
    return '<module>';
};

const findings = [];
const seen = new Set();

for (const scope of scopeManager.scopes) {
    for (const reference of scope.references) {
        if (reference.resolved) continue;
        const { name } = reference.identifier;
        if (KNOWN_GLOBALS.has(name) || OPTIONAL.has(name)) continue;
        const line = reference.identifier.loc?.start.line ?? 0;
        const column = reference.identifier.loc?.start.column ?? 0;
        const key = `${name}:${line}:${column}`;
        if (seen.has(key)) continue;
        seen.add(key);
        findings.push({
            name,
            line,
            column,
            scopeType: scope.type,
            fn: enclosingFunction(scope)
        });
    }
}

findings.sort((a, b) => a.line - b.line || a.column - b.column);

const shortName = FILE.split(/[\\/]/).pop();
for (const finding of findings) {
    console.error(
        `ERROR S01 ${shortName}:${finding.line}:${finding.column} ` +
        `unresolved reference '${finding.name}' (scope=${finding.scopeType}, fn=${finding.fn})`
    );
}

console.log('----------------------------------------');
console.log(`scope-check: ${findings.length} unresolved reference(s)`);
if (findings.length > 0) {
    console.log('Hint: declare the value in the scope that uses it (hoist it out of the block).');
}
process.exit(findings.length > 0 ? 1 : 0);
