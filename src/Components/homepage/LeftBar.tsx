//MUI
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListItem from '@mui/material/ListItem';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import ListItemText from '@mui/material/ListItemText';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ListItemButton from '@mui/material/ListItemButton';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
//Components
import Home from '../../Pages/View/home/Home';
import Lists from "../../Pages/View/list/Lists";
import Notes from "../../Pages/View/notes/Notes";
import UploadPhoto from '../../Pages/View/uploadPhoto/UploadPhoto';
//CSS
import './LeftBar.css';
import React from 'react';
import Grid from "@mui/material/Grid";
import {AddPhotoAlternate} from '@mui/icons-material';
import {Dialog, DialogTitle} from "@mui/material";

//Other

const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}
function SimpleDialog(props: SimpleDialogProps) {

    const { onClose, selectedValue, open } = props;
    const handleClose = () => {
        onClose(selectedValue);

    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Set backup account</DialogTitle>
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
    //Function

    return (
        <>
            <Grid item className='newButtonGrid'>
                <Button className='buttonNew' style={{background: 'linear-gradient(45deg, #067572 20%, #9BE84B 90%)',
                    justifyContent: "flex-start"}} variant="contained" startIcon={<AddIcon/>} onClick={handleClickOpen}
                >New</Button>
            </Grid>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
            <Grid container className='listClass'>
                <List sx={{width: '100%', color: 'white'}}>
                    <ListItem className='noPaddingTopBottom' onClick={() => onSelect(Home)}>
                        <ListItemButton autoFocus className='clickAnimation' disableRipple>
                            <HomeIcon className='icon'/>
                            <ListItemText primary="Home"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={() => onSelect(Notes)}>
                        <ListItemButton className='clickAnimation' disableRipple>
                            <AssignmentIcon className='icon'/>
                            <ListItemText primary="Notes"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={() => onSelect(Lists)}>
                        <ListItemButton className='clickAnimation' disableRipple>
                            <FormatListBulletedIcon className='icon'/>
                            <ListItemText primary="Lists"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={() => onSelect('Chat')}>
                        <ListItemButton className='clickAnimation' disableRipple>
                            <ChatIcon className='icon'/>
                            <ListItemText primary="Chat"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={() => onSelect(UploadPhoto)}>
                        <ListItemButton className='clickAnimation' disableRipple>
                            <AddPhotoAlternate className='icon'/>
                            <ListItemText primary="Photos"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={() => onSelect('Calendar')}>
                        <ListItemButton className='clickAnimation' disableRipple>
                            <DateRangeIcon className='icon'/>
                            <ListItemText primary="Calendar "/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={() => onSelect('AccountBalance')}>
                        <ListItemButton className='clickAnimation' disableRipple>
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