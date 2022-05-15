import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';
import p1 from '../../../images/people1.png';
import p2 from '../../../images/people2.png';
import p3 from '../../../images/people3.png';
import bg from '../../../icons/quote.svg'

const Bg = {
    background: `url(${bg})`,
    backgroundRepeat  : 'no-repeat',
    backgroundPosition : 'right'
     
}
const testimonials =[
    {
        id:1,
        name: 'Winson Harry',
        city: 'California',
        text:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facere suscipit amet similique pariatur modi neque velit doloremque eligendi.',
        img: p1
    },
    {
        id:1,
        name: 'Marry Wiliam',
        city: 'California',
        text:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facere suscipit amet similique pariatur modi neque velit doloremque eligendi',
        img: p2
    },
    {
        id:1,
        name: 'Patinson Harry',
        city: 'California',
        text:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facere suscipit amet similique pariatur modi neque velit doloremque eligendi',
        img: p3
    }
]

const Testimonial = () => {
    return (
        <Container>
            <div style={Bg} >
                <Typography variant="h6" sx={{mt: 10, textAlign: 'left'}} style={{color: '#5CE7ED'}}>
                TESTIMONIAL
                </Typography>
                <Typography variant="h4" sx={{my:5, textAlign: 'left'}}>
                 What's our Patients <br />
                 Says
                </Typography>
                <br />
            </div>
            
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    testimonials.map(testimonial=> <SingleTestimonial
                        testimonial={testimonial}
                         key={testimonial.id}
                        ></SingleTestimonial>)
                }
                </Grid>
            
        </Container>
    );
};

export default Testimonial;