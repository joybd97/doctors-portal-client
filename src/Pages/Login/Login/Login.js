import { Alert, AlertTitle, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'



const Login = () => {
const [loginData,setLoginData] =useState({})
const {user,loginUser,signInWithGoogle, authError} = useAuth();
const location = useLocation();
const history = useHistory();

const handelGoogleSignIn =()=>{
    signInWithGoogle(location,history);
}

const handelOnChange = e =>{
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    setLoginData(newLoginData);
}
const handelSubmit = e=>{
    loginUser(loginData.email, loginData.password, location,history);
    e.preventDefault();
}
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{mt: 10}}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handelSubmit}>
                    <TextField id="standard-basic"
                    sx={{width:'75%', m:1}}
                    name ="email"
                    onChange={handelOnChange}
                     label="Your Email"
                     variant="standard"
                    />
                    <TextField id="standard-basic"
                    sx={{width:'75%', m:1}}
                    name ="password"
                    onChange={handelOnChange}
                     label="Your Password"
                     type="password"
                     variant="standard"
                    />
                    
                    <Button variant="contained" type="submit" sx={{width:'75%', m:1}}>Login</Button>
                    <NavLink to="/register"
                    style={{textDecoration: 'none'}}>
                    <Button variant="text">New User? Please Register</Button>
                    </NavLink>


                    {
                        user?.email && <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        Congrats! — <strong>Login Successful!</strong>
                      </Alert>
                    }

                    {
                        authError && <Alert variant="outlined" severity="error">
                        {authError}
                      </Alert>
                    }

                    </form>
                    <p>-----------------------------</p>
                    <Button onClick={handelGoogleSignIn} variant="contained">Google Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    
                    <img src={login} alt="" style={{width: '100%'}}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;