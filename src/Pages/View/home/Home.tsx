import * as React from 'react';
import {useEffect, useState} from 'react';
import './Home.css'
import Grid from "@mui/material/Grid";
import {Box, Stack} from "@mui/material";
import CardLayout from '../../../Components/homepage/NoteCardLayout'
import ListsCardLayout from '../../../Components/homepage/ListsCardLayout'
import {useNavigate} from 'react-router-dom';
import {checkJwt} from '../../../Utils/AuthService';
import {TakeList} from '../../../Utils/list_service';
import {TakeNote} from '../../../Utils/note_service';

function Home() {

    let jwtError = false;
    let navigate = useNavigate();
    const [lists, setLists] = useState<any>([]);
    const [notes, setNotes] = useState<any>([]);

    useEffect(() => {
        const check = async () => {
            jwtError = await checkJwt();
            if (jwtError) navigate("/");
        }

        const takeLists = async () => {
            let response: any = await TakeList();

            setLists(response);
        }

        const takeNotes = async () => {
            let response: any = await TakeNote();

            setNotes(response);
        }

        check();
        takeLists();
        takeNotes();
    }, []);

    //Render
    return (
        <>
            <Box className='homeBox'>
                <Grid container>
                    <h1 className='titleSection'>Most Recent Notes:</h1>
                </Grid>

                <Grid className='cardSliderHomePage'>
                    <Stack direction="row" spacing={5}>
                        {notes.slice(0, 10).map((n: any, index: any) => (
                            <CardLayout key={index} title={n.title} noteId={n.note_id} createData={n.create_date}
                                        body={n.body} allowed={n.allowed}></CardLayout>
                        ))}
                    </Stack>
                </Grid>

                <hr className='lineCentralContent'></hr>

                <Grid container>
                    <h1 className='titleSection'>Most Recent Lists:</h1>
                </Grid>

                <Grid className='cardSliderHomePage'>
                    <Stack direction="row" spacing={5}>
                        {lists.slice(0, 10).map((n: any, i: any) => (
                            <ListsCardLayout key={i} title={n.title} list_id={n.list_id} create_date={n.create_date}
                                             allowed={n.allowed}></ListsCardLayout>
                        ))}
                    </Stack>
                </Grid>
            </Box>
        </>
    );
}

export default Home;