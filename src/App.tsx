//CSS
import './App.css';
//Components
import Login from './Pages/Login/Login';
import Homepage from './Pages/homepage/Homepage';
import SignUp from './Pages/SignUp/SignUp';
import UploadPhoto from './Pages/View/uploadPhoto/UploadPhoto';
import ForgotPassword from './Pages/Login/ForgotPassword';
//Other
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  //Variable declaration

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login/>}/>
          <Route index path="/homepage" element={<Homepage/>} />
          <Route index path="/signUp" element={<SignUp/>} />
          <Route index path="/forgotPassword" element={<ForgotPassword/>} />
          <Route index path="/photo" element={<UploadPhoto/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
