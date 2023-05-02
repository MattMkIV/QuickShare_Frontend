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

    //Style
    //-------- Imposto background --------
    document.body.style.backgroundImage = 'url("backgroundLogin.png")';

    return(
        <>
            <div className="container_login w3-display-middle">
                <img onClick={() => navigate("/")} src='LogoHighRes.png' className='logoLoginRegistration'/>
                <h1 onClick={() => navigate("/")} className='siteNameRegistration'>QUICK.SHARE</h1>
                <hr className='line'></hr>
                <h1 className='titleBox'>Create your account</h1>
                <Registration firstLabel={"Name"} secondLabel={"Surname"} thirdLabel={"Email"} fourthLabel={"Password"} fifthLabel={"Confirm Password"}/>
            </div>
        </>
    );
}

export default SignUp;