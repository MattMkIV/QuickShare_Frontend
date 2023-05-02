//MUI
//CSS
import './Logo.css';
//Other
import {useNavigate} from "react-router-dom";

//Props
interface props {
    navigateHome: boolean;
}

function Logo(this: any, { navigateHome }: props) {
    //Variable declaration
    const navigate = useNavigate();

    //Functions
    const handleClick = () => {
        navigate("/homepage");
    };

    return(
        <>  
            {navigateHome ? (
                <div onClick={handleClick}>
                    <img src='LogoHighRes.png' className='logo'/>
                    <h1 className='siteNameHome'>QUICK.SHARE</h1>
                </div>
            ) : (
                <div onClick={handleClick}>
                    <img src='LogoHighRes.png' className='logo'/>
                    <h1 className='siteNameHome'>QUICK.SHARE</h1>
                </div>
            )}
        </>
    );
}

export default Logo;