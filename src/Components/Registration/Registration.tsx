//MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
//CSS
import './Registration.css'
//Other
import { useState } from 'react';
//Axios
import { useNavigate } from 'react-router-dom';

//Props
interface Props {
    firstLabel: string,
    secondLabel: string,
    thirdLabel: string, 
    fourthLabel: string, 
    fifthLabel: string;
}

function Registration (this: any, {firstLabel, secondLabel, thirdLabel, fourthLabel, fifthLabel}: Props) {

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
                  <div className='w3-row inputStyle'>
                      <div className='w3-col l6'>
                          <CssTextField className="inputStyleName" error={ErrorInput} name="nome" sx={{input: {color: 'darkgrey'}}} label={firstLabel} variant="outlined"/>
                      </div>
                      <div className='w3-col l6'>
                          <CssTextField className="inputStyleSurname" error={ErrorInput} name="cognome" sx={{input: {color: 'darkgrey'}}} label={secondLabel} variant="outlined"/>
                      </div>
                  </div>
                  <CssTextField className="inputStyle" type="mail" error={ErrorInput} name="email" sx={{input: {color: 'darkgrey'}}} label={thirdLabel} variant="outlined"/>
                  <CssTextField className="inputStyle" error={ErrorInput} name="password" type='password' sx={{input: {color: 'darkgrey'}}} label={fourthLabel} variant="outlined"/>

                  <Button className='buttonSignup' type="submit" variant="contained">Signup</Button>
              </Box>
          </>    
      );
}

export default Registration;