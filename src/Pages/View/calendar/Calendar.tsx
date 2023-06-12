import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

function Calendar() {
    //const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date().getFullYear()+'-'+(new Date().getMonth()+1+'-'+new Date().getDate())));
    //<LocalizationProvider dateAdapter={AdapterDayjs}>
    //                         <StaticDatePicker
    //                             orientation="landscape"
    //                             openTo="day"
    //                             value={value}
    //                             onChange={(newValue) => {
    //                                 setValue(newValue);
    //                             }}
    //                             sx={{backgroundColor : '#775652', width : '50%', borderRadius : '22px'}}
    //                         />
    //                     </LocalizationProvider>



    //Render
    return (
        <>
            <Box className='homeBox'>
                <Grid container>
                    <h1 className='titleSection'>Calendar:</h1>
                </Grid>

                <hr className='lineCentralContent'></hr>

                <Box sx={{width: '100%', height : '100%'}}>

                </Box>
            </Box>
        </>
    );
}

export default Calendar;