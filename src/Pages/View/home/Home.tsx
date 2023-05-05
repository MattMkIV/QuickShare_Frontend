import * as React from 'react';

import './Home.css'
import Grid from "@mui/material/Grid";
import {Stack} from "@mui/material";
import Cards from "../../../Components/homepage/Card";

function Home() {
    //Render
    return (
        <>
            <Grid container>
                <h1 className='titleSection'>Most Recent:</h1>
            </Grid>
            <Grid className='cardSlider'>
                <Stack direction="row" spacing={5}>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                </Stack>
            </Grid>

            <hr className='lineCentralContent'></hr>

            <Grid container>
                <h1 className='titleSection'>Lists:</h1>
            </Grid>
            <Grid className='cardSlider'>
                <Stack direction="row" spacing={5}>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                </Stack>
            </Grid>

            <hr className='lineCentralContent'></hr>

            <Grid container>
                <h1 className='titleSection'>Notes:</h1>
            </Grid>
            <Grid className='cardSlider'>
                <Stack direction="row" spacing={5}>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                </Stack>
            </Grid>
        </>
    );
}

export default Home;