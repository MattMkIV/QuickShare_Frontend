import {
    Box,
    Button,
    CardContent,
    Fab,
    Fade,
    Grow,
    Menu,
    MenuItem,
    Slide, Stack,
    TextField,
    Tooltip,
    tooltipClasses,
    TooltipProps,
    Zoom
} from "@mui/material";
import Card from "@mui/material/Card";
import * as React from "react";
import InfoIcon from '@mui/icons-material/Info';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';

import './NoteCardLayout.css'
import Grid from "@mui/material/Grid";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import {styled} from "@mui/material/styles";
import {useState} from "react";
import SendIcon from "@mui/icons-material/Send";


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

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event :any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

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
                            }
                        }}
                        className='cardTitle'
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
                        <Grid>
                            <LightTooltip TransitionComponent={Zoom} title='Show info'
                                          sx={{marginTop: '-7px !important'}}
                                          placement="bottom">
                                <Slide direction="up" in={isHovered} mountOnEnter unmountOnExit timeout={100}>
                                        <Fab sx={{
                                            backgroundColor: '#dfc38c', marginLeft: '27px', marginRight: '25px',
                                            ':hover': {backgroundColor: '#deba7b'}
                                        }}
                                             aria-controls={open ? 'fade-menu' : undefined}
                                             aria-haspopup="true"
                                             aria-expanded={open ? 'true' : undefined}
                                             onClick={handleClick}>
                                            <InfoIcon sx={{color: '#3f2e04'}}/>
                                        </Fab>
                                </Slide>
                            </LightTooltip>
                            <Menu
                                id="fade-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                PaperProps={{ elevation: 12, style: { backgroundColor: 'transparent', borderRadius : '22px', position : 'absolute'}}}>

                            </Menu>
                            <LightTooltip TransitionComponent={Zoom} title='Share' sx={{marginTop: '-7px !important'}}
                                          placement="bottom">
                                <Slide direction="up" in={isHovered} mountOnEnter unmountOnExit timeout={200}>
                                    <Fab sx={{
                                        backgroundColor: '#e7bdb7', marginRight: '25px',
                                        ':hover': {backgroundColor: '#e3ada5'}
                                    }}>
                                        <ShareIcon sx={{color: '#442926'}}/>
                                    </Fab>
                                </Slide>
                            </LightTooltip>
                            <LightTooltip TransitionComponent={Zoom} title='Delete' sx={{marginTop: '-7px !important'}}
                                          placement="bottom">
                                <Slide direction="up" in={isHovered} mountOnEnter unmountOnExit timeout={400}>
                                    <Fab sx={{backgroundColor: '#ffb4aa', ':hover': {backgroundColor: '#fda498'}}}>
                                        <DeleteIcon sx={{color: '#690003'}}/>
                                    </Fab>
                                </Slide>
                            </LightTooltip>
                        </Grid>

                    )}
                </CardContent>
            </Card>
        </>
    );
}
export default NoteCardLayout;