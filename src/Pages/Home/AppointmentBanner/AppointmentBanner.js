import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment.png'
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    marginTop:175,
    backgroundColor: 'rgba(45,58,74,.7)',
    backgroundBlendMode: 'darken, luminosity'
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
           <img 
           style={{width:400, marginTop:-110}}
           src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'flex-start',
                textAlign: 'left',
                alignItems: 'center'}}>
           <Box>
           <Typography variant="h6" sx={{mb:5}} style={{color: '#5CE7ED'}}>
           Appointment
      </Typography>
      <Typography variant="h4" style={{color: 'white'}}>
           Make an Appointment Today
      </Typography>
      <Typography variant="h6" sx={{my:3}} style={{color: 'white', fontSize: '14', fontWeight: '400'}}>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat neque veniam esse commodi quo necessitatibus aliquid ea iste ullam fuga.
      </Typography>

      <Button variant="contained" style={{backgroundColor: '#5CE7ED'}} >Learn More</Button>
           </Box>
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;