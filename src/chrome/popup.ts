console.log( "This is a popup!" );
chrome.tabs.query( {
    active: true,
    lastFocusedWindow: true
}, function ( tabs ) {
    // and use that tab to fill in out title and url
    let tab = tabs[0];
    console.log( tab.url );
    alert( tab.url );
} );

export { }