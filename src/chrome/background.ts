
chrome.commands.onCommand.addListener( function ( command ) {

    if ( command === "speedup" ) {
        chrome.storage.sync.get( {
            speed: 0,
        }, function ( items ) {
            chrome.storage.sync.set( {
                speed: items.speed + 1,
            }, function () {
            } );
        } );
    } else if ( command === "speeddown" ) {
        chrome.storage.sync.get( {
            speed: 1,
        }, function ( items ) {
            chrome.storage.sync.set( {
                speed: items.speed - 1,
            }, function () {
            } );
        } );
    }
} );
export { }