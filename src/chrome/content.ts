
// import { ChromeMessage, Sender } from "../types";

function addLocationObserver( callback: any ) {
    const config = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver( callback );
    observer.observe( document.body, config );
}

function observerCallback() {
    if ( window.location.href.startsWith( "https://www.youtube.com" ) ) {
        initContentScript();
    }
}

function initContentScript() {
    let currentChannel = "";
    try {
        ( document.getElementsByClassName( "video-stream html5-main-video" )[0] as HTMLVideoElement ).playbackRate = 2;
        // currentChannel = ( document?.getElementById( "channel-name" )?.querySelector( "#text > yt-attributed-string > span > a" ) as HTMLAnchorElement )?.text;
        // chrome.storage.sync.get( {
        //     doublePlaySpeedChannels: '',
        // }, function ( items ) {
        //     items.doublePlaySpeedChannels.split( "," ).forEach( function ( channel: any ) {
        //         let playspeed = 1;
        //         if ( currentChannel === channel ) {
        //             playspeed = 2;
        //         }
        //         ( document.getElementsByClassName( "video-stream html5-main-video" )[0] as HTMLVideoElement ).playbackRate = playspeed;
        //         console.log( "set playback speed to " + playspeed );
        //     } );
        // } );
    } catch ( exceptionVar ) {
        return;
    }
}

addLocationObserver( observerCallback );
observerCallback();

console.log( 'run' )

export { }