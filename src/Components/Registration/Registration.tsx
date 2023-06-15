//MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//CSS
import './Registration.css'
//Other
import React, {useState} from 'react';
//Axios
import {useNavigate} from 'react-router-dom';
import {Typography} from "@mui/material";

//Props
interface Props {
    firstLabel: string,
    secondLabel: string,
    thirdLabel: string,
    fourthLabel: string,
    fifthLabel: string,
    sixthLabel: string,
};

function Registration(this: any, {firstLabel, secondLabel, thirdLabel, fourthLabel, fifthLabel, sixthLabel}: Props) {

    //Variable declaration
    const navigate = useNavigate();
    let isErrorInput = false;
    const [ErrorInput, setErrorInput] = useState(false);

    //Functions
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        //Take Value
        let username = data.get('username');
        let password = data.get('password');

        console.log("Username: " + username);
        console.log("Password: " + password);

        if (!isErrorInput) navigate("/homepage");
        else setErrorInput(true);
    }

    /************************* Handle pages in registration *************************/
    const [secondPage, setSecondPage] = useState(false);

    const isSecondPage = () => {
        setSecondPage(true);
    };

    const notSecondPage = () => {
        setSecondPage(false);
    };

    return (
        <>
            <Box sx={{
                marginTop: '30px',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Typography
                    sx={{
                        color: '#E9DEDC',
                        fontSize: '27px',
                        textAlign: 'center',
                        fontFamily: 'Roboto Bold',
                    }}>Create your account</Typography>
            </Box>
            {!secondPage ? <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pt: 4,
                }}>


                <TextField
                    error={ErrorInput}
                    type='text'
                    id='Name'
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
                    }}/>

                <TextField
                    error={ErrorInput}
                    type='text'
                    id='Surname'
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
                    }}/>

                <TextField
                    error={ErrorInput}
                    type='text'
                    id='Username'
                    placeholder={thirdLabel}
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
                    }}/>


                <Box sx={{
                    width: '380px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    marginTop: '40px',
                }}>

                    <Button
                        onClick={isSecondPage}
                        disableRipple
                        sx={{
                            width: '100px',
                            height: '70px',
                            fontFamily: 'Roboto Black',
                            color: '#ffdad5',
                            fontSize: '16px',
                            borderRadius: '22px',
                            backgroundColor: '#920609',
                            boxShadow: 8,
                            ':hover': {backgroundColor: '#920609', boxShadow: 15}
                        }}><ArrowForwardIcon sx={{color: '#ffdad5', height: '35px', width: '35px'}}/></Button>
                </Box>


            </Box> : ''}

            {secondPage ?
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pt: 4,
                    }}>


                    <TextField
                        error={ErrorInput}
                        id='Email'
                        type='text'
                        placeholder={fourthLabel}
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
                        }}/>

                    <TextField
                        error={ErrorInput}
                        type='password'
                        id='Password'
                        placeholder={fifthLabel}
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
                        }}/>

                    <TextField
                        error={ErrorInput}
                        type='password'
                        id='Repeat Password'
                        placeholder={sixthLabel}
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
                        }}/>


                    <Box sx={{
                        width: '380px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end',
                        marginTop: '40px',
                    }}>
                        <Button
                            onClick={notSecondPage}
                            disableRipple
                            sx={{
                                width: '100px',
                                height: '70px',
                                fontFamily: 'Roboto Black',
                                color: '#442926',
                                fontSize: '16px',
                                borderRadius: '22px',
                                backgroundColor: '#e7bdb7',
                                marginRight: '140px',
                                boxShadow: 8,
                                ':hover': {backgroundColor: '#e7bdb7', boxShadow: 15}
                            }}><ArrowBackIcon sx={{color: '#442926', height: '35px', width: '35px'}}/></Button>

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
                                boxShadow: 8,
                                ':hover': {backgroundColor: '#920609', boxShadow: 15}
                            }}>Signup</Button>
                    </Box>
                </Box> : ''}
        </>
    )
        ;
}

export default Registration;