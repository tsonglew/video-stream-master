import { on } from 'events';
import { useState } from 'react';

function SpeedInputArea( { speed, setSpeed }: { speed: number, setSpeed: Function } ) {
    return (
        <input type="text" id="channels" name="fname" value={speed} onChange={e => {
            setSpeed( Math.max( Number( e.target.value ), 0 ) );
            console.log( "set speed: " + e.target.value );
        }} />
    )
}

function SaveBtn( { onClick }: { onClick: () => void } ) {
    return (
        <button id="save" onClick={onClick}>Save</button>
    )
}

function Status( { text }: { text: string } ) {
    return (
        <div id="status">{text}</div>
    )
}

function SpeedInput() {

    const [speed, setSpeed] = useState( -1 );
    const [status, setStatus] = useState( '' );

    if ( speed < 0 ) {
        chrome.storage.sync.get( {
            speed: 1,
        }, function ( items ) {
            console.log( "speed input set speed: " + items.speed )
            setSpeed( items.speed );
        } );
    }

    function onSave() {
        console.log( 'save ' + speed )
        chrome.storage.sync.set( {
            speed: speed,
        }, function () {
            console.log( 'Options saved.' + speed )
            setStatus( 'Options saved.' );
            setTimeout( function () {
                setStatus( '' );
            }, 750 );
        } );
    }

    return (
        <div>
            <label> speed: </label>
            <SpeedInputArea speed={speed} setSpeed={setSpeed} />
            <Status text={status} />
            <SaveBtn onClick={onSave} />
        </div >
    );
}


export default SpeedInput;