import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import * as React from 'react';
import dayjs, {Dayjs} from 'dayjs';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {StaticDatePicker} from '@mui/x-date-pickers/StaticDatePicker';
import {useMediaQuery} from "@mui/material";
import CalendarEvent from '../../../Components/homepage/CalendarEvent'

function Calendar() {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date().getFullYear() + '-' + (new Date().getMonth() + 1 + '-' + new Date().getDate())));
    const isXsScreen = useMediaQuery('(max-width: 600px)');
    const isLgScreen = useMediaQuery('(max-width: 1200px)');

    //Render
    return (
        <>
            <Box sx={{
                backgroundColor: '#292221',
                borderRadius: '22px',
                width: '100%',
                height: '107%'
            }}>
                <Grid container>
                    <h1 className='titleSection'>Calendar:</h1>
                </Grid>

                <hr className='lineCentralContent'></hr>

                <Grid container sx={{width: '100%', display: 'flex'}}>
                    <Grid lg={6} md={12} xs={12} sx={{
                        marginTop: '20px'
                    }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <StaticDatePicker
                                orientation="landscape"
                                openTo="day"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                sx={{
                                    height: '300px',
                                    borderRadius: '22px',
                                    marginLeft: '25px',
                                    backgroundColor: '#c4c4c4',
                                    boxShadow: 8,
                                    marginRight: isLgScreen ? '25px' : isXsScreen ? '25px' : '0',
                                }}
                            />
                        </LocalizationProvider>
                    </Grid>

                    <Grid lg={6} md={12} xs={12} sx={{
                        marginTop: '20px',
                        width: '100%',
                    }}>
                        <Box sx={{
                            pt: 1.5,
                            pl: 2,
                            pr: 2,
                            height: '300px',
                            backgroundColor: '#534341',
                            borderRadius: '22px',
                            marginRight: '25px',
                            marginLeft: isLgScreen ? '25px' : isXsScreen ? '25px' : '15px',
                            boxShadow: 8,
                            overflowY: 'auto',
                        }}>
                            <CalendarEvent/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Calendar;