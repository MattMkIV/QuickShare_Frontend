
import './SignUp.css';
import { useNavigate } from "react-router-dom";
import CheckIcon from '@mui/icons-material/Check';

function ConfirmRegistration() {
    //Variable declaration
    const navigate = useNavigate();

    //Style
    //document.body.style.backgroundImage = 'url("LoginBackground.png")';

    return(
        <>
            <div className="container_login w3-display-middle">
                <img onClick={() => navigate("/")} src='LogoHighRes.png' alt='Logo img' className='logoLoginRegistration'/>
                <h1 onClick={() => navigate("/")} className='siteNameRegistration'>QUICK.SHARE</h1>
                <hr className='line'></hr>
                <h1 className='titleBox'>Your account is created</h1>
                <CheckIcon/>  
                <a onClick={() => navigate("/")}>Login</a> 
            </div>
        </>
    );
}

export default ConfirmRegistration;