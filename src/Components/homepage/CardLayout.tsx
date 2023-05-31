import {
    Box,
    CardContent,
    Fab,
    Slide,
    TextField,
    Typography
} from "@mui/material";
import Card from "@mui/material/Card";
import * as React from "react";
import InfoIcon from '@mui/icons-material/Info';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';

import './CardLayout.css'
import {styled} from "@mui/material/styles";

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

                    <Box sx={{height: '290px', overflowY : 'scroll'}}>
                        <CssTextField
                            multiline
                            sx={{fontFamily : 'Roboto Regular', width : '100%', height : '290px'}}
                            rows={12}
                            inputProps={{
                                sx: {
                                    color: '#574419 !important',
                                },
                            }}
                        />
                    </Box>

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