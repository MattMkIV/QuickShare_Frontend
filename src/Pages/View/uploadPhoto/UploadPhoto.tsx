import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from "@mui/material/Grid";
import * as React from "react";
import {useState} from "react";

import './UploadPhoto.css'
import Button from "@mui/material/Button";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import {createTheme, Fab, Grow, Modal, ThemeProvider} from "@mui/material";
import {styled} from "@mui/material/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from "@mui/icons-material/Info";
import ShareIcon from "@mui/icons-material/Share";
import { useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { checkJwt } from '../../../Utils/AuthService';
import { DeleteImage, TakeImage } from '../../../Utils/image_service';


const customTheme = createTheme({
    palette: {
        primary: {
            main: '#ba1a1a',
        },
        secondary: {
            main: '#715c2e',
        }
    },
});

const StyledButton = styled(Button)`
  ${({theme}) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.2);
  }
  `}
`;


function UploadPhoto() {
    
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    let jwtError = false;
    let navigate = useNavigate();
    const [photo, setPhoto] = useState([]);
    const [open, setOpen] = useState(false);
    const [clickedImage, setClickedImage] = useState();
    

    useEffect(() => {
        const check = async () => {
            jwtError = await checkJwt();
            if(jwtError) navigate("/");
        }

        const takePhotos = async () => {
            let response:any = await TakeImage();
            setPhoto(response);
        }   

        check();
        takePhotos();
    }, []);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(-1);
    };

    const handleClose = () => setOpen(false);

    const askDeleteImage = async (imageId: any) => {
        console.log("IMAGE ID: "+imageId);
        setOpen(true);
        setClickedImage(imageId);
        //let isError = await DeleteImage(imageId);
    }

    const deleteImage = async (imageId: any) => {
        console.log("IMAGE ID: "+imageId);
        let isError = await DeleteImage(imageId);
    }

    //Render
    return (
        <>
            <Box className='homeBox'>
                <Grid container>
                    <h1 className='titleSection'>Photos:</h1>
                </Grid>

                <hr className='lineCentralContent'></hr>

                <Box sx={{width: '100%'}}>
                    <ImageList
                        variant="masonry"
                        cols={3}
                        gap={8}
                        sx={{marginTop: '20px', marginLeft: '25px', marginRight: '25px', alignItems: 'center'}}>
                        {photo.map((photo:any, index:any) => (
                            <ImageListItem
                                key={index}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}>
                                <img
                                    loading="lazy"
                                    className='masonryImageStyle'
                                    src={`${photo.image_name}?w=248&fit=crop&auto=format`}
                                    srcSet={`${photo.image_name}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                />
                                <Grow in={hoveredIndex === index} mountOnEnter unmountOnExit timeout={100} onClick={() => {askDeleteImage(photo.image_id)}}>
                                    <Fab sx={{
                                        position: 'absolute', bottom: '15px', right: '15px', backgroundColor: '#ffb4aa',
                                        ':hover': {backgroundColor: '#fda498'}
                                    }}>
                                        <DeleteIcon sx={{color: '#690003'}}/>
                                    </Fab>
                                </Grow>

                                <Grow in={hoveredIndex === index} mountOnEnter unmountOnExit timeout={200}>
                                    <Fab sx={{
                                        position: 'absolute', bottom: '15px', right: '90px', backgroundColor: '#e7bdb7',
                                        ':hover': {backgroundColor: '#e3ada5'}
                                    }}>
                                        <ShareIcon sx={{color: '#442926'}}/>
                                    </Fab>
                                </Grow>

                                <Grow in={hoveredIndex === index} mountOnEnter unmountOnExit timeout={400}>
                                    <Fab sx={{
                                        position: 'absolute',
                                        bottom: '15px',
                                        right: '165px',
                                        backgroundColor: '#dfc38c',
                                        ':hover': {backgroundColor: '#deba7b'}
                                    }}>
                                        <InfoIcon sx={{color: '#3f2e04'}}/>
                                    </Fab>
                                </Grow>

                            </ImageListItem>
                        ))}
                    </ImageList>

                    <ThemeProvider theme={customTheme}>
                        <StyledButton className='uploadButton'
                                      style={{width: '70px', height: '70px'}}
                                      type="submit"
                                      variant="contained"
                                      startIcon={<FileUploadIcon/>}
                                      sx={{position: 'fixed', bottom: 45, right: 45}}>

                            <input type="file" hidden/>
                        </StyledButton>
                    </ThemeProvider>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={{backgroundColor: 'red'}}>
                            <h1>Confermi di voler eliminare la foto?</h1>
                            <Button variant="outlined">Annulla</Button>
                            <Button variant="contained" onClick={() => deleteImage(clickedImage)}>Conferma</Button>
                        </Box>
                    </Modal>
                </Box>
            </Box>
        </>
    );
}

export default UploadPhoto;