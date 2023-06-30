import Grid from "@mui/material/Grid";
import {Box, Divider, Stack, Typography} from "@mui/material";
import * as React from "react";
import {useEffect, useState} from "react";
import '../home/Home.css'
import './Lists.css'
import {useNavigate} from "react-router-dom";
import {checkJwt} from "../../../Utils/AuthService";
import {TakeList} from "../../../Utils/list_service";
import ListsCardLayout from '../../../Components/homepage/ListsCardLayout'

function Notes() {

    let jwtError = false;
    let navigate = useNavigate();
    const [lists, setLists] = useState<any>([]);

    useEffect(() => {
        const check = async () => {
            jwtError = await checkJwt();
            if (jwtError) navigate("/");
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

        check();
        takeLists();
    }, []);

    //Render
    return (
        <>
            <Box className='homeBox'>
                <Grid container>
                    <h1 className='titleSection'>Lists:</h1>
                </Grid>

                {lists.map((list: any, index: any) => (
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
                                }}>{list[0].create_date}</Typography>
                            </Box>
                            <Box sx={{width: '100%'}}>
                                <Divider sx={{width: '100%', borderColor: '#dfc38c'}}></Divider>
                            </Box>

                        </Grid>

                        <Grid item className='cardSliderHomePage'>
                            <Stack spacing={5} direction="row">
                                {list.slice().reverse().map((n: any, i: any) => (
                                    <ListsCardLayout key={i} title={n.title} list_id={n.list_id}
                                                     create_date={n.create_date} allowed={n.allowed}/>
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