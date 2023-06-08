//CSS
import './App.css';
//Components
import Login from './Pages/Login/Login';
import Home from './Pages/View/home/Home';
import SignUp from './Pages/SignUp/SignUp';
import ForgotPassword from './Pages/Login/ForgotPassword';
//Other
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import UploadPhoto from "./Pages/View/uploadPhoto/UploadPhoto";
import Notes from "./Pages/View/notes/Notes";
import Lists from "./Pages/View/list/Lists";
import Homepage from "./Pages/homepage/Homepage";
import Calendar from "./Pages/View/calendar/Calendar";
import AccountBalance from "./Pages/View/accountBalance/AccountBalance";

function App() {

    //Variable declaration
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Login/>}/>
                    <Route index path="/homepage" element={<Homepage componentToRender={Home}/>}/>
                    <Route index path="/homepage/photo" element={<Homepage componentToRender={UploadPhoto}/>}/>
                    <Route index path="/homepage/notes" element={<Homepage componentToRender={Notes}/>}/>
                    <Route index path="/homepage/lists" element={<Homepage componentToRender={Lists}/>}/>
                    <Route index path="/homepage/calendar" element={<Homepage componentToRender={Calendar}/>}/>
                    <Route index path="/homepage/accountbalance" element={<Homepage componentToRender={AccountBalance}/>}/>
                    <Route index path="/signUp" element={<SignUp/>}/>
                    <Route index path="/forgotPassword" element={<ForgotPassword/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
