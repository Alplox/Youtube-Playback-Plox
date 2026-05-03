import { readFileSync, writeFileSync } from 'node:fs';

// pegar aquí el bloque de nuevas traducciones.
// Este objeto contiene las traducciones que se van a añadir o sobrescribir en los distintos idiomas.
const newTranslations = {
    "en-GB": {
        "searchInSpotify": "Search in Spotify"
    },
    "es-ES": {
        "searchInSpotify": "Buscar en Spotify"
    },
    "es-419": {
        "searchInSpotify": "Buscar en Spotify"
    },
    "ca": {
        "searchInSpotify": "Cerca a Spotify"
    },
    "fr": {
        "searchInSpotify": "Rechercher sur Spotify"
    },
    "de": {
        "searchInSpotify": "Auf Spotify suchen"
    },
    "it": {
        "searchInSpotify": "Cerca su Spotify"
    },
    "pt": {
        "searchInSpotify": "Pesquisar no Spotify"
    },
    "nl": {
        "searchInSpotify": "Zoeken op Spotify"
    },
    "pl": {
        "searchInSpotify": "Szukaj w Spotify"
    },
    "sv": {
        "searchInSpotify": "Sök på Spotify"
    },
    "da": {
        "searchInSpotify": "Søg på Spotify"
    },
    "no": {
        "searchInSpotify": "Søk i Spotify"
    },
    "fi": {
        "searchInSpotify": "Hae Spotifysta"
    },
    "cs": {
        "searchInSpotify": "Hledat na Spotify"
    },
    "sk": {
        "searchInSpotify": "Hľadať na Spotify"
    },
    "hu": {
        "searchInSpotify": "Keresés a Spotify-on"
    },
    "ro": {
        "searchInSpotify": "Caută pe Spotify"
    },
    "bg": {
        "searchInSpotify": "Търсене в Spotify"
    },
    "el": {
        "searchInSpotify": "Αναζήτηση στο Spotify"
    },
    "sr": {
        "searchInSpotify": "Pretraži na Spotify"
    },
    "hr": {
        "searchInSpotify": "Pretraži na Spotify"
    },
    "sl": {
        "searchInSpotify": "Išči na Spotify"
    },
    "lt": {
        "searchInSpotify": "Ieškoti Spotify"
    },
    "lv": {
        "searchInSpotify": "Meklēt Spotify"
    },
    "uk": {
        "searchInSpotify": "Шукати в Spotify"
    },
    "ru": {
        "searchInSpotify": "Искать в Spotify"
    },
    "tr": {
        "searchInSpotify": "Spotify'da ara"
    },
    "ar": {
        "searchInSpotify": "البحث في Spotify"
    },
    "fa": {
        "searchInSpotify": "جستجو در Spotify"
    },
    "he": {
        "searchInSpotify": "חפש ב-Spotify"
    },
    "hi": {
        "searchInSpotify": "Spotify पर खोजें"
    },
    "bn": {
        "searchInSpotify": "Spotify-এ খুঁজুন"
    },
    "te": {
        "searchInSpotify": "Spotifyలో వెతకండి"
    },
    "ta": {
        "searchInSpotify": "Spotify-ல் தேடுங்கள்"
    },
    "mr": {
        "searchInSpotify": "Spotify वर शोधा"
    },
    "zh": {
        "searchInSpotify": "在 Spotify 中搜索"
    },
    "zh-TW": {
        "searchInSpotify": "在 Spotify 中搜尋"
    },
    "yue": {
        "searchInSpotify": "喺 Spotify 搜尋"
    },
    "zh-HK": {
        "searchInSpotify": "在 Spotify 中搜尋"
    },
    "ja": {
        "searchInSpotify": "Spotifyで検索"
    },
    "ko": {
        "searchInSpotify": "Spotify에서 검색"
    },
    "th": {
        "searchInSpotify": "ค้นหาใน Spotify"
    },
    "vi": {
        "searchInSpotify": "Tìm kiếm trên Spotify"
    },
    "id": {
        "searchInSpotify": "Cari di Spotify"
    },
    "ms": {
        "searchInSpotify": "Cari di Spotify"
    },
    "tl": {
        "searchInSpotify": "Maghanap sa Spotify"
    },
    "my": {
        "searchInSpotify": "Spotify တွင်ရှာဖွေရန်"
    },
    "sw": {
        "searchInSpotify": "Tafuta kwenye Spotify"
    },
    "am": {
        "searchInSpotify": "በSpotify ፈልግ"
    },
    "ha": {
        "searchInSpotify": "Nemo a Spotify"
    },
    "ur": {
        "searchInSpotify": "Spotify میں تلاش کریں"
    },
    "zu": {
        "searchInSpotify": "Sesha ku-Spotify"
    }
};

try {
    const data = JSON.parse(readFileSync('translations.json', 'utf8'));
    const trans = data.TRANSLATIONS;
    const canonicalLang = 'en-US';
    const anchorKey = 'countOncePerSessionTooltip';

    if (!trans[canonicalLang]) {
        throw new Error(`El idioma canónico '${canonicalLang}' no se encuentra en translations.json`);
    }

    // 1. Asegurar que las llaves nuevas existan en el idioma canónico (en-US)
    // para establecer su posición. Si no están, las insertamos después del anchorKey.
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
                    // Usamos el valor de 'en-GB' o de el primer lenguaje que lo tenga como base para en-US
                    newCanonical[newKey] = (newTranslations['en-GB'] && newTranslations['en-GB'][newKey]) ||
                        Object.values(newTranslations).find(l => l[newKey])[newKey];
                }
                inserted = true;
            }
        }
        // Si no encontró el anchor, al final
        if (!inserted) {
            for (const newKey of missingInCanonical) {
                newCanonical[newKey] = (newTranslations['en-GB'] && newTranslations['en-GB'][newKey]) ||
                    Object.values(newTranslations).find(l => l[newKey])[newKey];
            }
        }
        trans[canonicalLang] = newCanonical;
        console.log(`Se añadieron ${missingInCanonical.length} llaves nuevas al idioma canónico (${canonicalLang}).`);
    }

    const canonicalOrder = Object.keys(trans[canonicalLang]);

    // 2. Procesar SOLO los lenguajes definidos en newTranslations (y omitir el canónico si ya se procesó arriba)
    for (const lang in newTranslations) {
        if (lang === canonicalLang && missingInCanonical.length === 0) {
            // Si el usuario incluyó en-US en newTranslations y no se procesó antes, podríamos actualizarlo aquí
            // Pero por simplicidad, si está en newTranslations lo procesamos igual para actualizar valores
        }

        const oldLangDict = trans[lang] || {};
        const newLangDict = {};

        for (const key of canonicalOrder) {
            // Prioridad 1: Valor nuevo en la constante
            if (newTranslations[lang] && newTranslations[lang][key] !== undefined) {
                newLangDict[key] = newTranslations[lang][key];
            }
            // Prioridad 2: Valor antiguo en el json
            else if (oldLangDict[key] !== undefined) {
                newLangDict[key] = oldLangDict[key];
            }
            // (Opcional) Prioridad 3: Si es una llave nueva pero este idioma no la tiene en newTranslations,
            // podrías dejarlo vacío o no ponerlo. Lo dejaremos fuera para no inflar idiomas no traducidos.
        }

        // 3. Añadir llaves que existieran en el idioma pero no en el canónico (por si acaso)
        for (const key in oldLangDict) {
            if (newLangDict[key] === undefined) {
                newLangDict[key] = oldLangDict[key];
            }
        }

        trans[lang] = newLangDict;
    }

    writeFileSync('translations.json', JSON.stringify(data, null, 4), 'utf8');
    console.log("Proceso completado. Solo se modificaron los idiomas presentes en la constante y el canónico para el orden.");

} catch (e) {
    console.error("Error al actualizar las traducciones:", e);
    process.exit(1);
}
