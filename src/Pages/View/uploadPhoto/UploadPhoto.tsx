import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from "@mui/material/Grid";
import * as React from "react";
import {useState} from "react";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import './UploadPhoto.css'
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";
import {Alert, Divider, Fab, Grow, Menu, Snackbar, TextField, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from "@mui/icons-material/Info";
import ShareIcon from "@mui/icons-material/Share";
import { useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { checkJwt, TakeUserInfoAll, TakeUserInfoByEmail } from '../../../Utils/AuthService';
import { AddAllowedPhoto, AddPhoto, DeleteImage, TakeImage } from '../../../Utils/image_service';
import AddIcon from "@mui/icons-material/Add";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import {Buffer} from 'buffer';

function UploadPhoto() {
    
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    let jwtError = false;
    let navigate = useNavigate();
    const [photos, setPhotos] = useState<any>([]);
    const [open, setOpen] = useState(false);
    const [clickedImage, setClickedImage] = useState();
    
    useEffect(() => {
        const check = async () => {
            jwtError = await checkJwt();
            if(jwtError) navigate("/");
        }

        const takePhotos = async () => {
            let response:any = await TakeImage();
            let photoInfo = [];
            
            for (let i = 0; i < response.length; i++) {
                var element = response[i];
                let userInfo = await TakeUserInfoAll(element.allowed);
                
                let all = {
                    "image_id": response[i].image_id,
                    "image_name": response[i].data,
                    "upload_data": response[i].upload_data,
                    "allowed": userInfo
                }

                photoInfo.push(all);
            }

            setPhotos(photoInfo);
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

    const deleteImage = async (imageId: any) => {
        console.log("IMAGE ID: "+imageId);
        let isError = await DeleteImage(imageId);
        window.location.reload();
    }

    const addAllowed = async (event: any) => {

        let emailAllowedUser:any = [];
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        //Take Value

        for(let i=0; i < textFields.length; i++) {
            let response:any = await TakeUserInfoByEmail(data.get('email'+i));
            emailAllowedUser.push(response.id);
        }
        
        let response:any = await TakeUserInfoAll(emailAllowedUser);
        let imageId = data.get('image_id');

        for(let i=0; i < response.length; i++) {
            let isError = await AddAllowedPhoto(imageId, response[i].id);
        }

        window.location.reload();
    }

    /************************* Menù pop up functions *************************/
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const [menuId, setMenuId] = useState<string | undefined>(undefined);
    const topBarClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
        setAnchorEl(event.currentTarget);
        setMenuId(id);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    /************************* Share pop up TextField *************************/
    const [textFields, setTextFields] = useState<string[]>([]);

    const handleAddTextField = () => {
        setTextFields([...textFields, '']);
    };

    const handleRemoveTextField = (index: number) => {
        const updatedTextFields = [...textFields];
        updatedTextFields.splice(index, 1);
        setTextFields(updatedTextFields);
    };

    /************************* Upload photo event *************************/
    const handleUploadClick = async (event: any) => {
        let imageBase64;
        const file = event.target.files[0];
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = async function (e) {
                imageBase64 = reader.result;
                console.log(imageBase64);
                let isError = await AddPhoto(imageBase64);
                window.location.reload();
            };
        }
    };

    const handleClickAlert = () => {
        setOpen(true);
    };

    const handleCloseAlert = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
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
                        {photos.map((photo:any, index:any) => (
                            <ImageListItem
                                key={index}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}>
                                <img
                                    loading="lazy"
                                    className='masonryImageStyle'
                                    // src={`${photo.image_name}?w=248&fit=crop&auto=format`}
                                    // srcSet={`${photo.image_name}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${photo.image_name}`}
                                    //srcSet={`${photo.image_name}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                />
                                
                                <Grow in={hoveredIndex === index} mountOnEnter unmountOnExit timeout={100}>
                                    <Fab sx={{
                                        position: 'absolute', bottom: '15px', right: '15px', backgroundColor: '#ffb4aa',
                                        ':hover': {backgroundColor: '#fda498'}
                                    }} onClick={(event) => {
                                        topBarClick(event, 'delete');
                                        setSelectedItemIndex(index);
                                    }}
                                         aria-controls='delete'
                                         aria-haspopup='true'>
                                        <DeleteIcon sx={{color: '#690003'}}/>
                                    </Fab>
                                </Grow>

                                <Menu
                                    id='delete'
                                    MenuListProps={{
                                        'aria-labelledby': 'delete',
                                    }}
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl && menuId === 'delete' && selectedItemIndex === index)}
                                    onClose={(event) => {
                                        handleClose();
                                        setSelectedItemIndex(-1);
                                    }}
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
                                            height: '103px',
                                            borderRadius: '22px',
                                            backgroundColor: '#ffb4aa',
                                        }
                                    }} sx={{backgroundColor: 'rgba(0,0,0,0.44)'}}
                                >
                                    <Typography sx={{
                                        fontFamily: 'Roboto Black',
                                        fontSize: '17px',
                                        marginLeft: '15px',
                                        marginTop: '5px',
                                        color: '#3f2e04'
                                    }}>Delete permanently?</Typography>
                                    <Box sx={{backgroundColor: '#fd9d91', height: '77px', borderRadius: '22px'}}>
                                        <Grid sx={{display: 'flex', justifyContent: 'center'}}>
                                            <Button sx={{
                                                boxShadow: 8,
                                                height: '45px',
                                                minWidth: '85px',
                                                borderRadius: '22px',
                                                backgroundColor: '#5d3f3b',
                                                color: '#ffdad5',
                                                fontFamily: 'Roboto Regular',
                                                fontSize: '15px',
                                                marginTop: '10px',
                                                ':hover': {backgroundColor: '#49302b'}
                                            }}
                                                    disableRipple
                                                    onClick={() => {
                                                        handleClose();
                                                    }}
                                            >No</Button>
                                            <Button sx={{
                                                boxShadow: 8,
                                                height: '45px',
                                                minWidth: '85px',
                                                borderRadius: '22px',
                                                backgroundColor: '#920609',
                                                color: '#ffdad5',
                                                fontFamily: 'Roboto Regular',
                                                fontSize: '15px',
                                                marginLeft: '20px',
                                                marginTop: '10px',
                                                ':hover': {backgroundColor: '#7e0508'}
                                            }} disableRipple
                                            onClick={() => deleteImage(photo.image_id)}>Yes</Button>
                                        </Grid>
                                    </Box>
                                </Menu>

                                <Grow in={hoveredIndex === index} mountOnEnter unmountOnExit timeout={200} >
                                    <Fab sx={{
                                        position: 'absolute', bottom: '15px', right: '90px', backgroundColor: '#e7bdb7',
                                        ':hover': {backgroundColor: '#e3ada5'}
                                    }} onClick={(event) => {
                                        topBarClick(event, 'share');
                                        setSelectedItemIndex(index);
                                    }}
                                         aria-controls='share'
                                         aria-haspopup='true'>
                                        <ShareIcon sx={{color: '#442926'}}/>
                                    </Fab>
                                </Grow>

                                <Menu
                                    id='share'
                                    MenuListProps={{
                                        'aria-labelledby': 'share',
                                    }}
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl && menuId === 'share' && selectedItemIndex === index)}
                                    onClose={(event) => {
                                        handleClose();
                                        setSelectedItemIndex(-1);
                                    }}
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
                                            overflowY: 'hidden'
                                        }
                                    }} sx={{backgroundColor: 'rgba(0,0,0,0.44)'}}
                                >   
                                    <form onSubmit={addAllowed}>
                                        <Typography sx={{
                                            fontFamily: 'Roboto Black',
                                            fontSize: '17px',
                                            marginLeft: '15px',
                                            marginTop: '5px',
                                            color: '#3f2e04',
                                        }}>Share with:</Typography>
                                        <Box sx={{
                                            width: '100%',
                                            height: '220px',
                                            borderRadius: '22px',
                                            backgroundColor: '#eaa79d',
                                            pl: 1.2, pr: 1.2, pt: 1.2,
                                            overflowY: 'scroll',
                                        }}>
                                            {textFields.map((textField, index) => (
                                                <div key={index} style={{display: 'flex'}}>
                                                    <TextField
                                                        inputProps={{
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
                                                                    borderColor: '#3f2e04',
                                                                    borderWidth: '2px',
                                                                },
                                                            },
                                                            '& .MuiInputBase-input': {
                                                                borderRadius: '18px',
                                                                fontFamily: 'Roboto Regular',
                                                                fontSize: '15px !important',
                                                                height: '5px',
                                                                width: '202px',
                                                            },
                                                            marginBottom: 1.2
                                                        }}
                                                        placeholder='Email'
                                                        name={'email'+index}
                                                    />
                                                    <input type="hidden" name="image_id" value={photo.image_id}/>
                                                    <Button onClick={() => handleRemoveTextField(index)}
                                                            sx={{
                                                                backgroundColor: '#920609',
                                                                height: '30px',
                                                                minWidth: '30px',
                                                                borderRadius: '22px',
                                                                marginLeft: '10px',
                                                                marginTop: '3px',
                                                                boxShadow: 4,
                                                                ':hover': {backgroundColor: '#9f3a3c'}
                                                            }}
                                                            disableRipple>
                                                        <DeleteIcon sx={{height: '15px', width: '15px', color: '#ffb4aa'}}/>
                                                    </Button>
                                                </div>
                                            ))}
                                        </Box>
                                        <Grid sx={{
                                            width: '100%',
                                            marginTop: '10px',
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            alignContent: 'center',
                                            pr: 1.2
                                        }}>
                                            <Button sx={{
                                                border: 1,
                                                borderColor: '#7a9a65',
                                                minWidth: '40px',
                                                height: '40px',
                                                boxShadow: 8,
                                                backgroundColor: '#8fb677',
                                                borderRadius: '30px',
                                                ':hover': {backgroundColor: '#7a9a65'}
                                            }} disableRipple onClick={handleAddTextField}>
                                                <AddIcon sx={{color: '#201a19'}}></AddIcon>
                                            </Button>
                                            <Button sx={{
                                                minWidth: '90px',
                                                height: '40px',
                                                marginLeft: '92px',
                                                boxShadow: 8,
                                                backgroundColor: '#dfc38c',
                                                borderRadius: '30px',
                                                fontFamily: 'Roboto Bold',
                                                fontSize: '14px',
                                                ':hover': {backgroundColor: '#c7ad7b'},
                                                color: '#201a19',
                                            }} disableRipple
                                            type="submit">
                                                Share!
                                            </Button>
                                        </Grid>
                                    </form>
                                </Menu>

                                <Grow in={hoveredIndex === index} mountOnEnter unmountOnExit timeout={400}>
                                    <Fab sx={{
                                        position: 'absolute',
                                        bottom: '15px',
                                        right: '165px',
                                        backgroundColor: '#dfc38c',
                                        ':hover': {backgroundColor: '#deba7b'}
                                    }} onClick={(event) => {
                                        topBarClick(event, 'info');
                                        setSelectedItemIndex(index);
                                    }}
                                         aria-controls='info'
                                         aria-haspopup='true'>
                                        <InfoIcon sx={{color: '#3f2e04'}}/>
                                    </Fab>
                                </Grow>

                                <Menu
                                    id="info"
                                    MenuListProps={{
                                        'aria-labelledby': 'info',
                                    }}
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl && menuId === 'info' && selectedItemIndex === index)}
                                    onClose={(event) => {
                                        handleClose();
                                        setSelectedItemIndex(-1);
                                    }}
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
                                    }} sx={{backgroundColor: 'rgba(0,0,0,0.44)'}}
                                >
                                    <Typography component="span" display="inline-block"
                                                sx={{
                                                    fontFamily: 'Roboto Black',
                                                    fontSize: '17px',
                                                    marginLeft: '15px',
                                                    marginTop: '5px',
                                                    color: '#3f2e04'
                                                }}>
                                        Upload:
                                    </Typography>
                                    <Typography component="span" display="inline-block" whiteSpace="nowrap"
                                                sx={{
                                                    fontFamily: 'Roboto Light',
                                                    fontSize: '17px',
                                                    marginLeft: '10px',
                                                    color: '#3f2e04'
                                                }}>
                                        {photo.upload_data}
                                    </Typography>

                                    <Divider sx={{
                                        width: '220px',
                                        marginTop: '5px',
                                        boxShadow: 24,
                                        position: 'absolute',
                                        borderColor: 'rgba(63,46,4,0.38)',
                                        marginLeft: '15px'
                                    }}/>

                                    <Typography sx={{
                                        fontFamily: 'Roboto Black',
                                        fontSize: '17px',
                                        marginLeft: '15px',
                                        marginTop: '10px',
                                        color: '#3f2e04'
                                    }}>Actually shared with:</Typography>

                                    <Box sx={{
                                        width: '100%',
                                        height: '248px',
                                        borderRadius: '22px',
                                        backgroundColor: '#d9b267',
                                        overflowY: 'scroll',
                                        pl: 1.2, pr: 1.2, pt: 1.2
                                    }}>
                                        {photo.allowed.map((user:any, index:any) => (
                                            <TextField key={index} inputProps={{
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
                                                            height: '5px',
                                                            width: '202px',
                                                            borderRadius: '18px',
                                                            boxShadow: 4,
                                                        },
                                                        marginBottom: 1.2
                                                    }}
                                                    defaultValue={user.email}
                                                    disabled>
                                            </TextField>
                                        ))}
                                    </Box>
                                </Menu>
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <Button
                        component="label"
                        sx={{
                            width: '80px',
                            height: '80px',
                            position: 'fixed',
                            bottom: 45,
                            right: 45,
                            borderRadius: '90px',
                            boxShadow: 24,
                            backgroundColor: '#ba1a1a',
                            ':hover': {backgroundColor: '#690003', transform: 'scale(1.1)'}
                        }}
                        disableRipple
                        onClick={handleClickAlert}>

                        <FileUploadIcon sx={{color: '#ffdad5', height: '30px', width: '30px'}}/>

                        <input type='file' accept='image/png,image/jpeg,image/jpg' onChange={handleUploadClick} hidden/>
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default UploadPhoto;