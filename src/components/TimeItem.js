import Box from "@mui/material/Box";
import React from "react";

const TimeItem = (props) => {
    const {sx, ...time} = props;

    return (
        <Box
            sx={{
                width: 100,
                p: 1, m: 1,
                textAlign: "center",
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
            }}
            {...time}
        />
    );
}
export default TimeItem;