import { readFileSync, writeFileSync } from 'node:fs';

// Paste the new translations block here.
// This object contains the translations to be added or overwritten in the different languages.
const newTranslations = {



};

try {
    const data = JSON.parse(readFileSync('translations.json', 'utf8'));
    const trans = data.TRANSLATIONS;
    const canonicalLang = 'en-US';
    const anchorKey = 'countOncePerSessionTooltip';

    if (!trans[canonicalLang]) {
        throw new Error(`The canonical language '${canonicalLang}' is not found in translations.json`);
    }

    // 1. Ensure that the new keys exist in the canonical language (en-US)
    // to establish their position. If they don't exist, insert them after the anchorKey.
    const allNewKeys = new Set();
    for (const lang in newTranslations) {
        for (const key in newTranslations[lang]) {
            allNewKeys.add(key);
        }
    }

    const missingInCanonical = Array.from(allNewKeys).filter(k => trans[canonicalLang][k] === undefined);

    if (missingInCanonical.length > 0) {
        const newCanonical = {};
        let inserted = false;
        for (const k in trans[canonicalLang]) {
            newCanonical[k] = trans[canonicalLang][k];
            if (k === anchorKey) {
                for (const newKey of missingInCanonical) {
                    // We use the value of 'en-GB' or the first language that has it as a base for en-US
                    newCanonical[newKey] = (newTranslations['en-GB'] && newTranslations['en-GB'][newKey]) ||
                        Object.values(newTranslations).find(l => l[newKey])[newKey];
                }
                inserted = true;
            }
        }
        // If the anchor was not found, insert at the end
        if (!inserted) {
            for (const newKey of missingInCanonical) {
                newCanonical[newKey] = (newTranslations['en-GB'] && newTranslations['en-GB'][newKey]) ||
                    Object.values(newTranslations).find(l => l[newKey])[newKey];
            }
        }
        trans[canonicalLang] = newCanonical;
        console.log(`Added ${missingInCanonical.length} new keys to the canonical language (${canonicalLang}).`);
    }

    const canonicalOrder = Object.keys(trans[canonicalLang]);
    const modifiedLanguages = [];
    const unchangedLanguages = [];

    // 2. Process ONLY the languages defined in newTranslations
    for (const lang in newTranslations) {
        const oldLangDict = trans[lang] || {};
        const newLangDict = {};
        let addedCount = 0;
        let updatedCount = 0;

        for (const key of canonicalOrder) {
            // Priority 1: New value in the constant
            if (newTranslations[lang] && newTranslations[lang][key] !== undefined) {
                const newValue = newTranslations[lang][key];
                newLangDict[key] = newValue;

                if (oldLangDict[key] === undefined) {
                    addedCount++;
                } else if (oldLangDict[key] !== newValue) {
                    updatedCount++;
                }
            }
            // Priority 2: Old value in the json
            else if (oldLangDict[key] !== undefined) {
                newLangDict[key] = oldLangDict[key];
            }
        }

        // 3. Add keys that existed in the language but not in the canonical (just in case)
        for (const key in oldLangDict) {
            if (newLangDict[key] === undefined) {
                newLangDict[key] = oldLangDict[key];
            }
        }

        if (addedCount > 0 || updatedCount > 0) {
            modifiedLanguages.push({ lang, added: addedCount, updated: updatedCount });
        } else {
            unchangedLanguages.push(lang);
        }

        trans[lang] = newLangDict;
    }

    writeFileSync('translations.json', JSON.stringify(data, null, 4), 'utf8');

    console.log("\n==================================================");
    console.log("📁 Translation Sync Summary:");
    console.log("==================================================");
    if (modifiedLanguages.length > 0) {
        console.log("✅ Modified languages:");
        for (const { lang, added, updated } of modifiedLanguages) {
            console.log(`  - ${lang}: ${added} added, ${updated} updated`);
        }
    } else {
        console.log("ℹ️ No languages were modified.");
    }
    if (unchangedLanguages.length > 0) {
        console.log(`\nℹ️ Unchanged languages (already up-to-date): ${unchangedLanguages.join(', ')}`);
    }
    console.log("==================================================");

} catch (e) {
    console.error("Error updating translations:", e);
    process.exit(1);
}
