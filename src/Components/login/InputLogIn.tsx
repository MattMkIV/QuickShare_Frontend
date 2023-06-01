//MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
//CSS
import "./InputLogIn.css";
//Other
import React, {useState} from 'react';
//Axios
import {useNavigate} from 'react-router-dom';
import { doLogin } from '../../Utils/AuthService';

//Props
interface Props {
    firstLabel: string,
    secondLabel: string;
}
  
function InputLogin (this: any, {firstLabel, secondLabel}: Props) {

      //Variable declaration
      const navigate = useNavigate();
      let isErrorInput = false;
      const [ErrorInput, setErrorInput] = useState(false);

      const CssTextField = styled(TextField)({
          '& label.Mui-focused': {
            color: '#F4B7AD',
          },
          '& label': {
              color: '#F4B7AD',
          },
          '& .MuiInput-underline': {
              borderBottomColor: '#F4B7AD',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#9D8D8B',
                borderRadius : '22px',
            },
            '&:hover fieldset': {
                borderColor: '#9D8D8B',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#F4B7AD',
            },
          },
      });

      //Functions
      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            let isError = false;
            const data = new FormData(event.currentTarget);
            //Take Value
            let username = data.get('username');
            let password = data.get('password');
            
            console.log("username: "+username);
            console.log("password: "+password);

            isError = await doLogin(username, password);

            if(!isError) navigate("/");
            else setErrorInput(true);

        }

      return(
          <>
            <Box component="form" onSubmit={handleSubmit}>
              <CssTextField className="inputStyle" error={ErrorInput} name="username" sx={{input: {color: 'darkgrey'}}} label={firstLabel} variant="outlined"/>
             
              <CssTextField className="inputStyle" error={ErrorInput} name="password" type='password' sx={{input: {color: 'darkgrey'}}} label={secondLabel} variant="outlined"/>
              <p><a className='forgotLink' onClick={() => navigate("/forgotPassword")}>Forgot your password?</a></p>
              <div className='w3-row'>
                <div className='w3-col l6'>
                  <Button className='buttonGuest' type="submit" variant="contained">guest</Button>
                </div>
                <div className='w3-col l6'>
                  <Button className='buttonSubmit' type="submit">Login</Button>
                </div>
              </div>
            </Box>
          </>    
      );
}

export default InputLogin;