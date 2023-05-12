//MUI
import MenuIcon from '@mui/icons-material/Menu';
import {Container, IconButton, InputAdornment, Menu, MenuItem, TextField, Typography} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
//Component
import Logo from '../logo/Logo';
//CSS
import './TopBar.css';
//Other
import { useState } from "react";
import {styled} from "@mui/material/styles";
import React from 'react';
import Box from "@mui/material/Box";

function TopBar() {
    //Variable declaration
    const [searchTerm] = useState("");
    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#57bb7e',
        },
        '& .MuiSvgIcon-root': {
            color: '#57bb7e',
        },
        '& .MuiFormLabel-root': {
            color: '#57bb7e',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#57bb7e',
            borderRadius: 12,
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: '#57bb7e',
                borderRadius: 12,
            },
            '&.Mui-focused fieldset': {
                borderColor: '#57bb7e',
                borderWidth: 2,
                borderRadius: 12,
            },

        },
    });

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    //Functions

    const handleChange = () => {
    };

    // @ts-ignore
    // @ts-ignore
    return(
        <>
            <React.Fragment>
                <hr className='lineHomepage'></hr>
                    <Grid item>
                        <MenuIcon className='menuIcon'/>
                    </Grid>
                    <Grid item>
                        <Logo navigateHome={true}/>
                    </Grid>
                    <Grid item xs>
                        <CssTextField id="search" type="search" label="Search" className='searchBar' value={searchTerm} onClick={handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                    <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}/>
                    </Grid>
                    <Grid item>
                        <SettingsIcon className='settingIcon w3-cell-middle' sx={{color: 'white'}}/>
                    </Grid>
                    <Grid item>
                        <IconButton
                            className='avatarIconClickAnimation'
                            onClick={handleClick}
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            >
                            <Avatar sx={{backgroundColor: '#008fdb'}}>M</Avatar>
                        </IconButton>
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
                            <Container className='f'>
                                <Grid className='f'>
                                    <Box className='l'>
                                        <Grid container style={{justifyContent: "start"}}>
                                            <Avatar className='w' sx={{backgroundColor: '#008fdb'}}>M</Avatar>
                                            <Grid>
                                                <Typography className='s'>Carlo</Typography>
                                                <Typography className='d'>carlolzr1@gmail.com</Typography>
                                            </Grid>
                                            <Box className='exitBox'>
                                                <LogoutIcon className='exitIcon'></LogoutIcon>
                                            </Box>
                                        </Grid>
                                    </Box>
                                    <Box className='r'>
                                        <Grid container xs>
                                            <LoginIcon className='loginIcon'></LoginIcon>
                                            <Typography className='loginText'>Log-In with another account</Typography>
                                        </Grid>
                                    </Box>
                                </Grid>

                            </Container>
                        </Menu>
                    </Grid>
            </React.Fragment>
        </>
    );
}

export default TopBar;