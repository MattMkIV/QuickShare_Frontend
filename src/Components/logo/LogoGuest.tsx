//MUI
//CSS
import './Logo.css';
//Other
import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";

//Props
interface props {
    navigateHome: boolean;
}

function LogoGuest(this: any, {navigateHome}: props) {

    //Variable declaration
    const navigate = useNavigate();

    //Functions
    const handleClick = () => {
        localStorage.setItem('section', 'home')
        navigate("/homepage");

        window.location.reload();
    };

    return (
        <>
            <Grid
                wrap='nowrap'
                lg={2}
                md={2}
                sx={{
                    display: {xs: 'none', md: 'block'},
                    minWidth: '239px'
                }}>
                <img
                    src={process.env.PUBLIC_URL + '/LogoHighRes.png'}
                    alt='Logo img'
                    className='logo'
                    onClick={handleClick}/>
                <Typography
                    onClick={handleClick}
                    sx={{
                        color: '#FF5C4D',
                        marginTop: '10px',
                        fontSize: '25px',
                        marginLeft: '57px',
                        fontFamily: 'Logo Font',
                        textShadow: '0 0 5px #FF5C4DFF',
                        ':hover': {cursor: 'pointer'}
                    }}>QUICK.SHARE</Typography>
            </Grid>

        </>
    );
}

export default LogoGuest;