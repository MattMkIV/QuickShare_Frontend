import Grid from "@mui/material/Grid";
import {Box, Stack} from "@mui/material";
import * as React from "react";
import NotesCardLayout from "./NotesCardLayout";
import '../home/Home.css'

function Notes() {
    //Render
    return(
        <>
            <Box className='homeBox'>
                <Grid container>
                    <h1 className='titleSection'>Notes:</h1>
                </Grid>

                <Grid item className='cardSlider'>
                    <Stack spacing={5} direction="row" useFlexGap flexWrap="wrap">
                        <NotesCardLayout></NotesCardLayout>
                        <NotesCardLayout></NotesCardLayout>
                        <NotesCardLayout></NotesCardLayout>
                        <NotesCardLayout></NotesCardLayout>
                        <NotesCardLayout></NotesCardLayout>
                        <NotesCardLayout></NotesCardLayout>
                    </Stack>
                </Grid>
            </Box>
        </>
    );
}

export default Notes;