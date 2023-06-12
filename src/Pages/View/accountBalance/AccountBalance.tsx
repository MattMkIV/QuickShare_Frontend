import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import * as React from "react";
import {useState} from "react";
import {List, ListItem, ListItemButton, ListItemText, Stack, Typography, useMediaQuery} from "@mui/material";
import './AccountBalance.css'
import {useNavigate} from "react-router-dom";

function AccountBalance() {
    const months = ['All', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const [selectedLetter, setSelectedLetter] = React.useState('');

    const [selectedItem, setSelectedItem] = useState('All');

    const handleItemClick = (item: any) => {
        setSelectedItem(item);
    };

    const navigate = useNavigate();

    const isMdScreen = useMediaQuery('(max-width: 960px)');
    const isXsScreen = useMediaQuery('(max-width: 600px)');
    const isLgScreen = useMediaQuery('(max-width: 1200px)');


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
                    justifyContent: 'center',
                    display: 'flex',
                    marginTop: '30px'
                }}>
                    <Box sx={{
                        width: '900px', height: '50px', borderRadius: '50px', backgroundColor: '#ffdad5',
                        overflowX: 'scroll', display: 'flex', alignContent: 'center', justifyContent: 'left',
                        boxShadow: '3px 3px 7px 2px rgba(0, 0, 0, 0.34)'
                    }}>
                        <List component={Stack} direction="row" sx={{
                            width: '100%', marginLeft: '3px',
                            marginRight: '3px'
                        }}>
                            {months.map((letter, index) => (
                                <Box sx={{width: '100%', display: 'flex', alignContent: 'center'}}>
                                    <ListItem disablePadding onClick={function (event) {
                                        navigate("/homepage/accountbalance");
                                        handleItemClick(letter);
                                    }}>

                                        <ListItemButton disableRipple sx={{
                                            marginTop: '3px',
                                            marginBottom: '3px', height: '44px', borderRadius: '30px',
                                            textAlign: 'center', color: '#261a00'
                                        }}
                                                        className={selectedItem === letter ? "selected2" : ""}>
                                            <ListItemText>{letter}</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                </Box>
                            ))}
                        </List>
                    </Box>

                </Box>

                <Grid container sx={{
                    width: '100%',
                    height: isMdScreen ? '1600px' : isXsScreen ? '1600px' : '800px',
                    display: 'flex',
                    marginTop: '50px',
                }}>
                    <Grid lg={6} md={12} xs={12} sx={{
                        display: 'flex', justifyContent: 'center',
                        height: isMdScreen ? '50%' : isXsScreen ? '50%' : '100%',
                    }}>
                        <Box sx={{
                            height: '98%',
                            width: '95%',
                            minWidth: '70%',
                            borderRadius: '22px',
                            backgroundColor: '#534341'
                        }}>
                            <Grid sx={{display: 'flex', justifyContent: 'center'}}>
                                <Box sx={{
                                    width: '50%', height: '60px', backgroundColor: '#dfc38c',
                                    borderRadius: '30px', display: 'flex',
                                    justifyContent: 'center', alignItems: 'center', marginTop: '-30px',
                                    boxShadow: '3px 3px 7px 2px rgba(0, 0, 0, 0.34)'
                                }}>

                                    <Typography sx={{
                                        fontFamily: 'Roboto Bold',
                                        fontSize: '30px',
                                        color: '#3f2e04'
                                    }}>Income</Typography>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid lg={6} md={12} xs={12} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        height: isMdScreen ? '50%' : isXsScreen ? '50%' : '100%',
                        marginTop: isMdScreen ? '30px' : isLgScreen ? '30px' : '0'
                    }}>
                        <Box sx={{
                            height: '98%',
                            width: '95%',
                            minWidth: '70%',
                            borderRadius: '22px',
                            backgroundColor: '#534341'
                        }}>
                            <Grid sx={{display: 'flex', justifyContent: 'center'}}>
                                <Box sx={{
                                    width: '50%', height: '60px', backgroundColor: '#dfc38c',
                                    borderRadius: '30px', display: 'flex',
                                    justifyContent: 'center', alignItems: 'center', marginTop: '-30px',
                                    boxShadow: '3px 3px 7px 2px rgba(0, 0, 0, 0.34)'
                                }}>

                                    <Typography sx={{
                                        fontFamily: 'Roboto Bold',
                                        fontSize: '30px',
                                        color: '#3f2e04'
                                    }}>Expenses</Typography>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
}

export default AccountBalance;