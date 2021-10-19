import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Circle from '@mui/icons-material/Circle';
import CircleBorder from '@mui/icons-material/CircleOutlined';

export default function FormSign(){
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
        email: data.get('email'),
        password: data.get('password'),
        });
    };

    return(
        <Box
        sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
            <div 
            style={{'width':'350px'}}
            >

                <Typography component="h1" variant="h4" fontWeight="bold" color="#568c63" >
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoFocus
                        color="success"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        color="success"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        color="success"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="repeat-password"
                        label="Reapeat Password"
                        type="password"
                        id="repeat-password"
                        autoComplete="repeat-password"
                        color="success"
                    />
                    <FormControlLabel
                        control={<Checkbox value="agreement" defaultChecked icon={<CircleBorder/>} checkedIcon={<Circle/>} color='success'/>}
                        label="Vì anh, em nguyện chấp nhận tất cả"
                    />
                    <Button
                        type="Sign Up"
                        fullWidth
                        variant="contained"
                        color="success"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        Sign Up
                    </Button>
                    <Stack direction="row" spacing={1}>
                        <Typography>    
                            Có tài khoản rồi hả ? 
                        </Typography>
                        <Link>
                            <Typography color="#568c63">
                                Đăng nhập đê!!!
                            </Typography>
                        </Link>
                    </Stack>
                </Box>
            </div>
        </Box>
    )
}