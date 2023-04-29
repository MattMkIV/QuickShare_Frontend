//MUI
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
                    <h1 className='mostRecent'>Most recent:</h1>
                </div>
            </div>
        </>
    );
}

export default Homepage;