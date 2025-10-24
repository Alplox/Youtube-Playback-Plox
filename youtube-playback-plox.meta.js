// ==UserScript==
// @namespace    youtube-playback-plox
// @homepage     https://github.com/Alplox/Youtube-Playback-Plox
// @version      0.0.2
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
// @description:de  Speichert und setzt den Wiedergabefortschritt von Videos auf YouTube automatisch fort, ohne dass eine Anmeldung erforderlich ist.

// @name:it      YouTube Riproduzione Plox
// @description:it  Salva e riprende automaticamente il progresso di riproduzione dei video su YouTube senza bisogno di effettuare l'accesso.

// @name:pt      YouTube Reprodução Plox
// @description:pt  Salva e retoma automaticamente o progresso de reprodução de vídeos no YouTube sem necessidade de login.

// @name:ru      YouTube Воспроизведение Plox
// @description:ru  Автоматически сохраняет и возобновляет прогресс воспроизведения видео на YouTube без необходимости входа в систему.

// @name:zh      YouTube 播放进度 Plox
// @description:zh  自动保存并恢复YouTube视频的播放进度，无需登录。

// @name:ja      YouTube 再生進捗 Plox
// @description:ja  YouTubeでの動画再生の進行状況を自動的に保存および再開し、ログインの必要はありません。

// @name:ko      YouTube 재생 진행 Plox
// @description:ko  YouTube에서 동영상 재생 진행 상황을 자동으로 저장하고 로그인 없이 재개합니다。

// @name:ar      YouTube تقدم التشغيل Plox
// @description:ar  يحفظ ويستأنف تلقائيًا تقدم تشغيل الفيديو على YouTube دون الحاجة إلى تسجيل الدخول.

// @name:hi      YouTube प्लेबैक Plox
// @description:hi  YouTube पर वीडियो प्लेबैक प्रगति को स्वचालित रूप से सहेजता है और पुनः आरंभ करता है बिना लॉग इन किए।

// @name:bn      YouTube প্লেব্যাক Plox
// @description:bn  YouTube-এ ভিডিও প্লেব্যাক অগ্রগতি স্বয়ংক্রিয়ভাবে সংরক্ষণ এবং পুনরায় শুরু করে লগইন ছাড়াই।

// @name:vi      YouTube Phát lại Plox
// @description:vi  Tự động lưu và tiếp tục tiến trình phát video trên YouTube mà không cần đăng nhập.

// @name:id      YouTube Pemutaran Plox
// @description:id  Secara otomatis menyimpan dan melanjutkan kemajuan pemutaran video di YouTube tanpa perlu masuk.

// @name:tr      YouTube Oynatma Plox
// @description:tr  YouTube'da video oynatma ilerlemesini otomatik olarak kaydeder ve oturum açmadan devam ettirir.

// @name:pl      YouTube Odtwarzanie Plox
// @description:pl  Automatycznie zapisuje i wznawia postęp odtwarzania wideo na YouTube bez konieczności logowania.

// @name:nl      YouTube Afspelen Plox
// @description:nl  Slaat automatisch de voortgang van videoweergave op YouTube op en hervat deze zonder in te loggen.

// @name:sv      YouTube Uppspelning Plox
// @description:sv  Sparar och återupptar automatiskt videouppspelningsframsteg på YouTube utan att behöva logga in.

// @name:da      YouTube Afspilning Plox
// @description:da  Gemmer og genoptager automatisk videofremskridt på YouTube uden at skulle logge ind.

// @name:no      YouTube Avspilling Plox
// @description:no  Lagrer og gjenopptar automatisk videofremdrift på YouTube uten å måtte logge inn.

// @name:fi      YouTube Toisto Plox
// @description:fi  Tallentaa ja jatkaa automaattisesti videon toiston etenemistä YouTubessa ilman kirjautumista.

// @name:hu      YouTube Lejátszás Plox
// @description:hu  Automatikusan menti és folytatja a videólejátszás előrehaladását a YouTube-on bejelentkezés nélkül.

// @name:cs      YouTube Přehrávání Plox
// @description:cs  Automaticky ukládá a obnovuje průběh přehrávání videí na YouTube bez nutnosti přihlášení.

// @name:sk      YouTube Prehrávanie Plox
// @description:sk  Automaticky ukladá a obnovuje priebeh prehrávania videí na YouTube bez nutnosti prihlásenia.

// @name:ro      YouTube Redare Plox
// @description:ro  Salvează și reia automat progresul redării videoclipurilor pe YouTube fără a fi nevoie să te conectezi.

// @name:bg      YouTube Възпроизвеждане Plox
// @description:bg  Автоматично запазва и възобновява напредъка на възпроизвеждането на видеоклипове в YouTube без нужда от вход.

// @name:hr      YouTube Reprodukcija Plox
// @description:hr  Automatski sprema i nastavlja napredak reprodukcije videozapisa na YouTubeu bez potrebe za prijavom.

// @name:sl      YouTube Predvajanje Plox
// @description:sl  Samodejno shrani in nadaljuje napredek predvajanja videoposnetkov na YouTubu brez prijave.

// @name:sr      YouTube Репродукција Plox
// @description:sr  Аутоматски чува и наставља напредак репродукције видео записа на YouTube-у без пријављивања.

// @name:lt      YouTube Atkūrimas Plox
// @description:lt  Automatiškai išsaugo ir tęsia „YouTube“ vaizdo įrašų atkūrimo eigą be prisijungimo.

// @name:lv      YouTube Atskaņošana Plox
// @description:lv  Automātiski saglabā un turpina YouTube videoklipu atskaņošanas progresu bez pierakstīšanās.

// @name:uk      YouTube Відтворення Plox
// @description:uk  Автоматично зберігає та відновлює прогрес відтворення відео на YouTube без необхідності входу в систему.

// @name:el      YouTube Αναπαραγωγή Plox
// @description:el  Αποθηκεύει και συνεχίζει αυτόματα την πρόοδο αναπαραγωγής βίντεο στο YouTube χωρίς να απαιτείται σύνδεση.

// @name:th      YouTube เล่นซ้ำ Plox
// @description:th  บันทึกและดำเนินการต่อความคืบหน้าในการเล่นวิดีโอบน YouTube โดยอัตโนมัติ โดยไม่ต้องเข้าสู่ระบบ.

// @name:ms      YouTube Pemutaran Plox
// @description:ms  Menyimpan dan meneruskan secara automatik kemajuan main balik video di YouTube tanpa perlu log masuk.

// @name:sw      YouTube Uchezaji Plox
// @description:sw  Huhifadhi na kuendelea kiotomatiki maendeleo ya uchezaji wa video kwenye YouTube bila kuhitaji kuingia akaunti.

// @name:fa      YouTube پخش Plox
// @description:fa  به‌ طور خودکار پیشرفت پخش ویدیوها در YouTube را ذخیره و ادامه می‌دهد، بدون نیاز به ورود به حساب کاربری.

// @name:he      YouTube הפעלה Plox
// @description:he  שומר ומחדש אוטומטית את התקדמות ההפעלה של סרטונים ב-YouTube ללא צורך בהתחברות.

// @name:ta      YouTube பிளேபேக் Plox
// @description:ta  YouTube-இல் வீடியோக்களின் பிளேபேக் முன்னேற்றத்தை தானாக சேமித்து, உள்நுழையாமல் தொடர்கிறது.

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