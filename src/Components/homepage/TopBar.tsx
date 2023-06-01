//MUI
import MenuIcon from '@mui/icons-material/Menu';
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Grid from '@mui/material/Grid';
//Component
import Logo from '../logo/Logo';
//CSS
import './TopBar.css';
//Other
import React from 'react';
import {styled} from "@mui/material/styles";

function TopBar() {
    //Variable declaration
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#F4B7AD',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#F4B7AD',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#9D8D8B',
            },
            '&:hover fieldset': {
                borderColor: '#9D8D8B',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#F4B7AD',
            },
        },
    });

    //Functions

    const handleChange = () => {
    };

    return(
        <>
            <React.Fragment>
                <hr className='lineHomepage'></hr>

                <Grid container wrap='nowrap'>
                    <Grid lg={0.6} md={0.6} sx={{minWidth : '65px'}}>
                        <MenuIcon sx={{color : '#ffb4aa'}} className='menuIcon'/>
                    </Grid>
                    <Grid lg={1} md={1} sx={{ display:{xs : 'none' , md : 'block'}, minWidth : '210px'}}>
                        <Logo navigateHome={true}/>
                    </Grid>

                    <Grid lg={7} md={7} xs={8}>
                        <CssTextField InputLabelProps={{ sx: { color: '#9D8D8B' } }} id="search"
                                      type="search" label="Search" className='searchBar' onClick={handleChange}
                                      InputProps={{
                                          endAdornment: (
                                              <InputAdornment position="end">
                                                  <SearchIcon sx={{color : '#9D8D8B'}} />
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