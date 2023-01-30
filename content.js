function addLocationObserver (callback) {
    const config = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver(callback);
    observer.observe(document.getElementsByClassName("video-stream html5-main-video"), config);
}

function observerCallback () {
    if (window.location.href.startsWith("https://www.youtube.com")) {
        initContentScript();
    }
}

function initContentScript () {
    let currentChannel = "";
    try {
        currentChannel = document.getElementById("channel-name").querySelector("#text > yt-attributed-string > span > a").text;
        chrome.storage.sync.get({
            doublePlaySpeedChannels: '',
        }, function (items) {
            items.doublePlaySpeedChannels.split(",").forEach(function (channel) {
                let playspeed = 1;
                if (currentChannel === channel) {
                    playspeed = 2;
                }
                document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate = playspeed;
                console.log("set playback speed to " + playspeed);
            });
        });
    } catch (exceptionVar) {
        return;
    }
}

addLocationObserver(observerCallback);
observerCallback();
