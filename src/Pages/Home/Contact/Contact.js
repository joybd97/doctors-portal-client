
import { Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';
import bg from '../../../images/appointment.png';

const connectBg = {
    background: `url(${bg})`,
    marginTop:175,
    backgroundColor: 'rgba(45,58,74,.7)',
    backgroundBlendMode: 'darken, luminosity'
}

const Contact = () => {
    return (
        <Container style={connectBg}>
            <Typography variant="h6" style={{color: '#5CE7ED', paddingTop:'40px'}} >Contact US</Typography>
            <Typography variant="h5" style={{color: 'white'}}>Always Connect With us</Typography>
            <form>
              <TextField placeholder="Email Address" style={{backgroundColor: 'white', width: '60%', MarginTop:'20px'}}></TextField>
              <TextField placeholder="Subject" style={{backgroundColor: 'white', width: '60%', margin:'10px'}}></TextField> <br />
              <TextField
                multiline
                rows={4}
                placeholder="Text Message"
                style={{backgroundColor: 'white', width: '60%'}}
                 />
                    <br />
                 <Button type="submit" variant="contained" style={{backgroundColor: '#5CE7ED', color: 'white', margin:'20px'}}>Submit</Button>
            </form>        
        </Container>
    );
};

export default Contact;