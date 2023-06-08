import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from "@mui/material/Grid";
import * as React from "react";
import {useState} from "react";

import './UploadPhoto.css'
import Button from "@mui/material/Button";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import {createTheme, Fab, Grow, ThemeProvider} from "@mui/material";
import {styled} from "@mui/material/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from "@mui/icons-material/Info";
import ShareIcon from "@mui/icons-material/Share";


const customTheme = createTheme({
    palette: {
        primary: {
            main: '#ba1a1a',
        },
        secondary: {
            main: '#574419',
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

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };
    const handleMouseLeave = () => {
        setHoveredIndex(-1);
    };

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
                        {itemData.map((item, index) => (
                            <ImageListItem
                                key={index}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}>
                                <img
                                    loading="lazy"
                                    alt={item.title}
                                    className='masonryImageStyle'
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                />
                                <Grow in={hoveredIndex === index} mountOnEnter unmountOnExit timeout={100}>
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
                </Box>
            </Box>
        </>
    );
}

export default UploadPhoto;

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
    },
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
    },
    {
        img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage',
    },
    {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle',
    },
    {
        img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table',
    },
];