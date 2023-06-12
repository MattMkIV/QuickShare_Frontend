import Grid from "@mui/material/Grid";
import {Box, Stack, Typography} from "@mui/material";
import * as React from "react";
import '../home/Home.css'
import './Notes.css'
import CardLayout from '../../../Components/homepage/CardLayout'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkJwt } from "../../../Utils/AuthService";
import { TakeNote } from "../../../Utils/note_service";
import CardLayout from '../../../Components/homepage/NoteCardLayout'

function Notes() {

    let jwtError = false;
    let navigate = useNavigate();
    const [note, setNote] = useState([]);

    useEffect(() => {
        const check = async () => {
            jwtError = await checkJwt();
            if(jwtError) navigate("/");
        }

        const takePhotos = async () => {
            let response:any = await TakeNote();
            setNote(response);
        }   

        check();
        takePhotos();
    }, []);

    //Render
    return(
        <>
            <Box className='homeBox'>
                <Grid container>
                    <h1 className='titleSection'>Notes:</h1>
                </Grid>

                <Grid wrap='nowrap' sx={{display : 'flex', alignItems : 'center', justifyContent : 'flex-start'}}>
                    <Typography sx={{fontFamily : 'Roboto Bold', fontSize : '12px', color : '#dfc38c', marginRight : '10px', marginLeft : '25px'}}>20/01/2023</Typography>
                    <hr className='dateLineCentralContent'></hr>
                </Grid>

                <Grid item className='cardSliderHomePage'>
                    <Stack spacing={5} direction="row">
                        <CardLayout></CardLayout>
                        <CardLayout></CardLayout>
                        <CardLayout></CardLayout>
                        <CardLayout></CardLayout>
                        <CardLayout></CardLayout>
                        <CardLayout></CardLayout>
                    </Stack>
                </Grid>

                <Grid wrap='nowrap' sx={{display : 'flex', alignItems : 'center', justifyContent : 'flex-start'}}>
                    <Typography sx={{fontFamily : 'Roboto Bold', fontSize : '12px', color : '#dfc38c', marginRight : '10px', marginLeft : '25px'}}>20/01/2023</Typography>
                    <hr className='dateLineCentralContent'></hr>
                </Grid>


                <Grid item className='cardSliderHomePage'>
                    <Stack spacing={5} direction="row">
                        <CardLayout></CardLayout>
                        <CardLayout></CardLayout>
                        <CardLayout></CardLayout>
                        <CardLayout></CardLayout>
                        <CardLayout></CardLayout>
                        <CardLayout></CardLayout>
                    </Stack>
                </Grid>
            </Box>
        </>
    );
}

export default Notes;