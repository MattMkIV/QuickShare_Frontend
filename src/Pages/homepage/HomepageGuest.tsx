//MUI
//Component
import TopBarGuest from '../../Components/homepage/TopBarGuest';
import LeftBarGuest from '../../Components/homepage/LeftBarGuest';
//JS
//Other
import React from 'react';
import Grid from '@mui/material/Grid';

interface HomepageProps {
    componentToRender: React.ComponentType;
}

const HomepageGuest: React.FC<HomepageProps> = ({componentToRender: Component}) => {
    //Style
    document.body.style.backgroundImage = '';

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