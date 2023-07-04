import Grid from "@mui/material/Grid";
import {Box, Divider, Stack, Typography} from "@mui/material";
import * as React from "react";
import {useEffect, useState} from "react";
import '../home/Home.css'
import {useNavigate} from "react-router-dom";
import {checkJwt} from "../../../Utils/AuthService";
import {TakeNote} from "../../../Utils/note_service";
import CardLayoutGuest from '../../../Components/homepage/NoteCardLayoutGuest';

function NotesGuest() {

    let jwtError = false;
    let navigate = useNavigate();
    const [notes, setNotes] = useState<any>([]);

    useEffect(() => {
        const check = async () => {
            jwtError = await checkJwt();
            if (jwtError) navigate("/");
        }

        const takeNotes = async () => {
            let response: any = await TakeNote();

            let allNotes = [];
            let currentDate = [];
            let previusDate = "0000-00-00";

            for (let i = 0; i < response.length; i++) {
                if (previusDate === response[i].create_date) {
                    currentDate.push(response[i]);
                    previusDate = response[i].create_date;
                } else {
                    if (i !== 0)
                        allNotes.push(currentDate);

                    currentDate = [];
                    currentDate.push(response[i]);
                    previusDate = response[i].create_date;
                }
            }
            allNotes.push(currentDate);

            setNotes(allNotes);
        }

        check();
        takeNotes();
    }, []);

    //Render
    return (
        <>
            <Box className='homeBox'>
                <Grid container>
                    <h1 className='titleSection'>Notes:</h1>
                </Grid>

                {notes.map((note: any, index: any) => (
                    <>
                        <Grid wrap='nowrap' sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                            <Box sx={{width: '120px'}}>
                                <Typography sx={{
                                    fontFamily: 'Roboto Bold',
                                    fontSize: '12px',
                                    color: '#dfc38c',
                                    marginRight: '10px',
                                    marginLeft: '25px',
                                    whiteSpace: 'nowrap'
                                }}>{note[0].create_date}</Typography>
                            </Box>
                            <Box sx={{width: '100%'}}>
                                <Divider sx={{width: '100%', borderColor: '#dfc38c'}}></Divider>
                            </Box>
                        </Grid>

                        <Grid item className='cardSliderHomePage'>
                            <Stack spacing={5} direction="row">
                                {note.slice().reverse().map((n: any, i: any) => (
                                    <CardLayoutGuest key={i} title={n.title} noteId={n.note_id}
                                                     createData={n.create_date}
                                                     body={n.body} allowed={n.allowed}/>
                                ))}
                            </Stack>
                        </Grid>
                    </>
                ))}
            </Box>
        </>
    );
}

export default NotesGuest;