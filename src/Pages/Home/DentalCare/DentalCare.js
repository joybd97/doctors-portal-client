import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img from '../../../images/treatment.png'

const DentalCare = () => {
    return (
        <Container  sx={{mt:10}}>
        <Grid container spacing={2}>
        <Grid item xs={4}>
         <img style={{width:300, height:400}} src={img} alt="" />
        </Grid>
        <Grid item xs={6}>
        <Typography variant="h4" sx={{ textAlign: 'left'}}>Exceptional Dental <br /> Care, on Your Terms</Typography>
        <Typography sx={{mt:5, textAlign: 'left'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero animi dolorum vitae tenetur aperiam hic commodi fugit, nulla velit laboriosam pariatur porro sit exercitationem repellat libero. Voluptate quae nulla distinctio hic facere harum deleniti beatae veritatis eligendi qui. Dignissimos? lo</Typography>
        <Button variant="contained" sx={{m:5}} style={{backgroundColor: '#5CE7ED'}}>Learn More</Button>
        </Grid>
        </Grid>
        
        </Container>
        
    );
};

export default DentalCare;