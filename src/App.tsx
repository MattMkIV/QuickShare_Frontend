//CSS
import './App.css';
//Components
import Login from './Pages/Login/Login';
import Homepage from './Pages/homepage/Homepage';
import SignUp from './Pages/SignUp/SignUp';
import ForgotPassword from './Pages/Login/ForgotPassword';
import Prova from './Pages/Prova';
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
