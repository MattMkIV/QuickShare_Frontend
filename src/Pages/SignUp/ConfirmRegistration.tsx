import {useNavigate} from "react-router-dom";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {Box, Divider, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

function ConfirmRegistration() {
    //Variable declaration
    const navigate = useNavigate();

    //Style
    document.body.style.backgroundImage = 'url("LoginBackground.png")';

    return (
        <>
            <Box className="w3-display-middle"
                 sx={{
                     pt: 2.5, pl: 2.5, pr: 2.5, pb: 2.5,
                     width: '500px',
                     height: '600px',
                     borderRadius: '22px',
                     backdropFilter: 'blur(11px)',
                     background: 'rgba(14, 14, 14, 0.43)',
                     WebkitBackdropFilter: 'blur(11px)',
                     boxShadow: 24,
                     cursor: 'pointer',
                 }}>

                <img src='LogoHighRes.png' alt='Logo img'
                     onClick={() => navigate("/")}
                     style={{
                         position: 'absolute',
                         width: '14%',
                         marginLeft: '25px',
                         marginTop: '7px',
                         cursor: 'pointer',
                     }}/>

                <Typography
                    onClick={() => navigate("/")}
                    sx={{
                        color: '#FF5C4D',
                        fontSize: '51px',
                        textAlign: 'right',
                        fontFamily: 'Logo Font',
                        marginRight: '30px',
                        textShadow: '0 0 5px #FF5C4DFF',
                    }}>QUICK.SHARE</Typography>

                <Divider
                    sx={{
                        width: '70%',
                        marginTop: '10px',
                        marginLeft: '15%',
                        marginRight: '15%',
                        borderColor: '#dfc38c'
                    }}/>
                <Box sx={{
                    marginTop: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <CheckCircleOutlineIcon
                        sx={{height: '180px', width: '180px', color: '#8fb677'}}></CheckCircleOutlineIcon>
                </Box>
                <Typography
                    sx={{
                        marginTop: '20px',
                        color: '#E9DEDC',
                        fontSize: '30px',
                        textAlign: 'center',
                        fontFamily: 'Roboto Bold',
                    }}>Registrazione avvenuta con successo</Typography>

                <Box sx={{
                    marginTop: '60px',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button
                        type='submit'
                        disableRipple
                        onClick={() => navigate("/")}
                        sx={{
                            width: '200px',
                            height: '70px',
                            fontFamily: 'Roboto Black',
                            color: '#ffdad5',
                            fontSize: '16px',
                            borderRadius: '22px',
                            backgroundColor: '#920609',
                            boxShadow: 8,
                            ':hover': {backgroundColor: '#920609', boxShadow: 15}
                        }}>Login</Button>
                </Box>
            </Box>
        </>
    );
}

export default ConfirmRegistration;