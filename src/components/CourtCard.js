import React from "react";
import {Button, Card, CardActions, CardHeader} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LaunchIcon from "@mui/icons-material/Launch";
import List from "@mui/material/List";
import DateBox from "./DateBox";

const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    maxWidth: '100%',
    overflow: 'auto'
};

const CourtCard = ({court}) => {
    const DateBoxList = (dateAndTime) => {
        return dateAndTime.map(t=><DateBox key={t._id} dateAndTime={t}/>);
    }
    return (
        <Card sx={{p: 2, minWidth: 275}}>
            <CardHeader
                action={
                    <IconButton aria-label="settings"
                                onClick={() => window.open(court.orgLink, '_blank')}>
                        <LaunchIcon/>
                    </IconButton>
                }
                title={court.name}
            />
            <List style={flexContainer}>
                {DateBoxList(court.dateAndTime)}
            </List>
            <CardActions>
                <Button
                    size="small"
                    onClick={() => window.open(court.orgLink, '_blank')}
                >More</Button>
            </CardActions>
        </Card>
    );
}

export default CourtCard;