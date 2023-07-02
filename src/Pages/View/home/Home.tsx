import * as React from 'react';
import {useEffect, useState} from 'react';
import './Home.css'
import CalendarCardLayout from "../../../Components/homepage/CalendarCardLayout";
import Grid from "@mui/material/Grid";
import {Box, ListItem, Stack, Typography} from "@mui/material";
import CardLayout from '../../../Components/homepage/NoteCardLayout'
import ListsCardLayout from '../../../Components/homepage/ListsCardLayout'
import {Await, useNavigate} from 'react-router-dom';
import {checkJwt} from '../../../Utils/AuthService';
import {TakeList} from '../../../Utils/list_service';
import {TakeNote} from '../../../Utils/note_service';
import {TakeUserId} from '../../../Utils/message_service';
import {Simulate} from "react-dom/test-utils";
import contextMenu = Simulate.contextMenu;
import {Search} from "../../../Utils/search_service";
import {lightGreen} from "@mui/material/colors";

function Home() {

    let jwtError = false;
    let navigate = useNavigate();
    const [lists, setLists] = useState<any>([]);
    const [notes, setNotes] = useState<any>([]);
    const [renderHomePage, setRenderHomePage] = useState(true);

    const [notesFiltered, setNotesFiltered] = useState<any>([]);
    const [listsFiltered, setListsFiltered] = useState<any>([]);
    const [eventsFiltered, setEventsFiltered] = useState<any>([]);

    useEffect(() => {
        const check = async () => {
            jwtError = await checkJwt();

            if (!jwtError) {

                let userId = await TakeUserId();
                if (userId === 28)
                    navigate("/");

            } else
                navigate("/");
        }

        const takeLists = async () => {
            let response: any = await TakeList();

            let allLists = [];
            let currentDate = [];
            let previusDate = "0000-00-00";

            for (let i = 0; i < response.length; i++) {
                if (previusDate === response[i].create_date) {
                    currentDate.push(response[i]);
                    previusDate = response[i].create_date;
                } else {
                    if (i !== 0)
                        allLists.push(currentDate);

                    currentDate = [];
                    currentDate.push(response[i]);
                    previusDate = response[i].create_date;
                }
            }
            allLists.push(currentDate);

            setLists(allLists);
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

        const searchRender = async () => {
            let renderHomePageStored = localStorage.getItem('isSearchRender')

            if (renderHomePageStored === 'false')
                setRenderHomePage(true);
            else
                setRenderHomePage(false);

            let notesFilter: any = await Search(localStorage.getItem('searchResult'), 'notes')
            setNotesFiltered(notesFilter)

            let listsFilter: any = await Search(localStorage.getItem('searchResult'), 'lists')
            setListsFiltered(listsFilter)

            let eventsFilter: any = await Search(localStorage.getItem('searchResult'), 'events')
            setEventsFiltered(eventsFilter)
        }

        check();
        if (localStorage.getItem('isSearchRender') === 'true') {
            searchRender();
        } else {
            takeLists();
            takeNotes();
        }
    }, []);

    //Render
    return (
        <>
            {!renderHomePage ?
                (<Box className='homeBox'>
                    {(notesFiltered !== undefined && notesFiltered.length !== 0) ?
                        (<>
                            <Grid container>
                                <h1 className='titleSection'>Notes found:</h1>
                            </Grid>

                            <Grid className='cardSliderHomePage'>
                                <Stack direction="row" spacing={5}>
                                    {(notesFiltered.slice().reverse().map((n: any, i: any) => (
                                            <CardLayout key={i} title={n.title} noteId={n.note_id}
                                                        createData={n.create_date}
                                                        body={n.body} allowed={n.allowed}/>
                                        ))
                                    )}
                                </Stack>
                            </Grid>

                            {listsFiltered.length !== 0 ?
                                <hr className='lineCentralContent'></hr>
                                : ''}
                        </>)

                        : ''}

                    {(listsFiltered !== undefined && listsFiltered.length !== 0) ?
                        (<>
                            <Grid container>
                                <h1 className='titleSection'>Lists found:</h1>
                            </Grid>

                            <Grid className='cardSliderHomePage'>
                                <Stack direction="row" spacing={5}>
                                    {(listsFiltered.slice().reverse().map((n: any, i: any) => (
                                            <ListsCardLayout key={i} title={n.title} list_id={n.list_id}
                                                             create_date={n.create_date}
                                                             allowed={n.allowed}/>
                                        ))
                                    )}
                                </Stack>
                            </Grid>

                            {eventsFiltered.length !== 0 ?
                                <hr className='lineCentralContent'></hr>
                                : ''}
                        </>)
                        : ''}

                    {(eventsFiltered !== undefined && eventsFiltered.length !== 0) ?
                        (<>
                            <Grid container>
                                <h1 className='titleSection'>Lists found:</h1>
                            </Grid>

                            <Grid className='cardSliderHomePage'>
                                <Stack direction="row" spacing={5}>
                                    {(eventsFiltered.slice().reverse().map((n: any, i: any) => (
                                            <CalendarCardLayout key={i} index={i} value={n.title} date={n.date}/>
                                        ))
                                    )}
                                </Stack>
                            </Grid>

                            {eventsFiltered.length !== 0 ?
                                <hr className='lineCentralContent'></hr>
                                : ''}
                        </>)
                        : ''}
                </Box>)
                :
                (<Box className='homeBox'>
                    <Grid container>
                        <h1 className='titleSection'>Most Recent Notes:</h1>
                    </Grid>

                    <Grid className='cardSliderHomePage'>
                        <Stack direction="row" spacing={5}>
                            {notes.map((note: any, index: any) => (
                                note.slice(0, 10).reverse().map((n: any, i: any) => (
                                    <CardLayout key={index} title={n.title} noteId={n.note_id}
                                                createData={n.create_date}
                                                body={n.body} allowed={n.allowed}></CardLayout>
                                ))
                            ))}
                        </Stack>
                    </Grid>

                    <hr className='lineCentralContent'></hr>

                    <Grid container>
                        <h1 className='titleSection'>Most Recent Lists:</h1>
                    </Grid>

                    <Grid className='cardSliderHomePage'>
                        <Stack direction="row" spacing={5}>
                            {lists.map((list: any, index: any) => (
                                list.slice(0, 10).reverse().map((n: any, i: any) => (
                                    <ListsCardLayout key={i} title={n.title} list_id={n.list_id}
                                                     create_date={n.create_date}
                                                     allowed={n.allowed}></ListsCardLayout>
                                ))
                            ))}
                        </Stack>
                    </Grid>
                </Box>)
            };
        </>
    );
}

export default Home;