//MUI
//Componenti
import TopBar from '../../Components/homepage/TopBar';
import LeftBar from '../../Components/homepage/LeftBar';
import Paper from "@mui/material/Paper";
//CSS
import './Homepage.css'
//JS
//Other
import { useState } from 'react';
import Grid from "@mui/material/Grid";
import classes from "*.module.css";

function Homepage() {

    const [page, setPage] = useState("Recenti");

    //Style
    document.body.style.backgroundImage = '';

    return(
        <>  
            <div className='w3-row topRow'>
                <TopBar/>
            </div>
            <div className='w3-row bottomRow'>
                <Grid container>
                    <Grid item>
                        <LeftBar/>
                    </Grid>

                    <Grid item xs>
                        <Paper className='containerCenter'></Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default Homepage;