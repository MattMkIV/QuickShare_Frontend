import {Box, Button, CardContent, Grow, IconButton, Menu, Slide, TextField, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import * as React from "react";
import {useEffect, useState} from "react";
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';

import './NoteCardLayout.css'
import Grid from "@mui/material/Grid";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from "react-router-dom";
import {TakeUserInfoAll} from "../../Utils/AuthService";
import {DeleteNote, UpdateNote} from "../../Utils/note_service";

interface Props {
    title: any,
    noteId: any,
    createData: any,
    body: any,
    allowed: any
}

const NoteCardLayoutGuest = ({title, noteId, createData, body, allowed}: Props) => {

    const formRef = React.useRef<any>(null);
    const [titleNote, setTitle] = useState(title);
    const [bodyNote, setBody] = useState(body);
    const [userInfo, setUserInfo] = useState<any>([]);
    let navigate = useNavigate();

    useEffect(() => {
        const takeUserInfo = async () => {
            let response: any = await TakeUserInfoAll(allowed);
            setUserInfo(response);
        }

        takeUserInfo();
    }, []);

    /************************* Handle notes MouseEnter & MouseExit *************************/
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const [retardTransition, setRetardTransition] = useState(false)

    const retardTransitionTrue = () => {
        setRetardTransition(true);
    }
    const retardTransitionFalse = () => {
        setTimeout(() => {
            setRetardTransition(false);
        }, 200);
    }

    /************************* Handle notes changes functions *************************/
    const [isEditable, setIsEditable] = React.useState(false);

    const handleTextFieldClick = () => {
        setIsEditable(true);
    };

    const handleConfirmClick: any = async (noteId: any) => {
        let isError = await UpdateNote(titleNote, bodyNote, null, noteId);

        if (isError)
            console.log("Errore aggiornamento nota");

        window.location.reload();
    };

    const handleCloseClick = () => {
        setIsEditable(false);
        window.location.reload();
    };

    /************************* Menù pop up functions *************************/

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const [menuId, setMenuId] = useState<string | undefined>(undefined);
    const topBarClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
        setAnchorEl(event.currentTarget);
        setMenuId(id);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // metodo eliminazione nota
    const deleteNote: any = async (noteId: any) => {

        let isError = await DeleteNote(noteId);

        window.location.reload();
    }

    // aggiornamento testi
    const handleChangeTitle = (event: any) => {
        setTitle(event.target.value);
    };


    const handleChangeBody = (event: any) => {
        setBody(event.target.value);
    }

    /************************* Dynamic scaling components *************************/
    const [isMenuOpen, setMenuOpen] = useState(false);
    const openMenu = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <Card className='cardsLayout'
                  onMouseEnter={(event) => {
                      handleMouseEnter();
                      retardTransitionTrue()
                  }}
                  onMouseLeave={(event) => {
                      handleMouseLeave();
                      retardTransitionFalse()
                  }}
                  sx={{boxShadow: 8}}>
                <CardContent sx={{m: -1}}>
                    <TextField
                        inputProps={{
                            sx: {color: '#442926 !important'}
                        }}
                        sx={{
                            '& fieldset': {border: 'none'},
                            '& .MuiInputBase-input': {
                                fontFamily: 'Roboto Black',
                                fontSize: '30px !important',
                                height: '15px',
                                width: '273px',
                            },
                            marginLeft: '-14px',
                        }}
                        type='text'
                        value={titleNote}
                        onChange={handleChangeTitle}
                        onClick={handleTextFieldClick}>
                    </TextField>

                    <hr className='separationLine'></hr>

                    <TextField
                        multiline
                        rows={(isHovered || retardTransition) ? 12 : 15}
                        inputProps={{
                            sx: {
                                color: '#574419 !important',
                            },
                        }}
                        sx={{
                            width: '100%',
                            height: (isHovered || isMenuOpen || retardTransition) ? '270px' : '350px',
                            '& fieldset': {border: 'none'},
                            '& .MuiInputBase-input': {fontFamily: 'Roboto Light', fontSize: '20px !important'}
                        }}
                        type='text'
                        value={bodyNote}
                        onChange={handleChangeBody}
                        onClick={handleTextFieldClick}
                    />

                    {isEditable ? (
                        <div>
                            <Grow in={isHovered || isMenuOpen} mountOnEnter unmountOnExit timeout={400}>

                                <IconButton onClick={handleCloseClick}
                                            sx={{
                                                backgroundColor: '#ffb4aa',
                                                ':hover': {backgroundColor: '#fda498'},
                                                height: '56px',
                                                width: '56px',
                                                boxShadow: 8,
                                                marginLeft: '55px',
                                                marginRight: '25px',
                                                marginTop: '15px',
                                            }}>
                                    <CloseIcon sx={{color: '#690003'}}/>
                                </IconButton>
                            </Grow>

                            <Grow in={isHovered || isMenuOpen} mountOnEnter unmountOnExit timeout={600}>
                                <IconButton onClick={() => handleConfirmClick(noteId)}
                                            sx={{
                                                backgroundColor: '#65cc8f',
                                                ':hover': {backgroundColor: '#58b27f'},
                                                height: '56px',
                                                width: '56px',
                                                boxShadow: 8,
                                                marginLeft: '27px',
                                                marginRight: '25px',
                                                marginTop: '15px',
                                            }}>
                                    <DoneIcon sx={{color: '#285740'}}/>
                                </IconButton>
                            </Grow>

                        </div>
                    ) : (
                        <div>
                            <Slide direction="up" in={isHovered || isMenuOpen} mountOnEnter unmountOnExit timeout={400}>
                                <IconButton
                                    sx={{
                                        backgroundColor: '#dfc38c',
                                        marginLeft: '55px',
                                        marginRight: '25px',
                                        height: '56px',
                                        width: '56px',
                                        boxShadow: 8,
                                        marginTop: '15px',
                                        ':hover': {backgroundColor: '#deba7b'},
                                    }}
                                    aria-label="more"
                                    id="info"
                                    aria-controls='info'
                                    aria-haspopup='true'
                                    onClick={(event) => {
                                        topBarClick(event, 'info');
                                        openMenu()
                                    }}>
                                    <InfoIcon sx={{color: '#3f2e04'}}/>
                                </IconButton>
                            </Slide>

                            <Menu
                                id="info"
                                MenuListProps={{
                                    'aria-labelledby': 'info',
                                }}
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl && menuId === 'info')}
                                onClose={(event) => {
                                    handleClose();
                                    closeMenu();
                                }}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                PaperProps={{
                                    elevation: 24,
                                    style: {
                                        width: '250px',
                                        height: '50px',
                                        borderRadius: '22px',
                                        backgroundColor: '#dfc38c',
                                        overflowY: 'hidden'
                                    }
                                }} sx={{backgroundColor: 'rgba(0,0,0,0.44)'}}
                            >
                                <Typography component="span" display="inline-block"
                                            sx={{
                                                fontFamily: 'Roboto Black',
                                                fontSize: '17px',
                                                marginLeft: '15px',
                                                marginTop: '5px',
                                                color: '#3f2e04'
                                            }}>
                                    Created on:
                                </Typography>
                                <Typography component="span" display="inline-block" whiteSpace="nowrap"
                                            sx={{
                                                fontFamily: 'Roboto Light',
                                                fontSize: '17px',
                                                marginLeft: '10px',
                                                color: '#3f2e04'
                                            }}>
                                    {createData}
                                </Typography>
                            </Menu>


                            <Slide direction="up" in={isHovered || isMenuOpen} mountOnEnter unmountOnExit timeout={600}>
                                <IconButton
                                    sx={{
                                        backgroundColor: '#ffb4aa',
                                        ':hover': {backgroundColor: '#fda498'},
                                        height: '56px',
                                        width: '56px',
                                        boxShadow: 8,
                                        marginTop: '15px',
                                        marginLeft: '27px',
                                        marginRight: '25px',
                                    }}
                                    aria-label="more"
                                    id="delete"
                                    aria-controls='delete'
                                    aria-haspopup='true'
                                    onClick={(event) => {
                                        topBarClick(event, 'delete');
                                        openMenu()
                                    }}>
                                    <DeleteIcon sx={{color: '#690003'}}/>
                                </IconButton>
                            </Slide>

                            <Menu
                                id='delete'
                                MenuListProps={{
                                    'aria-labelledby': 'delete',
                                }}
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl && menuId === 'delete')}
                                onClose={(event) => {
                                    handleClose();
                                    closeMenu();
                                }}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                PaperProps={{
                                    elevation: 24,
                                    style: {
                                        width: '250px',
                                        height: '103px',
                                        borderRadius: '22px',
                                        backgroundColor: '#ffb4aa',
                                        overflowY: 'hidden'
                                    }
                                }} sx={{backgroundColor: 'rgba(0,0,0,0.44)'}}
                            >
                                <Typography sx={{
                                    fontFamily: 'Roboto Black',
                                    fontSize: '17px',
                                    marginLeft: '15px',
                                    marginTop: '5px',
                                    color: '#3f2e04'
                                }}>Delete permanently?</Typography>
                                <Box sx={{backgroundColor: '#fd9d91', height: '77px', borderRadius: '22px'}}>
                                    <Grid sx={{display: 'flex', justifyContent: 'center'}}>
                                        <Button sx={{
                                            boxShadow: 8,
                                            height: '45px',
                                            minWidth: '85px',
                                            borderRadius: '22px',
                                            backgroundColor: '#5d3f3b',
                                            color: '#ffdad5',
                                            fontFamily: 'Roboto Regular',
                                            fontSize: '15px',
                                            marginTop: '10px',
                                            ':hover': {backgroundColor: '#49302b'}
                                        }}
                                                disableRipple
                                                onClick={() => {
                                                    handleClose();
                                                    closeMenu()
                                                }}
                                        >No</Button>
                                        <Button sx={{
                                            boxShadow: 8,
                                            height: '45px',
                                            minWidth: '85px',
                                            borderRadius: '22px',
                                            backgroundColor: '#920609',
                                            color: '#ffdad5',
                                            fontFamily: 'Roboto Regular',
                                            fontSize: '15px',
                                            marginLeft: '20px',
                                            marginTop: '10px',
                                            ':hover': {backgroundColor: '#7e0508'}
                                        }} disableRipple
                                                onClick={() => deleteNote(noteId)}>Yes</Button>
                                    </Grid>
                                </Box>
                            </Menu>
                        </div>
                    )}
                </CardContent>
            </Card>
        </>
    );
}
export default NoteCardLayoutGuest;