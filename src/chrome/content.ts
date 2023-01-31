let videoList: HTMLVideoElement[] = [];

function addLocationObserver() {
    const config = { attributes: true, childList: true, subtree: true };

    new MutationObserver( () => {
        const currentVideoList = document.getElementsByTagName( "video" ) as HTMLCollection;
        for ( let i = 0; i < currentVideoList.length; i++ ) {
            const video = currentVideoList[i] as HTMLVideoElement;
            if ( videoList.includes( video, 0 ) ) {
                continue;
            }

            videoList.push( video );
            new MutationObserver( () => updateVideosPlaySpeed( video ) ).observe( video, config );
        }
    } ).observe( document.body, config )
}

function updateVideosPlaySpeed( video: HTMLVideoElement ) {
    try {
        console.log( "video changed: " + video );
        chrome.storage.sync.get( {
            speed: 1,
        }, function ( items ) {
            if ( video.playbackRate === items.speed ) {
                return;
            }
            video.playbackRate = items.speed;
        } );
    } catch ( exceptionVar ) {
        return;
    }
}

function updateAllVideosPlaySpeed() {
    try {
        chrome.storage.sync.get( {
            speed: 1,
        }, function ( items ) {
            const currentVideoList = document.getElementsByTagName( "video" ) as HTMLCollection;
            for ( let i = 0; i < currentVideoList.length; i++ ) {
                const video = currentVideoList[i] as HTMLVideoElement;
                video.playbackRate = items.speed
            }
        } );
    } catch ( exceptionVar ) {
        return;
    }
}

chrome.storage.onChanged.addListener( updateAllVideosPlaySpeed );
updateAllVideosPlaySpeed();
addLocationObserver();
export { }