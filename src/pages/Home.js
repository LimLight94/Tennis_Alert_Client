import React, {useEffect, useState} from 'react';
import CourtCard from "../components/CourtCard";
import {Stack} from "@mui/material";
import axios from "axios";
import Typography from "@mui/material/Typography";

const Home = () => {
    const [courts, setCourts] = useState([]);

    useEffect(() => {
        axios.get('http://ec2-43-201-83-250.ap-northeast-2.compute.amazonaws.com:3000/courts').then(result => {
            setCourts(result.data);
        })
    }, []);

    const renderCards = (courts) => {
        if(!courts || courts.length===0){
            return <Typography variant="h5">{"코트 정보가 없습니다."}</Typography>
        } else{
            return courts.map(court=>(
                <CourtCard key={court._id} court={court}/>
            ))
        }
    }
    return (
        <div>
            <Stack m={2} pt={3} spacing={2}>
                {renderCards(courts)}
            </Stack>
        </div>
    );
};

export default Home;