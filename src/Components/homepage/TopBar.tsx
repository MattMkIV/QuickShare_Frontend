//MUI
import {TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Grid from '@mui/material/Grid';
//Component
import Logo from '../logo/Logo';
//CSS
import './TopBar.css';
//Other
import React from 'react';

function TopBar() {
    //Variable declaration

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
                        <TextField
                            placeholder="Search"
                            onClick={handleChange}
                            InputProps={{
                                endAdornment: <SearchIcon sx={{color: '#F4B7AD'}}/>,
                            }}
                            sx={{
                                '& .MuiInput-underline': {
                                    borderBottomColor: 'transparent',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#F4B7AD',
                                        borderRadius: '25px',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#F4B7AD',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#F4B7AD',
                                        borderWidth: '2px',
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    borderRadius: '25px',
                                    fontFamily: 'Roboto Regular',
                                    fontSize: '17px !important',
                                    height: '20px',
                                },
                                width: '100%',
                                marginLeft: '20px',
                            }}/>
                    </Grid>
                </Grid>
            </React.Fragment>
        </>
    );
}

export default TopBar;