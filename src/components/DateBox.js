import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TimeItem from "./TimeItem";
import {ListItem} from "@mui/material";
import React from "react";

const columnContainer = {
    display: 'flex',
    flexDirection: 'column',
    padding: 0
};

const DateBox = ({dateAndTime}) => {
    const timeList = dateAndTime.time.map((t, index) => <TimeItem key={index}>{t}</TimeItem>);

    return (
        <ListItem sx={{minWidth: 300}} style={columnContainer}>
            <Box>
                <Typography variant="h7"
                            sx={{p: 2}}>{dateAndTime.date}</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        maxWidth: 300,
                        borderRadius: 1,
                    }}
                >
                    {timeList}
                </Box>
            </Box>
        </ListItem>
    );
}

export default DateBox;