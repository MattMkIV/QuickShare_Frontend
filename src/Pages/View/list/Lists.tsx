import {Stack} from "@mui/material";
import Grid from "@mui/material/Grid";
import * as React from "react";

import '../../../Components/homepage/InfoBoxSectionCard.css'
import ListsCardLayout from "./ListsCardLayout";

function List() {
    //Render
    return(
        <>
            <Grid container>
                <h1 className='titleSection'>Lists:</h1>
            </Grid>
            <Grid item >
                <Stack spacing={5} direction="row" useFlexGap flexWrap="wrap">
                    <ListsCardLayout/>
                    <ListsCardLayout/>
                    <ListsCardLayout/>
                    <ListsCardLayout/>
                    <ListsCardLayout/>
                </Stack>
            </Grid>
        </>
    );
}

export default List;