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
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
//Components
import AccountBalance from '../../Pages/view/accountBalance/AccountBalance';
import Calendar from '../../Pages/view/calendar/Calendar';
import Chat from '../../Pages/view/chat/Chat';
import Home from '../../Pages/view/home/Home';
import Lists from '../../Pages/view/list/Lists';
import Notes from '../../Pages/view/notes/Notes';
import UploadPhoto from '../../Pages/view/uploadPhoto/UploadPhoto';
import Home from '../../Pages/View/home/Home';
import Lists from "../../Pages/View/list/Lists";
//CSS
import './LeftBar.css';
import Grid from "@mui/material/Grid";
import {AddPhotoAlternate} from '@mui/icons-material';
import {Container} from "@mui/material";

//Other


function LeftBar({onSelect}: any) {
    //Variable declaration
    //Function

    return (
        <>
            <Grid item className='newButtonGrid'>
                <Button className='buttonNew' variant="contained" startIcon={<AddIcon/>}
                        style={{justifyContent: "flex-start"}}>New</Button>
            </Grid>
            <Grid container className='listClass'>
                <List sx={{width: '100%', color: 'white'}}>
                    <ListItem className='noPaddingTopBottom' onClick={() => onSelect(Home)}>
                        <Container className='bottoneLeftBar'></Container>
                        <ListItemButton disableRipple>
                            <HomeIcon className='icon'/>
                            <ListItemText primary="Home"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={() => onSelect('Lists')}>
                        <ListItemButton>
                            <FormatListBulletedIcon className='icon'/>
                            <ListItemText primary="Lists"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={() => onSelect('Chat')}>
                        <ListItemButton>
                            <ChatIcon className='icon'/>
                            <ListItemText primary="Chat"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={() => onSelect('Notes')}>
                        <ListItemButton>
                                <AssignmentIcon className='icon'/>
                            <ListItemText primary="Notes" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={() => onSelect('Calendar')}>
                        <ListItemButton>
                                <DateRangeIcon className='icon'/>
                            <ListItemText primary="Calendar " />
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={() => onSelect('UploadPhoto')}>
                        <ListItemButton>
                                <UploadFileIcon className='icon'/>
                            <ListItemText primary="Upload photo" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='noPaddingTopBottom' onClick={() => onSelect('AccountBalance')}>
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