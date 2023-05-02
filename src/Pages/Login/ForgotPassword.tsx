//MUI
//Componenti
//CSS
import './ForgotPassword.css'
//JS
//Other
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import {styled} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";



function ForgotPassword() {
    //Variable declaration
    const navigate = useNavigate();
    const [ErrorInput, setErrorInput] = useState(false);
    const CssTextField = styled(TextField)({
          '& label.Mui-focused': {
            color: '#FF9636',
          },
          '& label': {
              color: '#FF9636',
          },
          '& .MuiInput-underline': {
              borderBottomColor: '#FF9636',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#007BD4',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#FF9636',
            },
            '&:hover fieldset': {
              borderColor: 'darkgrey',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FF9636',
            },
          },
    });

    document.body.style.backgroundImage = 'url("backgroundLogin.png")';

    return(
        <>
            <div className="container_login w3-display-middle">
                <img onClick={() => navigate("/")} src='LogoHighRes.png' className='logoLoginRegistration'/>
                <h1 onClick={() => navigate("/")} className='siteNameRegistration'>QUICK.SHARE</h1>
                <hr className='line'></hr>
                <h1 className='titleBox'>Enter your Email</h1>
                <CssTextField className="inputStyle" type="mail" error={ErrorInput} name="email" sx={{input: {color: 'darkgrey'}}} label='Email' variant="outlined"/>

                <Button className='buttonForgotPassword' type="submit" variant="contained">Send Email</Button>
            </div>
        </>
    );
}

export default ForgotPassword;