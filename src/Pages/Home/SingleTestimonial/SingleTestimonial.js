import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const SingleTestimonial = (props) => {
    const {name,city,text,img} = props.testimonial;
    return (
        <Grid item xs={4} sm={4} md={4} >
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <CardMedia
        component="img"
        style={{width: 'auto', height: '80px', margin: '0 auto'}}
        height="194"
        image={img}
         
      />
        <CardContent>
          
          <Typography variant="h5" component="div">
           {name} <br />
           <small>{city}</small>
          </Typography>
         
          <Typography variant="body2" color="text.secondary">
            {text}
             
          </Typography>
        </CardContent>
        
      </Card>
        </Grid>
    );
};

export default SingleTestimonial;