import * as React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import TimeSlider from "./TimeSlider";
import {Dialog, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

const TennisAppBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>테니스 코트 알리미
                    </Typography>
                    <IconButton
                        size="large"
                        color="inherit"
                        onClick={() => {
                            setOpen(true);
                        }}
                    >
                        <SettingsIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Dialog
                // sx={{width:"80%", height:"50%"}}
                open={open}
                onClose={() => {
                    setOpen(false);
                }}
            >
                <DialogTitle>알림 시간 설정</DialogTitle>
                <DialogContent>
                    <TimeSlider/>
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default TennisAppBar;