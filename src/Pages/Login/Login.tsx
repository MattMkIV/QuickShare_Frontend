//MUI
//Componenti
import InputLogin from '../../Components/login/InputLogIn';
//CSS
import './Login.css'
//JS
//Other
import { useNavigate } from "react-router-dom";



function Login() {
    //Variable declaration
    const navigate = useNavigate();

    return(
        <>
            <div className="container_login w3-display-middle">
                <img src="logo.png" className='logoLogin'/>
                <hr className='line'></hr>
                <h1 className='title'>Login</h1>
                <InputLogin firstLabel={"Username"} secondLabel={"Password"}/>
                <p><a className='createAccountLink' onClick={() => navigate("/signUp")}>Create a new account</a></p>
            </div>
        </>
    );
}

export default Login;