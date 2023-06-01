//MUI
//Component
import InputLogin from '../../Components/login/InputLogIn';
//CSS
import './Login.css'
//JS
//Other
import { useNavigate } from "react-router-dom";
import {Typography} from "@mui/material";

function Login() {
    //Variable declaration
    const navigate = useNavigate();

    //Function
    

    //Style
    //document.body.style.backgroundImage = 'url("LoginBackground.png")';

    return(
        <>
            <div className="container_login w3-display-middle">
                <img src='LogoHighRes.png' alt='Logo img' className='logoLogin'/>
                <h1 className='siteName'>QUICK.SHARE</h1>
                <hr className='line'></hr>
                <h1 className='titleBox'>Login</h1>
                <InputLogin firstLabel={"Username"} secondLabel={"Password"}/>
                <Typography className='createAccount'
                    sx={{color : '#dfc38c', width : '60%', fontFamily : 'Roboto Light', fontSize : '20px',
                        marginLeft : '10%', marginTop : '20px', marginRight : '10%'}}
                    onClick={() => navigate("/signUp")}>Create a new account</Typography>
            </div>
        </>
    );
}

export default Login;