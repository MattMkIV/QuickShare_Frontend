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
import {Box, CardContent, Dialog, DialogContent, Fab, Slide, TextField, Typography} from "@mui/material";
//CSS
import './LeftBar.css';
import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import {AddPhotoAlternate} from '@mui/icons-material';
import {useNavigate} from "react-router-dom";
import Card from "@mui/material/Card";


const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {


    const [titleNote, setTitle] = useState('Insert Title');
    const [bodyNote, setBody] = useState('');
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

    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleAddClick = () => {
        // Aggiungi qui la logica per confermare la modifica
    };

    const handleChangeTitle = (event:any) => {
        setTitle(event.target.value);
    };

    const handleChangeBody = (event:any) => {
        setBody(event.target.value);
    };

    return (
        <Dialog onClose={handleClose} open={open} sx={{
            "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                    borderRadius: '12px',
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
                            <Card key='Card 1'
                                  onMouseEnter={() => handleCardEnter('Card 1')}
                                  onMouseLeave={handleCardLeave}
                                  sx={{
                                      boxShadow: 8,
                                      width: '260px',
                                      height: '240px',
                                      borderRadius: '12px',
                                      backgroundColor: '#ede0de',
                                      ':hover': {boxShadow: 12},
                                      border: selectedCard === 'Card 1' ? '3px solid #b4261f' : 'none',
                                  }}>
                                <CardContent sx={{m: -1}}>
                                    <TextField
                                        inputProps={{
                                            sx: {color: '#442926 !important'}
                                        }}
                                        sx={{
                                            '& .MuiInput-underline': {
                                                borderBottomColor: 'transparent',
                                            },
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: 'transparent',
                                                    borderRadius: '22px',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: 'transparent',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: 'transparent',
                                                },
                                            },
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
                            <Card key='Card 3'
                                  onMouseEnter={() => handleCardEnter('Card 3')}
                                  onMouseLeave={handleCardLeave} sx={{
                                width: '260px',
                                height: '120px',
                                marginTop: '30px',
                                backgroundColor: '#ede0de',
                                boxShadow: '8px 8px 10px 4px rgba(0, 0, 0, 0.22)',
                                border: selectedCard === 'Card 3' ? '3px solid #b4261f' : 'none',
                            }}>
                                <CardContent sx={{m: -1}}>
                                    <Typography noWrap sx={{
                                        width: '272px',
                                        marginTop: '5px',
                                        fontSize: '25px',
                                        fontWeight: 'bold',
                                        letterSpacing: '-0.2px',
                                        fontFamily: 'Roboto Bold'
                                    }} contentEditable={true}>
                                        Event title
                                    </Typography>

                                    <hr className='littleSeparationLine'></hr>

                                    <Box>

                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Card key='Card 2'
                              onMouseEnter={() => handleCardEnter('Card 2')}
                              onMouseLeave={handleCardLeave}
                              sx={{
                                  width: '260px',
                                  height: '390px',
                                  marginLeft: '30px',
                                  borderRadius: '12px',
                                  backgroundColor: '#ede0de',
                                  boxShadow: '8px 8px 10px 4px rgba(0, 0, 0, 0.22)',
                                  border: selectedCard === 'Card 2' ? '3px solid #b4261f' : 'none',
                              }}>
                            <CardContent sx={{m: -1}}>
                                <Typography noWrap className='cardTitle' contentEditable={true}>
                                    Title List
                                </Typography>

                                <hr className='littleSeparationLine'></hr>

                                <Box onMouseEnter={handleMouseEnter}
                                     onMouseLeave={handleMouseLeave}
                                     sx={{
                                         height: '283px',
                                         marginTop: '7px',
                                         overflowY: 'scroll',
                                     }}>
                                    <Slide direction="up" in={isHovered} mountOnEnter unmountOnExit
                                           timeout={100}>
                                        <Fab sx={{
                                            position: 'absolute',
                                            marginLeft: '180px',
                                            marginTop: '255px',
                                            maxWidth: '50px',
                                            minHeight: '50px',
                                            maxHeight: '10px',
                                            backgroundColor: '#528839',
                                            ':hover': {backgroundColor: '#477531'}
                                        }}>
                                            <AddIcon sx={{color: '#201a19', width: '20px', height: '20px'}}/>
                                        </Fab>
                                    </Slide>
                                </Box>
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
                                                borderRadius: '18px',
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
                                            borderRadius: '18px',
                                            fontFamily: 'Roboto Regular',
                                            fontSize: '18px !important',
                                            height: '15px',
                                            width: '440px',
                                            boxShadow: 4,
                                        },
                                        pb: 2,
                                    }}
                                    value={textField}
                                    placeholder='Email or Username'
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

function LeftBar({onSelect}: any) {
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
                            style={{color: '#ffb4aa'}}
                            className={selectedItem === "home" ? "selected" : ""}
                            sx={{marginLeft: '-16px', borderRadius: '0 22px 22px 0', marginRight: '-16px'}}>
                            <HomeIcon className='icon'/>
                            <ListItemText primary="Home"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={function (event) {
                        navigate("/homepage/notes");
                        handleItemClick("notes");
                    }}>
                        <ListItemButton
                            style={{color: '#ffb4aa'}}
                            className={selectedItem === "notes" ? "selected" : ""}
                            sx={{marginLeft: '-16px', borderRadius: '0 22px 22px 0', marginRight: '-16px'}}>
                            <AssignmentIcon className='icon'/>
                            <ListItemText primary="Notes"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={function (event) {
                        navigate("/homepage/lists");
                        handleItemClick("lists");
                    }}>
                        <ListItemButton
                            style={{color: '#ffb4aa'}}
                            className={selectedItem === "lists" ? "selected" : ""}
                            sx={{marginLeft: '-16px', borderRadius: '0 22px 22px 0', marginRight: '-16px'}}>
                            <FormatListBulletedIcon className='icon'/>
                            <ListItemText primary="Lists"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={function (event) {
                        navigate("/homepage/photo");
                        handleItemClick("photo");
                    }}>
                        <ListItemButton
                            style={{color: '#ffb4aa'}}
                            className={selectedItem === "photo" ? "selected" : ""}
                            sx={{marginLeft: '-16px', borderRadius: '0 22px 22px 0', marginRight: '-16px'}}>
                            <AddPhotoAlternate className='icon'/>
                            <ListItemText primary="Photos"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={function (event) {
                        navigate("/homepage/calendar");
                        handleItemClick("calendar");
                    }}>
                        <ListItemButton
                            style={{color: '#ffb4aa'}}
                            className={selectedItem === "calendar" ? "selected" : ""}
                            sx={{marginLeft: '-16px', borderRadius: '0 22px 22px 0', marginRight: '-16px'}}>
                            <DateRangeIcon className='icon'/>
                            <ListItemText primary="Calendar "/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={function (event) {
                        navigate("/homepage/accountbalance");
                        handleItemClick("account balance");
                    }}>
                        <ListItemButton
                            style={{color: '#ffb4aa'}}
                            className={selectedItem === "account balance" ? "selected" : ""}
                            sx={{marginLeft: '-16px', borderRadius: '0 22px 22px 0', marginRight: '-16px'}}>
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