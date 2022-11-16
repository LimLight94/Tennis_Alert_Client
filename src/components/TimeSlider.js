import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}:00`;
}

export default function TimeSlider() {
    const [value, setValue] = React.useState([10, 14]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };

    return (
        <Box sx={{}}>
            <Slider
                sx={{top: "50%"}}
                getAriaLabel={() => 'Temperature range'}
                value={value}
                marks
                max={23}
                onChange={(e, v) => {
                    handleChange(e, v)
                }}
                valueLabelDisplay="on"
                getAriaValueText={valuetext}
            />
        </Box>
    );
}