import { Button } from '@mui/material';
import { useState } from 'react';
import InputSlider from './InputSlider';
import Stack from '@mui/material/Stack';
import StackItem from './StackItem';
import '../index.css';



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
        <Button variant="contained" onClick={onClick}>Save</Button>
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
        } );
    }

    return (
        <Stack spacing={2} >
            <StackItem>
                <InputSlider value={speed} setValue={setSpeed} />
            </StackItem>
            <StackItem>
                <SaveBtn onClick={onSave} />
            </StackItem>
        </Stack>
    );
}


export default SpeedInput;