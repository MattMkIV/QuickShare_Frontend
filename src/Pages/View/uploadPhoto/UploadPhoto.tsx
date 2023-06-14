import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from "@mui/material/Grid";
import * as React from "react";
import {useState} from "react";

import './UploadPhoto.css'
import Button from "@mui/material/Button";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import {createTheme, Divider, Fab, Grow, Menu, TextField, ThemeProvider, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from "@mui/icons-material/Info";
import ShareIcon from "@mui/icons-material/Share";
import AddIcon from "@mui/icons-material/Add";


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
                                            }} disableRipple>Yes</Button>
                                        </Grid>
                                    </Box>
                                </Menu>


                                <Grow in={hoveredIndex === index} mountOnEnter unmountOnExit timeout={200}>
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
                                                            boxShadow: 4,
                                                        },
                                                        marginBottom: 1.2
                                                    }}
                                                    placeholder='Email'
                                                />
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
                                        }} disableRipple>
                                            Share!
                                        </Button>
                                    </Grid>
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
                                        Created on:
                                    </Typography>
                                    <Typography component="span" display="inline-block" whiteSpace="nowrap"
                                                sx={{
                                                    fontFamily: 'Roboto Light',
                                                    fontSize: '17px',
                                                    marginLeft: '10px',
                                                    color: '#3f2e04'
                                                }}>
                                        19/03/2021
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
                                        <TextField inputProps={{
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
                                                   defaultValue='ciaocarlo@gmail.com'
                                                   disabled>
                                        </TextField>
                                    </Box>
                                </Menu>
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