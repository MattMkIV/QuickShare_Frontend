//MUI
//Component
import TopBar from '../../Components/homepage/TopBar';
import LeftBar from '../../Components/homepage/LeftBar';
import Home from '../View/home/Home';
//CSS
import './Homepage.css'
//JS
//Other
import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import {Box, IconButton, Menu, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

function Homepage() {

    //Variable declaration
    const [selectedItem, setSelectedItem] = useState(Home);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    //Style
    document.body.style.backgroundImage = '';

    //Function
    const handleSelectItem = (item: any) => {
        setSelectedItem(item);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //Render
    return (
        <>
            <Grid container wrap='nowrap' sx={{ display: 'flex', flexDirection: 'row-reverse'}}>
                <Grid item className='avatarPositionGrid'>
                    <IconButton
                        className='avatarIconClickAnimation'
                        onClick={handleClick}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}>

                        <Avatar sx={{backgroundColor: '#008fdb'}}>M</Avatar>
                    </IconButton>
                </Grid>
                <TopBar/>
            </Grid>

            <Grid container wrap='nowrap'>
                <Grid item lg={2.5} md={2.5}>
                    <LeftBar  onSelect={handleSelectItem}/>
                </Grid>

                <Grid container className='homepageBoxBackground' lg={9.5} md={9.5} xs={12}>
                    {selectedItem}
                </Grid>
            </Grid>

            <Menu
                id="basic-menu"
                PaperProps={{ elevation: 0, style: { backgroundColor: "transparent" } }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Grid>
                    <Box className='avatarBoxPopUp'>
                        <Grid container style={{justifyContent: "start"}}>
                            <Avatar className='avatarPopUpProfileImg' sx={{backgroundColor: '#008fdb'}}>M</Avatar>
                            <Grid>
                                <Typography className='avatarPopUpName'>Carlo</Typography>
                                <Typography className='avatarPopUpMail'>carlolzr1@gmail.com</Typography>
                            </Grid>
                            <Box className='exitBox'>
                                <LogoutIcon className='exitIcon'></LogoutIcon>
                            </Box>
                        </Grid>
                    </Box>
                    <Box className='avatarPopUpLoginOtherAccount'>
                        <Grid container>
                            <LoginIcon className='loginIcon'></LoginIcon>
                            <Typography className='loginText'>Log-In with another account</Typography>
                        </Grid>
                    </Box>
                </Grid>
            </Menu>
        </>
    );
}

export default Homepage;