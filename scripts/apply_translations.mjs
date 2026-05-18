import { readFileSync, writeFileSync } from 'node:fs';

// Paste the new translations block here.
// This object contains the translations to be added or overwritten in the different languages.
const newTranslations = {

    "en-GB": {
        "scrollbarVisibility": "Scrollbar visibility",
        "scrollbarThickness": "Scrollbar thickness",
        "scrollbarThicknessNormal": "Normal",
        "scrollbarThicknessThin": "Thin"
    },
    "es-ES": {
        "scrollbarVisibility": "Visibilidad de la barra de desplazamiento",
        "scrollbarThickness": "Grosor de la barra de desplazamiento",
        "scrollbarThicknessNormal": "Normal",
        "scrollbarThicknessThin": "Fina"
    },
    "es-419": {
        "scrollbarVisibility": "Visibilidad de la barra de desplazamiento",
        "scrollbarThickness": "Grosor de la barra de desplazamiento",
        "scrollbarThicknessNormal": "Normal",
        "scrollbarThicknessThin": "Delgada"
    },
    "ca": {
        "scrollbarVisibility": "Visibilitat de la barra de desplaçament",
        "scrollbarThickness": "Gruix de la barra de desplaçament",
        "scrollbarThicknessNormal": "Normal",
        "scrollbarThicknessThin": "Prima"
    },
    "fr": {
        "scrollbarVisibility": "Visibilité de la barre de défilement",
        "scrollbarThickness": "Épaisseur de la barre de défilement",
        "scrollbarThicknessNormal": "Normale",
        "scrollbarThicknessThin": "Fine"
    },
    "de": {
        "scrollbarVisibility": "Sichtbarkeit der Bildlaufleiste",
        "scrollbarThickness": "Dicke der Bildlaufleiste",
        "scrollbarThicknessNormal": "Normal",
        "scrollbarThicknessThin": "Dünn"
    },
    "it": {
        "scrollbarVisibility": "Visibilità della barra di scorrimento",
        "scrollbarThickness": "Spessore della barra di scorrimento",
        "scrollbarThicknessNormal": "Normale",
        "scrollbarThicknessThin": "Sottile"
    },
    "pt": {
        "scrollbarVisibility": "Visibilidade da barra de rolagem",
        "scrollbarThickness": "Espessura da barra de rolagem",
        "scrollbarThicknessNormal": "Normal",
        "scrollbarThicknessThin": "Fina"
    },
    "nl": {
        "scrollbarVisibility": "Zichtbaarheid van de schuifbalk",
        "scrollbarThickness": "Dikte van de schuifbalk",
        "scrollbarThicknessNormal": "Normaal",
        "scrollbarThicknessThin": "Dun"
    },
    "pl": {
        "scrollbarVisibility": "Widoczność paska przewijania",
        "scrollbarThickness": "Grubość paska przewijania",
        "scrollbarThicknessNormal": "Normalna",
        "scrollbarThicknessThin": "Cienka"
    },
    "sv": {
        "scrollbarVisibility": "Synlighet för rullningslist",
        "scrollbarThickness": "Rullningslistens tjocklek",
        "scrollbarThicknessNormal": "Normal",
        "scrollbarThicknessThin": "Tunn"
    },
    "da": {
        "scrollbarVisibility": "Synlighed af rullebjælke",
        "scrollbarThickness": "Rullebjælkens tykkelse",
        "scrollbarThicknessNormal": "Normal",
        "scrollbarThicknessThin": "Tynd"
    },
    "no": {
        "scrollbarVisibility": "Synlighet for rullefelt",
        "scrollbarThickness": "Tykkelse på rullefelt",
        "scrollbarThicknessNormal": "Normal",
        "scrollbarThicknessThin": "Tynn"
    },
    "fi": {
        "scrollbarVisibility": "Vierityspalkin näkyvyys",
        "scrollbarThickness": "Vierityspalkin paksuus",
        "scrollbarThicknessNormal": "Normaali",
        "scrollbarThicknessThin": "Ohut"
    },
    "cs": {
        "scrollbarVisibility": "Viditelnost posuvníku",
        "scrollbarThickness": "Tloušťka posuvníku",
        "scrollbarThicknessNormal": "Normální",
        "scrollbarThicknessThin": "Tenký"
    },
    "sk": {
        "scrollbarVisibility": "Viditeľnosť posuvníka",
        "scrollbarThickness": "Hrúbka posuvníka",
        "scrollbarThicknessNormal": "Normálna",
        "scrollbarThicknessThin": "Tenká"
    },
    "hu": {
        "scrollbarVisibility": "Görgetősáv láthatósága",
        "scrollbarThickness": "Görgetősáv vastagsága",
        "scrollbarThicknessNormal": "Normál",
        "scrollbarThicknessThin": "Vékony"
    },
    "ro": {
        "scrollbarVisibility": "Vizibilitatea barei de derulare",
        "scrollbarThickness": "Grosimea barei de derulare",
        "scrollbarThicknessNormal": "Normală",
        "scrollbarThicknessThin": "Subțire"
    },
    "bg": {
        "scrollbarVisibility": "Видимост на лентата за превъртане",
        "scrollbarThickness": "Дебелина на лентата за превъртане",
        "scrollbarThicknessNormal": "Нормална",
        "scrollbarThicknessThin": "Тънка"
    },
    "el": {
        "scrollbarVisibility": "Ορατότητα γραμμής κύλισης",
        "scrollbarThickness": "Πάχος γραμμής κύλισης",
        "scrollbarThicknessNormal": "Κανονικό",
        "scrollbarThicknessThin": "Λεπτό"
    },
    "sr": {
        "scrollbarVisibility": "Видљивост траке за померање",
        "scrollbarThickness": "Дебљина траке за померање",
        "scrollbarThicknessNormal": "Нормална",
        "scrollbarThicknessThin": "Танка"
    },
    "hr": {
        "scrollbarVisibility": "Vidljivost klizača",
        "scrollbarThickness": "Debljina klizača",
        "scrollbarThicknessNormal": "Normalna",
        "scrollbarThicknessThin": "Tanka"
    },

    "fa": {
        "scrollbarVisibility": "نمایش نوار پیمایش",
        "scrollbarThickness": "ضخامت نوار پیمایش",
        "scrollbarThicknessNormal": "معمولی",
        "scrollbarThicknessThin": "باریک"
    },
    "he": {
        "scrollbarVisibility": "נראות פס הגלילה",
        "scrollbarThickness": "עובי פס הגלילה",
        "scrollbarThicknessNormal": "רגיל",
        "scrollbarThicknessThin": "דק"
    },
    "hi": {
        "scrollbarVisibility": "स्क्रॉलबार दृश्यता",
        "scrollbarThickness": "स्क्रॉलबार की मोटाई",
        "scrollbarThicknessNormal": "सामान्य",
        "scrollbarThicknessThin": "पतला"
    },
    "bn": {
        "scrollbarVisibility": "স্ক্রলবার দৃশ্যমানতা",
        "scrollbarThickness": "স্ক্রলবারের পুরুত্ব",
        "scrollbarThicknessNormal": "স্বাভাবিক",
        "scrollbarThicknessThin": "পাতলা"
    },
    "te": {
        "scrollbarVisibility": "స్క్రోల్‌బార్ కనిపించడం",
        "scrollbarThickness": "స్క్రోల్‌బార్ మందం",
        "scrollbarThicknessNormal": "సాధారణ",
        "scrollbarThicknessThin": "సన్నని"
    },
    "ta": {
        "scrollbarVisibility": "ஸ்க்ரோல் பட்டியின் தெரிவுநிலை",
        "scrollbarThickness": "ஸ்க்ரோல் பட்டியின் தடிமன்",
        "scrollbarThicknessNormal": "சாதாரணம்",
        "scrollbarThicknessThin": "மெல்லியது"
    },
    "mr": {
        "scrollbarVisibility": "स्क्रोलबार दृश्यमानता",
        "scrollbarThickness": "स्क्रोलबार जाडी",
        "scrollbarThicknessNormal": "सामान्य",
        "scrollbarThicknessThin": "पातळ"
    },

    "zh": {
        "scrollbarVisibility": "滚动条可见性",
        "scrollbarThickness": "滚动条粗细",
        "scrollbarThicknessNormal": "正常",
        "scrollbarThicknessThin": "细"
    },
    "zh-TW": {
        "scrollbarVisibility": "捲動條可見性",
        "scrollbarThickness": "捲動條粗細",
        "scrollbarThicknessNormal": "正常",
        "scrollbarThicknessThin": "細"
    },
    "yue": {
        "scrollbarVisibility": "捲動條可見性",
        "scrollbarThickness": "捲動條粗幼",
        "scrollbarThicknessNormal": "正常",
        "scrollbarThicknessThin": "幼"
    },
    "zh-HK": {
        "scrollbarVisibility": "捲動條可見性",
        "scrollbarThickness": "捲動條粗幼",
        "scrollbarThicknessNormal": "正常",
        "scrollbarThicknessThin": "幼"
    },
    "ja": {
        "scrollbarVisibility": "スクロールバーの表示",
        "scrollbarThickness": "スクロールバーの太さ",
        "scrollbarThicknessNormal": "標準",
        "scrollbarThicknessThin": "細い"
    },
    "ko": {
        "scrollbarVisibility": "스크롤바 표시",
        "scrollbarThickness": "스크롤바 두께",
        "scrollbarThicknessNormal": "보통",
        "scrollbarThicknessThin": "얇게"
    },
    "th": {
        "scrollbarVisibility": "การแสดงแถบเลื่อน",
        "scrollbarThickness": "ความหนาของแถบเลื่อน",
        "scrollbarThicknessNormal": "ปกติ",
        "scrollbarThicknessThin": "บาง"
    },
    "vi": {
        "scrollbarVisibility": "Hiển thị thanh cuộn",
        "scrollbarThickness": "Độ dày thanh cuộn",
        "scrollbarThicknessNormal": "Bình thường",
        "scrollbarThicknessThin": "Mỏng"
    },
    "id": {
        "scrollbarVisibility": "Visibilitas bilah gulir",
        "scrollbarThickness": "Ketebalan bilah gulir",
        "scrollbarThicknessNormal": "Normal",
        "scrollbarThicknessThin": "Tipis"
    },
    "ms": {
        "scrollbarVisibility": "Keterlihatan bar skrol",
        "scrollbarThickness": "Ketebalan bar skrol",
        "scrollbarThicknessNormal": "Normal",
        "scrollbarThicknessThin": "Nipis"
    },
    "tl": {
        "scrollbarVisibility": "Pagiging visible ng scrollbar",
        "scrollbarThickness": "Kapal ng scrollbar",
        "scrollbarThicknessNormal": "Karaniwan",
        "scrollbarThicknessThin": "Manipis"
    },
    "my": {
        "scrollbarVisibility": "လှိမ့်ဘား မြင်နိုင်မှု",
        "scrollbarThickness": "လှိမ့်ဘား အထူ",
        "scrollbarThicknessNormal": "ပုံမှန်",
        "scrollbarThicknessThin": "ပါးသော"
    },
    "sw": {
        "scrollbarVisibility": "Mwonekano wa upau wa kusogeza",
        "scrollbarThickness": "Unene wa upau wa kusogeza",
        "scrollbarThicknessNormal": "Kawaida",
        "scrollbarThicknessThin": "Mwembamba"
    },
    "am": {
        "scrollbarVisibility": "የማሸብለያ አሞሌ ታይነት",
        "scrollbarThickness": "የማሸብለያ አሞሌ ውፍረት",
        "scrollbarThicknessNormal": "መደበኛ",
        "scrollbarThicknessThin": "ቀጭን"
    },
    "ha": {
        "scrollbarVisibility": "Bayyanar sandar gungurawa",
        "scrollbarThickness": "Kaurin sandar gungurawa",
        "scrollbarThicknessNormal": "Na al'ada",
        "scrollbarThicknessThin": "Siriri"
    },
    "ur": {
        "scrollbarVisibility": "اسکرول بار کی مرئیت",
        "scrollbarThickness": "اسکرول بار کی موٹائی",
        "scrollbarThicknessNormal": "عام",
        "scrollbarThicknessThin": "باریک"
    },
    "zu": {
        "scrollbarVisibility": "Ukubonakala kwebha yokuskrola",
        "scrollbarThickness": "Ubukhulu bebha yokuskrola",
        "scrollbarThicknessNormal": "Okuvamile",
        "scrollbarThicknessThin": "Mncane"
    }
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
