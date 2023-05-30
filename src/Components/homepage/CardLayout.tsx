import {
    Box,
    CardActionArea,
    CardContent,
    Fab,
    Slide,
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon,
    TextField,
    Typography
} from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import * as React from "react";
import InfoIcon from '@mui/icons-material/Info';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';

import './CardLayout.css'
import {styled} from "@mui/material/styles";
import {useState} from "react";
import Button from "@mui/material/Button";

function CardLayout() {
    const CssTextField = styled(TextField)({
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

    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <Card className='cardsLayout'>
                <CardContent sx={{ m: -1 }}
                             onMouseEnter={handleMouseEnter}
                             onMouseLeave={handleMouseLeave}>
                    <Typography noWrap className='cardTitle'>
                        Prova titolo molto lungo
                    </Typography>

                    <hr className='separationLine'></hr>

                    <CssTextField
                        multiline
                        sx={{fontFamily : 'Roboto Regular',
                            borderRadius : '22px',
                            width : '100%',
                            height : '290px'}}
                        rows={12}
                        inputProps={{
                            sx: {
                                color: '#574419 !important',
                            },
                        }}
                    />

                    <Slide direction="up" in={isHovered} mountOnEnter unmountOnExit>
                        <Fab sx={{backgroundColor : '#dfc38c', marginLeft : '27px', marginRight : '25px',
                            ':hover' : {backgroundColor : '#deba7b'} }}>
                            <InfoIcon sx={{color : '#3f2e04'}} />
                        </Fab>
                    </Slide>

                    <Slide direction="up" in={isHovered} mountOnEnter unmountOnExit>
                        <Fab sx={{backgroundColor : '#e7bdb7',  marginRight : '25px', ':hover' : {backgroundColor : '#e3ada5'}}}>
                            <ShareIcon sx={{color : '#442926'}} />
                        </Fab>
                    </Slide>

                    <Slide direction="up" in={isHovered} mountOnEnter unmountOnExit>
                        <Fab sx={{backgroundColor : '#ffb4aa', ':hover' : {backgroundColor : '#fda498'} }}>
                            <DeleteIcon sx={{color : '#690003'}} />
                        </Fab>
                    </Slide>
                </CardContent>
            </Card>
        </>
    );
}
export default CardLayout;