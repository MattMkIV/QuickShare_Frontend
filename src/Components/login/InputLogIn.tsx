//MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
//CSS
import "./InputLogIn.css";
//Other
import { useState } from 'react';
//Axios
import { useNavigate } from 'react-router-dom';

//Props
interface Props {
    firstLabel: string,
    secondLabel: string;
}
  

function Input (this: any, {firstLabel, secondLabel}: Props) {

      //Variable declaration
      const navigate = useNavigate();
      let isErrorInput = false;
      const [ErrorInput, setErrorInput] = useState(false);

      const CssTextField = styled(TextField)({
          '& label.Mui-focused': {
            color: '#007BD4',
          },
          '& label': {
              color: '#007BD4',
          },
          '& .MuiInput-underline': {
              borderBottomColor: '#007BD4',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#007BD4',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#3b3b3b',
            },
            '&:hover fieldset': {
              borderColor: 'blue',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#007BD4',
            },
          },
      });

      //Submit Login    : React.FormEvent<HTMLFormElement>
      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          //Take Value
          let username = data.get('username');
          let password = data.get('password');

          console.log("Username: "+username);
          console.log("Password: "+password);

          if(!isErrorInput) navigate("/");
          else setErrorInput(true);
      }

      return(
          <>
            <Box component="form" onSubmit={handleSubmit}>
              <Box className="username">
                  <PersonIcon sx={{ color: '#007BD4', fontSize:50, mr: 1, my: 0.5 }}/>
                  <CssTextField error={ErrorInput} name="username" fullWidth sx={{input: {color: 'darkgrey'}}} label={firstLabel} variant="outlined"/>
              </Box>
              <Box className="password">
                  <LockIcon sx={{ color: '#007BD4', fontSize:50, mr: 1, my: 0.5 }}/>
                  <CssTextField error={ErrorInput} name="password" fullWidth type='password' sx={{input: {color: 'darkgrey'}}} label={secondLabel} variant="outlined"/>
              </Box>
              <Button className='button' type="submit" variant="contained">Login</Button>
            </Box>
          </>    
      );
}

export default Input;