// ==UserScript==
// @name            YouTube Helper API
// @author          ElectroKnight22
// @namespace       electroknight22_helper_api_namespace
// @version         0.9.4
// @license         MIT
// @description     A helper api for YouTube scripts that provides easy and consistent access for commonly needed functions, objects, and values.
// ==/UserScript==

/*jshint esversion: 11 */

'use strict';

// eslint-disable-next-line no-unused-vars
const youtubeHelperApi = (function () {
    // --- DEBUG SYSTEM ---
    const debug = {
        enabled: false,
        _level: 1,
        debugBadgeText: 'YT-Helper-API-Debug',

        set level(val) {
            const map = { minimal: 0, typical: 1, detailed: 2, all: 3, overkill: 4 };

            let targetLevel = val;
            if (typeof val === 'string' && val.toLowerCase() in map) {
                targetLevel = map[val.toLowerCase()];
            }

            if (typeof targetLevel === 'number' && Object.values(map).includes(targetLevel)) {
                this._level = targetLevel;
            } else {
                console.warn(
                    `[${this.debugBadgeText}] Invalid level "${val}". Please use 0-4 or: minimal, typical, detailed, all, overkill.`,
                );
            }
        },

        get level() {
            return this._level;
        },

        get logMinimal() {
            return this.enabled && this._level >= 0
                ? console.log.bind(window.console, `%c[${this.debugBadgeText}][Minimal]`, 'color: #28a745; font-weight: bold;')
                : () => {};
        },
        get logTypical() {
            return this.enabled && this._level >= 1
                ? console.log.bind(window.console, `%c[${this.debugBadgeText}][Typical]`, 'color: #007bff; font-weight: bold;')
                : () => {};
        },
        get logDetailed() {
            return this.enabled && this._level >= 2
                ? console.log.bind(window.console, `%c[${this.debugBadgeText}][Detailed]`, 'color: #17a2b8; font-weight: bold;')
                : () => {};
        },
        get logAll() {
            return this.enabled && this._level >= 3
                ? console.log.bind(window.console, `%c[${this.debugBadgeText}][All]`, 'color: #6c757d; font-weight: bold;')
                : () => {};
        },
        get logOverkill() {
            return this.enabled && this._level >= 4
                ? console.log.bind(window.console, `%c[${this.debugBadgeText}][All]`, 'color: #ce00a8ff; font-weight: bold;')
                : () => {};
        },
    };
    // --- END DEBUG SYSTEM ---

    // --- GM API SHIM ---
    const gmCapabilities = {
        isModern: false,
        isLegacy: false,
        features: {},
    };

    (function performGmShim() {
        const KNOWN_GM_GLOBALS = [
            'setValue',
            'getValue',
            'deleteValue',
            'listValues',
            'getResourceText',
            'getResourceURL',
            'addStyle',
            'addElement',
            'registerMenuCommand',
            'unregisterMenuCommand',
            'openInTab',
            'notification',
            'setClipboard',
            'contextMenu',
            'xmlhttpRequest',
            'download',
            'webRequest',
            'cookie',
            'saveTab',
            'getTab',
            'getTabs',
            'log',
            'info',
            'print',
        ];

        const realGM = typeof GM !== 'undefined' ? GM : {};
        const isModernEnv = typeof GM !== 'undefined';

        const checkFeature = (name) => {
            const legacyName = `GM_${name}`;
            const legacyExists = typeof window[legacyName] !== 'undefined';
            const modernExists = isModernEnv && name in realGM;

            return legacyExists || modernExists;
        };

        gmCapabilities.isModern = isModernEnv;

        gmCapabilities.features = {
            storage: checkFeature('setValue'),
            menu: checkFeature('registerMenuCommand'),
            network: checkFeature('xmlhttpRequest') || (isModernEnv && 'xmlHttpRequest' in realGM),
            clipboard: checkFeature('setClipboard'),
            tabs: checkFeature('openInTab'),
            ui: checkFeature('addStyle'),
        };

        const GMFallbackAsync = async (...args) => {
            debug.logAll('GM.* (Async) call shimmed:', args);
            return undefined;
        };
        const GMFallbackSync = (...args) => {
            debug.logAll('GM_* (Sync) call shimmed:', args);
            return undefined;
        };

        const gmProxyHandler = {
            get: (target, prop, receiver) => {
                if (Reflect.has(target, prop)) return Reflect.get(target, prop, receiver);
                if (prop === 'info') return { script: { version: '0.0.0' }, scriptHandler: 'Shim', version: '0.0.0' };
                return GMFallbackAsync;
            },
        };

        try {
            window.GM = new Proxy(realGM, gmProxyHandler);
        } catch (error) {
            console.warn('[YouTube Helper API] Failed to patch window.GM', error);
        }

        KNOWN_GM_GLOBALS.forEach((name) => {
            const key = `GM_${name}`;
            if (typeof window[key] !== 'undefined') {
                gmCapabilities.isLegacy = true;
            } else {
                window[key] = name === 'info' ? { script: { version: '0.0.0' }, scriptHandler: 'Shim' } : GMFallbackSync;
            }
        });
    })();
    // --- GM API SHIM END ---

    const privateEventTarget = new EventTarget();

    const SELECTORS = {
        pageManager: 'ytd-page-manager',
        shortsPlayer: '#shorts-player',
        watchPlayer: '#movie_player',
        inlinePlayer: '.inline-preview-player',
        videoElement: 'video',
        watchFlexy: 'ytd-watch-flexy',
        chatFrame: 'ytd-live-chat-frame#chat',
        chatContainer: '#chat-container',
    };

    const POSSIBLE_RESOLUTIONS = Object.freeze({
        highres: { p: 4320, label: '8K' },
        hd2160: { p: 2160, label: '4K' },
        hd1440: { p: 1440, label: '1440p' },
        hd1080: { p: 1080, label: '1080p' },
        hd720: { p: 720, label: '720p' },
        large: { p: 480, label: '480p' },
        medium: { p: 360, label: '360p' },
        small: { p: 240, label: '240p' },
        tiny: { p: 144, label: '144p' },
    });


/**
 * A Proxy object that provides a safe interface to interact with the YouTube player API.
 * It handles method calls, checks for API readiness, and provides warnings for undefined methods.
 * 
 * @example
 * // Example usage:
 * apiProxy.playVideo(); // Calls the underlying YouTube player's playVideo method
 * apiProxy.pauseVideo(); // Calls pauseVideo if available
 * 
 * // Returns undefined and logs a warning if the API isn't ready
 * const currentTime = apiProxy.getCurrentTime();
 * 
 * @type {Proxy<Object, {get: function(target: Object, property: string): function(...*): *}>}
 * @property {function(): number} getCurrentTime - Returns the current playback time in seconds
 * @property {function(number): void} seekTo - Seeks to a specified time in the video
 * @property {function(): void} playVideo - Starts or resumes playback
 * @property {function(): void} pauseVideo - Pauses the video
 * @property {function(): Object} getPlayerResponse - Returns the player response object
 * @property {function(): string} getVideoUrl - Returns the URL of the current video
 * @property {function(): string} getVideoData - Returns video data including video ID and title
 * @property {function(): boolean} isMuted - Returns true if the video is muted
 * @property {function(boolean): void} mute - Mutes or unmutes the video
 * @property {function(number): void} setVolume - Sets the volume (0-100)
 * @property {function(): number} getVolume - Gets the current volume (0-100)
 * @property {function(string, number, string): void} loadVideoById - Loads a video by its ID
 * @property {function(): string} getPlaylistId - Returns the current playlist ID if any
 * @property {function(): number} getVideoLoadedFraction - Returns the fraction of the video that has been buffered (0-1)
 * @property {function(): string} getPlaybackQuality - Returns the current playback quality
 * @property {function(string): void} setPlaybackQuality - Sets the playback quality
 * @property {function(): string[]} getAvailableQualityLevels - Returns available quality levels
 */
const apiProxy = new Proxy(
    {},
    {
        get(target, property) {
            return (...args) => {
                if (!appState.player.api) {
                    console.warn(`YouTube player API not ready.`);
                    return;
                }
                if (typeof appState.player.api[property] === 'function') {
                    return appState.player.api[property](...args);
                } else {
                    console.warn(`Method "${property}" does not exist on the YouTube player API.`);
                }
            };
        },
    },
);














   /*  const apiProxy = new Proxy(
        {},
        {
            get(target, property) {
                return (...args) => {
                    if (!appState.player.api) return console.warn(`YouTube player API not ready.`);
                    if (typeof appState.player.api[property] === 'function') {
                        return appState.player.api[property](...args);
                    } else {
                        console.warn(`Method "${property}" does not exist on the YouTube player API.`);
                    }
                };
            },
        },
    ); */

    const _readOnlyHandler = {
        get(target, property) {
            return target[property];
        },
        set(target, property) {
            console.warn(`[YouTube Helper API] Tried to set "${property}" on a read-only object.`);
            return false;
        },
    };

    const appState = {
        player: {
            playerObject: null,
            response: null,
            api: null,
            videoElement: null,
            isFullscreen: false,
            isTheater: false,
            isPlayingAds: false,
        },
        video: {
            id: '',
            title: '',
            channel: '',
            channelId: '',
            rawDescription: '',
            rawUploadDate: '',
            rawPublishDate: '',
            uploadDate: null,
            publishDate: null,
            lengthSeconds: 0,
            viewCount: 0,
            likeCount: 0,
            isCurrentlyLive: false,
            isLiveOrVodContent: false,
            isFamilySafe: false,
            thumbnails: [],
            playingLanguage: null,
            originalLanguage: null,
            isAutoDubbed: false,
            realCurrentProgress: 0,
            isTimeSpecified: false,
            isInPlaylist: false,
            playlistId: '',
        },
        chat: {
            container: null,
            iFrame: null,
            isCollapsed: false,
        },
        page: null, // Will be populated by the IIFE below
    };

    appState.page = (() => {
        const _fallbackGetPageType = () => {
            const pathname = window.location.pathname;
            if (pathname.startsWith('/shorts')) return 'shorts';
            if (pathname.startsWith('/watch')) return 'watch';
            if (pathname.startsWith('/playlist')) return 'playlist';
            if (pathname.startsWith('/results')) return 'search';
            if (pathname === '/') return 'browse';
            return 'unknown';
        };

        let _type = 'unknown';
        return {
            get manager() {
                return document.querySelector(SELECTORS.pageManager);
            },
            get watchFlexy() {
                return document.querySelector(SELECTORS.watchFlexy);
            },
            isIframe: window.top !== window.self,
            isMobile: window.location.hostname === 'm.youtube.com',
            set type(newValue) {
                _type = newValue;
            },
            get type() {
                if (_type === 'unknown' || _type == null) return _fallbackGetPageType();
                return _type;
            },
        };
    })();

    const readOnlyPlayer = new Proxy(appState.player, _readOnlyHandler);
    const readOnlyVideo = new Proxy(appState.video, _readOnlyHandler);
    const readOnlyChat = new Proxy(appState.chat, _readOnlyHandler);
    const readOnlyPage = new Proxy(appState.page, _readOnlyHandler);

    const localStorageApi = {
        get: (key, defaultValue) => {
            const value = localStorage.getItem(key);
            if (value === null) return defaultValue;
            try {
                return JSON.parse(value);
            } catch (error) {
                console.error(`Error parsing JSON for key "${key}":`, error);
                return value;
            }
        },
        set: (key, value) => {
            localStorage.setItem(key, JSON.stringify(value));
        },
    };

    const storageApi = (() => {
        const STORAGE_IMPLEMENTATIONS = {
            modern: {
                getValue: async (...args) => await GM.getValue(...args),
                setValue: async (...args) => await GM.setValue(...args),
                deleteValue: async (...args) => await GM.deleteValue(...args),
                listValues: async (...args) => await GM.listValues(...args),
            },
            old: {
                getValue: async (key, defaultValue) => GM_getValue(key, defaultValue),
                setValue: async (key, value) => GM_setValue(key, value),
                deleteValue: async (key) => GM_deleteValue(key),
                listValues: async () => GM_listValues(),
            },
            none: {
                getValue: async (key, defaultValue) => localStorageApi.get(key, defaultValue),
                setValue: async (key, value) => localStorageApi.set(key, value),
                deleteValue: async (key) => localStorage.removeItem(key),
                listValues: async () => Object.keys(localStorage),
            },
        };
        const gmStorageType = (() => {
            if (!gmCapabilities.features.storage) {
                return 'none';
            }
            if (gmCapabilities.isModern) {
                return 'modern';
            }
            if (gmCapabilities.isLegacy) {
                return 'old';
            }
            return 'none';
        })();
        return {
            ...STORAGE_IMPLEMENTATIONS[gmStorageType],
            gmType: gmStorageType,
        };
    })();

    async function _getSyncedStorageData(storageKey) {
        if (storageApi.gmType === 'none') return await storageApi.getValue(storageKey, null);
        const [gmData, localData] = await Promise.all([storageApi.getValue(storageKey, null), localStorageApi.get(storageKey, null)]);
        const gmTimestamp = gmData?.metadata?.timestamp ?? -1;
        const localTimestamp = localData?.metadata?.timestamp ?? -1;

        if (gmTimestamp > localTimestamp) {
            localStorageApi.set(storageKey, gmData);
            return gmData;
        } else if (localTimestamp > gmTimestamp) {
            await storageApi.setValue(storageKey, localData);
            return localData;
        }

        return gmData || localData;
    }

    async function saveToStorage(storageKey, data) {
        debug.logDetailed(`Saving to storage: ${storageKey}`);
        const dataToStore = {
            data: data,
            metadata: {
                timestamp: Date.now(),
            },
        };
        try {
            if (storageApi.gmType !== 'none') await storageApi.setValue(storageKey, dataToStore);
            localStorageApi.set(storageKey, dataToStore);
        } catch (error) {
            console.error(`Error saving data for key "${storageKey}":`, error);
        }
    }

    async function loadFromStorage(storageKey, defaultData) {
        debug.logDetailed(`Loading from storage: ${storageKey}`);
        try {
            const syncedWrapper = await _getSyncedStorageData(storageKey);
            const storedData = syncedWrapper && !syncedWrapper.metadata ? syncedWrapper : syncedWrapper?.data ?? {};
            return { ...defaultData, ...storedData };
        } catch (error) {
            console.error(`Error loading data for key "${storageKey}":`, error);
            return defaultData;
        }
    }

    async function loadAndCleanFromStorage(storageKey, defaultData) {
        debug.logDetailed(`Loading and cleaning storage: ${storageKey}`);
        try {
            const combinedData = await loadFromStorage(storageKey, defaultData);
            const cleanedData = Object.keys(defaultData).reduce((accumulator, currentKey) => {
                accumulator[currentKey] = combinedData[currentKey];
                return accumulator;
            }, {});
            return cleanedData;
        } catch (error) {
            console.error(`Error loading and cleaning data for key "${storageKey}":`, error);
            return defaultData;
        }
    }

    async function deleteFromStorage(storageKey) {
        debug.logDetailed(`Deleting from storage: ${storageKey}`);
        try {
            if (storageApi.gmType !== 'none') await storageApi.deleteValue(storageKey);
            localStorage.removeItem(storageKey);
        } catch (error) {
            console.error(`Error deleting data for key "${storageKey}":`, error);
        }
    }

    async function listFromStorage() {
        try {
            const [greasemonkeyKeys, localStorageKeys] = await Promise.all([
                storageApi.gmType !== 'none' ? storageApi.listValues() : Promise.resolve([]),
                Promise.resolve(Object.keys(localStorage)),
            ]);
            const allUniqueKeys = new Set([...greasemonkeyKeys, ...localStorageKeys]);
            return Array.from(allUniqueKeys);
        } catch (error) {
            console.error('Error listing storage values:', error);
            return [];
        }
    }

    function fallbackGetPlayerApi() {
        debug.logAll('Fallback Player API Check');
        if (appState.page.isIframe || appState.page.isMobile) return document.querySelector(SELECTORS.watchPlayer);
        if (window.location.pathname.startsWith('/shorts')) return document.querySelector(SELECTORS.shortsPlayer);
        if (window.location.pathname.startsWith('/watch')) return document.querySelector(SELECTORS.watchPlayer);
        return document.querySelector(SELECTORS.inlinePlayer);
    }

    function getPlayerResponseWhenReady() {
        return new Promise((resolve, reject) => {
            function check() {
                if (!appState?.player?.api) return resolve(null);
                const playerResponse = apiProxy.getPlayerResponse();
                if (playerResponse) return resolve(playerResponse);
                debug.logTypical('Player API ready, but missing playerResponse. Waiting for metadata...');
                appState.player.videoElement.addEventListener('loadedmetadata', check, { once: true });
            }
            check();
        });
    }

    function getOptimalResolution(targetResolutionString, usePremium = true) {
        try {
            if (!targetResolutionString || !POSSIBLE_RESOLUTIONS[targetResolutionString])
                throw new Error(`Invalid target resolution: ${targetResolutionString}`);
            const videoQualityData = apiProxy.getAvailableQualityData();
            const availableQualities = [...new Set(videoQualityData.map((q) => q.quality))];
            const targetValue = POSSIBLE_RESOLUTIONS[targetResolutionString].p;
            const bestQualityString = availableQualities
                .filter((q) => POSSIBLE_RESOLUTIONS[q] && POSSIBLE_RESOLUTIONS[q].p <= targetValue)
                .sort((a, b) => POSSIBLE_RESOLUTIONS[b].p - POSSIBLE_RESOLUTIONS[a].p)[0];
            if (!bestQualityString) return null;
            let normalCandidate = null;
            let premiumCandidate = null;
            for (const quality of videoQualityData) {
                if (quality.quality === bestQualityString && quality.isPlayable) {
                    if (usePremium && quality.paygatedQualityDetails) premiumCandidate = quality;
                    else normalCandidate = quality;
                }
            }
            return premiumCandidate || normalCandidate;
        } catch (error) {
            console.error('Error when resolving optimal quality:', error);
            return null;
        }
    }

    function setPlaybackResolution(targetResolution, ignoreAvailable = false, usePremium = true) {
        debug.logTypical(`Attempting to set resolution: ${targetResolution} (Premium: ${usePremium}, Force: ${ignoreAvailable})`);
        try {
            if (!appState.player.api?.getAvailableQualityData) return;
            if (!usePremium && ignoreAvailable) {
                apiProxy.setPlaybackQualityRange(targetResolution);
            } else {
                const optimalQuality = getOptimalResolution(targetResolution, usePremium);
                if (optimalQuality) {
                    debug.logDetailed('Found optimal quality format:', optimalQuality);
                    apiProxy.setPlaybackQualityRange(
                        optimalQuality.quality,
                        optimalQuality.quality,
                        usePremium ? optimalQuality.formatId : null,
                    );
                } else {
                    debug.logTypical('Could not find a matching quality for:', targetResolution);
                }
            }
        } catch (error) {
            console.error('Error when setting resolution:', error);
        }
    }

    function _dispatchHelperApiReadyEvent() {
        if (!appState.player.api) return;
        const eventDetail = { ...publicApi };
        const stateSnapshot = {
            player: { ...appState.player },
            video: { ...appState.video },
            chat: { ...appState.chat },
            page: { ...appState.page },
        };

        Object.assign(eventDetail, stateSnapshot);

        if (!eventDetail.video.id) return console.warn('Video ID not found in state snapshot.');

        debug.logMinimal(`Video Ready. Title: "${stateSnapshot.video.title}". Id: "${stateSnapshot.video.id}"`);
        debug.logDetailed('Dispatching Ready Event with state:', stateSnapshot);

        const event = new CustomEvent('yt-helper-api-ready', {
            detail: Object.freeze(eventDetail),
        });

        privateEventTarget.dispatchEvent(event);
    }

    function _notifyAdDetected() {
        debug.logDetailed(`Ad State Change: Is Playing Ad? ${appState.player.isPlayingAds}`);
        if (appState.player.isPlayingAds) {
            debug.logTypical('Ad detected!');
            privateEventTarget.dispatchEvent(
                new CustomEvent('yt-helper-api-ad-detected', {
                    detail: Object.freeze({ isPlayingAds: appState.player.isPlayingAds }),
                }),
            );
        }
    }

    function checkIsIframe() {
        if (appState.page.isIframe) privateEventTarget.dispatchEvent(new Event('yt-helper-api-detected-iframe'));
    }

    async function updatePlayerState(event) {
        appState.player.api = event?.target?.player_ ?? fallbackGetPlayerApi();
        appState.player.playerObject = event?.target?.playerContainer_?.children[0] ?? fallbackGetPlayerApi();
        appState.player.videoElement = appState.player.playerObject?.querySelector(SELECTORS.videoElement);
        appState.player.response = await getPlayerResponseWhenReady();
        debug.logDetailed('Player state updated', appState.player);
    }

    function updateVideoLanguage() {
        if (!appState.player.api) return;

        const availableTracks = apiProxy.getAvailableAudioTracks() ?? [];
        const playingAudioTrack = apiProxy.getAudioTrack();

        const getTrackDetails = (track) => Object.values(track ?? {});
        const originalAudioTrack = availableTracks?.find((track) => {
            if (!track || typeof track !== 'object') return false;
            const values = getTrackDetails(track);
            const hasMetadata = values.some((val) => val && typeof val === 'object' && 'isAutoDubbed' in val);
            const hasTrueFlag = values.some((val) => val === true);
            return hasMetadata && hasTrueFlag;
        });

        const isAutoDubbed = getTrackDetails(playingAudioTrack).some((val) => val?.isAutoDubbed === true);

        if (appState.video.playingLanguage === playingAudioTrack) return;
        const isInit =
            (appState.video.playingLanguage === null && `${playingAudioTrack}` !== 'Default') ||
            `${appState.video.playingLanguage}` === 'Default';

        debug.logTypical(`Language updated: ${playingAudioTrack} (Auto-Dubbed: ${isAutoDubbed})`);

        appState.video.playingLanguage = playingAudioTrack;
        appState.video.originalLanguage = originalAudioTrack;
        appState.video.isAutoDubbed = isAutoDubbed;

        privateEventTarget.dispatchEvent(
            new CustomEvent('yt-helper-api-playback-language-updated', {
                detail: Object.freeze({
                    isInit,
                    playingLanguage: appState.video.playingLanguage,
                    originalLanguage: appState.video.originalLanguage,
                    isAutoDubbed: appState.video.isAutoDubbed,
                }),
            }),
        );
    }

    function updateVideoState() {
        if (!appState.player.api) return;
        const playerResponseObject = appState.player.response;
        const searchParams = new URL(window.location.href).searchParams;
        appState.video.id = playerResponseObject?.videoDetails?.videoId;
        appState.video.title = playerResponseObject?.videoDetails?.title;
        appState.video.channel = playerResponseObject?.videoDetails?.author;
        appState.video.channelId = playerResponseObject?.videoDetails?.channelId;
        appState.video.rawDescription = playerResponseObject?.videoDetails?.shortDescription;
        appState.video.rawUploadDate = playerResponseObject?.microformat?.playerMicroformatRenderer?.uploadDate;
        appState.video.rawPublishDate = playerResponseObject?.microformat?.playerMicroformatRenderer?.publishDate;
        appState.video.uploadDate = appState.video.rawUploadDate ? new Date(appState.video.rawUploadDate) : null;
        appState.video.publishDate = appState.video.rawPublishDate ? new Date(appState.video.rawPublishDate) : null;
        appState.video.lengthSeconds = parseInt(playerResponseObject?.videoDetails?.lengthSeconds ?? '0', 10);
        appState.video.viewCount = parseInt(playerResponseObject?.videoDetails?.viewCount ?? '0', 10);
        appState.video.likeCount = parseInt(playerResponseObject?.microformat?.playerMicroformatRenderer?.likeCount ?? '0', 10);
        appState.video.isCurrentlyLive = apiProxy.getVideoData().isLive;
        appState.video.isLiveOrVodContent = playerResponseObject?.videoDetails?.isLiveContent;
        appState.video.wasStreamedOrPremiered = !!playerResponseObject?.microformat?.playerMicroformatRenderer?.liveBroadcastDetails;
        appState.video.isFamilySafe = playerResponseObject?.microformat?.playerMicroformatRenderer?.isFamilySafe;
        appState.video.thumbnails =
            playerResponseObject?.microformat?.playerMicroformatRenderer?.thumbnail?.thumbnails ??
            playerResponseObject?.videoDetails?.thumbnail?.thumbnails;
        appState.video.realCurrentProgress = apiProxy.getCurrentTime();
        appState.video.isTimeSpecified = searchParams.has('t');
        appState.video.playlistId = apiProxy.getPlaylistId();

        debug.logDetailed('Video state updated', appState.video);
    }

    function updateFullscreenState() {
        appState.player.isFullscreen = !!document.fullscreenElement;
        debug.logDetailed(`Fullscreen: ${appState.player.isFullscreen}`);
    }

    function updateTheaterState(event) {
        appState.player.isTheater = !!event?.detail?.enabled;
        debug.logDetailed(`Theater Mode: ${appState.player.isTheater}`);
    }

    function updateChatStateUpdated(event) {
        appState.chat.iFrame = event?.target ?? document.querySelector(SELECTORS.chatFrame);
        appState.chat.container = appState.chat.iFrame?.parentElement ?? document.querySelector(SELECTORS.chatContainer);
        appState.chat.isCollapsed = event?.detail ?? true;
        debug.logDetailed('Chat state updated', appState.chat);
        privateEventTarget.dispatchEvent(
            new CustomEvent('yt-helper-api-chat-state-updated', { detail: Object.freeze({ ...appState.chat }) }),
        );
    }

    function updateAdState() {
        if (!appState.player.playerObject) return;
        try {
            const shouldAvoid = appState.player.playerObject.classList.contains('unstarted-mode');
            const isAdPresent =
                appState.player.playerObject.classList.contains('ad-showing') ||
                appState.player.playerObject.classList.contains('ad-interrupting');
            const isPlayingAds = !shouldAvoid && isAdPresent;
            appState.player.isPlayingAds = isPlayingAds;
            _notifyAdDetected();
        } catch (error) {
            console.error('Error in checkAdState:', error);
            return false;
        }
    }

    function fallbackUpdateAdState() {
        if (!appState.player.api) return;
        try {
            debug.logAll('Fallback Ad State Check');
            const progressState = apiProxy.getProgressState();
            const reportedContentDuration = progressState.duration;
            const realContentDuration = apiProxy.getDuration() ?? -1;
            const durationMismatch = Math.trunc(realContentDuration) !== Math.trunc(reportedContentDuration);
            const isPlayingAds = durationMismatch;
            appState.player.isPlayingAds = isPlayingAds;
            _notifyAdDetected();
        } catch (error) {
            console.error('Error during ad check:', error);
            return false;
        }
    }

    function reloadVideo(targetTime) {
        if (!appState.player.api) return;
        debug.logTypical(`Reloading video to ${targetTime}s`);
        apiProxy.loadVideoById(appState.video.id, targetTime);
        appState.player.videoElement = appState.player.playerObject?.querySelector(SELECTORS.videoElement);
        trackPlaybackProgress();
    }

    function reloadToCurrentProgress() {
        debug.logDetailed(`Reloading video to current progress`);
        reloadVideo(appState.video.realCurrentProgress);
    }

    const timeUpdateTrackedElements = new WeakMap();
    function trackPlaybackProgress() {
        if (timeUpdateTrackedElements.has(appState.player.videoElement)) return;
        if (!appState.player.videoElement) return;
        const updateProgress = () => {
            debug.logOverkill(`TimeUpdate: ${appState.player.videoElement.currentTime}`);
            if (!appState.player.isPlayingAds && appState.player.videoElement.currentTime > 0) {
                appState.video.realCurrentProgress = appState.player.videoElement.currentTime;
            }
            updateVideoLanguage();
        };
        appState.player.videoElement.addEventListener('timeupdate', updateProgress);
        timeUpdateTrackedElements.set(appState.player.videoElement, true);
    }

    const currentlyObservedContainers = new WeakMap();
    function trackAdState() {
        if (!appState.player.playerObject) return;
        if (currentlyObservedContainers.has(appState.player.playerObject)) return;
        const adStateObserver = new MutationObserver(updateAdState);
        adStateObserver.observe(appState.player.playerObject, { attributes: true, attributeFilter: ['class'] });
        currentlyObservedContainers.set(appState.player.playerObject, adStateObserver);
    }

    let updateLocked = false;
    async function _handlePlayerUpdate(event = null) {
        if (updateLocked) return;
        debug.logAll('Player update triggered. Unlocking...');
        updateLocked = true;
        debug.logDetailed('Player update triggered by:', event?.type || 'manual call');
        try {
            const customEvent = new CustomEvent('yt-helper-api-update-started');
            privateEventTarget.dispatchEvent(customEvent);
            await updatePlayerState(event);
            updateAdState();
            trackAdState();
            updateVideoState();
            updateVideoLanguage();
            trackPlaybackProgress();
            queueMicrotask(_dispatchHelperApiReadyEvent);
        } catch (error) {
            console.error('Error in _handlePlayerUpdate:', error);
        } finally {
            debug.logAll('Player update complete. Locking...');
            updateLocked = false;
        }
    }

    function _handlePageDataUpdate(event) {
        appState.page.type = event.detail?.pageType;
        debug.logDetailed('Page data updated', appState.page);
    }

    function _handlePageTypeChange(event) {
        appState.page.type = event.detail?.newPageSubtype;
        debug.logDetailed('Page type changed', appState.page);
    }

    function _handlePageshowEvent() {
        debug.logDetailed('Pageshow event triggered');
        const shouldTryEarly =
            window.location.pathname.startsWith('/watch') ||
            window.location.pathname.startsWith('/embed') ||
            window.location.pathname.startsWith('/shorts');
        if (shouldTryEarly) {
            debug.logDetailed('Trying early player update...');
            _handlePlayerUpdate();
        }
    }

    function addPageStateListeners() {
        document.addEventListener('yt-page-data-updated', _handlePageDataUpdate);
        document.addEventListener('yt-page-type-changed', _handlePageTypeChange);
    }

    function addPlayerStateListeners() {
        const PLAYER_UPDATE_EVENT = appState.page.isMobile ? 'video-data-change' : 'yt-player-updated';
        document.addEventListener(PLAYER_UPDATE_EVENT, _handlePlayerUpdate);
        document.addEventListener('fullscreenchange', updateFullscreenState);
        document.addEventListener('yt-set-theater-mode-enabled', updateTheaterState);
    }

    function addChatStateListeners() {
        document.addEventListener('yt-chat-collapsed-changed', updateChatStateUpdated);
    }

    function initialize() {
        debug.logMinimal('Library Initialized. Waiting for player...');
        window.addEventListener('pageshow', _handlePageshowEvent);
        checkIsIframe();
        if (!appState.page.isIframe) {
            addPlayerStateListeners();
            addPageStateListeners();
            addChatStateListeners();
        }
    }

    initialize();

    const publicApi = {
        get player() {
            return readOnlyPlayer;
        },
        get video() {
            return readOnlyVideo;
        },
        get chat() {
            return readOnlyChat;
        },
        get page() {
            return readOnlyPage;
        },
        POSSIBLE_RESOLUTIONS,
        updateAdState,
        fallbackUpdateAdState,
        getOptimalResolution,
        setPlaybackResolution,
        saveToStorage,
        loadFromStorage,
        loadAndCleanFromStorage,
        deleteFromStorage,
        listFromStorage,
        reloadVideo,
        reloadToCurrentProgress,
        gmCapabilities,
        apiProxy,
        debug,
        eventTarget: privateEventTarget,
    };

    return publicApi;
})();