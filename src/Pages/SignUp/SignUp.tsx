//MUI
//Componenti
import Registration from '../../Components/Registration/Registration';
//CSS
import './SignUp.css';
//JS
//Other
import { useNavigate } from "react-router-dom";


function SignUp() {
    //Variable declaration
    const navigate = useNavigate();

    return(
        <>
            <div className="container_login w3-display-middle">
                <img src="logo.png" className='logoLogin'/>
                <hr className='line'></hr>
                <h1 className='title'>Create your account</h1>
                <Registration firstLabel={"Name"} secondLabel={"Surname"} thirdLabel={"Email"} fourthLabel={"Password"} fifthLabel={"Confirm Password"}/>
                <p><a className='registrationLink' onClick={() => navigate("/")}>Return to Login</a></p>
            </div>
        </>
    );
}

export default SignUp;