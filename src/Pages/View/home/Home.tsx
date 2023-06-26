import * as React from 'react';
import './Home.css'
import Grid from "@mui/material/Grid";
import {Box, Stack} from "@mui/material";
import CardLayout from '../../../Components/homepage/NoteCardLayout'
import ListCardLayout from '../../../Components/homepage/ListsCardLayout'
import NoteCardLayoutGuest from '../../../Components/homepage/NoteCardLayoutGuest'
import ListCardLayoutGuest from '../../../Components/homepage/ListsCardLayoutGuest'

function Home() {
    //Render
    return (
        <>
            <Box className='homeBox'>
                <Grid container>
                    <h1 className='titleSection'>Most Recent:</h1>
                </Grid>

                <Grid className='cardSliderHomePage'>
                    <Stack spacing={5} direction="row">
                        <NoteCardLayoutGuest></NoteCardLayoutGuest>
                        <ListCardLayoutGuest></ListCardLayoutGuest>
                        <CardLayout></CardLayout>
                        <CardLayout></CardLayout>
                        <ListCardLayout></ListCardLayout>
                        <CardLayout></CardLayout>
                        <CardLayout></CardLayout>
                    </Stack>
                </Grid>

                <hr className='lineCentralContent'></hr>

                <Grid container>
                    <h1 className='titleSection'>Notes:</h1>
                </Grid>

                <Grid className='cardSliderHomePage'>
                    <Stack direction="row" spacing={5}>
                        <CardLayout></CardLayout>
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

                <Grid className='cardSliderHomePage'>
                    <Stack direction="row" spacing={5}>
                        <ListCardLayout></ListCardLayout>
                        <ListCardLayout></ListCardLayout>
                        <ListCardLayout></ListCardLayout>
                        <ListCardLayout></ListCardLayout>
                        <ListCardLayout></ListCardLayout>
                        <ListCardLayout></ListCardLayout>
                        <ListCardLayout></ListCardLayout>
                    </Stack>
                </Grid>
            </Box>
        </>
    );
}

export default Home;