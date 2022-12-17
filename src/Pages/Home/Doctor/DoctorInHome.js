import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import DoctorHomeCard from './DoctorHomeCard';
import { Box, Container } from '@mui/system';
import { Grid, Typography } from '@mui/material';

const DoctorInHome = () => {


        const {
          data: doctors = [],
          isLoading,
          refetch,
        } = useQuery({
          queryKey: ["doctor"],
          queryFn: async () => {
            const res = await fetch("featuredDoctors.json");
            const data = await res.json();
            return data;
          },
        })
        if(isLoading){
            return <h1>Loading</h1>
        }
        refetch()
      
        // console.log(doctors);
        
      
        const featuredDoctos = doctors.slice(0,3)
      

    return (
        <Container>

        <Box sx={{
             margin: '15px auto',
             padding: '15px auto'
        }}>
            <Typography variant="h3" sx={{
                margin: '15px auto',
                textAlign: 'center'
            }}>Our Doctors</Typography>
          <Grid
            container
            // direction="row"
            // justifyContent="center"
            // alignItems="center"
            spacing={2}
            >
            
          {featuredDoctos.map((doctor) => (
              
              <DoctorHomeCard key={doctor.id} doctor={doctor}></DoctorHomeCard>
              
              ))}
              </Grid>
        </Box>
 
         
        
    
              </Container>
    );
};

export default DoctorInHome;