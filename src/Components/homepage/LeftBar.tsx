//MUI
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListItem from '@mui/material/ListItem';
import HomeIcon from '@mui/icons-material/Home';
import ListItemText from '@mui/material/ListItemText';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ListItemButton from '@mui/material/ListItemButton';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, CardContent, Dialog, DialogContent, Grow, IconButton, TextField, Typography} from "@mui/material";
//CSS
import './LeftBar.css';
import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import {AddPhotoAlternate} from '@mui/icons-material';
import {useNavigate} from "react-router-dom";
import Card from "@mui/material/Card";
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';


const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {

    const {onClose, selectedValue, open} = props;
    const handleClose = () => {
        onClose(selectedValue);

    };

    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardEnter = (cardId: any) => {
        setSelectedCard(cardId);
    };

    const handleCardLeave = () => {
        setSelectedCard(null);
    };

    const [isFirstChecked, setIsFirstChecked] = useState(true);


    /************************* Dynamic add new shared mail *************************/
    const [textFields, setTextFields] = useState<string[]>([]);

    const handleAddTextField = () => {
        setTextFields([...textFields, '']);
    };

    const handleRemoveTextField = (index: number) => {
        const updatedTextFields = [...textFields];
        updatedTextFields.splice(index, 1);
        setTextFields(updatedTextFields);
    };

    const handleChangeTextField = (index: number, value: string) => {
        const updatedTextFields = [...textFields];
        updatedTextFields[index] = value;
        setTextFields(updatedTextFields);
    };

    /************************* Dynamic add new shared mail *************************/
    const [listElements, addListElements] = useState<string[]>([]);

    const handleListElements = () => {
        addListElements([...listElements, '']);
    };

    const handleRemoveListElements = (index: number) => {
        const updatedTextFields = [...listElements];
        updatedTextFields.splice(index, 1);
        addListElements(updatedTextFields);
    };

    const handleChangeListElements = (index: number, value: string) => {
        const updatedTextFields = [...listElements];
        updatedTextFields[index] = value;
        addListElements(updatedTextFields);
    };

    /************************* List show add list element button *************************/
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const [retardTransition, setRetardTransition] = useState(false)
    const retardTransitionTrue = () => {
        setRetardTransition(true);
    }
    const retardTransitionFalse = () => {
        setTimeout(() => {
            setRetardTransition(false);
        }, 300);
    }

    const handleAddClick = () => {
        // Aggiungi qui la logica per confermare la modifica
    };


    return (
        <Dialog onClose={handleClose} open={open} sx={{
            "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                    borderRadius: '15px',
                },
            },
        }}>
            <DialogContent sx={{backgroundColor: '#a08c8a', width: '598px', height: '600px'}}>
                {isFirstChecked ?
                    <Typography sx={{
                        color: '#201a19',
                        fontSize: '43px',
                        fontFamily: 'Roboto Light'
                    }}>Add something:</Typography> : ''}

                {isFirstChecked ?
                    <Grid sx={{display: 'flex', justifyContent: 'center', height: '72.1%', marginTop: '15px'}}>
                        <Grid sx={{height: '100%'}}>
                            <Card key='Card Note'
                                  onMouseEnter={() => handleCardEnter('Card Note')}
                                  onMouseLeave={handleCardLeave}
                                  sx={{
                                      boxShadow: 8,
                                      width: '260px',
                                      height: '240px',
                                      backgroundColor: '#ede0de',
                                      ':hover': {boxShadow: 12},
                                      border: selectedCard === 'Card Note' ? '3px solid #b4261f' : 'none',
                                  }}>
                                <CardContent sx={{m: -1}}>
                                    <TextField
                                        inputProps={{
                                            sx: {color: '#442926 !important'}
                                        }}
                                        sx={{
                                            '& fieldset': {border: 'none'},
                                            '& .MuiInputBase-input': {
                                                fontFamily: 'Roboto Black',
                                                fontSize: '27px !important',
                                                height: '10px',
                                                width: '240px',
                                            },
                                            marginLeft: '-15px',
                                        }}
                                        placeholder='Title Note'>
                                    </TextField>

                                    <hr className='littleSeparationLine'></hr>

                                    <TextField
                                        multiline
                                        rows={8}
                                        placeholder='Content here...'
                                        inputProps={{
                                            sx: {
                                                color: '#574419 !important',
                                            },
                                        }}
                                        sx={{
                                            width: '100%',
                                            '& fieldset': {border: 'none'},
                                            '& .MuiInputBase-input': {
                                                fontFamily: 'Roboto Light',
                                                fontSize: '20px !important'
                                            }
                                        }}
                                    />
                                </CardContent>
                            </Card>
                            <Card key='Card Event'
                                  onMouseEnter={() => handleCardEnter('Card Event')}
                                  onMouseLeave={handleCardLeave}
                                  sx={{
                                      boxShadow: 8,
                                      width: '260px',
                                      height: '120px',
                                      marginTop: '30px',
                                      backgroundColor: '#ede0de',
                                      ':hover': {boxShadow: 12},
                                      border: selectedCard === 'Card Event' ? '3px solid #b4261f' : 'none',
                                  }}>
                                <CardContent sx={{m: -1}}>
                                    <TextField
                                        inputProps={{
                                            sx: {color: '#442926 !important'}
                                        }}
                                        sx={{
                                            '& fieldset': {border: 'none'},
                                            '& .MuiInputBase-input': {
                                                fontFamily: 'Roboto Black',
                                                fontSize: '27px !important',
                                                height: '10px',
                                                width: '240px',
                                            },
                                            marginLeft: '-15px',
                                        }}
                                        placeholder='Title Event'>
                                    </TextField>

                                    <hr className='littleSeparationLine'></hr>

                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker/>
                                    </LocalizationProvider>

                                </CardContent>
                            </Card>
                        </Grid>

                        <Card key='Card List'
                              onMouseEnter={() => {
                                  handleCardEnter('Card List');
                                  handleMouseEnter();
                                  retardTransitionTrue()
                              }}
                              onMouseLeave={() => {
                                  handleCardLeave();
                                  handleMouseLeave();
                                  retardTransitionFalse()
                              }}
                              sx={{
                                  width: '260px',
                                  height: '390px',
                                  marginLeft: '30px',
                                  borderRadius: '12px',
                                  backgroundColor: '#ede0de',
                                  boxShadow: 8,
                                  ':hover': {boxShadow: 12},
                                  border: selectedCard === 'Card List' ? '3px solid #b4261f' : 'none',
                              }}>
                            <CardContent sx={{m: -1}}>
                                <TextField
                                    inputProps={{
                                        sx: {color: '#442926 !important'}
                                    }}
                                    sx={{
                                        '& fieldset': {border: 'none'},
                                        '& .MuiInputBase-input': {
                                            fontFamily: 'Roboto Black',
                                            fontSize: '27px !important',
                                            height: '10px',
                                            width: '240px',
                                        },
                                        marginLeft: '-15px',
                                    }}
                                    placeholder='Title List'>
                                </TextField>

                                <hr className='littleSeparationLine'></hr>

                                <Box
                                    sx={{
                                        height: isHovered || retardTransition ? '250px' : '320px',
                                        marginTop: '7px',
                                        overflowY: 'scroll',
                                    }}>
                                    {listElements.map((listElements, index) => (
                                        <Grid key={index}>
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
                                                            borderColor: 'rgba(63,46,4,0.37)',
                                                            borderRadius: '5px',
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
                                                        borderRadius: '5px',
                                                        fontFamily: 'Roboto Regular',
                                                        fontSize: '18px !important',
                                                        height: '5px',
                                                        width: '155px',
                                                        boxShadow: 4,
                                                    },
                                                    pb: 1.2,
                                                    marginLeft: '5px',
                                                }}
                                                value={listElements}
                                                type='text'
                                                onChange={(e) => handleChangeListElements(index, e.target.value)}
                                            />
                                            <Button onClick={() => handleRemoveListElements(index)}
                                                    sx={{
                                                        backgroundColor: '#920609',
                                                        height: '30px',
                                                        minWidth: '30px',
                                                        borderRadius: '22px',
                                                        marginTop: '4px',
                                                        marginLeft: '10px',
                                                        boxShadow: 4,
                                                        ':hover': {backgroundColor: '#9f3a3c'}
                                                    }}
                                                    disableRipple>
                                                <DeleteIcon sx={{height: '15px', width: '15px', color: '#ffb4aa'}}/>
                                            </Button>
                                        </Grid>
                                    ))}
                                </Box>
                                <Grow in={isHovered} onClick={handleListElements} mountOnEnter unmountOnExit
                                      timeout={400}>
                                    <IconButton sx={{
                                        height: '56px',
                                        width: '56px',
                                        marginTop: '5px',
                                        marginLeft: '182px',
                                        boxShadow: 8,
                                        border: 1,
                                        borderColor: '#7a9a65',
                                        backgroundColor: '#8fb677',
                                        ':hover': {backgroundColor: '#7a9a65'}
                                    }}>
                                        <AddIcon sx={{color: '#201a19', width: '20px', height: '20px'}}/>
                                    </IconButton>
                                </Grow>
                            </CardContent>
                        </Card>
                    </Grid> : ''}

                {!isFirstChecked ?
                    <Grid wrap='nowrap' sx={{display: 'flex'}}>
                        <Typography sx={{
                            color: '#201a19',
                            fontSize: '43px',
                            fontFamily: 'Roboto Light'
                        }}>Share with:</Typography>
                    </Grid> : ''}

                {!isFirstChecked ?
                    <Box sx={{
                        width: '100%',
                        height: '74%',
                        overflowY: 'scroll',
                        borderRadius: '22px',
                        backgroundColor: '#d8c2be',
                        marginTop: '5px',
                        pl: 2, pr: 2, pt: 2,
                        boxShadow: 8,
                    }}>
                        {textFields.map((textField, index) => (
                            <Grid key={index} style={{display: 'flex', alignContent: 'center'}}>
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
                                                borderRadius: '25px',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#3f2e04',
                                                boxShadow: 12,
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#3f2e04',
                                                borderWidth: '2px',
                                            },
                                        },
                                        '& .MuiInputBase-input': {
                                            borderRadius: '25px',
                                            fontFamily: 'Roboto Regular',
                                            fontSize: '18px !important',
                                            height: '15px',
                                            width: '440px',
                                            boxShadow: 4,
                                        },
                                        pb: 2,
                                    }}
                                    value={textField}
                                    type='email'
                                    placeholder='Email'
                                    onChange={(e) => handleChangeTextField(index, e.target.value)}
                                />
                                <Button onClick={() => handleRemoveTextField(index)}
                                        sx={{
                                            backgroundColor: '#920609',
                                            height: '40px',
                                            minWidth: '40px',
                                            borderRadius: '22px',
                                            marginLeft: '10px',
                                            marginTop: '5px',
                                            boxShadow: 4,
                                            ':hover': {backgroundColor: '#9f3a3c'}
                                        }}
                                        disableRipple>
                                    <DeleteIcon sx={{height: '20px', width: '20px', color: '#ffb4aa'}}/>
                                </Button>
                            </Grid>
                        ))}
                    </Box> : ''}

                <Grid sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    {isFirstChecked ?
                        <Button
                            endIcon={<NavigateNextIcon sx={{height: '25px', width: '25px', color: '#201a19'}}/>}
                            onClick={() => setIsFirstChecked(!isFirstChecked)}
                            sx={{
                                fontFamily: 'Roboto Bold',
                                height: '60px',
                                width: '110px',
                                fontSize: '18px',
                                backgroundColor: '#dfc38c',
                                borderRadius: '25px',
                                color: '#3f2e04',
                                marginTop: '15px',
                                display: 'flex',
                                textAlign: 'center',
                                alignContent: 'center',
                                justifyContent: 'flex-end',
                                boxShadow: 4,
                                ':hover': {backgroundColor: '#dab887'}
                            }}
                            variant="contained"
                        >Next</Button> : ''}

                    {!isFirstChecked ?
                        <Button
                            startIcon={<AddIcon sx={{height: '25px', width: '25px', color: '#201a19'}}/>}
                            variant="contained" onClick={handleAddTextField} sx={{
                            fontFamily: 'Roboto Bold',
                            height: '60px',
                            minWidth: '80px',
                            fontSize: '18px',
                            marginRight: '341px',
                            marginTop: '15px',
                            backgroundColor: '#528839',
                            borderRadius: '50px',
                            color: '#201a19',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            boxShadow: 8,
                            ':hover': {backgroundColor: '#477531'}
                        }}>Add</Button> : ''}

                    {!isFirstChecked ? <Button
                        onClick={() => setIsFirstChecked(!isFirstChecked)}
                        sx={{
                            fontFamily: 'Roboto Bold',
                            height: '60px',
                            width: '110px',
                            fontSize: '18px',
                            backgroundColor: '#dfc38c',
                            borderRadius: '25px',
                            color: '#3f2e04',
                            marginTop: '15px',
                            display: 'flex',
                            textAlign: 'center',
                            alignContent: 'center',
                            justifyContent: 'center',
                            boxShadow: 8,
                            ':hover': {backgroundColor: '#c2a46f'}
                        }}
                        variant="contained"
                    >Done</Button> : ''}

                </Grid>
            </DialogContent>
        </Dialog>
    );
}

function LeftBar({
                     onSelect
                 }: any) {
    //Variable declaration
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
        setSelectedValue(value);
    };

    const navigate = useNavigate();

    const [selectedItem, setSelectedItem] = useState('home');

    const handleItemClick = (item: any) => {
        setSelectedItem(item);
    };

    //Function

    return (
        <>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />

            <Grid sx={{display: {xs: 'none', md: 'block'}}} className='leftBarGrid'>
                <Button
                    sx={{
                        fontFamily: 'Roboto Bold',
                        height: '70px',
                        width: '96%',
                        marginLeft: '10px',
                        fontSize: '21px',
                        textAlign: 'left',
                        borderRadius: '22px',
                        alignContent: 'center',
                        background: '#920609',
                        justifyContent: 'flex-start',
                        color: '#ffdad5',
                        boxShadow: 8,
                        ':hover': {backgroundColor: '#a4070a'}
                    }}
                    variant="contained" startIcon={<AddIcon sx={{height: '26px', width: '26px'}}/>}
                    onClick={handleClickOpen}>New</Button>

                <List sx={{width: '100%', color: 'white'}}>
                    <ListItem className='noPaddingTopBottom' onClick={function (event) {
                        navigate("/homepage");
                        handleItemClick("home");
                    }}>
                        <ListItemButton
                            className={selectedItem === "home" ? "selected" : ""}
                            sx={{
                                marginLeft: '-16px',
                                borderRadius: '0 22px 22px 0',
                                marginRight: '-16px',
                                color: '#ffb4aa',
                                ':hover': {backgroundColor: '#382d2c'},
                            }}
                            disableRipple>
                            <HomeIcon className='icon'/>
                            <ListItemText primary="Home"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={function (event) {
                        navigate("/homepage/notes");
                        handleItemClick("notes");
                    }}>
                        <ListItemButton
                            className={selectedItem === "notes" ? "selected" : ""}
                            sx={{
                                marginLeft: '-16px',
                                borderRadius: '0 22px 22px 0',
                                marginRight: '-16px',
                                color: '#ffb4aa',
                                ':hover': {backgroundColor: '#382d2c'},
                            }}
                            disableRipple>
                            <AssignmentIcon className='icon'/>
                            <ListItemText primary="Notes"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={function (event) {
                        navigate("/homepage/lists");
                        handleItemClick("lists");
                    }}>
                        <ListItemButton
                            className={selectedItem === "lists" ? "selected" : ""}
                            sx={{
                                marginLeft: '-16px',
                                borderRadius: '0 22px 22px 0',
                                marginRight: '-16px',
                                color: '#ffb4aa',
                                ':hover': {backgroundColor: '#382d2c'},
                            }}
                            disableRipple>
                            <FormatListBulletedIcon className='icon'/>
                            <ListItemText primary="Lists"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={function (event) {
                        navigate("/homepage/photo");
                        handleItemClick("photo");
                    }}>
                        <ListItemButton
                            className={selectedItem === "photo" ? "selected" : ""}
                            sx={{
                                marginLeft: '-16px',
                                borderRadius: '0 22px 22px 0',
                                marginRight: '-16px',
                                color: '#ffb4aa',
                                ':hover': {backgroundColor: '#382d2c'},
                            }}
                            disableRipple>
                            <AddPhotoAlternate className='icon'/>
                            <ListItemText primary="Photos"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={function (event) {
                        navigate("/homepage/calendar");
                        handleItemClick("calendar");
                    }}>
                        <ListItemButton
                            className={selectedItem === "calendar" ? "selected" : ""}
                            sx={{
                                marginLeft: '-16px',
                                borderRadius: '0 22px 22px 0',
                                marginRight: '-16px',
                                color: '#ffb4aa',
                                ':hover': {backgroundColor: '#382d2c'},
                            }}
                            disableRipple>
                            <DateRangeIcon className='icon'/>
                            <ListItemText primary="Calendar "/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={function (event) {
                        navigate("/homepage/accountbalance");
                        handleItemClick("account balance");
                    }}>
                        <ListItemButton
                            className={selectedItem === "account balance" ? "selected" : ""}
                            sx={{
                                marginLeft: '-16px',
                                borderRadius: '0 22px 22px 0',
                                marginRight: '-16px',
                                color: '#ffb4aa',
                                ':hover': {backgroundColor: '#382d2c'},
                            }}
                            disableRipple>
                            <AccountBalanceWalletIcon className='icon'/>
                            <ListItemText primary="Account balance"
                                          sx={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Grid>
        </>
    );
}

export default LeftBar;