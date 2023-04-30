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
//Other

function LeftBar() {
    return(
        <>
            <Button variant="contained" startIcon={<AddIcon />} className='buttonNew'>New</Button>
            <List sx={{ width: '100%', color:'white'}}>
                <ListItem className='noPaddingTopBottom'>
                    <ListItemButton>
                        <HomeIcon className='icon'/>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem className='noPaddingTopBottom'>
                    <ListItemButton>
                        <FormatListBulletedIcon className='icon'/>
                        <ListItemText primary="Lists" />
                    </ListItemButton>
                </ListItem>
                <ListItem className='noPaddingTopBottom'>
                    <ListItemButton>
                        <ChatIcon className='icon'/>
                        <ListItemText primary="Chat" />
                    </ListItemButton>
                </ListItem>
                <ListItem className='noPaddingTopBottom'>
                    <ListItemButton>
                            <AssignmentIcon className='icon'/>
                        <ListItemText primary="Notes" />
                    </ListItemButton>
                </ListItem>
                <ListItem className='noPaddingTopBottom'>
                    <ListItemButton>
                            <DateRangeIcon className='icon'/>
                        <ListItemText primary="Calendar " />
                    </ListItemButton>
                </ListItem>
                <ListItem className='noPaddingTopBottom'>
                    <ListItemButton>
                            <UploadFileIcon className='icon'/>
                        <ListItemText primary="Upload photo" />
                    </ListItemButton>
                </ListItem>
                <ListItem className='noPaddingTopBottom'>
                    <ListItemButton>
                            <AccountBalanceWalletIcon className='icon'/>
                        <ListItemText primary="Account balance" />
                    </ListItemButton>
                </ListItem>
            </List>
        </>
    );
}

export default LeftBar;