import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from "@mui/material/Grid";
import * as React from "react";

import './UploadPhoto.css'
import Button from "@mui/material/Button";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import {createTheme, ThemeProvider} from "@mui/material";
import {styled} from "@mui/material/styles";


const customTheme = createTheme({
    palette: {
        primary: {
            main: '#FF5C4D',
        },
        secondary: {
            main: '#ff910c',
        }
    },
});

const StyledButton = styled(Button)`
  ${({ theme }) => `
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
    //Render
    return(
        <>
            <Box className='homeBox'>
                <Grid container>
                    <h1 className='titleSection'>Most Recent:</h1>
                </Grid>

            <hr className='lineCentralContent'></hr>

                <Box sx={{ width: '100%'}}>
                    <ImageList variant="masonry" cols={3} gap={8} className='imageListPadding'>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    loading="lazy"
                                    alt={item.title}
                                    className='masonryPhotoStyle'
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <ThemeProvider theme={customTheme}>
                        <StyledButton className='uploadButton' style={{width: '70px', height: '70px'}} type="submit"
                                      variant="contained" startIcon={<FileUploadIcon/>}
                                      sx={{position: 'fixed', bottom: 45, right: 45}}></StyledButton>
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