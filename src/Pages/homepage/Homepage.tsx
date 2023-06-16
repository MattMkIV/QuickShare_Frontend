//MUI
import SendIcon from '@mui/icons-material/Send';
//Component
import TopBar from '../../Components/homepage/TopBar';
import LeftBar from '../../Components/homepage/LeftBar';
import OtherMessageComponent from '../../Components/homepage/OtherMessageComponent'
import MyMessageComponent from '../../Components/homepage/MyMessageComponent'
//JS
//Other
import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import {Box, IconButton, Menu, Stack, Tooltip, tooltipClasses, TooltipProps, Typography, Zoom} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LoginIcon from '@mui/icons-material/Login';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";

interface HomepageProps {
    componentToRender: React.ComponentType;
}

const Homepage: React.FC<HomepageProps> = ({componentToRender: Component}) => {

    //Style
    document.body.style.backgroundImage = '';

    //Variable declaration
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const [menuId, setMenuId] = useState<string | undefined>(undefined);
    const topBarClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
        setAnchorEl(event.currentTarget);
        setMenuId(id);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    //Function

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
            <Grid container wrap='nowrap'
                  sx={{display: 'flex', flexDirection: 'row-reverse', marginTop: '20px'}}>
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

                        <Avatar sx={{backgroundColor: '#008fdb', boxShadow: 12}}>M</Avatar>
                    </IconButton>
                </Grid>
                <TopBar/>
            </Grid>

            <Grid container wrap='nowrap'>
                <Grid item lg={2} md={2}>
                    <LeftBar/>
                </Grid>

                <Grid container sx={{marginTop: '30px'}} lg={10} md={10} xs={12}>
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
                }} sx={{backgroundColor: 'rgba(0,0,0,0.44)'}}
            >

                <Grid sx={{marginTop: '2px'}}>
                    <Stack sx={{height: '516px', marginBottom: '10px', overflowY: 'scroll'}} spacing={2}
                           direction="column">
                        <OtherMessageComponent/>
                        <MyMessageComponent/>
                    </Stack>
                    <Grid wrap='nowrap' sx={{display: 'flex', alignItems: 'center', marginLeft: '10px'}}>
                        <TextField
                            inputProps={{
                                sx: {color: '#3f2e04 !important'}
                            }}
                            sx={{
                                '& .MuiInput-underline': {
                                    borderBottomColor: 'transparent',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#3f2e04',
                                        borderRadius: '18px',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#3f2e04',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#3f2e04',
                                        borderWidth: '2px',
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    borderRadius: '18px',
                                    backgroundColor: '#d8c2be',
                                    fontFamily: 'Roboto Regular',
                                    fontSize: '16px !important',
                                    height: '35px',
                                    width: '300px',
                                    boxShadow: 8,
                                },
                            }}
                            placeholder="Type your message here"
                            size='small'/>

                        <Button sx={{
                            border: 1,
                            borderColor: '#7a9a65',
                            backgroundColor: '#8fb677',
                            minWidth: '51px',
                            height: '51px',
                            borderRadius: '22px',
                            marginRight: '10px',
                            marginLeft: '10px',
                            boxShadow: 8,
                            ':hover': {
                                backgroundColor: '#7a9a65',
                                cursor: 'pointer'
                            }
                        }}>
                            <SendIcon sx={{width: '23px', height: '23px', color: '#201a19'}}/>
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
                    <Box
                        sx={{
                            borderRadius: '5px 5px 15px 15px', height: '35px', marginTop: '3px',
                            marginLeft: '5px',
                            marginRight: '5px',
                            ':hover': {backgroundColor: '#800507', cursor: 'pointer'}
                        }}>
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
        </>
    );
}

export default Homepage;