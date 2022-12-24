import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const ServiceCard = ({service}) => {
    const {
name,
department,
balance,
picture,
about,
doctorName,
title,
doctorImg,
degree,
appointNumber,
doctorCode
    } = service
    // console.log(service);


    return (
        <div>
      
            <Card sx={{ maxWidth: 345 ,
            
            transform: 'scale(1)',
            transition: 'transform 1s',
        '&:hover': {
            transform: 'scale(1.05)',
            // backgroundColor: 'red'
            boxShadow: "0 0 300px 0 rgba(0, 0, 0, 0.1)"
        }}} >
      <CardMedia
        component="img"
        // height="140"
        image={doctorImg}
        alt=""
        sx={{
            height: 200,
            
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {doctorName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Department:  {department}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {degree}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{
            margin: 'auto',
            padding: '5px 20px',
            fontWeight: 'bold',
            // backgroundColor: '#3098ff',
            color: '#009100e6',
            '&:hover':{
                backgroundColor: '#0080002b',
                border: "2px solid #0080006b"
            }
        }}>See Details</Button>
        <Button size="small" sx={{
            margin: 'auto',
            padding: '5px 20px',
            fontWeight: 'bold',
            // backgroundColor: '#3098ff',
            // color: 'white',
            color: '#009100e6',
            '&:hover':{
                backgroundColor: '#0080002b',
                border: "2px solid #0080006b"
                // color: 'white'
            }
        }}>Appointment</Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
        </div>
    );
};

export default ServiceCard;