#!/usr/bin/env node
/**
 * validate-translations.mjs
 *
 * Checks translations.json for consistency across all locales.
 * It uses 'en-US' as the canonical base and reports:
 * - Missing keys: Keys present in en-US but missing in another locale.
 * - Extra keys: Keys present in another locale but missing in en-US.
 *
 * Output:
 *   - Reports findings directly to the console.
 *
 * Usage:
 *   node scripts/validate-translations.mjs
 */

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

try {
    const filePath = resolve('translations.json');
    const raw = readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw);
    const translations = data.TRANSLATIONS;

    // We use en-US as the base language to compare against
    const baseLang = 'en-US';
    const baseKeys = Object.keys(translations[baseLang]);
    let hasIssues = false;

    console.log(`Validating translations based on ${baseLang} (${baseKeys.length} keys)...`);

    for (const lang in translations) {
        if (lang === baseLang) continue;

        const langKeys = Object.keys(translations[lang]);
        const missingKeys = baseKeys.filter(key => !langKeys.includes(key));
        const extraKeys = langKeys.filter(key => !baseKeys.includes(key));

        if (missingKeys.length > 0 || extraKeys.length > 0) {
            hasIssues = true;
            console.log(`\n❌ [${lang}] has differences:`);
            if (missingKeys.length > 0) {
                console.log(`  Missing (${missingKeys.length}): ${missingKeys.join(', ')}`);
            }
            if (extraKeys.length > 0) {
                console.log(`  Extra (${extraKeys.length}): ${extraKeys.join(', ')}`);
            }
        }
    }

    if (!hasIssues) {
        console.log("\n✅ All languages are perfectly synchronized and have the exact same keys!");
    }
} catch (e) {
    console.error("Error reading or parsing translations.json:", e.message);
}
