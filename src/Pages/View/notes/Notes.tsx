import Grid from "@mui/material/Grid";
import {Stack} from "@mui/material";
import * as React from "react";
import NotesCardLayout from "./NotesCardLayout";

function Notes() {
    //Render
    return(
        <>
            <Grid container>
                <h1 className='titleSection'>Notes:</h1>
            </Grid>
            <Grid item >
                <Stack spacing={5} direction="row" useFlexGap flexWrap="wrap">
                    <NotesCardLayout/>
                    <NotesCardLayout/>
                    <NotesCardLayout/>
                    <NotesCardLayout/>
                    <NotesCardLayout/>
                    <NotesCardLayout/>
                </Stack>
            </Grid>
        </>
    );
}

export default Notes;