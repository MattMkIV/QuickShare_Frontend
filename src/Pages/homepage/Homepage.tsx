//MUI
//Componenti
import TopBar from '../../Components/homepage/TopBar';
import LeftBar from '../../Components/homepage/LeftBar';
//CSS
import './Homepage.css'
//JS
//Other
import { useState } from 'react';

function Homepage() {

    const [page, setPage] = useState("Recenti");

    //Style
    document.body.style.backgroundImage = '';

    return(
        <>  
            <div className='w3-row topRow'>
                <TopBar/>
            </div>
            <div className='w3-row bottomRow'>
                <div className='w3-col l2'>
                    <LeftBar/>
                </div>
                <div className='w3-col l10 containerCenter'>
                    <h1 className='mostRecent'>Most recent:</h1>
                    <iframe>
                        
                    </iframe>
                </div>
            </div>
        </>
    );
}

export default Homepage;