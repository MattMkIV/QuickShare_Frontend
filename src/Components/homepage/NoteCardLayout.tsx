import {Box, Button, CardContent, Divider, Grow, IconButton, Menu, Slide, TextField, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import * as React from "react";
import {useState} from "react";
import InfoIcon from '@mui/icons-material/Info';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

import './NoteCardLayout.css'
import Grid from "@mui/material/Grid";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';


const NoteCardLayout: React.FC = () => {
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

    const handleConfirmClick = () => {
        // Aggiungi qui la logica per confermare la modifica
        setIsEditable(false);
    };

    const handleCloseClick = () => {
        // Aggiungi qui la logica per confermare la modifica
        setIsEditable(false);
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

    /************************* Share pop up TextField *************************/
    const [textFields, setTextFields] = useState<string[]>([]);

    const handleAddTextField = () => {
        setTextFields([...textFields, '']);
    };

    const handleRemoveTextField = (index: number) => {
        const updatedTextFields = [...textFields];
        updatedTextFields.splice(index, 1);
        setTextFields(updatedTextFields);
    };

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
                        defaultValue='PROVA TITOLO MOLTO LUNGO'
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
                                <IconButton onClick={handleConfirmClick}
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
                            <Slide direction="up" in={isHovered || isMenuOpen} mountOnEnter unmountOnExit timeout={300}>
                                <IconButton
                                    sx={{
                                        backgroundColor: '#dfc38c',
                                        marginLeft: '27px',
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
                                        height: '320px',
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
                                    19/03/2021
                                </Typography>

                                <Divider sx={{
                                    width: '220px',
                                    marginTop: '5px',
                                    boxShadow: 24,
                                    position: 'absolute',
                                    borderColor: 'rgba(63,46,4,0.38)',
                                    marginLeft: '15px'
                                }}/>

                                <Typography sx={{
                                    fontFamily: 'Roboto Black',
                                    fontSize: '17px',
                                    marginLeft: '15px',
                                    marginTop: '10px',
                                    color: '#3f2e04'
                                }}>Actually shared with:</Typography>

                                <Box sx={{
                                    width: '100%',
                                    height: '248px',
                                    borderRadius: '22px',
                                    backgroundColor: '#d9b267',
                                    overflowY: 'scroll',
                                    pl: 1.2, pr: 1.2, pt: 1.2
                                }}>
                                    <TextField inputProps={{
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
                                                           borderColor: 'transparent',
                                                       },
                                                   },
                                                   '& .MuiInputBase-input': {
                                                       fontFamily: 'Roboto Regular',
                                                       fontSize: '15px !important',
                                                       height: '5px',
                                                       width: '202px',
                                                       borderRadius: '18px',
                                                       boxShadow: 4,
                                                   },
                                                   marginBottom: 1.2
                                               }}
                                               defaultValue='ciaocarlo@gmail.com'
                                               disabled>
                                    </TextField>
                                </Box>
                            </Menu>

                            <Slide direction="up" in={isHovered || isMenuOpen} mountOnEnter unmountOnExit timeout={500}>
                                <IconButton
                                    sx={{
                                        backgroundColor: '#e7bdb7',
                                        marginRight: '25px',
                                        height: '56px',
                                        width: '56px',
                                        boxShadow: 8,
                                        marginTop: '15px',
                                        ':hover': {backgroundColor: '#e3ada5'}
                                    }} aria-label="more"
                                    id="share"
                                    aria-controls='share'
                                    aria-haspopup='true'
                                    onClick={(event) => {
                                        topBarClick(event, 'share');
                                        openMenu()
                                    }}>
                                    <ShareIcon sx={{color: '#442926'}}/>
                                </IconButton>
                            </Slide>

                            <Menu
                                id='share'
                                MenuListProps={{
                                    'aria-labelledby': 'share',
                                }}
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl && menuId === 'share')}
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
                                        height: '320px',
                                        borderRadius: '22px',
                                        backgroundColor: '#e7bdb7',
                                        overflowY: 'hidden'
                                    }
                                }} sx={{backgroundColor: 'rgba(0,0,0,0.44)'}}
                            >
                                <Typography sx={{
                                    fontFamily: 'Roboto Black',
                                    fontSize: '17px',
                                    marginLeft: '15px',
                                    marginTop: '5px',
                                    color: '#3f2e04',
                                }}>Share with:</Typography>
                                <Box sx={{
                                    width: '100%',
                                    height: '220px',
                                    borderRadius: '22px',
                                    backgroundColor: '#eaa79d',
                                    pl: 1.2, pr: 1.2, pt: 1.2,
                                    overflowY: 'scroll',
                                }}>
                                    {textFields.map((textField, index) => (
                                        <div key={index} style={{display: 'flex'}}>
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
                                                        fontFamily: 'Roboto Regular',
                                                        fontSize: '15px !important',
                                                        height: '5px',
                                                        width: '202px',
                                                        boxShadow: 4,
                                                    },
                                                    marginBottom: 1.2
                                                }}
                                                placeholder='Email'
                                            />
                                            <Button onClick={() => handleRemoveTextField(index)}
                                                    sx={{
                                                        backgroundColor: '#920609',
                                                        height: '30px',
                                                        minWidth: '30px',
                                                        borderRadius: '22px',
                                                        marginLeft: '10px',
                                                        marginTop: '3px',
                                                        boxShadow: 4,
                                                        ':hover': {backgroundColor: '#9f3a3c'}
                                                    }}
                                                    disableRipple>
                                                <DeleteIcon sx={{height: '15px', width: '15px', color: '#ffb4aa'}}/>
                                            </Button>
                                        </div>
                                    ))}
                                </Box>
                                <Grid sx={{
                                    width: '100%',
                                    marginTop: '10px',
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignContent: 'center',
                                    pr: 1.2
                                }}>
                                    <Button sx={{
                                        border: 1,
                                        borderColor: '#7a9a65',
                                        minWidth: '40px',
                                        height: '40px',
                                        boxShadow: 8,
                                        backgroundColor: '#8fb677',
                                        borderRadius: '30px',
                                        ':hover': {backgroundColor: '#7a9a65'}
                                    }} disableRipple onClick={handleAddTextField}>
                                        <AddIcon sx={{color: '#201a19'}}></AddIcon>
                                    </Button>
                                    <Button sx={{
                                        minWidth: '90px',
                                        height: '40px',
                                        marginLeft: '92px',
                                        boxShadow: 8,
                                        backgroundColor: '#dfc38c',
                                        borderRadius: '30px',
                                        fontFamily: 'Roboto Bold',
                                        fontSize: '14px',
                                        ':hover': {backgroundColor: '#c7ad7b'},
                                        color: '#201a19',
                                    }} disableRipple>
                                        Share!
                                    </Button>
                                </Grid>
                            </Menu>

                            <Slide direction="up" in={isHovered || isMenuOpen} mountOnEnter unmountOnExit timeout={700}>
                                <IconButton
                                    sx={{
                                        backgroundColor: '#ffb4aa',
                                        ':hover': {backgroundColor: '#fda498'},
                                        height: '56px',
                                        width: '56px',
                                        boxShadow: 8,
                                        marginTop: '15px',
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
                                        }} disableRipple>Yes</Button>
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
export default NoteCardLayout;