import {CardContent, Fab, Grow, Slide, TextField, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import * as React from "react";
import InfoIcon from '@mui/icons-material/Info';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';

import './CardLayout.css'
import Grid from "@mui/material/Grid";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';


const CardLayout: React.FC = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const [isEditable, setIsEditable] = React.useState(false);
    const [textFieldValue, setTextFieldValue] = React.useState('');

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

    const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextFieldValue(event.target.value);
    };

    return (
        <>
            <Card className='cardsLayout'>
                <CardContent sx={{m: -1}}
                             onMouseEnter={handleMouseEnter}
                             onMouseLeave={handleMouseLeave}>
                    <Typography noWrap className='cardTitle' contentEditable={true}>
                        Prova titolo molto lungo
                    </Typography>

                    <hr className='separationLine'></hr>

                    <TextField
                        multiline
                        sx={{
                            fontFamily: 'Roboto Regular', width: '100%', height: '290px',
                            '& fieldset': {border: 'none'}
                        }}
                        rows={12}
                        inputProps={{
                            sx: {
                                color: '#574419 !important',
                            },
                        }}
                        value={textFieldValue}
                        onClick={handleTextFieldClick}
                        onChange={handleTextFieldChange}
                        disabled={!isEditable}
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
                            <Slide direction="up" in={isHovered} mountOnEnter unmountOnExit timeout={100}>
                                <Fab sx={{
                                    backgroundColor: '#dfc38c', marginLeft: '27px', marginRight: '25px',
                                    ':hover': {backgroundColor: '#deba7b'}
                                }}>
                                    <InfoIcon sx={{color: '#3f2e04'}}/>
                                </Fab>
                            </Slide>
                            <Slide direction="up" in={isHovered} mountOnEnter unmountOnExit timeout={200}>
                                <Fab sx={{
                                    backgroundColor: '#e7bdb7', marginRight: '25px',
                                    ':hover': {backgroundColor: '#e3ada5'}
                                }}>
                                    <ShareIcon sx={{color: '#442926'}}/>
                                </Fab>
                            </Slide>
                            <Slide direction="up" in={isHovered} mountOnEnter unmountOnExit timeout={400}>
                                <Fab sx={{backgroundColor: '#ffb4aa', ':hover': {backgroundColor: '#fda498'}}}>
                                    <DeleteIcon sx={{color: '#690003'}}/>
                                </Fab>
                            </Slide>
                        </Grid>
                    )}
                </CardContent>
            </Card>
        </>
    );
}
export default CardLayout;