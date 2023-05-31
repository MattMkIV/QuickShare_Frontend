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
//CSS
import './LeftBar.css';
import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import {AddPhotoAlternate} from '@mui/icons-material';
import {Box, Dialog} from "@mui/material";
import {useNavigate} from "react-router-dom";


//Other

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

    return (
        <Dialog onClose={handleClose} open={open}>
            <Box sx={{width: '600px', height: '700px'}} bgcolor='orange'>
            </Box>
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
                        fontFamily: 'Roboto Bold', height: '70px', width: '96%', marginLeft: '10px',
                        fontSize: '20px', textAlign: 'left', borderRadius: '22px'
                    }}
                    style={{background: '#920609', justifyContent: "flex-start", color: '#ffdad5'}}
                    variant="contained" startIcon={<AddIcon/>}
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
                    <ListItem className='noPaddingTopBottom' onClick={() => onSelect('AccountBalance')}>
                        <ListItemButton style={{color: '#ffb4aa'}} className='clickAnimation'>
                            <AccountBalanceWalletIcon className='icon'/>
                            <ListItemText primary="Account balance"/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Grid>
        </>
    );
}

export default LeftBar;