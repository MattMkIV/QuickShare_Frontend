//CSS
import './App.css';
//Components
import Login from './Pages/Login/Login';
import Homepage from './Pages/homepage/Homepage';
//Other
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login/>} />
          <Route index path="/homepage" element={<Homepage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
