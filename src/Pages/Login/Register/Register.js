import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Register = () => {
    const [loginData,setLoginData] =useState({});
    const {user,registerUser,isLoading, authError}= useAuth();
    
    const handelOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handelSubmit = e=>{

        if(loginData.password !== loginData.password1){
            alert('Password didnot match');
            return;
        }
        registerUser(loginData.email, loginData.password);
        
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{mt: 10}}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading  && <form onSubmit={handelSubmit}>
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
                    <TextField id="standard-basic"
                    sx={{width:'75%', m:1}}
                    name ="password1"
                    onChange={handelOnChange}
                     label="Confirm Password"
                     type="password"
                     variant="standard"
                    />
                    
                    <Button variant="contained" type="submit" sx={{width:'75%', m:1}}>Register</Button>
                    <NavLink to="/login"
                    style={{textDecoration: 'none'}}>
                    <Button variant="text">Already Registered? Please Login</Button>
                    </NavLink>
                    </form>}
                    {isLoading && <CircularProgress/> }
                    {
                        user?.email && <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        Congrats! — <strong>User Created!</strong>
                      </Alert>
                    }

                    {
                        authError && <Alert variant="outlined" severity="error">
                        {authError}
                      </Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    
                    <img src={login} alt="" style={{width: '100%'}}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;