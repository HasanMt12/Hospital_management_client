import { Box, Container, Grid , Paper} from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import servicePicture from '../../../assets/doctor.jpg'




const Services = () => {
  

// install   npm i @material / typography
   
    return (
        <Container sx={
            {
                marginBottom: 2
            }
        }>
       
        <Box sx={
            {
                bgcolor: '#C2E6FC',
                padding: 4
            }
        }>
            <Box sx={{ flexGrow: 1 }}><Typography variant="h5"  align="center"
      justifyContent="center" color="common.white" >
         Our services
        </Typography>
      <Grid container spacing={{xs: 2,md: 3 }}
      alignItems = "center"
      justifyContent = "center"
      columns={{ xs: 4,sm: 8,md: 10}
     
      } > 
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
            <Card sx={
                {
                    maxWidth: 345,
                    padding: 2,
                    bgcolor: '#cfe8fc'
                }
            } >
      <CardMedia
      
        component="img"
        alt="green iguana"
        height="140"
        image={servicePicture}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          cardio surgery
        </Typography>
        <Typography variant="body2" color="text.secondary">
         coming soon 
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">check</Button>
    
      </CardActions>
    </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
        </Box>
        </Container>
    );
};

export default Services;