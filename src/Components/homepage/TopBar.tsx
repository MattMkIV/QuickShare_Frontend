//MUI
import MenuIcon from '@mui/icons-material/Menu';
import {InputAdornment, TextField} from "@mui/material";
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
import ReducedHome from '../homepage/ReducedHome'
import {styled} from "@mui/material/styles";

function TopBar() {
    //Variable declaration
    const [searchTerm] = useState("");
    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#57bb7e',
        },
        '& .MuiSvgIcon-root': {
            color: '#57bb7e',
        },
        '& .MuiFormLabel-root': {
            color: '#57bb7e',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#57bb7e',
            borderRadius: 12,
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: '#57bb7e',
                borderRadius: 12,
            },
            '&.Mui-focused fieldset': {
                borderColor: '#57bb7e',
                borderWidth: 2,
                borderRadius: 12,
            },

        },
    });


    //Functions

    const handleChange = () => {
    };

    // @ts-ignore
    // @ts-ignore
    return(
        <>
            <hr className='lineHomepage'></hr>
            <Grid container>
                <Grid item>
                    <MenuIcon sx={{color:'white', fontSize: '30px'}} className='menuIcon' onClick={ReducedHome}/>
                </Grid>
                <Grid item>
                    <Logo navigateHome={true}/>
                </Grid>
                <Grid item xs>
                    <CssTextField id="search" type="search" label="Search" className='searchBar' value={searchTerm} onClick={handleChange}
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