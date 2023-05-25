import * as React from 'react';
import './Home.css'
import Grid from "@mui/material/Grid";
import {Box, Stack} from "@mui/material";
import CardLayout from '../../../Components/homepage/CardLayout'

function Home() {
    //Render
    return (
        <>
            <Box className='homeBox'>
                <Grid container>
                    <h1 className='titleSection'>Most Recent:</h1>
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

export default Home;