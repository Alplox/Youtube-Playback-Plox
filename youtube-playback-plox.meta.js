// ==UserScript==
// @namespace    youtube-playback-plox
// @homepage     https://github.com/Alplox/Youtube-Playback-Plox
// @supportURL   https://github.com/Alplox/Youtube-Playback-Plox/issues
// @version      0.0.5
// @author       Alplox
// @match        https://www.youtube.com/*
// @name         YouTube Playback Plox
// @description  Guarda y retoma automáticamente el progreso de videos en YouTube sin necesidad de iniciar sesión.

// @name:en      YouTube Playback Plox
// @description:en  Automatically saves and resumes video playback progress on YouTube without needing to log in.

// @name:es      YouTube Reproducción Plox
// @description:es  Guarda y retoma automáticamente el progreso de videos en YouTube sin necesidad de iniciar sesión.

// @name:fr      YouTube Lecture Plox
// @description:fr  Enregistre et reprend automatiquement la progression de la lecture des vidéos sur YouTube sans avoir besoin de se connecter.

// @name:de      YouTube Wiedergabe Plox
// @description:de  Speichert und setzt den Fortschritt von YouTube-Videos automatisch fort, ohne dass eine Anmeldung erforderlich ist.

// @name:it      YouTube Riproduzione Plox
// @description:it  Salva e riprende automaticamente la riproduzione dei video su YouTube senza bisogno di accedere.

// @name:pt      YouTube Reprodução Plox
// @description:pt  Salva e retoma automaticamente o progresso da reprodução de vídeos no YouTube sem precisar fazer login.

// @name:ru      YouTube Воспроизведение Plox
// @description:ru  Автоматически сохраняет и возобновляет прогресс воспроизведения видео на YouTube без входа в аккаунт.

// @name:zh      YouTube 播放 Plox
// @description:zh  自动保存并恢复 YouTube 视频的播放进度，无需登录。

// @name:ja      YouTube 再生 Plox
// @description:ja  YouTube の動画再生の進行状況を自動で保存・再開します。ログインは不要です。

// @name:ko      YouTube 재생 Plox
// @description:ko  YouTube 동영상 재생 진행 상황을 자동으로 저장하고 이어서 재생합니다. 로그인 불필요.

// @name:ar      يوتيوب بلايباك Plox
// @description:ar  يقوم بحفظ واستئناف تقدم تشغيل الفيديوهات على يوتيوب تلقائيًا دون الحاجة لتسجيل الدخول.

// @name:hi      YouTube प्लेबैक Plox
// @description:hi  YouTube पर वीडियो प्लेबैक की प्रगति को स्वचालित रूप से सहेजें और पुनः प्रारंभ करें, लॉगिन की आवश्यकता नहीं। 

// @name:bn      YouTube প্লেব্যাক Plox
// @description:bn  YouTube ভিডিও প্লেব্যাকের অগ্রগতি স্বয়ংক্রিয়ভাবে সংরক্ষণ এবং পুনরায় শুরু করুন, লগইনের প্রয়োজন নেই। 

// @name:vi      YouTube Phát lại Plox
// @description:vi  Tự động lưu và tiếp tục tiến trình phát video trên YouTube mà không cần đăng nhập.

// @name:id      YouTube Pemutaran Plox
// @description:id  Menyimpan dan melanjutkan kemajuan pemutaran video di YouTube secara otomatis tanpa perlu login.

// @name:tr      YouTube Oynatma Plox
// @description:tr  YouTube'daki video oynatma ilerlemesini otomatik olarak kaydeder ve devam ettirir, giriş yapmaya gerek yok.

// @name:pl      YouTube Odtwarzanie Plox
// @description:pl  Automatycznie zapisuje i wznawia postęp odtwarzania wideo na YouTube bez logowania.

// @name:nl      YouTube Afspelen Plox
// @description:nl  Slaat automatisch de voortgang van video's op YouTube op en hervat deze zonder in te loggen.

// @name:sv      YouTube Uppspelning Plox
// @description:sv  Sparar och återupptar automatiskt videoframsteg på YouTube utan att behöva logga in.

// @name:da      YouTube Afspilning Plox
// @description:da  Gemmer og genoptager automatisk videoafspilning på YouTube uden at logge ind.

// @name:no      YouTube Avspilling Plox
// @description:no  Lagrer og gjenopptar automatisk videofremdrift på YouTube uten å logge inn.

// @name:fi      YouTube Toisto Plox
// @description:fi  Tallentaa ja jatkaa automaattisesti YouTube-videoiden toistopistettä ilman kirjautumista.

// @name:hu      YouTube Lejátszás Plox
// @description:hu  Automatikusan menti és folytatja a YouTube-videók lejátszási előrehaladását bejelentkezés nélkül.

// @name:cs      YouTube Přehrávání Plox
// @description:cs  Automaticky ukládá a obnovuje postup přehrávání videí na YouTube bez nutnosti přihlášení.

// @name:sk      YouTube Prehrávanie Plox
// @description:sk  Automaticky ukladá a obnovuje priebeh prehrávania videí na YouTube bez potreby prihlásenia.

// @name:ro      YouTube Redare Plox
// @description:ro  Salvează și reia automat progresul redării videoclipurilor pe YouTube fără a fi nevoie să te conectezi.

// @name:bg      YouTube Възпроизвеждане Plox
// @description:bg  Автоматично записва и възобновява прогреса на видеото в YouTube без нужда от вход.

// @name:hr      YouTube Reprodukcija Plox
// @description:hr  Automatski sprema i nastavlja napredak reprodukcije videozapisa na YouTubeu bez prijave.

// @name:sl      YouTube Predvajanje Plox
// @description:sl  Samodejno shrani in nadaljuje napredek predvajanja videoposnetkov na YouTubu brez prijave.

// @name:sr      YouTube Репродукција Plox
// @description:sr  Аутоматски чува и наставља напредак репродукције видео записа на YouTube-у без пријављивања.

// @name:lt      YouTube Grotuvas Plox
// @description:lt  Automatiškai išsaugo ir atnaujina YouTube vaizdo įrašų atkūrimo pažangą be prisijungimo.

// @name:lv      YouTube Atskaņošana Plox
// @description:lv  Automātiski saglabā un atsāk video atskaņošanas progresu YouTube bez pieteikšanās.

// @name:uk      YouTube Відтворення Plox
// @description:uk  Автоматично зберігає та відновлює прогрес відтворення відео на YouTube без входу в акаунт.

// @name:el      YouTube Αναπαραγωγή Plox
// @description:el  Αποθηκεύει και συνεχίζει αυτόματα την πρόοδο αναπαραγωγής βίντεο στο YouTube χωρίς να χρειάζεται σύνδεση.

// @name:th      YouTube เล่นต่อ Plox
// @description:th  บันทึกและเล่นต่อความคืบหน้าของวิดีโอบน YouTube โดยอัตโนมัติ โดยไม่ต้องเข้าสู่ระบบ.

// @name:ms      YouTube Main Semula Plox
// @description:ms  Menyimpan dan menyambung semula kemajuan main balik video di YouTube secara automatik tanpa perlu log masuk.

// @name:sw      YouTube Uchezesha Plox
// @description:sw  Hifadhi na endelea kwa kiotomatiki maendeleo ya uchezaji wa video kwenye YouTube bila kuingia.

// @name:fa      پخش یوتیوب Plox
// @description:fa  پیشرفت پخش ویدیوها در یوتیوب را به صورت خودکار ذخیره و ادامه می‌دهد بدون نیاز به ورود.

// @name:he      YouTube השמעה Plox
// @description:he  שומר ומחדש אוטומטית את התקדמות הניגון של סרטונים ביוטיוב ללא צורך בהתחברות.

// @name:ta      YouTube பிளேபாக் Plox
// @description:ta  YouTube வீடியோக்களின் பிளேபாக் முன்னேற்றத்தை தானாகச் சேமித்து மீண்டும் தொடங்கும், உள்நுழைவு தேவையில்லை.

// @name:am      የYouTube ተጫዋች Plox
// @description:am  በYouTube ላይ የቪዲዮ መጫወቻ እድገትን በራሱ ያስቀምጣል እና ያቀጥላል በመግባት ያስፈልጋል።

// @name:ha      YouTube Playback Plox
// @description:ha  Ajiye kuma ci gaba da ci gaban kallon bidiyo a YouTube ta atomatik ba tare da shiga ba.

// @name:ur      YouTube پلے بیک Plox
// @description:ur  YouTube پر ویڈیوز کی پلے بیک کی پیش رفت کو خودکار طریقے سے محفوظ اور دوبارہ شروع کریں، لاگ ان کی ضرورت نہیں۔ 

// @name:te      YouTube ప్లేబ్యాక్ Plox
// @description:te  YouTube వీడియో ప్లేబ్యాక్ పురోగతిని ఆటోమేటిక్‌గా సేవ్ చేసి, తిరిగి ప్రారంభిస్తుంది, లాగిన్ అవసరం లేదు.

// @name:mr      YouTube प्लेबॅक Plox
// @description:mr  YouTube व्हिडिओ प्लेबॅक प्रगती आपोआप जतन करते आणि पुन्हा सुरू करते, लॉगिन आवश्यक नाही.

// @name:tl      YouTube Playback Plox
// @description:tl  Awtomatikong ini-save at ipinagpapatuloy ang progreso ng video playback sa YouTube nang hindi nagla-log in.

// @name:my      YouTube ဖလေ့ဘက် Plox
// @description:my  YouTube ဗီဒီယိုဖလေ့ဘက် တိုးတက်မှုကို အလိုအလျောက် သိမ်းဆည်းပြီး ထပ်မံစတင်နိုင်သည်။ ဝင်ရောက်ရန် မလိုအပ်ပါ။

// @name:yue      YouTube 播放 Plox
// @description:yue  自動儲存及繼續 YouTube 影片播放進度，無需登入。

// @name:ca      YouTube Reproducció Plox
// @description:ca  Desa i reprèn automàticament el progrés de reproducció de vídeos a YouTube sense necessitat d'iniciar sessió.

// @name:zu      YouTube Playback Plox
// @description:zu  Igcina futhi uqhubeke ngokuzenzakalelayo nokuqhubeka kwevidiyo ku-YouTube ngaphandle kokungena.

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