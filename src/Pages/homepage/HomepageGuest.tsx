//MUI
//Component
import TopBarGuest from '../../Components/homepage/TopBarGuest';
import LeftBarGuest from '../../Components/homepage/LeftBarGuest';
//JS
//Other
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { checkJwt } from '../../Utils/AuthService';
import { useNavigate } from 'react-router-dom';

interface HomepageProps {
    componentToRender: React.ComponentType;
}

const HomepageGuest: React.FC<HomepageProps> = ({componentToRender: Component}) => {
    //Style
    document.body.style.backgroundImage = '';
    let navigate = useNavigate();
    let jwtError = false;
    const [userInfo, setUserInfo] = useState<any>([]);

    useEffect(() => {
        const check = async () => {
            jwtError = await checkJwt();

            if(jwtError) navigate("/");
        }

        check();
    },[]);

    //Render
    return (
        <>
            <TopBarGuest/>

            <Grid container wrap='nowrap'>
                <Grid item lg={2} md={2}>
                    <LeftBarGuest/>
                </Grid>

                <Grid container lg={10} md={10} xs={12} sx={{marginTop: '30px'}}>
                    <Component/>
                </Grid>
            </Grid>
        </>
    );
}

export default HomepageGuest;