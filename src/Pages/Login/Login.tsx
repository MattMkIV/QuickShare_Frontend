//MUI
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';
//Componenti
//CSS
import './Login.css'
//JS
//Other
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';



function Login() {

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
          backgroundColor: purple[700],
        },
      }));

    return(
        <>
            <div className="container_login w3-display-middle">
                <h1 className="header">Quickshare</h1>
                <ColorButton variant="contained">Custom CSS</ColorButton>
            </div>
        </>
    );
}

export default Login;