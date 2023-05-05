import * as React from 'react';
import Card from '@mui/material/Card';

import './Home.css'
import Grid from "@mui/material/Grid";
import {Box, CardContent, Stack, Typography} from "@mui/material";
import classes from "*.module.css";
import Cards from "../../../Components/homepage/Card";

function Home() {
    //Render
    return(
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