function addLocationObserver (callback) {
    const config = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver(callback);
    observer.observe(document.body, config);
}

function observerCallback () {
    if (window.location.href.startsWith("http://xy.ai-augmented.com/")) {
        initContentScript();
    }
}

function initContentScript () {
    try {
        chrome.storage.sync.get({
            speed: 1,
        }, function (items) {
            document.body.querySelector('.prism-player > video').playbackRate = items.speed;
        });
    } catch (exceptionVar) {
        return;
    }
}

addLocationObserver(observerCallback);
observerCallback();
