//MUI
import MenuIcon from '@mui/icons-material/Menu';
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
//Component
import Logo from '../logo/Logo';
//CSS
import './TopBar.css';
//Other
import { useState } from "react";
import {useNavigate} from "react-router-dom";

function TopBar() {
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
            <Grid container>
                <Grid item>
                    <MenuIcon sx={{color:'white', fontSize: '30px'}} className='menuIcon' onClick={openMenu}/>
                </Grid>
                <Grid item>
                    <Logo navigateHome={true}/>
                </Grid>
                <Grid item xs>
                    <TextField id="search" type="search" label="Search" className='searchBar' value={searchTerm} onClick={handleChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                <SearchIcon />
                                </InputAdornment>
                            ),
                        }}/>
                </Grid>
                <Grid item>
                    <SettingsIcon className='settingIcon w3-cell-middle' sx={{color: 'white'}}/>
                </Grid>
                <Grid item>
                    <Avatar className='avatarIcon w3-display-middle' sx={{backgroundColor: '#008fdb'}}>M</Avatar>
                </Grid>
            </Grid>
        </>
    );
}

export default TopBar;