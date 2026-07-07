import { readFileSync, writeFileSync } from 'node:fs';

// Paste the new translations block here.
// This object contains the translations to be added or overwritten in the different languages.
const newTranslations = {

    "en-GB": {
        "respectUrlTimeParam": "Respect ?t= from URL",
        "respectUrlTimeParamTooltip": "If enabled, when a video URL contains ?t= or ?start=, the saved position won't be restored and the URL time will be used instead."
    },
    "en-US": {
        "respectUrlTimeParam": "Respect ?t= from URL",
        "respectUrlTimeParamTooltip": "If enabled, when a video URL contains ?t= or ?start=, the saved position won't be restored and the URL time will be used instead."
    },
    "es-ES": {
        "respectUrlTimeParam": "Respetar ?t= de la URL",
        "respectUrlTimeParamTooltip": "Si está activado, cuando la URL de un vídeo contenga ?t= o ?start=, no se restaurará la posición guardada y se utilizará el tiempo indicado en la URL."
    },
    "es-419": {
        "respectUrlTimeParam": "Respetar ?t= de la URL",
        "respectUrlTimeParamTooltip": "Si está activado, cuando la URL de un video contenga ?t= o ?start=, no se restaurará la posición guardada y se utilizará el tiempo indicado en la URL."
    },
    "ca": {
        "respectUrlTimeParam": "Respecta ?t= de l'URL",
        "respectUrlTimeParamTooltip": "Si està activat, quan l'URL d'un vídeo contingui ?t= o ?start=, no es restaurarà la posició desada i s'utilitzarà el temps indicat a l'URL."
    },
    "fr": {
        "respectUrlTimeParam": "Respecter ?t= de l'URL",
        "respectUrlTimeParamTooltip": "Si cette option est activée, lorsqu'une URL de vidéo contient ?t= ou ?start=, la position enregistrée ne sera pas restaurée et l'heure indiquée dans l'URL sera utilisée à la place."
    },
    "de": {
        "respectUrlTimeParam": "?t= aus der URL berücksichtigen",
        "respectUrlTimeParamTooltip": "Wenn aktiviert und eine Video-URL ?t= oder ?start= enthält, wird die gespeicherte Wiedergabeposition nicht wiederhergestellt. Stattdessen wird die Zeit aus der URL verwendet."
    },
    "it": {
        "respectUrlTimeParam": "Rispetta ?t= nell'URL",
        "respectUrlTimeParamTooltip": "Se abilitato, quando l'URL di un video contiene ?t= o ?start=, la posizione salvata non verrà ripristinata e verrà invece utilizzato il tempo indicato nell'URL."
    },
    "pt": {
        "respectUrlTimeParam": "Respeitar ?t= da URL",
        "respectUrlTimeParamTooltip": "Se ativado, quando o URL de um vídeo contiver ?t= ou ?start=, a posição guardada não será restaurada e será utilizado o tempo indicado no URL."
    },
    "nl": {
        "respectUrlTimeParam": "?t= uit de URL respecteren",
        "respectUrlTimeParamTooltip": "Als deze optie is ingeschakeld en een video-URL ?t= of ?start= bevat, wordt de opgeslagen positie niet hersteld. In plaats daarvan wordt de tijd uit de URL gebruikt."
    },
    "pl": {
        "respectUrlTimeParam": "Uwzględnij ?t= z adresu URL",
        "respectUrlTimeParamTooltip": "Jeśli ta opcja jest włączona, a adres URL filmu zawiera ?t= lub ?start=, zapisana pozycja nie zostanie przywrócona. Zamiast tego zostanie użyty czas określony w adresie URL."
    },
    "sv": {
        "respectUrlTimeParam": "Respektera ?t= från URL:en",
        "respectUrlTimeParamTooltip": "Om aktiverat och en video-URL innehåller ?t= eller ?start= återställs inte den sparade positionen. I stället används tiden från URL:en."
    },
    "da": {
        "respectUrlTimeParam": "Respektér ?t= fra URL'en",
        "respectUrlTimeParamTooltip": "Hvis aktiveret, og en video-URL indeholder ?t= eller ?start=, gendannes den gemte position ikke. I stedet bruges tidspunktet fra URL'en."
    },
    "no": {
        "respectUrlTimeParam": "Respekter ?t= fra URL-en",
        "respectUrlTimeParamTooltip": "Hvis aktivert og en video-URL inneholder ?t= eller ?start=, vil den lagrede posisjonen ikke bli gjenopprettet. I stedet brukes tidspunktet fra URL-en."
    },
    "fi": {
        "respectUrlTimeParam": "Huomioi URL:n ?t=",
        "respectUrlTimeParamTooltip": "Jos tämä on käytössä ja videon URL sisältää ?t=- tai ?start=-parametrin, tallennettua katselukohtaa ei palauteta, vaan URL:n määrittämää aikaa käytetään."
    },
    "cs": {
        "respectUrlTimeParam": "Respektovat ?t= z URL",
        "respectUrlTimeParamTooltip": "Je-li tato možnost povolena a adresa URL videa obsahuje ?t= nebo ?start=, uložená pozice se neobnoví a místo ní se použije čas zadaný v adrese URL."
    },
    "sk": {
        "respectUrlTimeParam": "Rešpektovať ?t= z URL",
        "respectUrlTimeParamTooltip": "Ak je táto možnosť povolená a adresa URL videa obsahuje ?t= alebo ?start=, uložená pozícia sa neobnoví a namiesto nej sa použije čas zadaný v adrese URL."
    },
    "hu": {
        "respectUrlTimeParam": "A URL ?t= paraméterének figyelembevétele",
        "respectUrlTimeParamTooltip": "Ha engedélyezve van, és a videó URL-je ?t= vagy ?start= paramétert tartalmaz, a mentett lejátszási pozíció nem áll vissza, hanem az URL-ben megadott idő lesz használva."
    },
    "ro": {
        "respectUrlTimeParam": "Respectă ?t= din URL",
        "respectUrlTimeParamTooltip": "Dacă este activată, atunci când adresa URL a unui videoclip conține ?t= sau ?start=, poziția salvată nu va fi restaurată și va fi folosit în schimb timpul specificat în URL."
    },
    "bg": {
        "respectUrlTimeParam": "Спазвай ?t= от URL адреса",
        "respectUrlTimeParamTooltip": "Ако е активирано и URL адресът на видеото съдържа ?t= или ?start=, запазената позиция няма да бъде възстановена и вместо това ще се използва времето, зададено в URL адреса."
    },
    "el": {
        "respectUrlTimeParam": "Χρήση του ?t= από το URL",
        "respectUrlTimeParamTooltip": "Αν είναι ενεργοποιημένο και το URL του βίντεο περιέχει ?t= ή ?start=, η αποθηκευμένη θέση δεν θα αποκατασταθεί και θα χρησιμοποιηθεί αντί αυτής ο χρόνος που ορίζεται στο URL."
    },
    "sr": {
        "respectUrlTimeParam": "Poštuj ?t= iz URL-a",
        "respectUrlTimeParamTooltip": "Ako je omogućeno i URL video zapisa sadrži ?t= ili ?start=, sačuvana pozicija neće biti vraćena, već će se koristiti vreme navedeno u URL-u."
    },
    "hr": {
        "respectUrlTimeParam": "Poštuj ?t= iz URL-a",
        "respectUrlTimeParamTooltip": "Ako je omogućeno i URL videozapisa sadrži ?t= ili ?start=, spremljena pozicija neće se vratiti, već će se koristiti vrijeme navedeno u URL-u."
    },
    "sl": {
        "respectUrlTimeParam": "Upoštevaj ?t= iz URL-ja",
        "respectUrlTimeParamTooltip": "Če je omogočeno in URL videoposnetka vsebuje ?t= ali ?start=, shranjeni položaj ne bo obnovljen, temveč bo uporabljen čas, določen v URL-ju."
    },
    "lt": {
        "respectUrlTimeParam": "Paisyti ?t= iš URL",
        "respectUrlTimeParamTooltip": "Jei įjungta ir vaizdo įrašo URL yra ?t= arba ?start=, išsaugota atkūrimo vieta nebus atkurta – vietoje jos bus naudojamas URL nurodytas laikas."
    },
    "lv": {
        "respectUrlTimeParam": "Ņemt vērā ?t= no URL",
        "respectUrlTimeParamTooltip": "Ja šī opcija ir ieslēgta un video URL satur ?t= vai ?start=, saglabātā atskaņošanas pozīcija netiks atjaunota, un tās vietā tiks izmantots URL norādītais laiks."
    },
    "uk": {
        "respectUrlTimeParam": "Враховувати ?t= з URL",
        "respectUrlTimeParamTooltip": "Якщо ввімкнено й URL-адреса відео містить ?t= або ?start=, збережену позицію не буде відновлено — натомість буде використано час, указаний в URL."
    },
    "ru": {
        "respectUrlTimeParam": "Учитывать ?t= из URL",
        "respectUrlTimeParamTooltip": "Если включено и URL видео содержит ?t= или ?start=, сохранённая позиция воспроизведения не будет восстановлена. Вместо неё будет использовано время, указанное в URL."
    },
    "tr": {
        "respectUrlTimeParam": "URL'deki ?t= parametresini dikkate al",
        "respectUrlTimeParamTooltip": "Etkinleştirildiğinde, video URL'si ?t= veya ?start= içeriyorsa kaydedilen oynatma konumu geri yüklenmez; bunun yerine URL'deki zaman kullanılır."
    },
    "ar": {
        "respectUrlTimeParam": "احترام ?t= في الرابط",
        "respectUrlTimeParamTooltip": "إذا كان هذا الخيار مفعّلًا وكان رابط الفيديو يحتوي على ?t= أو ?start=، فلن تتم استعادة الموضع المحفوظ، وسيتم استخدام الوقت المحدد في الرابط بدلاً من ذلك."
    },
    "fa": {
        "respectUrlTimeParam": "رعایت ?t= در URL",
        "respectUrlTimeParamTooltip": "اگر این گزینه فعال باشد و نشانی ویدیو شامل ?t= یا ?start= باشد، موقعیت ذخیره‌شده بازیابی نخواهد شد و به‌جای آن زمان مشخص‌شده در URL استفاده می‌شود."
    },
    "he": {
        "respectUrlTimeParam": "כבד את ?t= מה־URL",
        "respectUrlTimeParamTooltip": "אם האפשרות מופעלת וכתובת ה־URL של הסרטון כוללת ?t= או ?start=, המיקום השמור לא ישוחזר, ובמקומו ייעשה שימוש בזמן שמופיע ב־URL."
    },
    "hi": {
        "respectUrlTimeParam": "URL के ?t= का सम्मान करें",
        "respectUrlTimeParamTooltip": "यदि यह सक्षम है और वीडियो URL में ?t= या ?start= मौजूद है, तो सहेजी गई स्थिति पुनर्स्थापित नहीं की जाएगी और इसके बजाय URL में दिया गया समय उपयोग किया जाएगा।"
    },
    "bn": {
        "respectUrlTimeParam": "URL-এর ?t= অনুসরণ করুন",
        "respectUrlTimeParamTooltip": "এটি সক্রিয় থাকলে এবং ভিডিওর URL-এ ?t= বা ?start= থাকলে, সংরক্ষিত অবস্থান পুনরুদ্ধার করা হবে না; পরিবর্তে URL-এ নির্দিষ্ট সময় ব্যবহার করা হবে।"
    },
    "te": {
        "respectUrlTimeParam": "URLలోని ?t= ను గౌరవించు",
        "respectUrlTimeParamTooltip": "ఈ ఎంపిక ప్రారంభించబడితే మరియు వీడియో URLలో ?t= లేదా ?start= ఉంటే, సేవ్ చేసిన స్థానాన్ని పునరుద్ధరించరు. బదులుగా URLలో పేర్కొన్న సమయాన్ని ఉపయోగిస్తారు."
    },
    "ta": {
        "respectUrlTimeParam": "URL இல் உள்ள ?t= ஐ மதிக்கவும்",
        "respectUrlTimeParamTooltip": "இந்த விருப்பம் இயக்கப்பட்டிருந்தால் மற்றும் வீடியோ URL-ல் ?t= அல்லது ?start= இருந்தால், சேமிக்கப்பட்ட இடம் மீட்டமைக்கப்படாது; அதற்கு பதிலாக URL-ல் குறிப்பிடப்பட்ட நேரம் பயன்படுத்தப்படும்."
    },
    "mr": {
        "respectUrlTimeParam": "URL मधील ?t= ला प्राधान्य द्या",
        "respectUrlTimeParamTooltip": "हे सक्षम असल्यास आणि व्हिडिओच्या URL मध्ये ?t= किंवा ?start= असल्यास, जतन केलेली स्थिती पुनर्संचयित केली जाणार नाही. त्याऐवजी URL मध्ये दिलेला वेळ वापरला जाईल."
    },
    "zh": {
        "respectUrlTimeParam": "遵循 URL 中的 ?t=",
        "respectUrlTimeParamTooltip": "启用后，如果视频 URL 包含 ?t= 或 ?start=，则不会恢复已保存的播放位置，而是使用 URL 中指定的时间。"
    },
    "zh-TW": {
        "respectUrlTimeParam": "遵循 URL 中的 ?t=",
        "respectUrlTimeParamTooltip": "啟用後，如果影片 URL 包含 ?t= 或 ?start=，則不會還原已儲存的播放位置，而會改為使用 URL 中指定的時間。"
    },
    "yue": {
        "respectUrlTimeParam": "遵循 URL 入面嘅 ?t=",
        "respectUrlTimeParamTooltip": "如果啟用，而影片 URL 包含 ?t= 或 ?start=，就唔會還原已儲存嘅播放位置，而會改用 URL 指定嘅時間。"
    },
    "zh-HK": {
        "respectUrlTimeParam": "遵循 URL 中的 ?t=",
        "respectUrlTimeParamTooltip": "啟用後，如果影片 URL 包含 ?t= 或 ?start=，則不會還原已儲存的播放位置，而會改為使用 URL 中指定的時間。"
    },
    "ja": {
        "respectUrlTimeParam": "URL の ?t= を優先する",
        "respectUrlTimeParamTooltip": "有効にすると、動画 URL に ?t= または ?start= が含まれている場合、保存された再生位置は復元されず、代わりに URL で指定された時刻が使用されます。"
    },
    "ko": {
        "respectUrlTimeParam": "URL의 ?t= 사용",
        "respectUrlTimeParamTooltip": "활성화하면 동영상 URL에 ?t= 또는 ?start=가 포함된 경우 저장된 재생 위치를 복원하지 않고 URL에 지정된 시간을 사용합니다."
    },
    "th": {
        "respectUrlTimeParam": "ใช้ ?t= จาก URL",
        "respectUrlTimeParamTooltip": "หากเปิดใช้งาน และ URL ของวิดีโอมี ?t= หรือ ?start= ระบบจะไม่กู้คืนตำแหน่งที่บันทึกไว้ แต่จะใช้เวลาที่ระบุไว้ใน URL แทน"
    },
    "vi": {
        "respectUrlTimeParam": "Ưu tiên ?t= trong URL",
        "respectUrlTimeParamTooltip": "Nếu được bật và URL của video chứa ?t= hoặc ?start=, vị trí đã lưu sẽ không được khôi phục mà sẽ sử dụng thời gian được chỉ định trong URL."
    },
    "id": {
        "respectUrlTimeParam": "Gunakan ?t= dari URL",
        "respectUrlTimeParamTooltip": "Jika diaktifkan dan URL video berisi ?t= atau ?start=, posisi yang disimpan tidak akan dipulihkan. Sebagai gantinya, waktu yang ditentukan di URL akan digunakan."
    },
    "ms": {
        "respectUrlTimeParam": "Gunakan ?t= daripada URL",
        "respectUrlTimeParamTooltip": "Jika diaktifkan dan URL video mengandungi ?t= atau ?start=, kedudukan yang disimpan tidak akan dipulihkan. Sebaliknya, masa yang ditentukan dalam URL akan digunakan."
    },
    "tl": {
        "respectUrlTimeParam": "Sundin ang ?t= mula sa URL",
        "respectUrlTimeParamTooltip": "Kapag naka-enable at ang URL ng video ay may ?t= o ?start=, hindi ibabalik ang naka-save na posisyon. Sa halip, gagamitin ang oras na nakasaad sa URL."
    },
    "my": {
        "respectUrlTimeParam": "URL ရှိ ?t= ကို လိုက်နာရန်",
        "respectUrlTimeParamTooltip": "ဖွင့်ထားပါက ဗီဒီယို URL တွင် ?t= သို့မဟုတ် ?start= ပါရှိလျှင် သိမ်းဆည်းထားသော ပြန်ဖွင့်နေရာကို ပြန်လည်မရယူဘဲ URL တွင် သတ်မှတ်ထားသော အချိန်ကို အသုံးပြုမည်။"
    },
    "sw": {
        "respectUrlTimeParam": "Heshimu ?t= kutoka kwenye URL",
        "respectUrlTimeParamTooltip": "Ikiwashwa na URL ya video ina ?t= au ?start=, nafasi iliyohifadhiwa haitarejeshwa. Badala yake, muda uliobainishwa kwenye URL utatumika."
    },
    "am": {
        "respectUrlTimeParam": "በURL ውስጥ ያለውን ?t= አክብር",
        "respectUrlTimeParamTooltip": "ይህ ከተነቃ እና የቪዲዮው URL ?t= ወይም ?start= ካካተተ፣ የተቀመጠው ቦታ አይመለስም፤ በምትኩ በURL የተጠቀሰው ጊዜ ይጠቀማል።"
    },
    "ha": {
        "respectUrlTimeParam": "Mutunta ?t= daga URL",
        "respectUrlTimeParamTooltip": "Idan an kunna wannan zaɓi kuma URL na bidiyo yana ɗauke da ?t= ko ?start=, ba za a dawo da matsayin da aka adana ba. Maimakon haka, za a yi amfani da lokacin da aka ƙayyade a cikin URL."
    },
    "ur": {
        "respectUrlTimeParam": "URL میں موجود ?t= کو ترجیح دیں",
        "respectUrlTimeParamTooltip": "اگر یہ فعال ہو اور ویڈیو کے URL میں ?t= یا ?start= موجود ہو تو محفوظ کردہ پوزیشن بحال نہیں کی جائے گی، بلکہ URL میں دیا گیا وقت استعمال کیا جائے گا۔"
    },
    "zu": {
        "respectUrlTimeParam": "Hlonipha i-?t= ku-URL",
        "respectUrlTimeParamTooltip": "Uma kunikwe amandla futhi i-URL yevidiyo iqukethe ?t= noma ?start=, indawo egciniwe ngeke ibuyiselwe. Esikhundleni salokho, kuzosetshenziswa isikhathi esishiwo ku-URL."
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
