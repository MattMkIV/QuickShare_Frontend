import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import * as React from "react";

function Calendar() {


    //Render
    return (
        <>
            <Box className='homeBox'>
                <Grid container>
                    <h1 className='titleSection'>Calendar:</h1>
                </Grid>

                <hr className='lineCentralContent'></hr>

                <Box sx={{width: '100%'}}>
                </Box>
            </Box>
        </>
    );
}

export default Calendar;