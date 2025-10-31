// ==UserScript==
// @namespace    youtube-playback-plox
// @homepage     https://github.com/Alplox/Youtube-Playback-Plox
// @supportURL   https://github.com/Alplox/Youtube-Playback-Plox/issues
// @version      0.0.6-3
// @author       Alplox
// @match        https://www.youtube.com/*
// @name         YouTube Playback Plox
// @description  Guarda y retoma automáticamente el progreso de vídeos en YouTube sin necesidad de iniciar sesión.
// @name:en-GB      YouTube Playback Plox
// @description:en-GB  Automatically saves and resumes video playback progress on YouTube without needing to log in.
// @name:en-US      YouTube Playback Plox
// @description:en-US  Automatically saves and resumes video playback progress on YouTube without needing to log in.
// @name:es-ES      YouTube Reproducción Plox
// @description:es-ES  Guarda y retoma automáticamente el progreso de vídeos en YouTube sin necesidad de iniciar sesión.
// @name:fr-FR      YouTube Lecture Plox
// @description:fr-FR  Enregistre et reprend automatiquement la progression de la lecture des vidéos sur YouTube sans avoir besoin de se connecter.
// @name:de-DE      YouTube Wiedergabe Plox
// @description:de-DE  Speichert und setzt den Fortschritt von YouTube-Videos automatisch fort, ohne dass eine Anmeldung erforderlich ist.
// @name:it-IT      YouTube Riproduzione Plox
// @description:it-IT  Salva e riprende automaticamente la riproduzione dei video su YouTube senza bisogno di accedere.
// @name:pt-PT      YouTube Reprodução Plox
// @description:pt-PT  Salva e retoma automaticamente o progresso da reprodução de vídeos no YouTube sem precisar fazer login.
// @name:nl-NL      YouTube Afspelen Plox
// @description:nl-NL  Slaat automatisch de voortgang van video's op YouTube op en hervat deze zonder in te loggen.
// @name:pl-PL      YouTube Odtwarzanie Plox
// @description:pl-PL  Automatycznie zapisuje i wznawia postęp odtwarzania wideo na YouTube bez logowania.
// @name:sv-SE      YouTube Uppspelning Plox
// @description:sv-SE  Sparar och återupptar automatiskt videoframsteg på YouTube utan att behöva logga in.
// @name:da-DK      YouTube Afspilning Plox
// @description:da-DK  Gemmer og genoptager automatisk videoafspilning på YouTube uden at logge ind.
// @name:no-NO      YouTube Avspilling Plox
// @description:no-NO  Lagrer og gjenopptar automatisk videofremdrift på YouTube uten å logge inn.
// @name:fi-FI      YouTube Toisto Plox
// @description:fi-FI  Tallentaa ja jatkaa automaattisesti YouTube-videoiden toistopistettä ilman kirjautumista.
// @name:cs-CZ      YouTube Přehrávání Plox
// @description:cs-CZ  Automaticky ukládá a obnovuje postup přehrávání videí na YouTube bez nutnosti přihlášení.
// @name:sk-SK      YouTube Prehrávanie Plox
// @description:sk-SK  Automaticky ukladá a obnovuje priebeh prehrávania videí na YouTube bez potreby prihlásenia.
// @name:hu-HU      YouTube Lejátszás Plox
// @description:hu-HU  Automatikusan menti és folytatja a YouTube-videók lejátszási előrehaladását bejelentkezés nélkül.
// @name:ro-RO      YouTube Redare Plox
// @description:ro-RO  Salvează și reia automat progresul redării videoclipurilor pe YouTube fără a fi nevoie să te conectezi.
// @name:bg-BG      YouTube Възпроизвеждане Plox
// @description:bg-BG  Автоматично записва и възобновява прогреса на видеото в YouTube без нужда от вход.
// @name:el-GR      YouTube Αναπαραγωγή Plox
// @description:el-GR  Αποθηκεύει και συνεχίζει αυτόματα την πρόοδο αναπαραγωγής βίντεο στο YouTube χωρίς να χρειάζεται σύνδεση.
// @name:sr-SP      YouTube Репродукција Plox
// @description:sr-SP  Аутоматски чува и наставља напредак репродукције видео записа на YouTube-у без пријављивања.
// @name:hr-HR      YouTube Reprodukcija Plox
// @description:hr-HR  Automatski sprema i nastavlja napredak reprodukcije videozapisa na YouTubeu bez prijave.
// @name:sl-SI      YouTube Predvajanje Plox
// @description:sl-SI  Samodejno shrani in nadaljuje napredek predvajanja videoposnetkov na YouTubu brez prijave.
// @name:lt-LT      YouTube Grotuvas Plox
// @description:lt-LT  Automatiškai išsaugo ir atnaujina YouTube vaizdo įrašų atkūrimo pažangą be prisijungimo.
// @name:lv-LV      YouTube Atskaņošana Plox
// @description:lv-LV  Automātiski saglabā un atsāk video atskaņošanas progresu YouTube bez pieteikšanās.
// @name:uk-UA      YouTube Відтворення Plox
// @description:uk-UA  Автоматично зберігає та відновлює прогрес відтворення відео на YouTube без входу в акаунт.
// @name:ru-RU      YouTube Воспроизведение Plox
// @description:ru-RU  Автоматически сохраняет и возобновляет прогресс воспроизведения видео на YouTube без входа в аккаунт.
// @name:tr-TR      YouTube Oynatma Plox
// @description:tr-TR  YouTube'daki video oynatma ilerlemesini otomatik olarak kaydeder ve devam ettirir, giriş yapmaya gerek yok.
// @name:ar-EG      يوتيوب بلايباك Plox
// @description:ar-EG  يقوم بحفظ واستئناف تقدم تشغيل الفيديوهات على يوتيوب تلقائيًا دون الحاجة لتسجيل الدخول.
// @name:fa-IR      پخش یوتیوب Plox
// @description:fa-IR  پیشرفت پخش ویدیوها در یوتیوب را به صورت خودکار ذخیره و ادامه می‌دهد بدون نیاز به ورود.
// @name:he-IL      YouTube השמעה Plox
// @description:he-IL  שומר ומחדש אוטומטית את התקדמות הניגון של סרטונים ביוטיוב ללא צורך בהתחברות.
// @name:hi-IN      YouTube प्लेबैक Plox
// @description:hi-IN  YouTube पर वीडियो प्लेबैक की प्रगति को स्वचालित रूप से सहेजें और पुनः प्रारंभ करें, लॉगिन की आवश्यकता नहीं। 
// @name:bn-BD      YouTube প্লেব্যাক Plox
// @description:bn-BD  YouTube ভিডিও প্লেব্যাকের অগ্রগতি স্বয়ংক্রিয়ভাবে সংরক্ষণ এবং পুনরায় শুরু করুন, লগইনের প্রয়োজন নেই। 
// @name:te-IN      YouTube ప్లేబ్యాక్ Plox
// @description:te-IN  YouTube వీడియో ప్లేబ్యాక్ పురోగతిని ఆటోమేటిక్‌గా సేవ్ చేసి, తిరిగి ప్రారంభిస్తుంది, లాగిన్ అవసరం లేదు.
// @name:ta-IN      YouTube பிளேபாக் Plox
// @description:ta-IN  YouTube வீடியோக்களின் பிளேபாக் முன்னேற்றத்தை தானாகச் சேமித்து மீண்டும் தொடங்கும், உள்நுழைவு தேவையில்லை.
// @name:mr-IN      YouTube प्लेबॅक Plox
// @description:mr-IN  YouTube व्हिडिओ प्लेबॅक प्रगती आपोआप जतन करते आणि पुन्हा सुरू करते, लॉगिन आवश्यक नाही.
// @name:zh-CN      YouTube 播放 Plox
// @description:zh-CN  自动保存并恢复 YouTube 视频的播放进度，无需登录。
// @name:zh-TW      YouTube 播放 Plox
// @description:zh-TW  自動儲存及繼續 YouTube 影片播放進度，無需登入。
// @name:zh-HK      YouTube 播放 Plox
// @description:zh-HK  自動儲存及繼續 YouTube 影片播放進度，無需登入。
// @name:ja-JP      YouTube 再生 Plox
// @description:ja-JP  YouTube の動画再生の進行状況を自動で保存・再開します。ログインは不要です。
// @name:ko-KR      YouTube 재생 Plox
// @description:ko-KR  YouTube 동영상 재생 진행 상황을 자동으로 저장하고 이어서 재생합니다. 로그인 불필요.
// @name:th-TH      YouTube เล่นต่อ Plox
// @description:th-TH  บันทึกและเล่นต่อความคืบหน้าของวิดีโอบน YouTube โดยอัตโนมัติ โดยไม่ต้องเข้าสู่ระบบ.
// @name:vi-VN      YouTube Phát lại Plox
// @description:vi-VN  Tự động lưu và tiếp tục tiến trình phát video trên YouTube mà không cần đăng nhập.
// @name:id-ID      YouTube Pemutaran Plox
// @description:id-ID  Menyimpan dan melanjutkan kemajuan pemutaran video di YouTube secara otomatis tanpa perlu login.
// @name:ms-MY      YouTube Main Semula Plox
// @description:ms-MY  Menyimpan dan menyambung semula kemajuan main balik video di YouTube secara automatik tanpa perlu log masuk.
// @name:tl-PH      YouTube Playback Plox
// @description:tl-PH  Awtomatikong ini-save at ipinagpapatuloy ang progreso ng video playback sa YouTube nang hindi nagla-log in.
// @name:my-MM      YouTube ဖလေ့ဘက် Plox
// @description:my-MM  YouTube ဗီဒီယိုဖလေ့ဘက် တိုးတက်မှုကို အလိုအလျောက် သိမ်းဆည်းပြီး ထပ်မံစတင်နိုင်သည်။ ဝင်ရောက်ရန် မလိုအပ်ပါ။
// @name:sw-KE      YouTube Uchezesha Plox
// @description:sw-KE  Hifadhi na endelea kwa kiotomatiki maendeleo ya uchezaji wa video kwenye YouTube bila kuingia.
// @name:am-ET      የYouTube ተጫዋች Plox
// @description:am-ET  በYouTube ላይ የቪዲዮ መጫወቻ እድገትን በራሱ ያስቀምጣል እና ያቀጥላል በመግባት ያስፈልጋል።
// @name:ha-NP      YouTube Playback Plox
// @description:ha-NP  Ajiye kuma ci gaba da ci gaban kallon bidiyo a YouTube ta atomatik ba tare da shiga ba.
// @name:ur-PK      YouTube پلے بیک Plox
// @description:ur-PK  YouTube پر ویڈیوز کی پلے بیک کی پیش رفت کو خودکار طریقے سے محفوظ اور دوبارہ شروع کریں، لاگ ان کی ضرورت نہیں۔ 
// @name:ca-ES      YouTube Reproducció Plox
// @description:ca-ES  Desa i reprèn automàticament el progrés de reproducció de vídeos a YouTube sense necessitat d'iniciar sessió.
// @name:zu-ZA      YouTube Playback Plox
// @description:zu-ZA  Igcina futhi uqhubeke ngokuzenzakalelayo nokuqhubeka kwevidiyo ku-YouTube ngaphandle kokungena.
// @name:yue-HK      YouTube 播放 Plox
// @description:yue-HK  自動儲存及繼續 YouTube 影片播放進度，無需登入。
// @name:es-419      YouTube Reproducción Plox
// @description:es-419  Guarda y reanuda automáticamente el progreso de reproducción de videos en YouTube sin necesidad de iniciar sesión.
// @icon         https://raw.githubusercontent.com/Alplox/StartpagePlox/refs/heads/main/assets/favicon/favicon.ico
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// @run-at       document-end
// @license      MIT
// @downloadURL  https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/youtube-playback-plox.user.js
// @updateURL    https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/youtube-playback-plox.meta.js
// ==/UserScript==