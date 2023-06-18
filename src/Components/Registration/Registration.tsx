//MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//CSS
import './Registration.css'
//Other
import { useState } from 'react';
import { registerNewUser } from '../../Utils/AuthService';
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
            let isError = false;
            const data = new FormData(event.currentTarget);
            //Take Value
            let nome = data.get('nome');
            let cognome = data.get('cognome');
            let username = data.get('username');
            let email = data.get('email');
            let password = data.get('password');
            let confirmPassword = data.get('confirmPassword');

            var userInfo = {
                Nome: nome,
                Cognome: cognome,
                Username: username,
                Email: email,
                Password: password,
                ConfirmPassword: confirmPassword
            };

            isError = await registerNewUser(userInfo);

            if(!isError) navigate("/confirmRegistration");
            else setErrorInput(true);

      }

    /************************* Handle pages in registration *************************/
    const [secondPage, setSecondPage] = useState(false);

      return(
          <>
              <Box component="form" onSubmit={handleSubmit}>
                    <div className='w3-row inputStyle'>
                        <div className='w3-col l6'>
                            <CssTextField className="inputStyleName" error={ErrorInput} name="nome" label="Nome" variant="outlined"/>
                        </div>
                        <div className='w3-col l6'>
                            <CssTextField className="inputStyleSurname" error={ErrorInput} name="cognome" label="Cognome" variant="outlined"/>
                        </div>
                    </div>
                    <CssTextField className="inputStyle" type="text" error={ErrorInput} name="username" label="Username" variant="outlined"/>

                    <CssTextField className="inputStyle" type="email" error={ErrorInput} name="email" label="Email" variant="outlined"/>
                    <CssTextField className="inputStyle" error={ErrorInput} name="password" type='password' label="Password" variant="outlined"/>
                    <CssTextField className="inputStyle" error={ErrorInput} name="confirmPassword" type='password' label="Confirm Password" variant="outlined"/>

                    <Button className='buttonSignup'
                        sx={{width : '90%', height : '60px', fontFamily : 'Roboto Black', color : '#ffdad5',
                            fontSize : '17px', borderRadius : '18px', boxShadow : '0 0 20px 5px rgba(0, 0, 0, 0.13)',
                            backgroundColor : '#920609', marginTop : '88px', marginLeft : '21px' }}
                        type="submit">Signup</Button>
              </Box>
          </>    
      );
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
                    }}
                    name="nome"/>

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