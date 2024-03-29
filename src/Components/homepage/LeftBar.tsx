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
import {Box, CardContent, Dialog, DialogContent, IconButton, Slide, TextField, Typography} from "@mui/material";

//CSS
import './LeftBar.css';
import React, {useRef, useState} from 'react';
import Grid from "@mui/material/Grid";
import {AddPhotoAlternate} from '@mui/icons-material';
import {useNavigate} from "react-router-dom";
import Card from "@mui/material/Card";
import {TakeUserInfoAll, TakeUserInfoByEmail} from '../../Utils/AuthService';
import {CreateNote, UpdateNote} from '../../Utils/note_service';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, {Dayjs} from 'dayjs';
import {CreateElementList, CreateList, UpdateList} from '../../Utils/list_service';
import {CreateEvent} from '../../Utils/calendar_service';

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {

    const [newElement, setNewElement] = useState(0);
    const {onClose, selectedValue, open} = props;
    const [selectedCard, setSelectedCard] = useState(null);
    const [isFirstChecked, setIsFirstChecked] = useState(true);
    const [textFields, setTextFields] = useState<string[]>([]);
    const [isHovered, setIsHovered] = React.useState(false);
    const noteContent = useRef<any>([]);
    const listContent = useRef<any>([]);
    const eventContent = useRef<any>([]);
    const whoAdd = useRef<any>('');

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleCardEnter = (cardId: any) => {
        setSelectedCard(cardId);
    };

    const handleCardLeave = () => {
        setSelectedCard(null);
    };


    /************************* Dynamic add new shared mail *************************/

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

    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));

    // Insert new elemnt
    const takeInfo = (data: any) => {

        // Take note info
        noteContent.current.push(data.get('noteTitle'));
        noteContent.current.push(data.get('noteBody'));

        // Take list info
        listContent.current.push(data.get('listTitle'));
        let listItems = [];

        for (let i = 0; i < listElements.length; i++) {
            listItems.push(data.get('email' + i));
        }

        listContent.current.push(listItems);

        // Take event info
        eventContent.current.push(data.get('eventTitle'));

        // Format date
        let dataCreazione: any = value;
        let dataFormattata;

        if (dataCreazione.$M + 1 < 10) {
            dataFormattata = dataCreazione.$y + "-0" + (dataCreazione.$M + 1) + "-" + dataCreazione.$D;
        } else {
            dataFormattata = dataCreazione.$y + "-" + (dataCreazione.$M + 1) + "-" + dataCreazione.$D;
        }

        eventContent.current.push(dataFormattata);

        setNewElement(1);

        if (noteContent.current[0] !== '' && noteContent.current[1] !== '')
            return 'N';

        if (listContent.current[0] !== '')
            return 'L';

        if (eventContent.current[0] !== '')
            return 'E';
    }

    const createNote = async (data: any) => {
        setNewElement(0);
        let emails = [];
        let emailAllowedUser: any = [];
        let title = noteContent.current[0];
        let body = noteContent.current[1];

        let noteCreatedInfo: any = await CreateNote(title, body);

        if (!noteCreatedInfo[0]) {
            for (let i = 0; i < textFields.length; i++) {
                emails.push(textFields[i]);
            }

            if (emails.length !== 0) {

                for (let i = 0; i < emails.length; i++) {
                    let response: any = await TakeUserInfoByEmail(emails[i]);
                    emailAllowedUser.push(response.id);
                }

                let response: any = await TakeUserInfoAll(emailAllowedUser);

                for (let i = 0; i < response.length; i++) {
                    await UpdateNote(title, body, response[i].id, noteCreatedInfo[1].note_id);
                }
            }
        }

        window.location.reload();
    }

    const createList = async (data: any) => {
        setNewElement(0);
        let emails = [];
        let emailAllowedUser: any = [];
        let title = listContent.current[0];
        let listElemnt = listContent.current[1];

        let listCreatedInfo: any = await CreateList(title);

        if (!listCreatedInfo[0]) {

            for (let i = 0; i < listElemnt.length; i++) {
                await CreateElementList(listCreatedInfo[1].list_id, listElemnt[i]);
            }

            for (let i = 0; i < textFields.length; i++) {
                emails.push(textFields[i]);
            }

            if (emails.length !== 0) {

                for (let i = 0; i < emails.length; i++) {
                    console.log(emails[i]);
                    let response: any = await TakeUserInfoByEmail(emails[i]);
                    console.log(response);
                    emailAllowedUser.push(response.id);
                }

                let responses: any = await TakeUserInfoAll(emailAllowedUser);

                for (let i = 0; i < responses.length; i++) {
                    await UpdateList(listCreatedInfo[1].list_id, title, responses[i].id);
                }
            }
        }

        window.location.reload();
    }

    const createEvent = async (data: any) => {
        setNewElement(0);

        let title = eventContent.current[0];
        let date = eventContent.current[1];

        await CreateEvent(date, title);

        window.location.reload();
    }

    // Submit form
    const handleCreate = (event: any) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget);

        if (newElement === 0) {
            whoAdd.current = takeInfo(data);
            setIsFirstChecked(!isFirstChecked);
        } else {
            switch (whoAdd.current) {
                case 'N':
                    createNote(data);
                    break;
                case 'L':
                    createList(data);
                    break;
                case 'E':
                    createEvent(data);
                    break;
            }
        }
    }

    return (
        <Dialog onClose={handleClose} open={open} sx={{
            "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                    borderRadius: '15px',
                },
            },
        }}>
            <DialogContent sx={{backgroundColor: '#a08c8a', width: '598px', height: '600px'}}>
                <form onSubmit={handleCreate}>
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
                                            type='text'
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
                                            placeholder='Note Title'
                                            name='noteTitle'>
                                        </TextField>

                                        <hr className='littleSeparationLine'></hr>

                                        <TextField
                                            multiline
                                            type='text'
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
                                            name='noteBody'
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
                                            type='text'
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
                                            placeholder='Event'
                                            name='eventTitle'>
                                        </TextField>

                                        <hr className='littleSeparationLine'></hr>

                                        <Grid sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: '65px'
                                        }}>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    format="DD/MM/YYYY"
                                                    views={['day', 'month', 'year']}
                                                    formatDensity="spacious"
                                                    slotProps={{textField: {size: 'small',}}}
                                                    value={value}
                                                    onChange={(newValue) => {
                                                        setValue(newValue);
                                                    }}
                                                    sx={{
                                                        width: '235px',
                                                        height: '40px',
                                                        boxShadow: 3,
                                                        borderRadius: '5px !important',
                                                        backgroundColor: '#a08c8a',
                                                        '& .MuiInput-underline': {
                                                            borderBottomColor: 'transparent',
                                                        },
                                                        '& .MuiFormLabel-root': {
                                                            color: '#3f2e04',
                                                        },
                                                        '& .MuiOutlinedInput-root': {
                                                            '& fieldset': {
                                                                borderColor: '#3f2e04',
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
                                                            fontSize: '16px !important',
                                                        },
                                                    }}
                                                />
                                            </LocalizationProvider>
                                        </Grid>
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
                                        type='text'
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
                                        placeholder='List Title'
                                        name='listTitle'>
                                    </TextField>

                                    <hr className='littleSeparationLine'></hr>

                                    <Box
                                        sx={{
                                            height: isHovered || retardTransition ? '250px' : '320px',
                                            marginTop: '7px',
                                            overflowY: 'auto',
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
                                                        },
                                                        pb: 1.2,
                                                        marginLeft: '5px',
                                                    }}
                                                    value={listElements}
                                                    type='text'
                                                    name={'email' + index}
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
                                                            boxShadow: 3,
                                                            ':hover': {backgroundColor: '#9f3a3c'}
                                                        }}
                                                        disableRipple>
                                                    <DeleteIcon sx={{height: '15px', width: '15px', color: '#ffb4aa'}}/>
                                                </Button>
                                            </Grid>
                                        ))}
                                    </Box>
                                    <Slide direction='up' in={isHovered} onClick={handleListElements} mountOnEnter
                                           unmountOnExit
                                           timeout={200}>
                                        <IconButton sx={{
                                            height: '56px',
                                            width: '56px',
                                            marginTop: '5px',
                                            marginLeft: '178px',
                                            boxShadow: 8,
                                            border: 1,
                                            borderColor: '#7a9a65',
                                            backgroundColor: '#8fb677',
                                            ':hover': {backgroundColor: '#7a9a65'}
                                        }}>
                                            <AddIcon sx={{color: '#201a19', width: '20px', height: '20px'}}/>
                                        </IconButton>
                                    </Slide>
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
                            height: '400px',
                            overflowY: 'hide',
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
                                type="submit"
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

                        {!isFirstChecked ?
                            <Button
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
                                type="submit"
                            >Done</Button> : ''}
                    </Grid>
                </form>
            </DialogContent>
        </Dialog>
    );
}

function LeftBar({
                     onSelect
                 }: any) {
    //Variable declaration
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
        setSelectedValue(value);
    };

    const navigate = useNavigate();

    const [selectedItem, setSelectedItem] = useState(localStorage.getItem('section') || 'home');

    const handleItemClick = (item: string) => {
        let stateRender = localStorage.getItem('isSearchRender');
        if (stateRender === 'false' || stateRender === null) {
            localStorage.setItem('section', item);
            setSelectedItem(item);

            switch (item) {
                case ('home') : {
                    navigate("/homepage");
                    break;
                }
                case ('notes') : {
                    navigate("/homepage/notes");
                    break;
                }
                case ('lists') : {
                    navigate("/homepage/lists");
                    break;
                }
                case ('calendar') : {
                    navigate("/homepage/calendar");
                    break;
                }
                case ('photo') : {
                    navigate("/homepage/photo");
                    break;
                }
                case ('account balance') : {
                    navigate("/homepage/accountbalance");
                    break;
                }
            }
        }
    };

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