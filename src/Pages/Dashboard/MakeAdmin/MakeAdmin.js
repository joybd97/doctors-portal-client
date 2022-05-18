import { Alert, AlertTitle, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const handelOnBlur =e =>{
        setEmail(e.target.value);
    }
    const [email,setEmail]=useState('');
    const [success,setSuccess]=useState(false);
    const {token} = useAuth();
    const handelAdminSubmit = e =>{
        const user ={email};
        fetch('https://intense-sea-12604.herokuapp.com/users/admin',{
            method: 'PUT',
            headers: {
                'authorization' : `Bearer ${token}`,
                'Content-Type': 'application/json'},
            body: JSON.stringify(user)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                
                setSuccess(true);
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make admin</h2>
            <form onSubmit={handelAdminSubmit}>
                <TextField sx={{width:'50%'}} type="email" label="Email" onBlur={handelOnBlur} variant="standard"/>
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {
                success && <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                Congrats! — <strong>Added as Admin!</strong>
              </Alert>
            }
        </div>
    );
};

export default MakeAdmin;