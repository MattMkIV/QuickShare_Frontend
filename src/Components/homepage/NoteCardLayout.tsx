import {
    Box,
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

    /************************* Custom Tooltip element for cards *************************/
    const LightTooltip = styled(({className, ...props}: TooltipProps) => (
        <Tooltip {...props} classes={{popper: className}}/>))(({theme}) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#dec2a2',
            color: 'rgba(0, 0, 0, 0.87)',
            boxShadow: theme.shadows[3],
            fontSize: 11.5,
        },
    }));

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

    return (
        <>
            <Card className='cardsLayout' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
                                }} onClick={(event) => topBarClick(event, 'notification')}
                                     aria-controls='notification'
                                     aria-haspopup='true'>
                                    <InfoIcon sx={{color: '#3f2e04'}}/>
                                </Fab>
                            </Slide>

                            <Menu
                                id='notification'
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl && menuId === 'notification')}
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
                                    Created in:
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
                                    marginTop: '20px',
                                    color: '#3f2e04'
                                }}>Actually shared with:</Typography>

                                <Box sx={{
                                    width: '100%',
                                    height: '237px',
                                    borderRadius: '22px',
                                    backgroundColor: '#b2945f',
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
                                                       height: '10px',
                                                       width: '202px',
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
                                    }
                                }}>
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
                                        height: '320px',
                                        borderRadius: '22px',
                                        backgroundColor: '#ffb4aa',
                                    }
                                }}>
                            </Menu>
                        </Box>
                    )}
                </CardContent>
            </Card>
        </>
    );
}
export default NoteCardLayout;