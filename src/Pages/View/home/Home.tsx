import * as React from 'react';

import './Home.css'
import Grid from "@mui/material/Grid";
import {Stack} from "@mui/material";
import CardLayout from "../../../Components/homepage/CardLayout";
import ChatCard from "../../../Components/homepage/ChatCard";
import PhotoCard from "../../../Components/homepage/PhotoCard";

function Home() {
    //Render
    return (
        <>
            <Grid container>
                <h1 className='titleSection'>Most Recent:</h1>
            </Grid>
            {/*Componente che genera le cards "Most Recent"*/}
            <Grid item className='cardSlider'>
                <Stack direction="row" spacing={5}>
                    <CardLayout></CardLayout>
                    <CardLayout></CardLayout>
                    <CardLayout></CardLayout>
                    <CardLayout></CardLayout>
                    <CardLayout></CardLayout>
                </Stack>
            </Grid>

            <hr className='lineCentralContent'></hr>

            <Grid container>
                <h1 className='titleSection'>Lists:</h1>
            </Grid>
            {/*Componente che genera le cards "List"*/}
            <Grid className='cardSlider'>
                <Stack direction="row" spacing={5}>
                    <CardLayout></CardLayout>
                    <CardLayout></CardLayout>
                    <CardLayout></CardLayout>
                    <CardLayout></CardLayout>
                    <CardLayout></CardLayout>
                </Stack>
            </Grid>

            <hr className='lineCentralContent'></hr>

            <Grid container>
                <h1 className='titleSection'>Chats:</h1>
            </Grid>
            {/*Componente che genera le cards "Chat"*/}
            <Grid className='cardSlider'>
                <Stack direction="row" spacing={5}>
                    <ChatCard></ChatCard>
                    <ChatCard></ChatCard>
                    <ChatCard></ChatCard>
                    <ChatCard></ChatCard>
                    <ChatCard></ChatCard>
                </Stack>
            </Grid>


            <hr className='lineCentralContent'></hr>

            <Grid container>
                <h1 className='titleSection'>Notes:</h1>
            </Grid>
            {/*Componente che genera le cards "Notes"*/}
            <Grid className='cardSlider'>
                <Stack direction="row" spacing={5}>
                    <CardLayout></CardLayout>
                    <CardLayout></CardLayout>
                    <CardLayout></CardLayout>
                    <CardLayout></CardLayout>
                    <CardLayout></CardLayout>
                </Stack>
            </Grid>

            <hr className='lineCentralContent'></hr>

            <Grid container>
                <h1 className='titleSection'>Photos:</h1>
            </Grid>

            <Grid className='cardSlider'>
                <Stack direction='row' spacing={5}>
                    <PhotoCard></PhotoCard>
                    <PhotoCard></PhotoCard>
                    <PhotoCard></PhotoCard>
                    <PhotoCard></PhotoCard>
                    <PhotoCard></PhotoCard>
                    <PhotoCard></PhotoCard>
                    <PhotoCard></PhotoCard>
                </Stack>
            </Grid>
        </>
    );
}

export default Home;