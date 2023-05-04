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

    //Variable declaration
    const [page, setPage] = useState("Recenti");
    let content = null;
    const [selectedItem, setSelectedItem] = useState('');

    //Style
    document.body.style.backgroundImage = '';

    //Function
    const handleSelectItem = (item: any) => {
        setSelectedItem(item);
    };
    
    switch (selectedItem) {
        case 'Home':
                content = <p>Home.</p>;
                break;
        case 'Lists':
                content = <p>Lists</p>;
                break;
        case 'Chat':
                content = <p>Chat</p>;
                break;
        case 'Notes':
            content = <p>Notes</p>;
            break;
        case 'Calendar':
            content = <p>Calendar</p>;
            break;
        case 'UploadPhoto':
            content = <p>UploadPhoto</p>;
            break;
        case 'AccountBalance':
            content = <p>Account Balance</p>;
            break;
        default:
            content = <p>Home.</p>;
    }

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
                        <Paper className='containerCenter'>{content}</Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default Homepage;