import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import * as React from "react";
import {Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack} from "@mui/material";

function InboxIcon() {
    return null;
}

function AccountBalance() {
    const months = ['All', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const [selectedLetter, setSelectedLetter] = React.useState('');

    const handleLetterClick = ({letter}: any) => {
        setSelectedLetter(letter);
    };


    //Render
    return (
        <>
            <Box className='homeBox'>
                <Grid container>
                    <h1 className='titleSection'>Account Balance:</h1>
                </Grid>

                <hr className='lineCentralContent'></hr>

                <Box sx={{
                    width: '100%',
                    alignContent: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    marginTop: '30px'
                }}>
                    <Box sx={{
                        width: '85%', height: '50px', borderRadius: '50px', backgroundColor: '#ffdad5',
                        overflowX: 'scroll', display: 'flex', alignContent: 'center', justifyContent: 'flex-start'
                    }}>
                        <List component={Stack} direction="row">
                            {months.map((letter, index) => (
                                <Box sx={{display: 'flex', alignContent: 'center', justifyContent: 'flex-start'}}>
                                    <ListItem disablePadding>
                                        <ListItemButton sx={{left : '10px', borderRadius : '20px', width : '70px', marginLeft : '3px'}}>
                                            <ListItemText>{letter}</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                </Box>
                            ))};
                        </List>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default AccountBalance;