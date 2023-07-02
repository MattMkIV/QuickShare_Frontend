//MUI
import {Box, IconButton, Menu, TextField, Typography, useMediaQuery} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Grid from '@mui/material/Grid';
//Component
import LogoGuest from '../logo/LogoGuest';
//CSS
import './TopBar.css';
//Other
import React, {useEffect, useRef, useState} from 'react';
import Avatar from "@mui/material/Avatar";
import LoginIcon from "@mui/icons-material/Login";
import { TakeUserInfoFromJwt, checkJwt } from "../../Utils/AuthService";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function TopBarGuest() {
    const isMdScreen = useMediaQuery('(max-width: 900px)');
    const isXsScreen = useMediaQuery('(max-width: 600px)');
    let jwtError = false;
    let navigate = useNavigate();
    const [userInfo, setUserInfo] = useState<any>([]);
    const searchValueRef = useRef('');
    const [isSearchRender, setSearchRender] = useState(false)

    useEffect(() => {
        
        const takeUserData = async () => {
            let response:any = await TakeUserInfoFromJwt();
            setUserInfo(response[0]);
        }

        const searchBar = () => {
            let renderHomePageStored = localStorage.getItem('isSearchRender')

            if (renderHomePageStored === 'true')
                setSearchRender(true)

            else
                setSearchRender(false)
        }

        searchBar();
        takeUserData();
    },[]);

    const logOut = () => {
        localStorage.clear();
        navigate("/");
    }
    /************************** TopBar pop-up **************************/
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const [menuId, setMenuId] = useState<string | undefined>(undefined);
    const topBarClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
        setAnchorEl(event.currentTarget);
        setMenuId(id);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = () => {
        localStorage.setItem('searchResult', searchValueRef.current)
        localStorage.setItem('isSearchRender', 'true')

        window.location.reload();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13)
            handleChange();
    };

    const backClick = () => {
        localStorage.setItem('isSearchRender', 'false')

        window.location.reload();
    }

    return (
        <>
            <React.Fragment>
                <hr className='lineHomepage'></hr>

                <Grid container wrap='nowrap' sx={{marginTop: '15px'}}>
                    <LogoGuest navigateHome={true}/>

                    <Grid lg={10} md={12} xs={12} wrap='nowrap' sx={{width: '100%', display: 'flex'}}>
                        <Grid sx={{width: '75%'}}>
                            {!isSearchRender ? (
                                <TextField
                                    placeholder="Search"
                                    onKeyDown={handleKeyDown}
                                    onChange={(event) => {
                                        searchValueRef.current = event.target.value;
                                    }}
                                    type='search'
                                    InputProps={{
                                        endAdornment: <SearchIcon sx={{color: '#F4B7AD'}}/>,
                                    }}
                                    sx={{
                                        '& .MuiInput-underline': {
                                            borderBottomColor: 'transparent',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#F4B7AD',
                                                borderRadius: '25px',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#F4B7AD',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#F4B7AD',
                                                borderWidth: '2px',
                                            },
                                        },
                                        '& .MuiInputBase-input': {
                                            borderRadius: '25px',
                                            fontFamily: 'Roboto Regular',
                                            fontSize: '17px !important',
                                            height: '20px',
                                        },
                                        width: '80%',
                                        marginLeft: isMdScreen ? '15px' : isXsScreen ? '15px' : '0',
                                    }}/>) : (
                                <Button
                                    sx={{
                                        height: '55px',
                                        top: '2px',
                                        backgroundColor: '#dfc38c',
                                        color: '#3f2e04',
                                        borderRadius: '22px',
                                        minWidth: '80px',
                                        maxWidth: '200px',
                                        fontFamily: 'Roboto Bold',
                                        fontSize: '16px',
                                        boxShadow: 4,
                                        padding: 2,
                                        overflow: 'hidden',
                                        ':hover': {backgroundColor: '#c5aa7c'}
                                    }}
                                    startIcon={<HighlightOffIcon sx={{color: '#3f2e04', width: '23px', height: '23px'}}/>}
                                    onClick={backClick} disableRipple>
                                <span
                                    style={{
                                        display: 'inline-block',
                                        maxWidth: 'calc(100% - 24px)', // Considerando la larghezza dell'icona di avvio
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                    }}>
                                    {localStorage.getItem('searchResult')}
                                </span></Button>)}
                        </Grid>

                        <Grid wrap='nowrap' sx={{
                            width: '25%',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}>
                            <IconButton
                                onClick={(event) => topBarClick(event, 'avatar')}
                                aria-controls="avatar"
                                aria-haspopup="true"
                                sx={{marginRight: '15px'}}>

                                <Avatar sx={{backgroundColor: '#008fdb', boxShadow: 12}}>M</Avatar>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>

                <Menu
                    id="avatar"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl && menuId === 'avatar')}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'avatar',
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    PaperProps={{
                        elevation: 24,
                        style: {
                            width: '350px',
                            height: '120px',
                            borderRadius: '22px',
                            backgroundColor: '#a08c8a',
                            overflowY: 'hidden'
                        }
                    }} sx={{backgroundColor: 'rgba(0,0,0,0.44)'}}
                >
                    <Grid>
                        <Box
                            sx={{
                                borderRadius: '15px 15px 5px 5px', backgroundColor: '#534341', height: '71px',
                                marginTop: '-3px', marginLeft: '5px', marginRight: '5px'
                            }}>
                            <Grid
                                container
                                style={{justifyContent: "start"}}>
                                <Avatar
                                    sx={{
                                        backgroundColor: '#008fdb', marginTop: '13px', marginLeft: '13px',
                                        height: '40px', width: '40px', fontSize: '25px'
                                    }}>G</Avatar>
                                <Grid>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Roboto Black', color: 'white', fontSize: '16px',
                                            marginTop: '10px',
                                            marginLeft: '10px'
                                        }}>{userInfo.first_name} {userInfo.last_name}</Typography>
                                    <Typography
                                        sx={{
                                            color: 'white', fontSize: '12px', marginLeft: '10px',
                                            fontFamily: 'Roboto Light'
                                        }}>{userInfo.email}</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box
                            sx={{
                                borderRadius: '5px 5px 15px 15px', height: '35px', marginTop: '3px',
                                marginLeft: '5px',
                                marginRight: '5px',
                                ':hover': {backgroundColor: '#800507', cursor: 'pointer'}
                            }}
                            onClick = {() => logOut()}>
                            <Grid container>
                                <LoginIcon
                                    sx={{color: 'white', marginTop: '5px', marginLeft: '18px'}}></LoginIcon>
                                <Typography sx={{
                                    color: 'white', fontFamily: 'Roboto Regular', fontSize: '15px',
                                    marginTop: '6px',
                                    marginLeft: '10px'
                                }}>Log-out</Typography>
                            </Grid>
                        </Box>
                    </Grid>
                </Menu>
            </React.Fragment>
        </>
    );
}

export default TopBarGuest;