import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {createTheme} from "@mui/material";
import {red} from "@mui/material/colors";

function Calendar() {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date().getFullYear()+'-'+(new Date().getMonth()+1+'-'+new Date().getDate())));



    //Render
    return (
        <>
            <Box className='homeBox'>
                <Grid container>
                    <h1 className='titleSection'>Calendar:</h1>
                </Grid>

                <hr className='lineCentralContent'></hr>

                <Box sx={{width: '100%', height : '100%', backgroundColor:'darkolivegreen'}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            formatDensity="spacious"
                            slotProps={{ textField: {  size: 'small',  } }}
                            label="DateTimePicker"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}

                        />
                    </LocalizationProvider>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <StaticDatePicker
                            orientation="landscape"
                            openTo="day"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            sx={{backgroundColor : '#775652', width : '50%', borderRadius : '22px'}}
                        />
                    </LocalizationProvider>
                </Box>
            </Box>
        </>
    );
}

export default Calendar;