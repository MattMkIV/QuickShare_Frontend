//MUI
//Componenti
import TopBar from '../../Components/homepage/TopBar';
import LeftBar from '../../Components/homepage/LeftBar';
import Paper from "@mui/material/Paper";
import Home from '../view/home/Home';
//CSS
import './Homepage.css'
//JS
//Other
import { useState } from 'react';
import Grid from "@mui/material/Grid";
import classes from "*.module.css";

function Homepage() {

    //Variable declaration
    const [selectedItem, setSelectedItem] = useState(Home);

    //Style
    document.body.style.backgroundImage = '';

    //Function
    const handleSelectItem = (item: any) => {
        setSelectedItem(item);
    };

    //Render
    return(
        <>  
            <div className='w3-row topRow'>
                <TopBar/>
            </div>
            <div className='w3-row bottomRow'>
                <Grid container>
                    <Grid item>
                        <LeftBar onSelect={handleSelectItem}/>
                    </Grid>
                    <Grid item xs>
                        <Paper className='containerCenter'>  
                            {selectedItem}
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default Homepage;