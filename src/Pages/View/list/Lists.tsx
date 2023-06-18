import Grid from "@mui/material/Grid";
import {Box, Stack, Typography} from "@mui/material";
import * as React from "react";
import '../home/Home.css'
import './Lists.css'
import ListsCardLayout from '../../../Components/homepage/ListsCardLayout'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkJwt } from "../../../Utils/AuthService";
import { TakeList } from "../../../Utils/list_service";

function Notes() {

    let jwtError = false;
    let navigate = useNavigate();
    const [lists, setLists] = useState<any>([]);
    const [previusDate, setPreviusDate ] = useState<String>("");

    useEffect(() => {
        const check = async () => {
            jwtError = await checkJwt();
            if(jwtError) navigate("/");
        }

        const takeLists = async () => {
            let response:any = await TakeList();
            console.log(response);

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
            setLists(allNotes);
        }   

        check();
        takeLists();
    }, []);
    
    //Render
    return(
        <>
            <Box className='homeBox'>
                <Grid container>
                    <h1 className='titleSection'>Lists:</h1>
                </Grid>

                {lists.map((list:any, index:any) => ( 
                    <>
                        <Grid wrap='nowrap' sx={{display : 'flex', alignItems : 'center', justifyContent : 'flex-start'}}>
                            <Typography sx={{fontFamily : 'Roboto Bold', fontSize : '12px', color : '#dfc38c', marginRight : '10px', marginLeft : '25px'}}>{list[0].create_date}</Typography>
                            <hr className='dateLineCentralContent'></hr>
                        </Grid>

                        <Grid item className='cardSliderHomePage'>
                            <Stack spacing={5} direction="row">
                                {list.map((n:any, i:any) => (                    
                                    <ListsCardLayout key={i} title={n.title} list_id={n.list_id} create_date={n.create_date} allowed={n.allowed}></ListsCardLayout>
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