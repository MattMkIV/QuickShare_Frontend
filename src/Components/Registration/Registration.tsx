//MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
//CSS
import './Registration.css'
//Other
import { useState } from 'react';
import { registerNewUser } from '../../Utils/AuthService';
//Axios
import { useNavigate } from 'react-router-dom';

//Props

function Registration (this: any) {

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
            let nome = data.get('nome');
            let cognome = data.get('cognome');
            let username = data.get('username');
            let email = data.get('email');
            let password = data.get('password');
            let confirmPassword = data.get('confirmPassword');

            var userInfo = {
                Nome: nome,
                Cognome: cognome,
                Username: username,
                Email: email,
                Password: password,
                ConfirmPassword: confirmPassword
            };

            isError = await registerNewUser(userInfo);

            if(!isError) navigate("/confirmRegistration");
            else setErrorInput(true);

      }

    document.body.style.backgroundImage = '';

      return(
          <>
              <Box component="form" onSubmit={handleSubmit}>
                    <div className='w3-row inputStyle'>
                        <div className='w3-col l6'>
                            <CssTextField className="inputStyleName" error={ErrorInput} name="nome" label="Nome" variant="outlined"/>
                        </div>
                        <div className='w3-col l6'>
                            <CssTextField className="inputStyleSurname" error={ErrorInput} name="cognome" label="Cognome" variant="outlined"/>
                        </div>
                    </div>
                    <CssTextField className="inputStyle" type="text" error={ErrorInput} name="username" label="Username" variant="outlined"/>

                    <CssTextField className="inputStyle" type="email" error={ErrorInput} name="email" label="Email" variant="outlined"/>
                    <CssTextField className="inputStyle" error={ErrorInput} name="password" type='password' label="Password" variant="outlined"/>
                    <CssTextField className="inputStyle" error={ErrorInput} name="confirmPassword" type='password' label="Confirm Password" variant="outlined"/>

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