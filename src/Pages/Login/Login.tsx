//MUI
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';
//Componenti
import InputLogin from '../../Components/login/InputLogIn';
//CSS
import './Login.css'
//JS
//Other
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';



function Login() {


    return(
        <>
            <div className="container_login w3-display-middle">
                <img src="logo.png" className='logoLogin'/>
                <hr className='line'></hr>
                <h1 className='title'>Login</h1>
                <InputLogin firstLabel={"Username"} secondLabel={"Password"}/>
            </div>
        </>
    );
}

export default Login;