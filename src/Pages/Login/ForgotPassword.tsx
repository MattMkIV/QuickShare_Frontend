//MUI
//Componenti
import './ForgotPassword.css'
//CSS
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
    const [ErrorInput] = useState(false);
    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: 'c',
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
                borderRadius : '22px',
            },
            '&:hover fieldset': {
                borderColor: '#9D8D8B',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#F4B7AD',
            },
        },
    });

    //document.body.style.backgroundImage = 'url("LoginBackground.png")';

    return(
        <>
            <div className="container_login w3-display-middle">
                <img onClick={() => navigate("/")} src='LogoHighRes.png' alt='Logo img' className='logoLoginRegistration'/>
                <h1 onClick={() => navigate("/")} className='siteNameRegistration'>QUICK.SHARE</h1>
                <hr className='line'></hr>
                <h1 className='titleBox'>Enter your Email</h1>
                <CssTextField className="inputStyle" type="mail" error={ErrorInput} name="email" label='Email' variant="outlined"/>

                <Button className='sendEmailButton'
                    sx={{width : '90%', height : '60px', fontFamily : 'Roboto Black', color : '#ffdad5', fontSize : '17px',
                        borderRadius : '18px', boxShadow : '0 0 20px 5px rgba(0, 0, 0, 0.13)',
                        backgroundColor : '#920609', marginTop : '250px', marginLeft : '21px' }}
                    type="submit">Send Email</Button>
            </div>
        </>
    );
}

export default ForgotPassword;