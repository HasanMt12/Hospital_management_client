
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const DoctorHomeCard = ({doctor}) => {
    const { 
        id,
        name,
        category,
        description,
        qualification,
        img
    } = doctor
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 ,
            transform: 'scale(1)',
            transition: 'transform 1s',
        '&:hover': {
            transform: 'scale(1.05)',
            // backgroundColor: 'red'
        }}}  >
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {qualification}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {description}
        </Typography> */}
        <Typography variant="body2" color="text.secondary">
          Speciality:  {category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{
            margin: 'auto',
            padding: '5px 20px',
            fontWeight: 'bold',
            backgroundColor: '#3098ff',
            color: 'white',
            '&:hover':{
                backgroundColor: '#1976d2'
            }
        }}>See Details</Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
        </Grid>
    );
};

export default DoctorHomeCard;