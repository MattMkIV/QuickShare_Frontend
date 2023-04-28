//MUI
import Grid from '@mui/material/Grid';
//Componenti
import Bar from '../../Components/homepage/TopBar';
import LeftBar from '../../Components/homepage/LeftBar';
//CSS
import './Homepage.css'
//JS
//Other



function Homepage() {

    return(
        <>  
            
            <div className='w3-row topRow'>
                <Bar />
            </div>
            <div className='w3-row bottomRow'>
                <div className='w3-col l2'>
                    <LeftBar/>
                </div>
                <div className='w3-col l10 containerCenter'>
                    <h1 style={{color:'white', textAlign: 'center'}}>Welcome</h1>
                </div>
            </div>
        </>
    );
}

export default Homepage;