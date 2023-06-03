//MUI
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
    const [anchorEl, setAnchorEl]
        = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#F4B7AD',
        },
        '& label': {
            color: '#F4B7AD',
        },
        '& .MuiInput-underline': {
            borderBottomColor: '#F4B7AD',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#9D8D8B',
                borderRadius: '22px',
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

    return (
        <>
            <React.Fragment>
                <hr className='lineHomepage'></hr>

                <Grid container>
                    <Logo navigateHome={true}/>

                    <Grid lg={7} md={7} xs={9}>
                        <CssTextField InputLabelProps={{sx: {color: '#9D8D8B'}}} id="search"
                                      type="search" label="Search" className='searchBar' onClick={handleChange}
                                      InputProps={{
                                          endAdornment: (
                                              <InputAdornment position="end">
                                                  <SearchIcon sx={{color: '#9D8D8B'}}/>
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