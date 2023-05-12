import * as React from 'react';

import './Home.css'
import Grid from "@mui/material/Grid";
import {Stack} from "@mui/material";
import CardLayout from "../../../Components/homepage/CardLayout";

function Home() {
    //Render
    return (
        <>
            <Grid container>
                <h1 className='titleSection'>Most Recent:</h1>
            </Grid>

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
                <h1 className='titleSection'>Notes:</h1>
            </Grid>

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
                <h1 className='titleSection'>Lists:</h1>
            </Grid>

            <Grid className='cardSlider'>
                <Stack direction="row" spacing={5}>
                    <CardLayout></CardLayout>
                    <CardLayout></CardLayout>
                    <CardLayout></CardLayout>
                    <CardLayout></CardLayout>
                    <CardLayout></CardLayout>
                </Stack>
            </Grid>
        </>
    );
}

export default Home;