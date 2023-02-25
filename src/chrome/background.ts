import { MIN, MAX, STEP } from '../consts';

chrome.commands.onCommand.addListener( function ( command ) {

    if ( command === "speedup" ) {
        chrome.storage.sync.get( {
            speed: 0,
        }, function ( items ) {
            const newSpeed = items.speed + STEP;
            chrome.storage.sync.set( {
                speed: newSpeed  > MAX ? MAX : newSpeed,
            }, function () {
            } );
        } );
    } else if ( command === "speeddown" ) {
        chrome.storage.sync.get( {
            speed: 1,
        }, function ( items ) {
            const newSpeed = items.speed - STEP;
            chrome.storage.sync.set( {
                speed: newSpeed  < MIN ? MIN : newSpeed,
            }, function () {
            } );
        } );
    }
} );
export { }