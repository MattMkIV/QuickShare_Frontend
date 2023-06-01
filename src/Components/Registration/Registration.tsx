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
          const data = new FormData(event.currentTarget);
          //Take Value
          let username = data.get('username');
          let password = data.get('password');

          console.log("Username: "+username);
          console.log("Password: "+password);

          if(!isErrorInput) navigate("/homepage");
          else setErrorInput(true);
      }

    document.body.style.backgroundImage = '';

      return(
          <>
              <Box component="form" onSubmit={handleSubmit}>
                  <div className='w3-row inputStyle'>
                      <div className='w3-col l6'>
                          <CssTextField className="inputStyleName" error={ErrorInput} name="nome" label={firstLabel} variant="outlined"/>
                      </div>
                      <div className='w3-col l6'>
                          <CssTextField className="inputStyleSurname" error={ErrorInput} name="cognome" label={secondLabel} variant="outlined"/>
                      </div>
                  </div>
                  <CssTextField className="inputStyle" type="mail" error={ErrorInput} name="email" label={thirdLabel} variant="outlined"/>
                  <CssTextField className="inputStyle" error={ErrorInput} name="password" type='password' label={fourthLabel} variant="outlined"/>

                  <Button className='buttonSignup'
                      sx={{width : '90%', height : '60px', fontFamily : 'Roboto Black', color : '#ffdad5',
                          fontSize : '17px', borderRadius : '18px', boxShadow : '0 0 20px 5px rgba(0, 0, 0, 0.13)',
                          backgroundColor : '#920609', marginTop : '88px', marginLeft : '21px' }}
                      type="submit">Signup</Button>
              </Box>
          </>    
      );
}

export default Registration;