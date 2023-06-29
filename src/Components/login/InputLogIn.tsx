//MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//Other
import React, {useState} from 'react';
//Axios
import {useNavigate} from 'react-router-dom';
import {doLogin} from '../../Utils/AuthService';
import {Typography} from "@mui/material";

//Props
interface Props {
    firstLabel: string,
    secondLabel: string;
}

function InputLogin(this: any, {firstLabel, secondLabel}: Props) {

    //Variable declaration
    const navigate = useNavigate();
    let isErrorInput = false;
    const [ErrorInput, setErrorInput] = useState(false);

    //Functions
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let isError = false;
        const data = new FormData(event.currentTarget);
        //Take Value
        let username = data.get('username');
        let password = data.get('password');

        isError = await doLogin(username, password);

        if (!isError) navigate("/homepage");
        else setErrorInput(true);

    }

    const loginGuest = async () => {
        let isError = await doLogin("guest", "Password123!");
        if (!isError) navigate("/homepageGuest");
    }

    return (
        <>
            <Box sx={{
                marginTop: '30px',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Typography sx={{
                    color: '#E9DEDC',
                    fontSize: '27px',
                    textAlign: 'center',
                    fontFamily: 'Roboto Bold',
                }}>
                    Login
                </Typography>
            </Box>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pt: 4,
                }}
            >

                <TextField
                    error={ErrorInput}
                    type='text'
                    placeholder={firstLabel}
                    sx={{
                        '& .MuiInput-underline': {
                            borderBottomColor: 'transparent',
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#dfc38c',
                                borderRadius: '25px',
                            },
                            '&:hover fieldset': {
                                borderColor: '#dfc38c',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#dfc38c',
                                borderWidth: '2px',
                            },
                        },
                        '& .MuiInputBase-input': {
                            borderRadius: '25px',
                            fontFamily: 'Roboto Regular',
                            fontSize: '17px !important',
                            height: '25px',
                        },
                        width: '380px',
                    }}
                    name="username"/>

                <TextField
                    error={ErrorInput}
                    type='password'
                    placeholder={secondLabel}
                    sx={{
                        '& .MuiInput-underline': {
                            borderBottomColor: 'transparent',
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#dfc38c',
                                borderRadius: '25px',
                            },
                            '&:hover fieldset': {
                                borderColor: '#dfc38c',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#dfc38c',
                                borderWidth: '2px',
                            },
                        },
                        '& .MuiInputBase-input': {
                            borderRadius: '25px',
                            fontFamily: 'Roboto Regular',
                            fontSize: '17px !important',
                            height: '25px',
                        },
                        marginTop: '30px',
                        width: '380px',
                    }}
                    name="password"
                />

                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '60px',
                }}>
                    <Button
                        disableRipple
                        onClick={() => loginGuest()}
                        sx={{
                            width: '140px',
                            height: '70px',
                            fontFamily: 'Roboto Black',
                            color: '#442926',
                            fontSize: '16px',
                            borderRadius: '22px',
                            backgroundColor: '#e7bdb7',
                            boxShadow: 8,
                            ':hover': {backgroundColor: '#e7bdb7', boxShadow: 15}
                        }}>Guest</Button>

                    <Button
                        type='submit'
                        disableRipple
                        sx={{
                            width: '140px',
                            height: '70px',
                            fontFamily: 'Roboto Black',
                            color: '#ffdad5',
                            fontSize: '16px',
                            borderRadius: '22px',
                            backgroundColor: '#920609',
                            marginLeft: '65px',
                            boxShadow: 8,
                            ':hover': {backgroundColor: '#920609', boxShadow: 15}
                        }}>Login</Button>
                </Box>
                <Box sx={{justifyItems: 'flex-start', width: '100%', marginTop: '55px'}}>
                    <Typography
                        sx={{
                            color: '#dfc38c',
                            fontFamily: 'Roboto Light',
                            fontSize: '19px',
                            marginLeft: '30px',
                            ':hover': {color: '#dab143', cursor: 'pointer'},
                        }}
                        onClick={() => navigate("/signUp")}>Create a new account</Typography>
                </Box>
            </Box>
        </>
    );
}

export default InputLogin;