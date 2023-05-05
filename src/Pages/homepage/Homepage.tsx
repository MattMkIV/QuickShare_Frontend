//MUI
//Componenti
import TopBar from '../../Components/homepage/TopBar';
import LeftBar from '../../Components/homepage/LeftBar';
import Paper from "@mui/material/Paper";
import Home from '../View/home/Home';
//CSS
import './Homepage.css'
//JS
//Other
import { useState } from 'react';
import Grid from "@mui/material/Grid";
import {Container} from "@mui/material";

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
            <Grid container>
                <TopBar/>
            </Grid>
            <Grid container className='homeGrid'>
                <Grid item>
                    <LeftBar onSelect={handleSelectItem}/>
                </Grid>
                <Grid item xs>
                    <Container className='containerCenter' sx={{ overflowY: "scroll", maxHeight : '800px'}}>
                        {selectedItem}
                    </Container>
                </Grid>
            </Grid>
        </>
    );
}

export default Homepage;