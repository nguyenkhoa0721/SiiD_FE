import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormLogin from './Login';
import FormSign from './Signup';


const theme = createTheme();

export default function SignLog(props) {
  const check = (type)=>{
    console.log("type")
    console.log(type)
    if(type==="login"){
      return (<FormLogin/>);
    }else{
      return (<FormSign/>);
    }
  }
  return (
    // sửa dòng 19 thành FormSign để hiện Sign Up, FormLogin để hiện Login
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          {check(props.type)}
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}