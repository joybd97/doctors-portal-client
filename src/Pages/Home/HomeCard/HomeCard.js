import React from 'react';
import clock from '../../../icons/clock.svg';
import location from '../../../icons/marker.svg';
import call from '../../../icons/phone.svg';
import {Container, Grid } from '@mui/material';
import { Box } from '@mui/system';

const HomeCard = () => {
    return (
     
          <Container style={{display: 'flex', marginTop:-40}}>
            <Grid item xs={2} sm={4} md={4} >
                <div style={{textAlign: 'left', backgroundColor: '#5CE7ED', padding:'5px 60px 5px 0px',
                color: 'white', height: '130px', width: '255px'}}>
                <img style={{height: '60px', padding: '25px 0px 0px 5px'}} src={clock} alt="" />
                <div style={{float: 'right'}}>
                <h3>Opening Hours </h3>
                <small>Lorem ipsum dolor sit amet <br/> consectetur adipisicing elit.</small>
                </div>
                </div>
            </Grid>


            <Grid item xs={2} sm={4} md={4}>
            <div style={{textAlign: 'left', marginLeft: '10px', marginRight: '10px',
             backgroundColor: '#181638', padding:'5px 60px 5px 0px',color: 'white',height: '130px', width: '255px'}}>
             <img style={{height: '60px', padding: '25px 0px 0px 15px'}} src={location} alt="" />
            <div style={{float: 'right'}}>
            <h3>Visit Our Location </h3>
            <small>2/33 Aftabbnagar, Badda, Dhaka</small>
            </div>
            </div>
            </Grid>


            <Grid item xs={2} sm={4} md={4}>
            <div style={{textAlign: 'left', backgroundColor: '#5CE7ED', padding:'5px 60px 5px 0px',
               color: 'white',height: '130px', width: '255px'}}>
            <img style={{height: '60px', padding: '25px 0px 0px 15px'}} src={call} alt="" />
            <div style={{float: 'right'}}>
            <h3>Contact us NoW </h3>
            <small>+8801700000000</small>
            </div>
            </div>
            </Grid>
          </Container>
        
 
    );
};

export default HomeCard;