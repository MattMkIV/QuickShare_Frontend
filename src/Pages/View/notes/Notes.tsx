import Grid from "@mui/material/Grid";
import {Box, Stack, Typography} from "@mui/material";
import * as React from "react";
import '../home/Home.css'
import './Notes.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkJwt } from "../../../Utils/AuthService";
import { TakeNote } from "../../../Utils/note_service";
import CardLayout from '../../../Components/homepage/NoteCardLayout';

function Notes() {

    let jwtError = false;
    let navigate = useNavigate();
    const [notes, setNotes] = useState<any>([]);
    const [previusDate, setPreviusDate ] = useState<String>("");

    useEffect(() => {
        const check = async () => {
            jwtError = await checkJwt();
            if(jwtError) navigate("/");
        }

        const takeNotes = async () => {
            let response:any = await TakeNote();

            let allNotes = [];
            let currentDate = [];
            let previusDate = "0000-00-00";

            for(let i=0; i < response.length; i++) {

                console.log("rgerger " + response[i]);

                if(previusDate === response[i].create_date) {
                    currentDate.push(response[i]);
                    previusDate = response[i].create_date;
                } else {
                    if(i !== 0)
                        allNotes.push(currentDate);
                    
                    currentDate = [];
                    currentDate.push(response[i]);
                    previusDate = response[i].create_date;
                }
            }
            allNotes.push(currentDate);
            console.log(allNotes);
            setNotes(allNotes);
        }   

        check();
        takeNotes();
    }, []);

    //Render
    return(
        <>
            <Box className='homeBox'>
                <Grid container>
                    <h1 className='titleSection'>Notes:</h1>
                </Grid>

                {notes.map((note:any, index:any) => ( 
                    <>
                        <Grid wrap='nowrap' sx={{display : 'flex', alignItems : 'center', justifyContent : 'flex-start'}}>
                            <Typography sx={{fontFamily : 'Roboto Bold', fontSize : '12px', color : '#dfc38c', marginRight : '10px', marginLeft : '25px'}}>{note[index].create_date}</Typography>
                            <hr className='dateLineCentralContent'></hr>
                        </Grid>

                        <Grid item className='cardSliderHomePage'>
                            <Stack spacing={5} direction="row">
                                {note.map((n:any, i:any) => (                    
                                    <CardLayout key={i} title={n.title} noteId={n.note_id} createData={n.create_date} body={n.body} allowed={n.allowed}></CardLayout>
                                ))} 
                            </Stack>
                        </Grid>
                    </>
                ))}
            </Box>
        </>
    );
}

export default Notes;