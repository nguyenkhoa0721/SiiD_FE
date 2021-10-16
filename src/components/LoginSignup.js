import React from 'react';
import FormSignUp from './Signup.js';
import { Paper, Grid } from '@mui/material';
import { Box } from '@mui/system';
/**
 * This class use to build Sign up page
 * State: username or email from Log in page when 
 * input account not exists in server.
 */

class LoginSignup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            email : '',
            type: '',
        }        
    }
    
    render(){
        return (
            <Box sx={{flexGrow: 1}}>
                <Grid container>
                    <Grid item md={6} xs={12}>
                        <FormSignUp/>
                    </Grid>
                    <Grid item md={6}>
                        <Paper variant="outlined">
                            <img alt="Hello" src="https://arambartholl.com/wwwppp/wp-content/uploads/old_blog/full-screen-rozendaal.jpg"/>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default LoginSignup;
