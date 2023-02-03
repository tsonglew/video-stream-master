
chrome.commands.onCommand.addListener( function ( command ) {

    if ( command === "speedup" ) {
        chrome.storage.sync.get( {
            speed: 0,
        }, function ( items ) {
            const newSpeed = items.speed + 1;
            chrome.storage.sync.set( {
                speed: newSpeed  > 10 ? 10 : newSpeed,
            }, function () {
            } );
        } );
    } else if ( command === "speeddown" ) {
        chrome.storage.sync.get( {
            speed: 1,
        }, function ( items ) {
            const newSpeed = items.speed - 1;
            chrome.storage.sync.set( {
                speed: newSpeed  < 0 ? 0 : newSpeed,
            }, function () {
            } );
        } );
    }
} );
export { }