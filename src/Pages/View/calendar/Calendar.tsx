import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import * as React from 'react';
import {useEffect, useState} from 'react';
import dayjs, {Dayjs} from 'dayjs';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {StaticDatePicker} from '@mui/x-date-pickers/StaticDatePicker';
import {List, Typography, useMediaQuery} from "@mui/material";
import CalendarEvent from "../../../Components/homepage/CalendarEvent";
import {TakeEvent} from "../../../Utils/calendar_service";
import {checkJwt} from "../../../Utils/AuthService";
import {useNavigate} from "react-router-dom";

function Calendar() {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date().getFullYear() + '-' + (new Date().getMonth() + 1 + '-' + new Date().getDate())));
    const [eventi, setEventi] = useState<any>([]);
    let jwtError = false;
    const navigate = useNavigate();
    const isXsScreen = useMediaQuery('(max-width: 600px)');
    const isLgScreen = useMediaQuery('(max-width: 1200px)');

    const takeCurrentDate = () => {
        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    useEffect(() => {
        const check = async () => {
            jwtError = await checkJwt();
            if (jwtError) navigate("/");
        }

        const TakeEvents = async () => {

            let day: any;
            day = localStorage.getItem("DaySelected");

            if (day === null)
                day = takeCurrentDate();

            let response: any = await TakeEvent(day);

            setEventi(response);
        }

        check();
        TakeEvents();

    }, []);

    const handleDayChange = async (newValue: any) => {

        localStorage.removeItem("DaySelected");
        let date = new Date(newValue);
        let formattedDate = date.toLocaleString();
        let dateArray = formattedDate.split(",")[0].split("/");
        let finalData;

        if (parseInt(dateArray[1]) < 10)
            finalData = `${dateArray[2]}-0${dateArray[1]}-${dateArray[0]}`;
        else
            finalData = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;

        localStorage.setItem("DaySelected", finalData);
        window.location.reload();
    }

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
                                    handleDayChange(newValue);
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

                            <Typography sx={{
                                fontFamily: 'Roboto Regular',
                                fontSize: '27px',
                                color: '#f5ddda'
                            }}>Events:</Typography>

                            <List sx={{width: '100%'}}>
                                {eventi.length === 0 ? <Typography sx={{
                                    fontFamily: 'Roboto Bold',
                                    fontSize: '35px',
                                    color: '#f5ddda',
                                    marginTop: '20px'
                                }}>No Events</Typography> : (
                                    eventi.map((evento: any, index: any) => (
                                        <CalendarEvent key={index} value={evento} index={index}/>
                                    ))
                                )}
                            </List>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Calendar;