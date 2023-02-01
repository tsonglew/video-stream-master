import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';

const Input = styled( MuiInput )`
  width: 42px;
`;

export default function InputSlider( { value, setValue }: { value: number, setValue: Function } ) {

    const handleSliderChange = ( event: Event, newValue: number | number[] ) => {
        setValue( newValue );
    };

    const handleInputChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setValue( event.target.value === '' ? '' : Number( event.target.value ) );
    };

    const handleBlur = () => {
        setValue( Math.min( Math.max( 0, value ), 10 ) )
    };

    return (
        <Box sx={{ width: 250 }}>
            <Typography id="input-slider" gutterBottom>
                Playback Rate
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        min={0}
                        step={1}
                        max={10}
                    />
                </Grid>
                <Grid item>
                    <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 1,
                            min: 0,
                            max: 10,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}