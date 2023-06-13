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
                        <TextField
                            placeholder="Search"
                            onClick={handleChange}
                            InputProps={{
                                endAdornment: <SearchIcon sx={{ color: '#F4B7AD' }} />,
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