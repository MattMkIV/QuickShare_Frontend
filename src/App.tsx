//CSS
import './App.css';
//Components
import Login from './Pages/Login/Login';
import Homepage from './Pages/homepage/Homepage';
import SignUp from './Pages/SignUp/SignUp';
import ForgotPassword from './Pages/Login/ForgotPassword';
//Other
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PagePhoto from "./Pages/View/uploadPhoto/PagePhoto";
import PageNotes from "./Pages/View/notes/PageNotes";
import PageLists from "./Pages/View/list/PageLists";

function App() {

    //Variable declaration
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Login/>}/>
                    <Route index path="/homepage" element={<Homepage/>}/>
                    <Route index path="/homepage/photo" element={<PagePhoto/>}/>
                    <Route index path="/homepage/notes" element={<PageNotes/>}/>
                    <Route index path="/homepage/lists" element={<PageLists/>}/>
                    <Route index path="/signUp" element={<SignUp/>}/>
                    <Route index path="/forgotPassword" element={<ForgotPassword/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
