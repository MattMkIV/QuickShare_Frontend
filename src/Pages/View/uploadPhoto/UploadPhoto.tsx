import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from "@mui/material/Grid";
import { TakeImage } from '../../../Utils/image_service';
import './UploadPhoto.css'
import Button from "@mui/material/Button";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useEffect, useState } from 'react';


function UploadPhoto() {

    const [images, setImages] = useState<any>();

    useEffect( () => {
        const fetchData = async () => {
            setImages(await TakeImage()); 
            console.log();     
        }
    
        fetchData();
    }, []);

    //Render
    return(
        <>
            <Grid container xs>
                <Grid item xs>
                    <h1 className='photoPageTitle'>Photos:</h1>
                </Grid>
                <Grid>
                    <Button className='uploadButton' style={{background: 'linear-gradient(45deg, #FF5C4D 30%, #ff8e53 90%)'}} type="submit" variant="contained"
                            startIcon={<FileUploadIcon/>}>Upload</Button>
                </Grid>
            </Grid>

            <hr className='lineCentralContent'></hr>

            <Box sx={{ width: '100%', height: '100%'}}>
                <ImageList variant="masonry" cols={3} gap={8} className='imageListPadding'>
                    {images === undefined ? '' : (images.map((item:any) => (
                        <ImageListItem key={item.img}>
                            <img
                                loading="lazy"
                                alt={item.image_name}
                                className='masonryPhotoStyle'
                                src={item.image_name+"?w=248&fit=crop&auto=format"}
                                srcSet={item.image_name+"w=248&fit=crop&auto=format&dpr=2 2x"}
                            />
                        </ImageListItem>
                    )))}
                </ImageList>
            </Box>
        </>
    );
}

export default UploadPhoto;
