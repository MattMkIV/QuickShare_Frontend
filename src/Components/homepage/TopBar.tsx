//MUI
import MenuIcon from '@mui/icons-material/Menu';
import {Container, IconButton, InputAdornment, Menu, TextField, Typography} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
//Component
import Logo from '../logo/Logo';
//CSS
import './TopBar.css';
//Other
import React from 'react';
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";

function TopBar() {
    //Variable declaration
    const CssTextField = styled(TextField)({
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
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
            borderRadius: 12,
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderRadius: 12,
            },
            '&.Mui-focused fieldset': {
                borderWidth: 2,
                borderRadius: 12,
            },
        },
    });

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //Functions

    const handleChange = () => {
    };

    return(
        <>
            <React.Fragment>
                <hr className='lineHomepage'></hr>

                <Grid container wrap='nowrap'>
                    <Grid lg={0.6} md={0.6} sx={{minWidth : '65px'}}>
                        <MenuIcon className='menuIcon'/>
                    </Grid>
                    <Grid lg={1} md={1} sx={{ display:{xs : 'none' , md : 'block'}, minWidth : '210px'}}>
                        <Logo navigateHome={true}/>
                    </Grid>

                    <Grid lg={7} md={7} xs={8}>
                        <CssTextField id="search" type="search" label="Search" className='searchBar' onClick={handleChange}
                                      InputProps={{
                                          endAdornment: (
                                              <InputAdornment position="end">
                                                  <SearchIcon />
                                              </InputAdornment>
                                          ),
                                      }}/>
                    </Grid>
                </Grid>
            </React.Fragment>
        </>
    );
}

export default TopBar;