//MUI
//Componenti
//CSS
//JS
//Other
import { useNavigate } from "react-router-dom";



function ForgotPassword() {
    //Variable declaration
    const navigate = useNavigate();

    return(
        <>
            <div className="container_login w3-display-middle">
                <img src="logo.png" className='logoLogin'/>
                <hr className='line'></hr>
                <h1 className='title'>Forgot your password?</h1>
                <p><a className='registrationLink' onClick={() => navigate("/")}>Return to Login</a></p>
            </div>
        </>
    );
}

export default ForgotPassword;