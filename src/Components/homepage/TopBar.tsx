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
import {useNavigate} from "react-router-dom";

function Bar() {
    //Variable declaration
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    //Functions
    const openMenu = () => {
        alert("Te lo buco sto pallone");
    };

    const handleChange = () => {
    };

    return(
        <>
            <hr className='lineHomepage'></hr>
            <Grid container spacing={0}>
                <Grid item xs={0.5}>
                    <MenuIcon sx={{color:'white', fontSize: '30px'}} className='menuIcon' onClick={openMenu}/>
                </Grid>
                <Grid item xs={2.1}>
                    <img src='LogoHighRes.png' className='logo' onClick={() => navigate("/homepage")}/>
                    <h1 className='siteNameHome' onClick={() => navigate("/homepage")}>QUICK.SHARE</h1>
                </Grid>
                <Grid item xs={8.4}>
                    <TextField id="search" type="search" label="Search" className='searchBar' value={searchTerm} onClick={handleChange} sx={{ width: 600}}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                            <SearchIcon />
                            </InputAdornment>
                        ),
                    }}/>
                </Grid>
                <Grid item xs={0.5}>
                    <SettingsIcon className='settingIcon w3-cell-middle' sx={{color: 'white'}}/>
                </Grid>
                <Grid item xs={0.5} className='avatarIcon'>
                    <Avatar className='avatar w3-cell-middle' sx={{backgroundColor: '#008fdb'}}>M</Avatar>
                </Grid>
            </Grid>
        </>
    );
}

export default Bar;