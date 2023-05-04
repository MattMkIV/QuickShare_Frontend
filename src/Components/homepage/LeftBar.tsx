//MUI
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DateRangeIcon from '@mui/icons-material/DateRange';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
//CSS
import './LeftBar.css';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
//Other
import { useState } from 'react';

function LeftBar({onSelect}: any) {
    //Variable declaration
    const [selectedItem, setSelectedItem] = useState('');

    //Function
    const handleItemClick = (item: any) => {
        setSelectedItem(item);
        onSelect(item);
    };

    return(
        <>
            <Grid item className='newButtonGrid'>
                <Button className='buttonNew' variant="contained" startIcon={<AddIcon />} style={{justifyContent: "flex-start"}}>New</Button>
            </Grid>

            <Grid container className = 'listClass'>
                <List sx={{ width: '100%', color:'white'}}>
                    <ListItem className='noPaddingTopBottom' onClick={() => handleItemClick('Home')}>
                        <ListItemButton>
                            <HomeIcon className='icon'/>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={() => handleItemClick('Lists')}>
                        <ListItemButton>
                            <FormatListBulletedIcon className='icon'/>
                            <ListItemText primary="Lists" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={() => handleItemClick('Chat')}>
                        <ListItemButton>
                            <ChatIcon className='icon'/>
                            <ListItemText primary="Chat" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={() => handleItemClick('Notes')}>
                        <ListItemButton>
                                <AssignmentIcon className='icon'/>
                            <ListItemText primary="Notes" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={() => handleItemClick('Calendar')}>
                        <ListItemButton>
                                <DateRangeIcon className='icon'/>
                            <ListItemText primary="Calendar " />
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={() => handleItemClick('UploadPhoto')}>
                        <ListItemButton>
                                <UploadFileIcon className='icon'/>
                            <ListItemText primary="Upload photo" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={() => handleItemClick('AccountBalance')}>
                        <ListItemButton>
                                <AccountBalanceWalletIcon className='icon'/>
                            <ListItemText primary="Account balance" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Grid>
        </>
    );
}

export default LeftBar;