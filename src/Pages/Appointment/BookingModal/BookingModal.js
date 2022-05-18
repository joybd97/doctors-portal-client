import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const BookingModal = ({openBooking,handleBookingClose, booking,date,setBookingSuccess}) => {
    const {name,time} = booking;
    const {user}= useAuth();
    const initialInfo ={patientName: user.displayName, email: user.email, phone: ''}
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handelOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo ={...bookingInfo};
        newInfo[field] = value;
        setBookingInfo(newInfo);

    }

    const handelBookingSubmit = e =>{
         const appointment = {
           ...bookingInfo,
           time,
           serviceName: name,
           date: date.toLocaleDateString(),
         }
         fetch('https://intense-sea-12604.herokuapp.com/appointments',{
           method: 'POST',
           headers: {
             'content-type': 'application/json'
           },
           body: JSON.stringify(appointment)
         })
         .then(res => res.json())
         .then(data=>{
           if(data.insertedId){
            setBookingSuccess(true);
             handleBookingClose();
           }
         })
         
        e.preventDefault();
    }
    return (
        <div>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={handelBookingSubmit}>
                <TextField 
                    disabled
                    sx={{width:'90%', m:1}}
                    id="outlined-size-small"
                    defaultValue={time}
                    size="small"
                >
                
                </TextField>
                <TextField 
                
                    sx={{width:'90%', m:1}}
                    id="outlined-size-small"
                    name="patientName"
                    onBlur={handelOnBlur}
                    defaultValue={user.displayName}
                    size="small"
                >
                
                </TextField>
                <TextField 
                    
                    sx={{width:'90%', m:1}}
                    id="outlined-size-small"
                    name="email"
                    onBlur={handelOnBlur}
                    defaultValue={user.email}
                    size="small"
                >
                
                </TextField>
                <TextField 
                    sx={{width:'90%', m:1}}
                    id="outlined-size-small"
                    name="phone"
                    onBlur={handelOnBlur}
                    defaultValue="+8801"
                    size="small"
                >
                
                </TextField>
                <TextField 
                    disabled
                    sx={{width:'90%', m:1}}
                    id="outlined-size-small"
                    defaultValue={date.toDateString()}
                    size="small"
                >
                
                </TextField>

                <Button type="submit" variant="contained">Book</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
        </div>
    );
};

export default BookingModal;