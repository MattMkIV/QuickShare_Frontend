//MUI
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListItem from '@mui/material/ListItem';
import HomeIcon from '@mui/icons-material/Home';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, CardContent, Dialog, DialogContent, IconButton, Slide, TextField, Typography} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

//CSS
import React, {useRef, useState} from 'react';
import Grid from "@mui/material/Grid";
import {useNavigate} from "react-router-dom";
import Card from "@mui/material/Card";
import dayjs, {Dayjs} from 'dayjs';
import { CreateNote, UpdateNote } from '../../Utils/note_service';
import { TakeUserInfoAll, TakeUserInfoByEmail } from '../../Utils/AuthService';
import { CreateElementList, CreateList, UpdateList } from '../../Utils/list_service';


const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {

    const [titleNote, setTitle] = useState('Insert Title');
    const [bodyNote, setBody] = useState('');
    const [newElement, setNewElement] = useState(0);
    const [isFirstChecked, setIsFirstChecked] = useState(true);
    const [textFields, setTextFields] = useState<string[]>([]);
    const noteContent = useRef<any>(new Array());
    const listContent = useRef<any>(new Array());
    const whoAdd = useRef<any>('');

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


    /************************* Dynamic add new list element *************************/
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


    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));

    const handleChangeTitle = (event: any) => {
        setTitle(event.target.value);
    };

    const handleChangeBody = (event: any) => {
        setBody(event.target.value);
    };

    // Insert new elemnt
    const takeInfo = (data: any) => {
        
        console.log(data.get('noteTitle'));
        console.log(data.get('noteBody'));
        console.log(data.get('listTitle'));
        console.log(listElements);

        // Take note info
        noteContent.current.push(data.get('noteTitle'));
        noteContent.current.push(data.get('noteBody'));

        // Take list info
        listContent.current.push(data.get('listTitle'));
        let listItems = [];
          
        for (let i = 0; i < listElements.length; i++) {
            listItems.push(listElements[i]);
        }

        listContent.current.push(listItems);

        if(noteContent.current[0] !== '' && noteContent.current[1] !== '')
            return 'N';
    
        if(listContent.current[0] !== '')
            return 'L';
    }

    const createNote = async (data: any) => {
        setNewElement(0);
        let emails = [];
        let emailAllowedUser: any = [];
        let title = noteContent.current[0];
        let body = noteContent.current[1];

        let noteCreatedInfo: any = await CreateNote(title, body);

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
        }

        window.location.reload();
    }

    // Submit form
    const handleCreate = async (event: any) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget);

        whoAdd.current = takeInfo(data);

        switch(whoAdd.current) {
            case 'N': createNote(data);
                    break;
            case 'L': createList(data);
                    break;
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
                <Typography sx={{
                    color: '#201a19',
                    fontSize: '43px',
                    fontFamily: 'Roboto Light'
                }}>Add something:</Typography>
                <form onSubmit={handleCreate}>
                    <Grid sx={{display: 'flex', justifyContent: 'center', height: '72.1%', marginTop: '15px'}}>
                        <Card key='Card Note'
                            onMouseEnter={() => handleCardEnter('Card Note')}
                            onMouseLeave={handleCardLeave}
                            sx={{
                                boxShadow: 8,
                                width: '260px',
                                height: '390px',
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
                                    placeholder='Note Title'
                                    name='noteTitle'>
                                </TextField>

                                <hr className='littleSeparationLine'></hr>

                                <TextField
                                    multiline
                                    rows={14}
                                    placeholder='Content here...'
                                    name='noteBody'
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
                                            fontSize: '20px !important',
                                        }
                                    }}
                                />
                            </CardContent>
                        </Card>

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
                                    placeholder='List Title'
                                    name='listTitle'>
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
                    </Grid>


                    <Grid sx={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button
                            endIcon={<CheckIcon sx={{height: '25px', width: '25px', color: '#201a19'}}/>}
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
                        >Done</Button>
                    </Grid>
                </form>
            </DialogContent>
        </Dialog>
    );
}

function LeftBarGuest({
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

    const [selectedItem, setSelectedItem] = useState(localStorage.getItem('section'));

    const handleItemClick = (item: string) => {
        localStorage.setItem('section', item);
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

            <Grid sx={{
                display: {
                    xs: 'none', md: 'block'
                },
                marginTop: '30px',
                marginRight: '20px'
            }}>
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
                        navigate("/homepageGuest");
                        handleItemClick("homeGuest");
                    }}>
                        <ListItemButton
                            className={selectedItem === "homeGuest" ? "selected" : ""}
                            sx={{
                                marginLeft: '-16px',
                                borderRadius: '0 22px 22px 0',
                                marginRight: '-16px',
                                color: '#ffb4aa',
                                ':hover': {backgroundColor: '#382d2c'},
                            }}
                            disableRipple>
                            <HomeIcon sx={{
                                marginLeft: '10px',
                                marginRight: '13px'
                            }}/>
                            <ListItemText primary="Home"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={function (event) {
                        navigate("/homepageGuest/notes");
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
                            <AssignmentIcon sx={{
                                marginLeft: '10px',
                                marginRight: '13px'
                            }}/>
                            <ListItemText primary="Notes"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={function (event) {
                        navigate("/homepageGuest/lists");
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
                            <FormatListBulletedIcon sx={{
                                marginLeft: '10px',
                                marginRight: '13px'
                            }}/>
                            <ListItemText primary="Lists"/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Grid>
        </>
    );
}

export default LeftBarGuest;