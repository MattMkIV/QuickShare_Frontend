//MUI
//Component
import TopBar from '../../Components/homepage/TopBar';
import LeftBar from '../../Components/homepage/LeftBar';
//JS
//Other
import React from 'react';
import Grid from '@mui/material/Grid';

interface HomepageProps {
    componentToRender: React.ComponentType;
}

const Homepage: React.FC<HomepageProps> = ({componentToRender: Component}) => {
    //Style
    document.body.style.backgroundImage = '';

    //Render
    return (
        <>
            <TopBar/>

            <Grid container wrap='nowrap'>
                <Grid item lg={2} md={2}>
                    <LeftBar/>
                </Grid>

                <Grid container lg={10} md={10} xs={12} sx={{marginTop: '30px'}}>
                    <Component/>
                </Grid>
            </Grid>
        </>
    );
}

export default Homepage;