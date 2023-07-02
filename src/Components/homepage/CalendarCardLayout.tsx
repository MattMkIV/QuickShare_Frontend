import {TextField} from "@mui/material";
import Card from "@mui/material/Card";
import * as React from "react";
import {useState} from "react";
import './NoteCardLayout.css'
import Grid from "@mui/material/Grid";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

interface Props {
    value: any,
    index: any,
    date: any,
}

const CalendarCardLayout = ({index, value, date}: Props) => {
    const [prova, setProva] = useState(dayjs(date));
    return (
        <>
            <Card className='calendarLayout'>
                <TextField
                    type='text'
                    inputProps={{
                        sx: {color: '#442926 !important'}
                    }}
                    sx={{
                        '& fieldset': {border: 'none'},
                        '& .MuiInputBase-input': {
                            fontFamily: 'Roboto Black',
                            fontSize: '27px !important',
                            height: '10px',
                            width: '240px',
                        },
                    }}
                    value={value}
                    name='eventTitle'>
                </TextField>

                <hr className='littleSeparationLine'></hr>

                <Grid sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '65px'
                }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            format="YYYY/MM/DD"
                            views={['year', 'month', 'day']}
                            formatDensity="spacious"
                            slotProps={{textField: {size: 'small',}}}
                            value={prova}
                            disabled
                            sx={{
                                width: '235px',
                                height: '40px',
                                boxShadow: 3,
                                borderRadius: '5px !important',
                                backgroundColor: '#a08c8a',
                                '& .MuiInput-underline': {
                                    borderBottomColor: 'transparent',
                                },
                                '& .MuiFormLabel-root': {
                                    color: '#3f2e04',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#3f2e04',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#3f2e04',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#3f2e04',
                                        borderWidth: '2px',
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    borderRadius: '18px',
                                    fontFamily: 'Roboto Regular',
                                    fontSize: '16px !important',
                                },
                            }}
                        />
                    </LocalizationProvider>
                </Grid>
            </Card>
        </>
    );
}

export default CalendarCardLayout;