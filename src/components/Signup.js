import * as React from 'react';
import Box from '@mui/material/Box';
import { Stack, TextField, styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'green',
    },
    '& label.Mui-focused:hover': {
        color: 'red',
      },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray',
      },
      '&:hover fieldset': {
        color: 'green'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  });

export default function FormSignUp() {
    const [values, setValues] = React.useState({
        password: '',
        passwordRepeat: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };

      const handleClickShowPasswordRepeat = () => {
        setValues({
          ...values,
          showPasswordRepeat: !values.showPasswordRepeat,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        width: 300,
        height: '100%',
        position: 'fixed',
        left:0,
      }}
      noValidate
      autoComplete="off"
    >
      <Stack spacing='10'>
          
        <h1 style={{margin:'10px', color: "green", fontWeight: "bold",}}>Sign up</h1>
        <CustomTextField
          required
          id="outlined-required"
          label="Name"
          type="text"
        />
        <CustomTextField
          required
          id="outlined-required"
          label="Emal"
          type="email"
        />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Repeat Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPasswordRepeat ? 'text' : 'password'}
            value={values.passwordRepeat}
            onChange={handleChange('passwordRepeat')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPasswordRepeat}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPasswordRepeat ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Repeat Password"
          />
        </FormControl>
      </Stack>
    </Box>
  );
}
