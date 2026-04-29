#!/usr/bin/env node
/**
 * sort-translations.mjs
 *
 * Reorders the keys of every locale inside `TRANSLATIONS` in translations.json
 * so they match the key order of the canonical locale (`en-US`).
 *
 * Keys present in a locale but NOT in `en-US` are appended at the end
 * (so nothing is lost).  Keys present in `en-US` but missing from another
 * locale are reported as warnings, but the locale is still written out.
 *
 * Output:
 *   - Creates/Updates a JSON file (defaults to translations.sorted.json).
 *
 * Usage:
 *   node scripts/sort-translations.mjs [path/to/translations.json] [--canonical <locale>] [--output <path>]
 *
 * Defaults:
 *   file      → translations.json          (relative to cwd)
 *   canonical → en-US
 *   output    → translations.sorted.json   (sibling of the input file)
 *
 * Examples:
 *   node ./scripts/sort-translations.mjs
 *   node ./scripts/sort-translations.mjs translations.json --canonical es-ES
 *   node ./scripts/sort-translations.mjs translations.json --output translations.sorted.json
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname, basename, extname, join } from 'node:path';

// ── CLI args ──────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);

/** @param {string} flag @returns {string|null} */
const flagValue = (flag) => {
    const idx = args.indexOf(flag);
    return idx !== -1 ? args[idx + 1] ?? null : null;
};

const filePath = resolve(args.find(a => !a.startsWith('--')) ?? 'translations.json');
const canonicalKey = flagValue('--canonical') ?? 'en-US';

// Default output: same directory as input, but with `.sorted` before the extension
const defaultOutput = join(
    dirname(filePath),
    basename(filePath, extname(filePath)) + '.sorted' + extname(filePath)
);
const outputPath = resolve(flagValue('--output') ?? defaultOutput);

// ── Load JSON ─────────────────────────────────────────────────────────────────
console.log(`📂  Reading: ${filePath}`);
const raw = readFileSync(filePath, 'utf-8');
const data = JSON.parse(raw);

const translations = data?.TRANSLATIONS;

if (!translations || typeof translations !== 'object') {
    console.error('❌  Could not find a "TRANSLATIONS" object in the file.');
    process.exit(1);
}

if (!(canonicalKey in translations)) {
    console.error(`❌  Canonical locale "${canonicalKey}" not found in TRANSLATIONS.`);
    console.error(`    Available locales: ${Object.keys(translations).join(', ')}`);
    process.exit(1);
}

// ── Build sorted locales ──────────────────────────────────────────────────────
/** @type {string[]} */
const canonicalOrder = Object.keys(translations[canonicalKey]);

let totalMissing = 0;
let totalExtra = 0;

for (const [locale, entries] of Object.entries(translations)) {
    if (locale === canonicalKey) continue; // already canonical

    const localeKeys = new Set(Object.keys(entries));
    const missingKeys = canonicalOrder.filter(k => !localeKeys.has(k));
    const extraKeys = [...localeKeys].filter(k => !canonicalOrder.includes(k));

    if (missingKeys.length > 0) {
        console.warn(`⚠️   [${locale}] missing ${missingKeys.length} key(s) from "${canonicalKey}":`);
        missingKeys.forEach(k => console.warn(`        • ${k}`));
        totalMissing += missingKeys.length;
    }

    if (extraKeys.length > 0) {
        console.info(`ℹ️   [${locale}] has ${extraKeys.length} extra key(s) not in "${canonicalKey}" (appended at end):`);
        extraKeys.forEach(k => console.info(`        + ${k}`));
        totalExtra += extraKeys.length;
    }

    // Rebuild the locale object: canonical order first, then any extras
    /** @type {Record<string, string>} */
    const sorted = {};
    for (const key of canonicalOrder) {
        if (key in entries) sorted[key] = entries[key];
    }
    for (const key of extraKeys) {
        sorted[key] = entries[key];
    }

    translations[locale] = sorted;
}

// ── Write output ──────────────────────────────────────────────────────────────
const output = JSON.stringify(data, null, 4) + '\n';
writeFileSync(outputPath, output, 'utf-8');

console.log('\n✅  Done!');
console.log(`    Canonical locale : ${canonicalKey} (${canonicalOrder.length} keys)`);
console.log(`    Locales processed: ${Object.keys(translations).length - 1}`);
if (totalMissing > 0) console.warn(`    ⚠  Total missing keys: ${totalMissing}`);
if (totalExtra > 0) console.info(`    ℹ  Total extra keys appended: ${totalExtra}`);
console.log(`    Source file      : ${filePath}`);
console.log(`    Output written to: ${outputPath}`);
