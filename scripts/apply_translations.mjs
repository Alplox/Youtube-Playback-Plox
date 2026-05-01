import { readFileSync, writeFileSync } from 'node:fs';

// pegar aquí el bloque de nuevas traducciones.
// Este objeto contiene las traducciones que se van a añadir o sobrescribir en los distintos idiomas.
const newTranslations = {
    "en-GB": {
        "resumeCompletedFromStart": "Resume completed videos from the start",
        "resumeCompletedFromStartTooltip": "If enabled, videos marked as completed will always start from 00:00. If disabled, they will stay at the end to allow YouTube's auto-advance to continue.",
        "fileTooLarge": "File is too large ({size}MB, max {limit}MB)",
        "fileTooLargeGist": "File is too large for Gist ({size}MB, max {limit}MB)",
        "storageUsageVideos": "Videos: {usage}",
        "storageUsageTotal": "Total: {usage}",
        "storageUsageAvailable": "Available: {usage}",
        "storageUsageVideosTooltip": "Space used by your currently saved videos",
        "storageUsageTotalTooltip": "All YouTube data in IndexedDB (includes overhead)",
        "storageUsageAvailableTooltip": "Total IndexedDB storage space available in browser",
        "recalculateStorage": "Recalculate",
        "recalculateStorageTooltip": "Recalculate storage usage",
        "openInFreeTube": "Open in FreeTube"
    },
    "es-ES": {
        "resumeCompletedFromStart": "Reanudar vídeos completados desde el inicio",
        "resumeCompletedFromStartTooltip": "Si está activado, los vídeos marcados como completados siempre comenzarán desde 00:00. Si está desactivado, permanecerán al final para permitir que el avance automático de YouTube continúe.",
        "fileTooLarge": "El archivo es demasiado grande ({size}MB, máx. {limit}MB)",
        "fileTooLargeGist": "El archivo es demasiado grande para Gist ({size}MB, máx. {limit}MB)",
        "storageUsageVideos": "Vídeos: {usage}",
        "storageUsageTotal": "Total: {usage}",
        "storageUsageAvailable": "Disponible: {usage}",
        "storageUsageVideosTooltip": "Espacio utilizado por tus vídeos guardados actualmente",
        "storageUsageTotalTooltip": "Todos los datos de YouTube en IndexedDB (incluye sobrecarga)",
        "storageUsageAvailableTooltip": "Espacio total de almacenamiento IndexedDB disponible en el navegador",
        "recalculateStorage": "Recalcular",
        "recalculateStorageTooltip": "Recalcular el uso de almacenamiento",
        "openInFreeTube": "Abrir en FreeTube"
    },
    "es-419": {
        "resumeCompletedFromStart": "Reanudar videos completados desde el inicio",
        "resumeCompletedFromStartTooltip": "Si está activado, los videos marcados como completados siempre comenzarán desde 00:00. Si está desactivado, permanecerán al final para permitir que el avance automático de YouTube continúe.",
        "fileTooLarge": "El archivo es demasiado grande ({size}MB, máx. {limit}MB)",
        "fileTooLargeGist": "El archivo es demasiado grande para Gist ({size}MB, máx. {limit}MB)",
        "storageUsageVideos": "Videos: {usage}",
        "storageUsageTotal": "Total: {usage}",
        "storageUsageAvailable": "Disponible: {usage}",
        "storageUsageVideosTooltip": "Espacio utilizado por tus videos guardados actualmente",
        "storageUsageTotalTooltip": "Todos los datos de YouTube en IndexedDB (incluye sobrecarga)",
        "storageUsageAvailableTooltip": "Espacio total de almacenamiento IndexedDB disponible en el navegador",
        "recalculateStorage": "Recalcular",
        "recalculateStorageTooltip": "Recalcular el uso de almacenamiento",
        "openInFreeTube": "Abrir en FreeTube"
    },
    "ca": {
        "resumeCompletedFromStart": "Reprèn els vídeos completats des de l'inici",
        "resumeCompletedFromStartTooltip": "Si està activat, els vídeos marcats com a completats sempre començaran des de 00:00. Si està desactivat, es quedaran al final per permetre que l'avanç automàtic de YouTube continuï.",
        "fileTooLarge": "El fitxer és massa gran ({size}MB, màx. {limit}MB)",
        "fileTooLargeGist": "El fitxer és massa gran per a Gist ({size}MB, màx. {limit}MB)",
        "storageUsageVideos": "Vídeos: {usage}",
        "storageUsageTotal": "Total: {usage}",
        "storageUsageAvailable": "Disponible: {usage}",
        "storageUsageVideosTooltip": "Espai utilitzat pels teus vídeos desats actualment",
        "storageUsageTotalTooltip": "Totes les dades de YouTube a IndexedDB (inclou sobrecàrrega)",
        "storageUsageAvailableTooltip": "Espai total d'emmagatzematge IndexedDB disponible al navegador",
        "recalculateStorage": "Recalcular",
        "recalculateStorageTooltip": "Recalcular l'ús d'emmagatzematge",
        "openInFreeTube": "Obrir a FreeTube"
    },
    "fr": {
        "resumeCompletedFromStart": "Reprendre les vidéos terminées depuis le début",
        "resumeCompletedFromStartTooltip": "Si activé, les vidéos marquées comme terminées commenceront toujours à 00:00. Si désactivé, elles resteront à la fin pour permettre la lecture automatique de YouTube.",
        "fileTooLarge": "Le fichier est trop volumineux ({size}MB, max {limit}MB)",
        "fileTooLargeGist": "Le fichier est trop volumineux pour Gist ({size}MB, max {limit}MB)",
        "storageUsageVideos": "Vidéos : {usage}",
        "storageUsageTotal": "Total : {usage}",
        "storageUsageAvailable": "Disponible : {usage}",
        "storageUsageVideosTooltip": "Espace utilisé par vos vidéos actuellement enregistrées",
        "storageUsageTotalTooltip": "Toutes les données YouTube dans IndexedDB (inclut les surcharges)",
        "storageUsageAvailableTooltip": "Espace total de stockage IndexedDB disponible dans le navigateur",
        "recalculateStorage": "Recalculer",
        "recalculateStorageTooltip": "Recalculer l'utilisation du stockage",
        "openInFreeTube": "Ouvrir dans FreeTube"
    },

    "de": {
        "resumeCompletedFromStart": "Abgeschlossene Videos von Anfang an fortsetzen",
        "resumeCompletedFromStartTooltip": "Wenn aktiviert, starten als abgeschlossen markierte Videos immer bei 00:00. Wenn deaktiviert, bleiben sie am Ende, damit die automatische Wiedergabe von YouTube fortgesetzt werden kann.",
        "fileTooLarge": "Datei ist zu groß ({size}MB, max {limit}MB)",
        "fileTooLargeGist": "Datei ist zu groß für Gist ({size}MB, max {limit}MB)",
        "storageUsageVideos": "Videos: {usage}",
        "storageUsageTotal": "Gesamt: {usage}",
        "storageUsageAvailable": "Verfügbar: {usage}",
        "storageUsageVideosTooltip": "Speicherplatz, der von deinen aktuell gespeicherten Videos verwendet wird",
        "storageUsageTotalTooltip": "Alle YouTube-Daten in IndexedDB (inklusive Overhead)",
        "storageUsageAvailableTooltip": "Gesamter im Browser verfügbarer IndexedDB-Speicherplatz",
        "recalculateStorage": "Neu berechnen",
        "recalculateStorageTooltip": "Speichernutzung neu berechnen",
        "openInFreeTube": "In FreeTube öffnen"
    },

    "it": {
        "resumeCompletedFromStart": "Riprendi i video completati dall'inizio",
        "resumeCompletedFromStartTooltip": "Se abilitato, i video contrassegnati come completati inizieranno sempre da 00:00. Se disabilitato, rimarranno alla fine per consentire l'avanzamento automatico di YouTube.",
        "fileTooLarge": "Il file è troppo grande ({size}MB, max {limit}MB)",
        "fileTooLargeGist": "Il file è troppo grande per Gist ({size}MB, max {limit}MB)",
        "storageUsageVideos": "Video: {usage}",
        "storageUsageTotal": "Totale: {usage}",
        "storageUsageAvailable": "Disponibile: {usage}",
        "storageUsageVideosTooltip": "Spazio utilizzato dai video attualmente salvati",
        "storageUsageTotalTooltip": "Tutti i dati di YouTube in IndexedDB (include overhead)",
        "storageUsageAvailableTooltip": "Spazio totale di archiviazione IndexedDB disponibile nel browser",
        "recalculateStorage": "Ricalcola",
        "recalculateStorageTooltip": "Ricalcola l'utilizzo dello spazio",
        "openInFreeTube": "Apri in FreeTube"
    },

    "pt": {
        "resumeCompletedFromStart": "Retomar vídeos concluídos desde o início",
        "resumeCompletedFromStartTooltip": "Se ativado, os vídeos marcados como concluídos começarão sempre em 00:00. Se desativado, permanecerão no final para permitir que a reprodução automática do YouTube continue.",
        "fileTooLarge": "O ficheiro é demasiado grande ({size}MB, máx. {limit}MB)",
        "fileTooLargeGist": "O ficheiro é demasiado grande para o Gist ({size}MB, máx. {limit}MB)",
        "storageUsageVideos": "Vídeos: {usage}",
        "storageUsageTotal": "Total: {usage}",
        "storageUsageAvailable": "Disponível: {usage}",
        "storageUsageVideosTooltip": "Espaço utilizado pelos seus vídeos atualmente guardados",
        "storageUsageTotalTooltip": "Todos os dados do YouTube no IndexedDB (inclui overhead)",
        "storageUsageAvailableTooltip": "Espaço total de armazenamento IndexedDB disponível no navegador",
        "recalculateStorage": "Recalcular",
        "recalculateStorageTooltip": "Recalcular a utilização do armazenamento",
        "openInFreeTube": "Abrir no FreeTube"
    },
    "nl": {
        "resumeCompletedFromStart": "Voltooide video's opnieuw starten vanaf het begin",
        "resumeCompletedFromStartTooltip": "Indien ingeschakeld, beginnen video's die als voltooid zijn gemarkeerd altijd vanaf 00:00. Indien uitgeschakeld, blijven ze aan het einde zodat de automatische afspeelfunctie van YouTube kan doorgaan.",
        "fileTooLarge": "Bestand is te groot ({size}MB, max {limit}MB)",
        "fileTooLargeGist": "Bestand is te groot voor Gist ({size}MB, max {limit}MB)",
        "storageUsageVideos": "Video's: {usage}",
        "storageUsageTotal": "Totaal: {usage}",
        "storageUsageAvailable": "Beschikbaar: {usage}",
        "storageUsageVideosTooltip": "Ruimte gebruikt door je momenteel opgeslagen video's",
        "storageUsageTotalTooltip": "Alle YouTube-gegevens in IndexedDB (inclusief overhead)",
        "storageUsageAvailableTooltip": "Totale beschikbare IndexedDB-opslagruimte in de browser",
        "recalculateStorage": "Opnieuw berekenen",
        "recalculateStorageTooltip": "Opslaggebruik opnieuw berekenen",
        "openInFreeTube": "Openen in FreeTube"
    },

    "pl": {
        "resumeCompletedFromStart": "Wznów ukończone filmy od początku",
        "resumeCompletedFromStartTooltip": "Jeśli włączone, filmy oznaczone jako ukończone zawsze rozpoczną się od 00:00. Jeśli wyłączone, pozostaną na końcu, aby umożliwić automatyczne odtwarzanie YouTube.",
        "fileTooLarge": "Plik jest za duży ({size}MB, maks. {limit}MB)",
        "fileTooLargeGist": "Plik jest za duży dla Gist ({size}MB, maks. {limit}MB)",
        "storageUsageVideos": "Filmy: {usage}",
        "storageUsageTotal": "Razem: {usage}",
        "storageUsageAvailable": "Dostępne: {usage}",
        "storageUsageVideosTooltip": "Miejsce używane przez aktualnie zapisane filmy",
        "storageUsageTotalTooltip": "Wszystkie dane YouTube w IndexedDB (z uwzględnieniem narzutu)",
        "storageUsageAvailableTooltip": "Całkowita dostępna przestrzeń IndexedDB w przeglądarce",
        "recalculateStorage": "Przelicz ponownie",
        "recalculateStorageTooltip": "Przelicz wykorzystanie pamięci",
        "openInFreeTube": "Otwórz w FreeTube"
    },

    "sv": {
        "resumeCompletedFromStart": "Återuppta slutförda videor från början",
        "resumeCompletedFromStartTooltip": "Om aktiverat kommer videor som markerats som slutförda alltid att börja från 00:00. Om inaktiverat stannar de vid slutet för att tillåta YouTubes automatiska uppspelning att fortsätta.",
        "fileTooLarge": "Filen är för stor ({size}MB, max {limit}MB)",
        "fileTooLargeGist": "Filen är för stor för Gist ({size}MB, max {limit}MB)",
        "storageUsageVideos": "Videor: {usage}",
        "storageUsageTotal": "Totalt: {usage}",
        "storageUsageAvailable": "Tillgängligt: {usage}",
        "storageUsageVideosTooltip": "Utrymme som används av dina sparade videor",
        "storageUsageTotalTooltip": "All YouTube-data i IndexedDB (inklusive overhead)",
        "storageUsageAvailableTooltip": "Totalt tillgängligt IndexedDB-lagringsutrymme i webbläsaren",
        "recalculateStorage": "Beräkna om",
        "recalculateStorageTooltip": "Beräkna lagringsanvändning på nytt",
        "openInFreeTube": "Öppna i FreeTube"
    },

    "da": {
        "resumeCompletedFromStart": "Genoptag fuldførte videoer fra starten",
        "resumeCompletedFromStartTooltip": "Hvis aktiveret, vil videoer markeret som fuldførte altid starte fra 00:00. Hvis deaktiveret, forbliver de i slutningen for at tillade YouTubes automatiske afspilning at fortsætte.",
        "fileTooLarge": "Filen er for stor ({size}MB, maks {limit}MB)",
        "fileTooLargeGist": "Filen er for stor til Gist ({size}MB, maks {limit}MB)",
        "storageUsageVideos": "Videoer: {usage}",
        "storageUsageTotal": "Total: {usage}",
        "storageUsageAvailable": "Tilgængelig: {usage}",
        "storageUsageVideosTooltip": "Plads brugt af dine aktuelt gemte videoer",
        "storageUsageTotalTooltip": "Alle YouTube-data i IndexedDB (inklusive overhead)",
        "storageUsageAvailableTooltip": "Samlet tilgængelig IndexedDB-lagerplads i browseren",
        "recalculateStorage": "Genberegn",
        "recalculateStorageTooltip": "Genberegn lagerforbrug",
        "openInFreeTube": "Åbn i FreeTube"
    },

    "no": {
        "resumeCompletedFromStart": "Fortsett fullførte videoer fra starten",
        "resumeCompletedFromStartTooltip": "Hvis aktivert, vil videoer merket som fullført alltid starte fra 00:00. Hvis deaktivert, vil de forbli på slutten for å la YouTubes automatiske avspilling fortsette.",
        "fileTooLarge": "Filen er for stor ({size}MB, maks {limit}MB)",
        "fileTooLargeGist": "Filen er for stor for Gist ({size}MB, maks {limit}MB)",
        "storageUsageVideos": "Videoer: {usage}",
        "storageUsageTotal": "Totalt: {usage}",
        "storageUsageAvailable": "Tilgjengelig: {usage}",
        "storageUsageVideosTooltip": "Plass brukt av dine lagrede videoer",
        "storageUsageTotalTooltip": "Alle YouTube-data i IndexedDB (inkludert overhead)",
        "storageUsageAvailableTooltip": "Total tilgjengelig IndexedDB-lagringsplass i nettleseren",
        "recalculateStorage": "Beregn på nytt",
        "recalculateStorageTooltip": "Beregn lagringsbruk på nytt",
        "openInFreeTube": "Åpne i FreeTube"
    },

    "fi": {
        "resumeCompletedFromStart": "Jatka valmiit videot alusta",
        "resumeCompletedFromStartTooltip": "Jos käytössä, valmiiksi merkityt videot alkavat aina kohdasta 00:00. Jos pois käytöstä, ne pysyvät lopussa, jotta YouTuben automaattinen toisto voi jatkua.",
        "fileTooLarge": "Tiedosto on liian suuri ({size}MB, max {limit}MB)",
        "fileTooLargeGist": "Tiedosto on liian suuri Gistille ({size}MB, max {limit}MB)",
        "storageUsageVideos": "Videot: {usage}",
        "storageUsageTotal": "Yhteensä: {usage}",
        "storageUsageAvailable": "Saatavilla: {usage}",
        "storageUsageVideosTooltip": "Tila, jota nykyiset tallennetut videosi käyttävät",
        "storageUsageTotalTooltip": "Kaikki YouTube-tiedot IndexedDB:ssä (sisältää ylikuorman)",
        "storageUsageAvailableTooltip": "Selaimen käytettävissä oleva IndexedDB-kokonaistila",
        "recalculateStorage": "Laske uudelleen",
        "recalculateStorageTooltip": "Laske tallennustilan käyttö uudelleen",
        "openInFreeTube": "Avaa FreeTubessa"
    },
    "cs": {
        "resumeCompletedFromStart": "Pokračovat v dokončených videích od začátku",
        "resumeCompletedFromStartTooltip": "Pokud je povoleno, videa označená jako dokončená se vždy spustí od 00:00. Pokud je zakázáno, zůstanou na konci, aby mohlo pokračovat automatické přehrávání YouTube.",
        "fileTooLarge": "Soubor je příliš velký ({size}MB, max {limit}MB)",
        "fileTooLargeGist": "Soubor je příliš velký pro Gist ({size}MB, max {limit}MB)",
        "storageUsageVideos": "Videa: {usage}",
        "storageUsageTotal": "Celkem: {usage}",
        "storageUsageAvailable": "Dostupné: {usage}",
        "storageUsageVideosTooltip": "Prostor využitý aktuálně uloženými videi",
        "storageUsageTotalTooltip": "Všechna data YouTube v IndexedDB (včetně režie)",
        "storageUsageAvailableTooltip": "Celkový dostupný prostor IndexedDB v prohlížeči",
        "recalculateStorage": "Přepočítat",
        "recalculateStorageTooltip": "Přepočítat využití úložiště",
        "openInFreeTube": "Otevřít ve FreeTube"
    },

    "sk": {
        "resumeCompletedFromStart": "Pokračovať v dokončených videách od začiatku",
        "resumeCompletedFromStartTooltip": "Ak je povolené, videá označené ako dokončené sa vždy spustia od 00:00. Ak je zakázané, zostanú na konci, aby mohlo pokračovať automatické prehrávanie YouTube.",
        "fileTooLarge": "Súbor je príliš veľký ({size}MB, max {limit}MB)",
        "fileTooLargeGist": "Súbor je príliš veľký pre Gist ({size}MB, max {limit}MB)",
        "storageUsageVideos": "Videá: {usage}",
        "storageUsageTotal": "Celkom: {usage}",
        "storageUsageAvailable": "Dostupné: {usage}",
        "storageUsageVideosTooltip": "Priestor využitý aktuálne uloženými videami",
        "storageUsageTotalTooltip": "Všetky dáta YouTube v IndexedDB (vrátane režijných nákladov)",
        "storageUsageAvailableTooltip": "Celkový dostupný priestor IndexedDB v prehliadači",
        "recalculateStorage": "Prepočítať",
        "recalculateStorageTooltip": "Prepočítať využitie úložiska",
        "openInFreeTube": "Otvoriť vo FreeTube"
    },

    "hu": {
        "resumeCompletedFromStart": "Befejezett videók újraindítása az elejéről",
        "resumeCompletedFromStartTooltip": "Ha engedélyezve van, a befejezettként megjelölt videók mindig 00:00-ról indulnak. Ha ki van kapcsolva, a végén maradnak, hogy a YouTube automatikus lejátszása folytatódhasson.",
        "fileTooLarge": "A fájl túl nagy ({size}MB, max {limit}MB)",
        "fileTooLargeGist": "A fájl túl nagy a Gist számára ({size}MB, max {limit}MB)",
        "storageUsageVideos": "Videók: {usage}",
        "storageUsageTotal": "Összesen: {usage}",
        "storageUsageAvailable": "Elérhető: {usage}",
        "storageUsageVideosTooltip": "A jelenleg mentett videók által használt tárhely",
        "storageUsageTotalTooltip": "Az összes YouTube-adat az IndexedDB-ben (beleértve a többletet)",
        "storageUsageAvailableTooltip": "A böngészőben elérhető teljes IndexedDB tárhely",
        "recalculateStorage": "Újraszámolás",
        "recalculateStorageTooltip": "Tárhelyhasználat újraszámolása",
        "openInFreeTube": "Megnyitás FreeTube-ban"
    },

    "ro": {
        "resumeCompletedFromStart": "Reia videoclipurile finalizate de la început",
        "resumeCompletedFromStartTooltip": "Dacă este activat, videoclipurile marcate ca finalizate vor începe întotdeauna de la 00:00. Dacă este dezactivat, vor rămâne la final pentru a permite redarea automată YouTube să continue.",
        "fileTooLarge": "Fișierul este prea mare ({size}MB, max {limit}MB)",
        "fileTooLargeGist": "Fișierul este prea mare pentru Gist ({size}MB, max {limit}MB)",
        "storageUsageVideos": "Videoclipuri: {usage}",
        "storageUsageTotal": "Total: {usage}",
        "storageUsageAvailable": "Disponibil: {usage}",
        "storageUsageVideosTooltip": "Spațiu utilizat de videoclipurile salvate în prezent",
        "storageUsageTotalTooltip": "Toate datele YouTube în IndexedDB (include overhead)",
        "storageUsageAvailableTooltip": "Spațiul total IndexedDB disponibil în browser",
        "recalculateStorage": "Recalculează",
        "recalculateStorageTooltip": "Recalculează utilizarea spațiului",
        "openInFreeTube": "Deschide în FreeTube"
    },

    "bg": {
        "resumeCompletedFromStart": "Възобновяване на завършени видеа от началото",
        "resumeCompletedFromStartTooltip": "Ако е активирано, видеата, маркирани като завършени, винаги ще започват от 00:00. Ако е деактивирано, ще останат в края, за да позволят автоматичното възпроизвеждане на YouTube да продължи.",
        "fileTooLarge": "Файлът е твърде голям ({size}MB, макс {limit}MB)",
        "fileTooLargeGist": "Файлът е твърде голям за Gist ({size}MB, макс {limit}MB)",
        "storageUsageVideos": "Видеа: {usage}",
        "storageUsageTotal": "Общо: {usage}",
        "storageUsageAvailable": "Налично: {usage}",
        "storageUsageVideosTooltip": "Пространство, използвано от текущо запазените видеа",
        "storageUsageTotalTooltip": "Всички данни на YouTube в IndexedDB (включително допълнителни разходи)",
        "storageUsageAvailableTooltip": "Общото налично пространство в IndexedDB в браузъра",
        "recalculateStorage": "Преизчисли",
        "recalculateStorageTooltip": "Преизчисли използването на пространството",
        "openInFreeTube": "Отвори в FreeTube"
    },
    "el": {
        "resumeCompletedFromStart": "Συνέχιση ολοκληρωμένων βίντεο από την αρχή",
        "resumeCompletedFromStartTooltip": "Αν είναι ενεργοποιημένο, τα βίντεο που έχουν σημειωθεί ως ολοκληρωμένα θα ξεκινούν πάντα από το 00:00. Αν είναι απενεργοποιημένο, θα παραμένουν στο τέλος ώστε να συνεχίζεται η αυτόματη αναπαραγωγή του YouTube.",
        "fileTooLarge": "Το αρχείο είναι πολύ μεγάλο ({size}MB, μέγ. {limit}MB)",
        "fileTooLargeGist": "Το αρχείο είναι πολύ μεγάλο για Gist ({size}MB, μέγ. {limit}MB)",
        "storageUsageVideos": "Βίντεο: {usage}",
        "storageUsageTotal": "Σύνολο: {usage}",
        "storageUsageAvailable": "Διαθέσιμο: {usage}",
        "storageUsageVideosTooltip": "Χώρος που χρησιμοποιείται από τα αποθηκευμένα βίντεό σας",
        "storageUsageTotalTooltip": "Όλα τα δεδομένα YouTube στο IndexedDB (περιλαμβάνει επιπλέον επιβάρυνση)",
        "storageUsageAvailableTooltip": "Συνολικός διαθέσιμος χώρος IndexedDB στο πρόγραμμα περιήγησης",
        "recalculateStorage": "Επανυπολογισμός",
        "recalculateStorageTooltip": "Επανυπολογισμός χρήσης αποθήκευσης",
        "openInFreeTube": "Άνοιγμα στο FreeTube"
    },

    "sr": {
        "resumeCompletedFromStart": "Настави завршене видео снимке од почетка",
        "resumeCompletedFromStartTooltip": "Ако је омогућено, видео снимци означени као завршени увек ће почињати од 00:00. Ако је онемогућено, остаће на крају како би аутоматска репродукција YouTube-а могла да се настави.",
        "fileTooLarge": "Датотека је превелика ({size}MB, макс {limit}MB)",
        "fileTooLargeGist": "Датотека је превелика за Gist ({size}MB, макс {limit}MB)",
        "storageUsageVideos": "Видео снимци: {usage}",
        "storageUsageTotal": "Укупно: {usage}",
        "storageUsageAvailable": "Доступно: {usage}",
        "storageUsageVideosTooltip": "Простор који користе тренутно сачувани видео снимци",
        "storageUsageTotalTooltip": "Сви YouTube подаци у IndexedDB (укључује додатни трошак)",
        "storageUsageAvailableTooltip": "Укупно доступан IndexedDB простор у прегледачу",
        "recalculateStorage": "Поново израчунај",
        "recalculateStorageTooltip": "Поново израчунај коришћење простора",
        "openInFreeTube": "Отвори у FreeTube"
    },

    "hr": {
        "resumeCompletedFromStart": "Nastavi dovršene videozapise od početka",
        "resumeCompletedFromStartTooltip": "Ako je omogućeno, videozapisi označeni kao dovršeni uvijek će započeti od 00:00. Ako je onemogućeno, ostat će na kraju kako bi se omogućio automatski nastavak reprodukcije YouTubea.",
        "fileTooLarge": "Datoteka je prevelika ({size}MB, maks {limit}MB)",
        "fileTooLargeGist": "Datoteka je prevelika za Gist ({size}MB, maks {limit}MB)",
        "storageUsageVideos": "Videozapisi: {usage}",
        "storageUsageTotal": "Ukupno: {usage}",
        "storageUsageAvailable": "Dostupno: {usage}",
        "storageUsageVideosTooltip": "Prostor koji koriste trenutno spremljeni videozapisi",
        "storageUsageTotalTooltip": "Svi YouTube podaci u IndexedDB (uključuje dodatni trošak)",
        "storageUsageAvailableTooltip": "Ukupni dostupni IndexedDB prostor u pregledniku",
        "recalculateStorage": "Ponovno izračunaj",
        "recalculateStorageTooltip": "Ponovno izračunaj korištenje prostora",
        "openInFreeTube": "Otvori u FreeTube"
    },

    "sl": {
        "resumeCompletedFromStart": "Nadaljuj dokončane videe od začetka",
        "resumeCompletedFromStartTooltip": "Če je omogočeno, bodo videi, označeni kot dokončani, vedno začeli pri 00:00. Če je onemogočeno, bodo ostali na koncu, da se omogoči samodejno predvajanje YouTuba.",
        "fileTooLarge": "Datoteka je prevelika ({size}MB, maks {limit}MB)",
        "fileTooLargeGist": "Datoteka je prevelika za Gist ({size}MB, maks {limit}MB)",
        "storageUsageVideos": "Videi: {usage}",
        "storageUsageTotal": "Skupaj: {usage}",
        "storageUsageAvailable": "Na voljo: {usage}",
        "storageUsageVideosTooltip": "Prostor, ki ga uporabljajo trenutno shranjeni videi",
        "storageUsageTotalTooltip": "Vsi podatki YouTube v IndexedDB (vključno z dodatnim bremenom)",
        "storageUsageAvailableTooltip": "Skupni razpoložljivi prostor IndexedDB v brskalniku",
        "recalculateStorage": "Ponovno izračunaj",
        "recalculateStorageTooltip": "Ponovno izračunaj uporabo prostora",
        "openInFreeTube": "Odpri v FreeTube"
    },

    "lt": {
        "resumeCompletedFromStart": "Tęsti užbaigtus vaizdo įrašus nuo pradžios",
        "resumeCompletedFromStartTooltip": "Jei įjungta, pažymėti kaip užbaigti vaizdo įrašai visada prasidės nuo 00:00. Jei išjungta, jie liks pabaigoje, kad būtų galima tęsti automatinį YouTube atkūrimą.",
        "fileTooLarge": "Failas per didelis ({size}MB, maks {limit}MB)",
        "fileTooLargeGist": "Failas per didelis Gist ({size}MB, maks {limit}MB)",
        "storageUsageVideos": "Vaizdo įrašai: {usage}",
        "storageUsageTotal": "Iš viso: {usage}",
        "storageUsageAvailable": "Laisva: {usage}",
        "storageUsageVideosTooltip": "Vieta, naudojama šiuo metu išsaugotų vaizdo įrašų",
        "storageUsageTotalTooltip": "Visi YouTube duomenys IndexedDB (įskaitant papildomą apkrovą)",
        "storageUsageAvailableTooltip": "Bendras prieinamas IndexedDB saugyklos dydis naršyklėje",
        "recalculateStorage": "Perskaičiuoti",
        "recalculateStorageTooltip": "Perskaičiuoti saugyklos naudojimą",
        "openInFreeTube": "Atidaryti FreeTube"
    },
    "lv": {
        "resumeCompletedFromStart": "Atsākt pabeigtos videoklipus no sākuma",
        "resumeCompletedFromStartTooltip": "Ja iespējots, videoklipi, kas atzīmēti kā pabeigti, vienmēr sāksies no 00:00. Ja atspējots, tie paliks beigās, lai YouTube automātiskā atskaņošana varētu turpināties.",
        "fileTooLarge": "Fails ir pārāk liels ({size}MB, maks. {limit}MB)",
        "fileTooLargeGist": "Fails ir pārāk liels Gist ({size}MB, maks. {limit}MB)",
        "storageUsageVideos": "Videoklipi: {usage}",
        "storageUsageTotal": "Kopā: {usage}",
        "storageUsageAvailable": "Pieejams: {usage}",
        "storageUsageVideosTooltip": "Vieta, ko izmanto pašlaik saglabātie videoklipi",
        "storageUsageTotalTooltip": "Visi YouTube dati IndexedDB (ietver papildu izmaksas)",
        "storageUsageAvailableTooltip": "Kopējā pieejamā IndexedDB krātuves vieta pārlūkā",
        "recalculateStorage": "Pārrēķināt",
        "recalculateStorageTooltip": "Pārrēķināt krātuves izmantošanu",
        "openInFreeTube": "Atvērt FreeTube"
    },

    "uk": {
        "resumeCompletedFromStart": "Відновити завершені відео з початку",
        "resumeCompletedFromStartTooltip": "Якщо увімкнено, відео, позначені як завершені, завжди починатимуться з 00:00. Якщо вимкнено, вони залишатимуться в кінці, щоб дозволити автоматичне відтворення YouTube.",
        "fileTooLarge": "Файл занадто великий ({size}MB, макс. {limit}MB)",
        "fileTooLargeGist": "Файл занадто великий для Gist ({size}MB, макс. {limit}MB)",
        "storageUsageVideos": "Відео: {usage}",
        "storageUsageTotal": "Разом: {usage}",
        "storageUsageAvailable": "Доступно: {usage}",
        "storageUsageVideosTooltip": "Простір, який використовують збережені відео",
        "storageUsageTotalTooltip": "Усі дані YouTube в IndexedDB (включає накладні витрати)",
        "storageUsageAvailableTooltip": "Загальний доступний простір IndexedDB у браузері",
        "recalculateStorage": "Перерахувати",
        "recalculateStorageTooltip": "Перерахувати використання сховища",
        "openInFreeTube": "Відкрити у FreeTube"
    },

    "ru": {
        "resumeCompletedFromStart": "Возобновлять завершённые видео с начала",
        "resumeCompletedFromStartTooltip": "Если включено, видео, отмеченные как завершённые, всегда будут начинаться с 00:00. Если отключено, они останутся в конце, чтобы автопроигрывание YouTube могло продолжиться.",
        "fileTooLarge": "Файл слишком большой ({size}MB, макс. {limit}MB)",
        "fileTooLargeGist": "Файл слишком большой для Gist ({size}MB, макс. {limit}MB)",
        "storageUsageVideos": "Видео: {usage}",
        "storageUsageTotal": "Всего: {usage}",
        "storageUsageAvailable": "Доступно: {usage}",
        "storageUsageVideosTooltip": "Место, используемое сохранёнными видео",
        "storageUsageTotalTooltip": "Все данные YouTube в IndexedDB (включая накладные расходы)",
        "storageUsageAvailableTooltip": "Общий доступный объём IndexedDB в браузере",
        "recalculateStorage": "Пересчитать",
        "recalculateStorageTooltip": "Пересчитать использование хранилища",
        "openInFreeTube": "Открыть в FreeTube"
    },

    "tr": {
        "resumeCompletedFromStart": "Tamamlanan videoları baştan devam ettir",
        "resumeCompletedFromStartTooltip": "Etkinleştirilirse, tamamlandı olarak işaretlenen videolar her zaman 00:00'dan başlar. Devre dışı bırakılırsa, YouTube'un otomatik oynatmasının devam etmesi için sonda kalırlar.",
        "fileTooLarge": "Dosya çok büyük ({size}MB, maks {limit}MB)",
        "fileTooLargeGist": "Dosya Gist için çok büyük ({size}MB, maks {limit}MB)",
        "storageUsageVideos": "Videolar: {usage}",
        "storageUsageTotal": "Toplam: {usage}",
        "storageUsageAvailable": "Kullanılabilir: {usage}",
        "storageUsageVideosTooltip": "Şu anda kaydedilmiş videolar tarafından kullanılan alan",
        "storageUsageTotalTooltip": "IndexedDB'deki tüm YouTube verileri (ek yük dahil)",
        "storageUsageAvailableTooltip": "Tarayıcıda kullanılabilir toplam IndexedDB depolama alanı",
        "recalculateStorage": "Yeniden hesapla",
        "recalculateStorageTooltip": "Depolama kullanımını yeniden hesapla",
        "openInFreeTube": "FreeTube'da aç"
    },

    "ar": {
        "resumeCompletedFromStart": "استئناف الفيديوهات المكتملة من البداية",
        "resumeCompletedFromStartTooltip": "إذا تم التفعيل، ستبدأ الفيديوهات التي تم تمييزها كمكتملة دائمًا من 00:00. إذا تم التعطيل، ستبقى في النهاية للسماح بالتشغيل التلقائي في YouTube بالاستمرار.",
        "fileTooLarge": "الملف كبير جدًا ({size}MB، الحد الأقصى {limit}MB)",
        "fileTooLargeGist": "الملف كبير جدًا بالنسبة لـ Gist ({size}MB، الحد الأقصى {limit}MB)",
        "storageUsageVideos": "الفيديوهات: {usage}",
        "storageUsageTotal": "الإجمالي: {usage}",
        "storageUsageAvailable": "المتاح: {usage}",
        "storageUsageVideosTooltip": "المساحة المستخدمة بواسطة الفيديوهات المحفوظة حاليًا",
        "storageUsageTotalTooltip": "جميع بيانات YouTube في IndexedDB (تشمل الحمل الإضافي)",
        "storageUsageAvailableTooltip": "إجمالي مساحة IndexedDB المتاحة في المتصفح",
        "recalculateStorage": "إعادة الحساب",
        "recalculateStorageTooltip": "إعادة حساب استخدام التخزين",
        "openInFreeTube": "فتح في FreeTube"
    },
    "fa": {
        "resumeCompletedFromStart": "ادامه ویدیوهای تکمیل‌شده از ابتدا",
        "resumeCompletedFromStartTooltip": "اگر فعال باشد، ویدیوهایی که به‌عنوان تکمیل‌شده علامت‌گذاری شده‌اند همیشه از 00:00 شروع می‌شوند. اگر غیرفعال باشد، در انتها باقی می‌مانند تا پخش خودکار YouTube ادامه یابد.",
        "fileTooLarge": "فایل بیش از حد بزرگ است ({size}MB، حداکثر {limit}MB)",
        "fileTooLargeGist": "فایل برای Gist بیش از حد بزرگ است ({size}MB، حداکثر {limit}MB)",
        "storageUsageVideos": "ویدیوها: {usage}",
        "storageUsageTotal": "مجموع: {usage}",
        "storageUsageAvailable": "در دسترس: {usage}",
        "storageUsageVideosTooltip": "فضای استفاده‌شده توسط ویدیوهای ذخیره‌شده فعلی",
        "storageUsageTotalTooltip": "تمام داده‌های YouTube در IndexedDB (شامل سربار)",
        "storageUsageAvailableTooltip": "کل فضای ذخیره‌سازی IndexedDB موجود در مرورگر",
        "recalculateStorage": "محاسبه مجدد",
        "recalculateStorageTooltip": "محاسبه مجدد میزان استفاده از فضا",
        "openInFreeTube": "باز کردن در FreeTube"
    },

    "he": {
        "resumeCompletedFromStart": "המשך סרטונים שהושלמו מההתחלה",
        "resumeCompletedFromStartTooltip": "אם מופעל, סרטונים המסומנים כהושלמו יתחילו תמיד מ־00:00. אם מושבת, הם יישארו בסוף כדי לאפשר להפעלה האוטומטית של YouTube להמשיך.",
        "fileTooLarge": "הקובץ גדול מדי ({size}MB, מקסימום {limit}MB)",
        "fileTooLargeGist": "הקובץ גדול מדי עבור Gist ({size}MB, מקסימום {limit}MB)",
        "storageUsageVideos": "סרטונים: {usage}",
        "storageUsageTotal": "סה״כ: {usage}",
        "storageUsageAvailable": "זמין: {usage}",
        "storageUsageVideosTooltip": "שטח בשימוש על ידי הסרטונים השמורים כעת",
        "storageUsageTotalTooltip": "כל נתוני YouTube ב-IndexedDB (כולל תקורה)",
        "storageUsageAvailableTooltip": "סה״כ שטח IndexedDB הזמין בדפדפן",
        "recalculateStorage": "חשב מחדש",
        "recalculateStorageTooltip": "חשב מחדש את השימוש באחסון",
        "openInFreeTube": "פתח ב-FreeTube"
    },

    "hi": {
        "resumeCompletedFromStart": "पूर्ण किए गए वीडियो को शुरुआत से फिर शुरू करें",
        "resumeCompletedFromStartTooltip": "यदि सक्षम है, तो पूर्ण के रूप में चिह्नित वीडियो हमेशा 00:00 से शुरू होंगे। यदि अक्षम है, तो वे अंत में रहेंगे ताकि YouTube का ऑटो-प्ले जारी रह सके।",
        "fileTooLarge": "फ़ाइल बहुत बड़ी है ({size}MB, अधिकतम {limit}MB)",
        "fileTooLargeGist": "फ़ाइल Gist के लिए बहुत बड़ी है ({size}MB, अधिकतम {limit}MB)",
        "storageUsageVideos": "वीडियो: {usage}",
        "storageUsageTotal": "कुल: {usage}",
        "storageUsageAvailable": "उपलब्ध: {usage}",
        "storageUsageVideosTooltip": "वर्तमान में सहेजे गए वीडियो द्वारा उपयोग किया गया स्थान",
        "storageUsageTotalTooltip": "IndexedDB में सभी YouTube डेटा (ओवरहेड सहित)",
        "storageUsageAvailableTooltip": "ब्राउज़र में उपलब्ध कुल IndexedDB संग्रहण स्थान",
        "recalculateStorage": "पुनर्गणना करें",
        "recalculateStorageTooltip": "संग्रहण उपयोग की पुनर्गणना करें",
        "openInFreeTube": "FreeTube में खोलें"
    },

    "bn": {
        "resumeCompletedFromStart": "সম্পূর্ণ ভিডিও শুরু থেকে পুনরায় চালান",
        "resumeCompletedFromStartTooltip": "যদি সক্রিয় থাকে, সম্পূর্ণ হিসেবে চিহ্নিত ভিডিও সবসময় 00:00 থেকে শুরু হবে। যদি নিষ্ক্রিয় থাকে, সেগুলি শেষে থাকবে যাতে YouTube-এর স্বয়ংক্রিয় প্লে চালু থাকে।",
        "fileTooLarge": "ফাইলটি খুব বড় ({size}MB, সর্বোচ্চ {limit}MB)",
        "fileTooLargeGist": "Gist-এর জন্য ফাইলটি খুব বড় ({size}MB, সর্বোচ্চ {limit}MB)",
        "storageUsageVideos": "ভিডিও: {usage}",
        "storageUsageTotal": "মোট: {usage}",
        "storageUsageAvailable": "উপলব্ধ: {usage}",
        "storageUsageVideosTooltip": "বর্তমানে সংরক্ষিত ভিডিও দ্বারা ব্যবহৃত স্থান",
        "storageUsageTotalTooltip": "IndexedDB-তে সমস্ত YouTube ডেটা (ওভারহেডসহ)",
        "storageUsageAvailableTooltip": "ব্রাউজারে মোট উপলব্ধ IndexedDB স্টোরেজ",
        "recalculateStorage": "পুনরায় গণনা করুন",
        "recalculateStorageTooltip": "স্টোরেজ ব্যবহারের পুনরায় গণনা করুন",
        "openInFreeTube": "FreeTube-এ খুলুন"
    },

    "te": {
        "resumeCompletedFromStart": "పూర్తి చేసిన వీడియోలను ప్రారంభం నుండి మళ్లీ ప్రారంభించండి",
        "resumeCompletedFromStartTooltip": "సక్రియం చేస్తే, పూర్తయిన వీడియోలు ఎల్లప్పుడూ 00:00 నుండి ప్రారంభమవుతాయి. నిలిపివేస్తే, అవి చివరలో ఉంటాయి తద్వారా YouTube ఆటోప్లే కొనసాగుతుంది.",
        "fileTooLarge": "ఫైల్ చాలా పెద్దది ({size}MB, గరిష్టం {limit}MB)",
        "fileTooLargeGist": "Gist కోసం ఫైల్ చాలా పెద్దది ({size}MB, గరిష్టం {limit}MB)",
        "storageUsageVideos": "వీడియోలు: {usage}",
        "storageUsageTotal": "మొత్తం: {usage}",
        "storageUsageAvailable": "అందుబాటులో: {usage}",
        "storageUsageVideosTooltip": "ప్రస్తుతం సేవ్ చేసిన వీడియోలు ఉపయోగిస్తున్న స్థలం",
        "storageUsageTotalTooltip": "IndexedDBలోని అన్ని YouTube డేటా (ఓవర్‌హెడ్‌తో సహా)",
        "storageUsageAvailableTooltip": "బ్రౌజర్‌లో అందుబాటులో ఉన్న మొత్తం IndexedDB నిల్వ స్థలం",
        "recalculateStorage": "మళ్లీ లెక్కించండి",
        "recalculateStorageTooltip": "నిల్వ వినియోగాన్ని మళ్లీ లెక్కించండి",
        "openInFreeTube": "FreeTubeలో తెరవండి"
    },
    "ta": {
        "resumeCompletedFromStart": "முடிக்கப்பட்ட வீடியோக்களை தொடக்கம் முதல் மீண்டும் தொடங்கு",
        "resumeCompletedFromStartTooltip": "இயக்கப்பட்டிருந்தால், முடிக்கப்பட்டதாக குறிக்கப்பட்ட வீடியோக்கள் எப்போதும் 00:00 முதல் தொடங்கும். முடக்கப்பட்டிருந்தால், அவை இறுதியில் இருக்கும், இதனால் YouTube தானியங்கி இயக்கம் தொடரும்.",
        "fileTooLarge": "கோப்பு மிகவும் பெரியது ({size}MB, அதிகபட்சம் {limit}MB)",
        "fileTooLargeGist": "Gist க்கு கோப்பு மிகவும் பெரியது ({size}MB, அதிகபட்சம் {limit}MB)",
        "storageUsageVideos": "வீடியோக்கள்: {usage}",
        "storageUsageTotal": "மொத்தம்: {usage}",
        "storageUsageAvailable": "கிடைக்கும்: {usage}",
        "storageUsageVideosTooltip": "தற்போது சேமிக்கப்பட்ட வீடியோக்கள் பயன்படுத்தும் இடம்",
        "storageUsageTotalTooltip": "IndexedDB இல் உள்ள அனைத்து YouTube தரவும் (மேலதிக சுமை உட்பட)",
        "storageUsageAvailableTooltip": "உலாவியில் கிடைக்கும் மொத்த IndexedDB சேமிப்பு இடம்",
        "recalculateStorage": "மீண்டும் கணக்கிடு",
        "recalculateStorageTooltip": "சேமிப்பு பயன்பாட்டை மீண்டும் கணக்கிடு",
        "openInFreeTube": "FreeTube இல் திற"
    },

    "mr": {
        "resumeCompletedFromStart": "पूर्ण झालेल्या व्हिडिओंना सुरुवातीपासून पुन्हा सुरू करा",
        "resumeCompletedFromStartTooltip": "सक्रिय असल्यास, पूर्ण म्हणून चिन्हांकित केलेले व्हिडिओ नेहमी 00:00 पासून सुरू होतील. निष्क्रिय असल्यास, ते शेवटी राहतील जेणेकरून YouTube चे ऑटो-प्ले सुरू राहील.",
        "fileTooLarge": "फाइल खूप मोठी आहे ({size}MB, कमाल {limit}MB)",
        "fileTooLargeGist": "Gist साठी फाइल खूप मोठी आहे ({size}MB, कमाल {limit}MB)",
        "storageUsageVideos": "व्हिडिओ: {usage}",
        "storageUsageTotal": "एकूण: {usage}",
        "storageUsageAvailable": "उपलब्ध: {usage}",
        "storageUsageVideosTooltip": "सध्या जतन केलेल्या व्हिडिओंनी वापरलेली जागा",
        "storageUsageTotalTooltip": "IndexedDB मधील सर्व YouTube डेटा (ओव्हरहेडसह)",
        "storageUsageAvailableTooltip": "ब्राउझरमध्ये उपलब्ध एकूण IndexedDB स्टोरेज",
        "recalculateStorage": "पुन्हा मोजा",
        "recalculateStorageTooltip": "स्टोरेज वापर पुन्हा मोजा",
        "openInFreeTube": "FreeTube मध्ये उघडा"
    },

    "zh": {
        "resumeCompletedFromStart": "从头开始重新播放已完成的视频",
        "resumeCompletedFromStartTooltip": "如果启用，标记为已完成的视频将始终从 00:00 开始。如果禁用，它们将停留在末尾，以便 YouTube 的自动播放继续。",
        "fileTooLarge": "文件太大（{size}MB，最大 {limit}MB）",
        "fileTooLargeGist": "文件对于 Gist 来说太大（{size}MB，最大 {limit}MB）",
        "storageUsageVideos": "视频：{usage}",
        "storageUsageTotal": "总计：{usage}",
        "storageUsageAvailable": "可用：{usage}",
        "storageUsageVideosTooltip": "当前保存的视频所使用的空间",
        "storageUsageTotalTooltip": "IndexedDB 中的所有 YouTube 数据（包括开销）",
        "storageUsageAvailableTooltip": "浏览器中可用的 IndexedDB 总存储空间",
        "recalculateStorage": "重新计算",
        "recalculateStorageTooltip": "重新计算存储使用情况",
        "openInFreeTube": "在 FreeTube 中打开"
    },

    "zh-TW": {
        "resumeCompletedFromStart": "從頭開始重新播放已完成的影片",
        "resumeCompletedFromStartTooltip": "如果啟用，標記為已完成的影片將始終從 00:00 開始。如果停用，它們將停留在結尾，以便 YouTube 的自動播放繼續。",
        "fileTooLarge": "檔案太大（{size}MB，最大 {limit}MB）",
        "fileTooLargeGist": "檔案對於 Gist 來說太大（{size}MB，最大 {limit}MB）",
        "storageUsageVideos": "影片：{usage}",
        "storageUsageTotal": "總計：{usage}",
        "storageUsageAvailable": "可用：{usage}",
        "storageUsageVideosTooltip": "目前儲存的影片所使用的空間",
        "storageUsageTotalTooltip": "IndexedDB 中的所有 YouTube 資料（包含額外開銷）",
        "storageUsageAvailableTooltip": "瀏覽器中可用的 IndexedDB 總儲存空間",
        "recalculateStorage": "重新計算",
        "recalculateStorageTooltip": "重新計算儲存使用情況",
        "openInFreeTube": "在 FreeTube 中開啟"
    },

    "yue": {
        "resumeCompletedFromStart": "由頭開始重新播放已完成嘅影片",
        "resumeCompletedFromStartTooltip": "如果啟用，標記為已完成嘅影片會永遠由 00:00 開始。如果停用，佢哋會停留喺結尾，令 YouTube 嘅自動播放繼續。",
        "fileTooLarge": "檔案太大（{size}MB，最大 {limit}MB）",
        "fileTooLargeGist": "檔案對於 Gist 嚟講太大（{size}MB，最大 {limit}MB）",
        "storageUsageVideos": "影片：{usage}",
        "storageUsageTotal": "總計：{usage}",
        "storageUsageAvailable": "可用：{usage}",
        "storageUsageVideosTooltip": "目前儲存嘅影片所使用嘅空間",
        "storageUsageTotalTooltip": "IndexedDB 中所有 YouTube 資料（包括額外開銷）",
        "storageUsageAvailableTooltip": "瀏覽器中可用嘅 IndexedDB 總儲存空間",
        "recalculateStorage": "重新計算",
        "recalculateStorageTooltip": "重新計算儲存使用情況",
        "openInFreeTube": "喺 FreeTube 中開啟"
    },
    "zh-HK": {
        "resumeCompletedFromStart": "由頭開始重新播放已完成的影片",
        "resumeCompletedFromStartTooltip": "如果啟用，標記為已完成的影片將始終從 00:00 開始。如果停用，它們將停留在結尾，以便 YouTube 的自動播放繼續。",
        "fileTooLarge": "檔案太大（{size}MB，最大 {limit}MB）",
        "fileTooLargeGist": "檔案對於 Gist 來說太大（{size}MB，最大 {limit}MB）",
        "storageUsageVideos": "影片：{usage}",
        "storageUsageTotal": "總計：{usage}",
        "storageUsageAvailable": "可用：{usage}",
        "storageUsageVideosTooltip": "目前儲存的影片所使用的空間",
        "storageUsageTotalTooltip": "IndexedDB 中的所有 YouTube 資料（包含額外開銷）",
        "storageUsageAvailableTooltip": "瀏覽器中可用的 IndexedDB 總儲存空間",
        "recalculateStorage": "重新計算",
        "recalculateStorageTooltip": "重新計算儲存使用情況",
        "openInFreeTube": "在 FreeTube 中開啟"
    },

    "ja": {
        "resumeCompletedFromStart": "完了した動画を最初から再開する",
        "resumeCompletedFromStartTooltip": "有効にすると、完了としてマークされた動画は常に 00:00 から再生されます。無効にすると、最後の位置に留まり、YouTube の自動再生が続行されます。",
        "fileTooLarge": "ファイルが大きすぎます（{size}MB、最大 {limit}MB）",
        "fileTooLargeGist": "Gist にはファイルが大きすぎます（{size}MB、最大 {limit}MB）",
        "storageUsageVideos": "動画: {usage}",
        "storageUsageTotal": "合計: {usage}",
        "storageUsageAvailable": "利用可能: {usage}",
        "storageUsageVideosTooltip": "現在保存されている動画が使用している容量",
        "storageUsageTotalTooltip": "IndexedDB 内のすべての YouTube データ（オーバーヘッドを含む）",
        "storageUsageAvailableTooltip": "ブラウザで利用可能な IndexedDB の総容量",
        "recalculateStorage": "再計算",
        "recalculateStorageTooltip": "ストレージ使用量を再計算",
        "openInFreeTube": "FreeTube で開く"
    },

    "ko": {
        "resumeCompletedFromStart": "완료된 동영상을 처음부터 다시 재생",
        "resumeCompletedFromStartTooltip": "활성화하면 완료로 표시된 동영상은 항상 00:00부터 시작합니다. 비활성화하면 끝에 머물러 YouTube 자동 재생이 계속됩니다.",
        "fileTooLarge": "파일이 너무 큽니다 ({size}MB, 최대 {limit}MB)",
        "fileTooLargeGist": "Gist에 비해 파일이 너무 큽니다 ({size}MB, 최대 {limit}MB)",
        "storageUsageVideos": "동영상: {usage}",
        "storageUsageTotal": "전체: {usage}",
        "storageUsageAvailable": "사용 가능: {usage}",
        "storageUsageVideosTooltip": "현재 저장된 동영상이 사용하는 공간",
        "storageUsageTotalTooltip": "IndexedDB의 모든 YouTube 데이터(오버헤드 포함)",
        "storageUsageAvailableTooltip": "브라우저에서 사용 가능한 총 IndexedDB 저장 공간",
        "recalculateStorage": "다시 계산",
        "recalculateStorageTooltip": "저장 공간 사용량 다시 계산",
        "openInFreeTube": "FreeTube에서 열기"
    },

    "th": {
        "resumeCompletedFromStart": "เล่นวิดีโอที่ดูจบแล้วใหม่ตั้งแต่ต้น",
        "resumeCompletedFromStartTooltip": "หากเปิดใช้งาน วิดีโอที่ทำเครื่องหมายว่าเสร็จแล้วจะเริ่มจาก 00:00 เสมอ หากปิดใช้งาน จะคงอยู่ตอนท้ายเพื่อให้การเล่นอัตโนมัติของ YouTube ดำเนินต่อไป",
        "fileTooLarge": "ไฟล์มีขนาดใหญ่เกินไป ({size}MB, สูงสุด {limit}MB)",
        "fileTooLargeGist": "ไฟล์มีขนาดใหญ่เกินไปสำหรับ Gist ({size}MB, สูงสุด {limit}MB)",
        "storageUsageVideos": "วิดีโอ: {usage}",
        "storageUsageTotal": "รวม: {usage}",
        "storageUsageAvailable": "พร้อมใช้งาน: {usage}",
        "storageUsageVideosTooltip": "พื้นที่ที่ใช้โดยวิดีโอที่บันทึกไว้ในปัจจุบัน",
        "storageUsageTotalTooltip": "ข้อมูล YouTube ทั้งหมดใน IndexedDB (รวมโอเวอร์เฮด)",
        "storageUsageAvailableTooltip": "พื้นที่จัดเก็บ IndexedDB ทั้งหมดที่มีในเบราว์เซอร์",
        "recalculateStorage": "คำนวณใหม่",
        "recalculateStorageTooltip": "คำนวณการใช้พื้นที่จัดเก็บใหม่",
        "openInFreeTube": "เปิดใน FreeTube"
    },

    "vi": {
        "resumeCompletedFromStart": "Phát lại video đã hoàn thành từ đầu",
        "resumeCompletedFromStartTooltip": "Nếu bật, các video được đánh dấu là đã hoàn thành sẽ luôn bắt đầu từ 00:00. Nếu tắt, chúng sẽ giữ ở cuối để cho phép tự động phát của YouTube tiếp tục.",
        "fileTooLarge": "Tệp quá lớn ({size}MB, tối đa {limit}MB)",
        "fileTooLargeGist": "Tệp quá lớn cho Gist ({size}MB, tối đa {limit}MB)",
        "storageUsageVideos": "Video: {usage}",
        "storageUsageTotal": "Tổng: {usage}",
        "storageUsageAvailable": "Khả dụng: {usage}",
        "storageUsageVideosTooltip": "Dung lượng được sử dụng bởi các video đã lưu",
        "storageUsageTotalTooltip": "Tất cả dữ liệu YouTube trong IndexedDB (bao gồm overhead)",
        "storageUsageAvailableTooltip": "Tổng dung lượng IndexedDB khả dụng trong trình duyệt",
        "recalculateStorage": "Tính lại",
        "recalculateStorageTooltip": "Tính lại mức sử dụng dung lượng",
        "openInFreeTube": "Mở trong FreeTube"
    },
    "id": {
        "resumeCompletedFromStart": "Lanjutkan video yang telah selesai dari awal",
        "resumeCompletedFromStartTooltip": "Jika diaktifkan, video yang ditandai sebagai selesai akan selalu dimulai dari 00:00. Jika dinonaktifkan, video akan tetap di akhir agar pemutaran otomatis YouTube dapat berlanjut.",
        "fileTooLarge": "File terlalu besar ({size}MB, maks {limit}MB)",
        "fileTooLargeGist": "File terlalu besar untuk Gist ({size}MB, maks {limit}MB)",
        "storageUsageVideos": "Video: {usage}",
        "storageUsageTotal": "Total: {usage}",
        "storageUsageAvailable": "Tersedia: {usage}",
        "storageUsageVideosTooltip": "Ruang yang digunakan oleh video yang tersimpan saat ini",
        "storageUsageTotalTooltip": "Semua data YouTube di IndexedDB (termasuk overhead)",
        "storageUsageAvailableTooltip": "Total ruang penyimpanan IndexedDB yang tersedia di browser",
        "recalculateStorage": "Hitung ulang",
        "recalculateStorageTooltip": "Hitung ulang penggunaan penyimpanan",
        "openInFreeTube": "Buka di FreeTube"
    },

    "ms": {
        "resumeCompletedFromStart": "Sambung semula video yang telah selesai dari awal",
        "resumeCompletedFromStartTooltip": "Jika diaktifkan, video yang ditandakan sebagai selesai akan sentiasa bermula dari 00:00. Jika dilumpuhkan, ia akan kekal di hujung supaya main automatik YouTube dapat diteruskan.",
        "fileTooLarge": "Fail terlalu besar ({size}MB, maks {limit}MB)",
        "fileTooLargeGist": "Fail terlalu besar untuk Gist ({size}MB, maks {limit}MB)",
        "storageUsageVideos": "Video: {usage}",
        "storageUsageTotal": "Jumlah: {usage}",
        "storageUsageAvailable": "Tersedia: {usage}",
        "storageUsageVideosTooltip": "Ruang yang digunakan oleh video yang disimpan",
        "storageUsageTotalTooltip": "Semua data YouTube dalam IndexedDB (termasuk overhed)",
        "storageUsageAvailableTooltip": "Jumlah storan IndexedDB yang tersedia dalam pelayar",
        "recalculateStorage": "Kira semula",
        "recalculateStorageTooltip": "Kira semula penggunaan storan",
        "openInFreeTube": "Buka dalam FreeTube"
    },

    "tl": {
        "resumeCompletedFromStart": "Ipagpatuloy ang natapos na mga video mula sa simula",
        "resumeCompletedFromStartTooltip": "Kapag naka-enable, ang mga video na minarkahang tapos ay palaging magsisimula sa 00:00. Kapag naka-disable, mananatili sila sa dulo upang magpatuloy ang auto-play ng YouTube.",
        "fileTooLarge": "Masyadong malaki ang file ({size}MB, max {limit}MB)",
        "fileTooLargeGist": "Masyadong malaki ang file para sa Gist ({size}MB, max {limit}MB)",
        "storageUsageVideos": "Mga video: {usage}",
        "storageUsageTotal": "Kabuuan: {usage}",
        "storageUsageAvailable": "Available: {usage}",
        "storageUsageVideosTooltip": "Espasyong ginagamit ng kasalukuyang naka-save na mga video",
        "storageUsageTotalTooltip": "Lahat ng data ng YouTube sa IndexedDB (kasama ang overhead)",
        "storageUsageAvailableTooltip": "Kabuuang available na IndexedDB storage sa browser",
        "recalculateStorage": "Muling kalkulahin",
        "recalculateStorageTooltip": "Muling kalkulahin ang paggamit ng storage",
        "openInFreeTube": "Buksan sa FreeTube"
    },

    "my": {
        "resumeCompletedFromStart": "ပြီးဆုံးထားသောဗီဒီယိုများကိုအစမှပြန်စရန်",
        "resumeCompletedFromStartTooltip": "ဖွင့်ထားပါက ပြီးဆုံးဟုမှတ်ထားသောဗီဒီယိုများသည် 00:00 မှစတင်မည်။ ပိတ်ထားပါက YouTube အလိုအလျောက်ပြန်ဖွင့်ခြင်းဆက်လက်လုပ်ဆောင်နိုင်ရန်အဆုံးတွင်ရှိနေမည်။",
        "fileTooLarge": "ဖိုင်အလွန်ကြီးသည် ({size}MB၊ အများဆုံး {limit}MB)",
        "fileTooLargeGist": "Gist အတွက်ဖိုင်အလွန်ကြီးသည် ({size}MB၊ အများဆုံး {limit}MB)",
        "storageUsageVideos": "ဗီဒီယိုများ: {usage}",
        "storageUsageTotal": "စုစုပေါင်း: {usage}",
        "storageUsageAvailable": "အသုံးပြုနိုင်သည်: {usage}",
        "storageUsageVideosTooltip": "လက်ရှိသိမ်းထားသောဗီဒီယိုများအသုံးပြုသည့်နေရာ",
        "storageUsageTotalTooltip": "IndexedDB ရှိ YouTube ဒေတာအားလုံး (overhead ပါဝင်)",
        "storageUsageAvailableTooltip": "ဘရောက်ဇာတွင်ရရှိနိုင်သော IndexedDB သိုလှောင်မှုပမာဏ",
        "recalculateStorage": "ပြန်လည်တွက်ချက်ရန်",
        "recalculateStorageTooltip": "သိုလှောင်မှုအသုံးပြုမှုကိုပြန်လည်တွက်ချက်ရန်",
        "openInFreeTube": "FreeTube တွင်ဖွင့်ရန်"
    },

    "sw": {
        "resumeCompletedFromStart": "Endelea na video zilizokamilika kutoka mwanzo",
        "resumeCompletedFromStartTooltip": "Ikiwashwa, video zilizowekwa kuwa zimekamilika zitaanza kila mara kutoka 00:00. Ikiwa imezimwa, zitabaki mwisho ili kuruhusu uchezaji wa kiotomatiki wa YouTube kuendelea.",
        "fileTooLarge": "Faili ni kubwa sana ({size}MB, max {limit}MB)",
        "fileTooLargeGist": "Faili ni kubwa sana kwa Gist ({size}MB, max {limit}MB)",
        "storageUsageVideos": "Video: {usage}",
        "storageUsageTotal": "Jumla: {usage}",
        "storageUsageAvailable": "Inapatikana: {usage}",
        "storageUsageVideosTooltip": "Nafasi inayotumiwa na video zilizohifadhiwa",
        "storageUsageTotalTooltip": "Data zote za YouTube katika IndexedDB (ikiwemo overhead)",
        "storageUsageAvailableTooltip": "Jumla ya hifadhi ya IndexedDB inayopatikana kwenye kivinjari",
        "recalculateStorage": "Hesabu upya",
        "recalculateStorageTooltip": "Hesabu upya matumizi ya hifadhi",
        "openInFreeTube": "Fungua katika FreeTube"
    },
    "am": {
        "resumeCompletedFromStart": "የተጠናቀቁ ቪዲዮዎችን ከመጀመሪያ ጀምር",
        "resumeCompletedFromStartTooltip": "ከተነቃ ቪዲዮዎች እንደ ተጠናቀቁ የተሰየሙ ሁልጊዜ ከ00:00 ይጀምራሉ። ከተሰናከለ በYouTube ራስ-አጫውት እንዲቀጥል በመጨረሻ ይቆያሉ።",
        "fileTooLarge": "ፋይሉ በጣም ትልቅ ነው ({size}MB, ከፍተኛ {limit}MB)",
        "fileTooLargeGist": "ፋይሉ Gist ለማግኘት በጣም ትልቅ ነው ({size}MB, ከፍተኛ {limit}MB)",
        "storageUsageVideos": "ቪዲዮዎች: {usage}",
        "storageUsageTotal": "ጠቅላላ: {usage}",
        "storageUsageAvailable": "የሚገኝ: {usage}",
        "storageUsageVideosTooltip": "አሁን የተከማቹ ቪዲዮዎች የሚጠቀሙት ቦታ",
        "storageUsageTotalTooltip": "በIndexedDB ውስጥ ያሉ ሁሉም YouTube ውሂብ (overhead ጨምሮ)",
        "storageUsageAvailableTooltip": "በአሳሽ ውስጥ የሚገኝ ጠቅላላ IndexedDB ማከማቻ",
        "recalculateStorage": "እንደገና አስላ",
        "recalculateStorageTooltip": "የማከማቻ አጠቃቀምን እንደገና አስላ",
        "openInFreeTube": "በFreeTube ክፈት"
    },

    "ha": {
        "resumeCompletedFromStart": "Ci gaba da bidiyon da aka kammala daga farko",
        "resumeCompletedFromStartTooltip": "Idan an kunna, bidiyon da aka yi musu alama a matsayin an kammala za su fara daga 00:00. Idan an kashe, za su tsaya a ƙarshe domin YouTube auto-play ya ci gaba.",
        "fileTooLarge": "Fayil ya yi girma sosai ({size}MB, max {limit}MB)",
        "fileTooLargeGist": "Fayil ya yi girma sosai don Gist ({size}MB, max {limit}MB)",
        "storageUsageVideos": "Bidiyo: {usage}",
        "storageUsageTotal": "Jimla: {usage}",
        "storageUsageAvailable": "Akwai: {usage}",
        "storageUsageVideosTooltip": "Wurin da bidiyon da aka ajiye ke amfani da shi",
        "storageUsageTotalTooltip": "Dukkan bayanan YouTube a IndexedDB (ya haɗa da overhead)",
        "storageUsageAvailableTooltip": "Jimlar sararin IndexedDB da ke akwai a burauza",
        "recalculateStorage": "Sake lissafi",
        "recalculateStorageTooltip": "Sake lissafin amfani da ajiya",
        "openInFreeTube": "Buɗe a FreeTube"
    },

    "ur": {
        "resumeCompletedFromStart": "مکمل شدہ ویڈیوز کو شروع سے دوبارہ چلائیں",
        "resumeCompletedFromStartTooltip": "اگر فعال ہو تو مکمل کے طور پر نشان زد ویڈیوز ہمیشہ 00:00 سے شروع ہوں گی۔ اگر غیر فعال ہو تو وہ آخر میں رہیں گی تاکہ YouTube کی آٹو پلے جاری رہ سکے۔",
        "fileTooLarge": "فائل بہت بڑی ہے ({size}MB، زیادہ سے زیادہ {limit}MB)",
        "fileTooLargeGist": "Gist کے لیے فائل بہت بڑی ہے ({size}MB، زیادہ سے زیادہ {limit}MB)",
        "storageUsageVideos": "ویڈیوز: {usage}",
        "storageUsageTotal": "کل: {usage}",
        "storageUsageAvailable": "دستیاب: {usage}",
        "storageUsageVideosTooltip": "اس وقت محفوظ کردہ ویڈیوز کے زیر استعمال جگہ",
        "storageUsageTotalTooltip": "IndexedDB میں تمام YouTube ڈیٹا (overhead سمیت)",
        "storageUsageAvailableTooltip": "براؤزر میں دستیاب کل IndexedDB اسٹوریج",
        "recalculateStorage": "دوبارہ حساب لگائیں",
        "recalculateStorageTooltip": "اسٹوریج کے استعمال کا دوبارہ حساب لگائیں",
        "openInFreeTube": "FreeTube میں کھولیں"
    },

    "zu": {
        "resumeCompletedFromStart": "Qala kabusha amavidiyo aqediwe kusukela ekuqaleni",
        "resumeCompletedFromStartTooltip": "Uma kuvuliwe, amavidiyo amakiwe njengaqediwe azoqala njalo ku-00:00. Uma kuvaliwe, azohlala ekugcineni ukuze ukudlala okuzenzakalelayo kwe-YouTube kuqhubeke.",
        "fileTooLarge": "Ifayela likhulu kakhulu ({size}MB, max {limit}MB)",
        "fileTooLargeGist": "Ifayela likhulu kakhulu ku-Gist ({size}MB, max {limit}MB)",
        "storageUsageVideos": "Amavidiyo: {usage}",
        "storageUsageTotal": "Ingqikithi: {usage}",
        "storageUsageAvailable": "Iyatholakala: {usage}",
        "storageUsageVideosTooltip": "Isikhala esisetshenziswa amavidiyo agciniwe",
        "storageUsageTotalTooltip": "Yonke idatha ye-YouTube ku-IndexedDB (kuhlanganisa i-overhead)",
        "storageUsageAvailableTooltip": "Isikhala esiphelele se-IndexedDB esitholakala ku-browser",
        "recalculateStorage": "Bala kabusha",
        "recalculateStorageTooltip": "Bala kabusha ukusetshenziswa kwesitoreji",
        "openInFreeTube": "Vula ku-FreeTube"
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
