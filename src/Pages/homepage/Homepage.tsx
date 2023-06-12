//MUI
import SendIcon from '@mui/icons-material/Send';
//Component
import TopBar from '../../Components/homepage/TopBar';
import LeftBar from '../../Components/homepage/LeftBar';
import Home from '../View/home/Home';
import OtherMessageComponent from '../../Components/homepage/OtherMessageComponent'
import MyMessageComponent from '../../Components/homepage/MyMessageComponent'
//CSS
import './Homepage.css'
//JS
//Other
import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import {Box, IconButton, Menu, Stack, Tooltip, tooltipClasses, TooltipProps, Typography, Zoom} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";
import { checkJwt } from '../../Utils/AuthService';
import { useNavigate } from 'react-router-dom';

interface HomepageProps {
    componentToRender: React.ComponentType;
}

const Homepage: React.FC<HomepageProps> = ({componentToRender: Component}) => {

    //Style
    document.body.style.backgroundImage = '';

    //Variable declaration
    const [selectedItem, setSelectedItem] = useState(Home);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    let jwtError = false;
    let navigate = useNavigate();

    const [menuId, setMenuId] = useState<string | undefined>(undefined);
    const topBarClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
        setAnchorEl(event.currentTarget);
        setMenuId(id);
    };

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //Function
    useEffect(() => {
        const check = async () => {
            jwtError = await checkJwt();

            if(jwtError) navigate("/");
        }

        check();
    });


    const handleSelectItem = (item: any) => {
        setSelectedItem(item);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        setMenuId(undefined);
    };

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#534341',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderRadius: 12,
            },
            '&.Mui-focused fieldset': {
                borderRadius: 12,
            },
        },
    });

    const LightTooltip = styled(({className, ...props}: TooltipProps) => (
        <Tooltip {...props} classes={{popper: className}}/>))(({theme}) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#ede0de',
            color: 'rgba(0, 0, 0, 0.87)',
            boxShadow: theme.shadows[3],
            fontSize: 11.5,
        },
    }));

    //Render
    return (
        <>
            <Grid container className='topMarginHomepage' wrap='nowrap'
                  sx={{display: 'flex', flexDirection: 'row-reverse'}}>
                <Grid wrap='nowrap' sx={{
                    width: '150px',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                    <IconButton onClick={(event) => topBarClick(event, 'notification')}
                                aria-controls="notification"
                                aria-haspopup="true"
                                sx={{marginRight: '20px'}}>
                        <LightTooltip TransitionComponent={Zoom} title='Messages' sx={{marginTop: '0'}}>
                            <NotificationsNoneIcon
                                sx={{width: '30px', height: '30px', color: '#ffb4aa'}}></NotificationsNoneIcon>
                        </LightTooltip>
                    </IconButton>

                    <IconButton
                        onClick={(event) => topBarClick(event, 'avatar')}
                        aria-controls="avatar"
                        aria-haspopup="true"
                        sx={{marginRight: '10px'}}>

                        <Avatar sx={{backgroundColor: '#008fdb'}}>M</Avatar>
                    </IconButton>
                </Grid>
                <TopBar/>
            </Grid>

            <Grid container wrap='nowrap'>
                <Grid item lg={2} md={2}>
                    <LeftBar onSelect={handleSelectItem}/>
                </Grid>

                <Grid container className='homepageBoxBackground' lg={10} md={10} xs={12}>
                    <Component/>
                </Grid>
            </Grid>

            <Menu
                id="notification"
                anchorEl={anchorEl}
                open={Boolean(anchorEl && menuId === 'notification')}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'notification',
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
                        width: '410px',
                        height: '600px',
                        borderRadius: '22px',
                        backgroundColor: '#a08c8a',
                    }
                }}
                classes={{paper: 'notification'}}>

                <Grid>
                    <Stack sx={{height: '532px', marginBottom: '10px', overflowY: 'scroll'}} spacing={2}
                           direction="column">
                        <OtherMessageComponent/>
                        <MyMessageComponent/>
                    </Stack>
                    <Grid wrap='nowrap'>
                        <CssTextField
                            sx={{
                                marginLeft: '9px', marginRight: '5px', width: '323px',
                                backgroundColor: '#D9D9D9 !important', borderRadius: '15px',
                                fontFamily: 'Roboto Light'
                            }}
                            inputProps={{sx: {color: '#534341 !important',},}}
                            label="Type your message here..."
                            size='small'/>

                        <Button className='sendButton'
                                sx={{
                                    background: '#7EB503',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '15px',
                                    marginRight: '9px'
                                }}>
                            <SendIcon sx={{width: '25px', height: '25px', color: 'white'}}/>
                        </Button>
                    </Grid>
                </Grid>
            </Menu>

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
                    }
                }}
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
                                }}>M</Avatar>
                            <Grid>
                                <Typography
                                    sx={{
                                        fontFamily: 'Roboto Black', color: 'white', fontSize: '16px',
                                        marginTop: '10px',
                                        marginLeft: '10px'
                                    }}>Carlo</Typography>
                                <Typography
                                    sx={{
                                        color: 'white', fontSize: '12px', marginLeft: '10px',
                                        fontFamily: 'Roboto Light'
                                    }}>prova@gmail.com</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className='loginOtherAccountPopUp'
                         sx={{
                             borderRadius: '5px 5px 15px 15px', height: '35px', marginTop: '3px',
                             marginLeft: '5px',
                             marginRight: '5px'
                         }}>
                        <Grid container>
                            <LoginIcon sx={{color: 'white', marginTop: '5px', marginLeft: '18px'}}></LoginIcon>
                            <Typography sx={{
                                color: 'white', fontFamily: 'Roboto Regular', fontSize: '15px',
                                marginTop: '6px',
                                marginLeft: '10px'
                            }}>Log-In with another account</Typography>
                        </Grid>
                    </Box>
                </Grid>
            </Menu>
        </>
    );
}

export default Homepage;