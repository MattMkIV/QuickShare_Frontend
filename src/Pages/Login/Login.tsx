//MUI
//Component
import InputLogin from '../../Components/login/InputLogIn';
//CSS
import './Login.css'
//JS
//Other
import {useNavigate} from "react-router-dom";
import {useEffect} from 'react';
import {checkJwt} from '../../Utils/AuthService';
import {Box, Divider, Typography} from "@mui/material";

function Login() {

    let navigate = useNavigate();

    //Function
    useEffect(() => {
        const check = async () => {
            let jwtError = await checkJwt();
            if (!jwtError) navigate("/homepage");
        }

        check();
    }, []);

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
                     cursor: 'default'
                 }}>

                <img src='LogoHighRes.png' alt='Logo img'
                     style={{
                         position: 'absolute',
                         width: '14%',
                         marginLeft: '25px',
                         marginTop: '7px',
                         cursor: 'default'
                     }}/>

                <Typography
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

                <InputLogin firstLabel={"Username"} secondLabel={"Password"}/>
            </Box>
        </>
    );
}

export default Login;