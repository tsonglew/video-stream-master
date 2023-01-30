
// Saves options to chrome.storage
function save_options() {
    let channels = ( document.getElementById( 'channels' ) as HTMLInputElement ).value;
    chrome.storage.sync.set( {
        doublePlaySpeedChannels: channels,
    }, function () {
        // Update status to let user know options were saved.
        let status = document.getElementById( 'status' ) as HTMLSpanElement;
        status.textContent = 'Options saved.';
        setTimeout( function () {
            status.textContent = '';
        }, 750 );
    } );
}

function restore_options() {
    chrome.storage.sync.get( {
        doublePlaySpeedChannels: '',
    }, function ( items ) {
        ( document.getElementById( 'channels' ) as HTMLInputElement ).value = items.doublePlaySpeedChannels;
    } );
}
document.addEventListener( 'DOMContentLoaded', restore_options );
( document.getElementById( 'save' ) as HTMLButtonElement ).addEventListener( 'click',
    save_options );

export { }