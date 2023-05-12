//MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
//CSS
import "./InputLogIn.css";
//Other
import React, { useState } from 'react';
//Axios
import { useNavigate } from 'react-router-dom';

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
            color: '#FF9636',
          },
          '& label': {
              color: '#FF9636',
          },
          '& .MuiInput-underline': {
              borderBottomColor: '#FF9636',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#007BD4',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#FF9636',
            },
            '&:hover fieldset': {
              borderColor: 'darkgrey',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FF9636',
            },
          },
      });

      //Functions
      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          //Take Value
          let username = data.get('username');
          let password = data.get('password');

          console.log("Username: "+username);
          console.log("Password: "+password);

          if(!isErrorInput) navigate("/homepage");
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
                  <Button className='buttonSubmit' type="submit" variant="contained">Login</Button>
                </div>
              </div>
            </Box>
          </>    
      );
}

export default InputLogin;