//MUI
import MenuIcon from '@mui/icons-material/Menu';
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
//CSS
import './TopBar.css';
//Other
import { useState } from "react";

function Bar() {
    const [searchTerm, setSearchTerm] = useState("");

    const openMenu = () => {
        alert("Te lo buco sto pallone");
    };

    const handleChange = () => {
    };

    return(
        <>  
            <Grid container spacing={2}>
                <Grid item xs={0.5}>
                    <MenuIcon sx={{color:'white', fontSize: '30px'}} className='menuIcon' onClick={openMenu}/>
                </Grid>
                <Grid item xs={2.5}>
                    <img src="logo.png" className="logo"/>
                </Grid>
                <Grid item xs={8}>
                    <TextField
                    id="search"
                    type="search"
                    label="Search"
                    className='searchBar'
                    value={searchTerm}
                    onClick={handleChange}
                    sx={{ width: 600 , color: 'white'}}
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <SearchIcon />
                        </InputAdornment>
                    ),}}/>
                </Grid>
                <Grid item xs={0.5}>
                    <SettingsIcon className='settingIcon'/>
                </Grid>
                <Grid item xs={0.5}>
                    <Avatar className='avatar'>H</Avatar>
                </Grid>
            </Grid>
        </>
    );
}

export default Bar;