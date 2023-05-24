import {Box, Stack} from "@mui/material";
import Grid from "@mui/material/Grid";
import * as React from "react";

import '../../../Components/homepage/InfoBoxSectionCard.css'
import NotesCardLayout from "../notes/NotesCardLayout";

function List() {
    //Render
    return(
        <>
            <Box className='homeBox'>
                <Grid container>
                    <h1 className='titleSection'>Lists:</h1>
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

export default List;