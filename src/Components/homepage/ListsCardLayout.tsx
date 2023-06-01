import {Box, Card, CardContent, Fab, Slide, Typography} from '@mui/material';
import ListsCheckBoxComponent from './ListsCheckBoxComponent'
import InfoIcon from "@mui/icons-material/Info";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import React from 'react';

function ListCardLayout() {


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
                <CardContent sx={{m: -1}}
                             onMouseEnter={handleMouseEnter}
                             onMouseLeave={handleMouseLeave}>
                    <Typography noWrap className='cardTitle'>
                        Prova titolo molto lungo
                    </Typography>

                    <hr className='separationLine'></hr>

                    <Box sx={{height: '283px', marginTop : '7px', overflowY : 'scroll'}}>
                        <ListsCheckBoxComponent></ListsCheckBoxComponent>
                        <ListsCheckBoxComponent></ListsCheckBoxComponent>
                        <ListsCheckBoxComponent></ListsCheckBoxComponent>
                        <ListsCheckBoxComponent></ListsCheckBoxComponent>
                        <ListsCheckBoxComponent></ListsCheckBoxComponent>
                        <ListsCheckBoxComponent></ListsCheckBoxComponent>
                        <ListsCheckBoxComponent></ListsCheckBoxComponent>
                        <ListsCheckBoxComponent></ListsCheckBoxComponent>
                        <ListsCheckBoxComponent></ListsCheckBoxComponent>
                        <ListsCheckBoxComponent></ListsCheckBoxComponent>
                        <ListsCheckBoxComponent></ListsCheckBoxComponent>
                        <ListsCheckBoxComponent></ListsCheckBoxComponent>
                        <ListsCheckBoxComponent></ListsCheckBoxComponent>
                        <ListsCheckBoxComponent></ListsCheckBoxComponent>
                        <ListsCheckBoxComponent></ListsCheckBoxComponent>
                    </Box>

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
                </CardContent>
            </Card>
        </>
    );
}

export default ListCardLayout;