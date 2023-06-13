import {
    Box,
    Button,
    CardContent,
    Fab,
    Grow,
    Menu,
    Slide,
    TextField,
    Tooltip,
    tooltipClasses,
    TooltipProps,
    Typography
} from "@mui/material";
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
import {styled} from "@mui/material/styles";
import Home from "../../Pages/View/home/Home";


const NoteCardLayout: React.FC = () => {
    /************************* Handle notes MouseEnter & MouseExit *************************/
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

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

    const [selectedItem, setSelectedItem] = useState(Home);
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

    return (
        <>
            <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='cardsLayout' sx={{boxShadow : 8}}>
                <CardContent sx={{m: -1}}>
                    <TextField
                        inputProps={{
                            sx: {color: '#442926 !important'}
                        }}
                        sx={{
                            '& .MuiInput-underline': {
                                borderBottomColor: 'transparent',
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'transparent',
                                    borderRadius: '22px',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'transparent',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'transparent',
                                },
                            },
                            '& .MuiInputBase-input': {
                                fontFamily: 'Roboto Black',
                                fontSize: '30px !important',
                                height: '15px',
                                width: '273px',
                            },
                            marginLeft: '-15px',
                        }}
                        defaultValue='PROVA TITOLO MOLTO LUNGO'
                        onClick={handleTextFieldClick}>
                    </TextField>

                    <hr className='separationLine'></hr>

                    <TextField
                        multiline
                        rows={12}
                        inputProps={{
                            sx: {
                                color: '#574419 !important',
                            },
                        }}
                        sx={{
                            width: '100%',
                            '& fieldset': {border: 'none'},
                            '& .MuiInputBase-input': {fontFamily: 'Roboto Light', fontSize: '20px !important'}
                        }}
                        onClick={handleTextFieldClick}
                    />

                    {isEditable ? (
                        <Grid>
                            <Grow in={isHovered} mountOnEnter unmountOnExit timeout={100}>
                                <Fab onClick={handleCloseClick} sx={{
                                    backgroundColor: '#ffb4aa', marginLeft: '55px', marginRight: '25px',
                                    ':hover': {backgroundColor: '#fda498'}
                                }}>
                                    <CloseIcon sx={{color: '#690003'}}/>
                                </Fab>
                            </Grow>

                            <Grow in={isHovered} mountOnEnter unmountOnExit timeout={200}>
                                <Fab onClick={handleConfirmClick} sx={{
                                    backgroundColor: '#65cc8f', marginLeft: '27px', marginRight: '25px',
                                    ':hover': {backgroundColor: '#58b27f'}
                                }}>
                                    <DoneIcon sx={{color: '#285740'}}/>
                                </Fab>
                            </Grow>

                        </Grid>
                    ) : (
                        <Box>
                            <Slide direction="up" in={isHovered} mountOnEnter unmountOnExit timeout={100}>
                                <Fab sx={{
                                    backgroundColor: '#dfc38c', marginLeft: '27px', marginRight: '25px',
                                    ':hover': {backgroundColor: '#deba7b'}
                                }} onClick={(event) => topBarClick(event, 'info')}
                                     aria-controls='info'
                                     aria-haspopup='true'>
                                    <InfoIcon sx={{color: '#3f2e04'}}/>
                                </Fab>
                            </Slide>

                            <Menu
                                id='info'
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl && menuId === 'info')}
                                onClose={handleClose}
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
                                }}>
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
                                                fontFamily: 'Roboto Regular',
                                                fontSize: '17px',
                                                marginLeft: '5px',
                                                color: '#3f2e04'
                                            }}>
                                    19/03/2021
                                </Typography>
                                <Typography sx={{
                                    fontFamily: 'Roboto Black',
                                    fontSize: '17px',
                                    marginLeft: '15px',
                                    marginTop: '10px',
                                    color: '#3f2e04'
                                }}>Actually shared with:</Typography>

                                <Box sx={{
                                    width: '100%',
                                    height: '246px',
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

                            <Slide direction="up" in={isHovered} mountOnEnter unmountOnExit timeout={200}>
                                <Fab sx={{
                                    backgroundColor: '#e7bdb7', marginRight: '25px',
                                    ':hover': {backgroundColor: '#e3ada5'}
                                }} onClick={(event) => topBarClick(event, 'share')}
                                     aria-controls='share'
                                     aria-haspopup='true'>
                                    <ShareIcon sx={{color: '#442926'}}/>
                                </Fab>
                            </Slide>

                            <Menu
                                id='share'
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl && menuId === 'share')}
                                onClose={handleClose}
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
                                }}>
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
                                                placeholder='Email or Username'
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
                                        fontFamily: 'Roboto Regular',
                                        fontSize: '14px',
                                        ':hover': {backgroundColor: '#c7ad7b'},
                                        color: '#201a19',
                                    }} disableRipple onClick={handleAddTextField}>
                                        Share!
                                    </Button>
                                </Grid>
                            </Menu>

                            <Slide direction="up" in={isHovered} mountOnEnter unmountOnExit timeout={400}>
                                <Fab sx={{
                                    backgroundColor: '#ffb4aa',
                                    ':hover': {backgroundColor: '#fda498'}
                                }} onClick={(event) => topBarClick(event, 'delete')}
                                     aria-controls='delete'
                                     aria-haspopup='true'>
                                    <DeleteIcon sx={{color: '#690003'}}/>
                                </Fab>
                            </Slide>

                            <Menu
                                id='delete'
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl && menuId === 'delete')}
                                onClose={handleClose}
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
                                }}>
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
                                        }} disableRipple>No</Button>
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
                        </Box>
                    )}
                </CardContent>
            </Card>
        </>
    );
}
export default NoteCardLayout;