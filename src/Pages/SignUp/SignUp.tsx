//MUI
//Component
import Registration from '../../Components/Registration/Registration';
//JS
//Other
import {useNavigate} from "react-router-dom";
import {Box, Divider, Typography} from "@mui/material";

function SignUp() {
    //Variable declaration
    const navigate = useNavigate();

    //Style
    document.body.style.backgroundImage = 'url("LoginBackground.png")';

    return (
        <>
            <Box className="w3-display-middle"
                 sx={{
                     pt: 2.5, pl: 2.5, pr: 2.5, pb: 2.5,
                     width: '500px',
                     height: '600px',
                     borderRadius: '22px',
                     backdropFilter: 'blur(11px)',
                     background: 'rgba(14, 14, 14, 0.43)',
                     WebkitBackdropFilter: 'blur(11px)',
                     boxShadow: 24,
                 }}>

                <img src='LogoHighRes.png' alt='Logo img'
                     onClick={() => navigate("/")}
                     style={{
                         position: 'absolute',
                         width: '14%',
                         marginLeft: '25px',
                         marginTop: '7px',
                         cursor: 'pointer',
                     }}
                />

                <Typography
                    onClick={() => navigate("/")}
                    sx={{
                        color: '#FF5C4D',
                        fontSize: '51px',
                        textAlign: 'right',
                        fontFamily: 'Logo Font',
                        marginRight: '30px',
                        textShadow: '0 0 5px #FF5C4DFF',
                        ':hover': {cursor: 'pointer'}
                    }}>QUICK.SHARE</Typography>

                <Divider
                    sx={{
                        width: '70%',
                        marginTop: '10px',
                        marginLeft: '15%',
                        marginRight: '15%',
                        borderColor: '#dfc38c'
                    }}/>

                <Registration
                    firstLabel={"Name"}
                    secondLabel={"Surname"}
                    thirdLabel={"Username"}
                    fourthLabel={"Email"}
                    fifthLabel={"Password"}
                    sixthLabel={"Confirm Password"}/>
            </Box>
        </>
    );
}

export default SignUp;