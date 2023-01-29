function addLocationObserver (callback) {

    // Options for the observer (which mutations to observe)
    const config = { attributes: false, childList: true, subtree: true };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(document.body, config);
}

function observerCallback () {
    if (window.location.href.startsWith("https://www.youtube.com")) {
        initContentScript();
    }
}

function initContentScript () {
    console.log("This is a content script!");
    let currentChannel = document.getElementById("channel-name").querySelector("#text > yt-attributed-string > span > a").text;
    chrome.storage.sync.get({
        doublePlaySpeedChannels: '',
    }, function (items) {
        items.doublePlaySpeedChannels.split(",").forEach(function (channel) {
            try {
                if (currentChannel === channel) {
                    document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate = 2;
                } else {
                    document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate = 1;
                }
            } catch (exceptionVar) {
            } finally {
            }
        });
    });
}

addLocationObserver(observerCallback);
observerCallback();
