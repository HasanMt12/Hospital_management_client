import { Button, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
const Footer = () => {
  return (
    <footer>
      <Box p={10} bgcolor="grey" color="white">
        <Grid align="center" container maxWidth="lg" spacing={1}>
          <Grid align="center" item xs="12" md="3">
            <Typography variant="h4">Doctors Planet</Typography>
            <Typography variant="subtitle2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
              soluta?
            </Typography>
          </Grid>
          <Grid item xs="12" md="3">
            <Typography borderBottom={1} variant="h5">
              Our Services
            </Typography>
            <Box color="white">
              <Link to="/">Cencer Screening</Link>
            </Box>

            <Box>
              <Link to="/">Cardiac Surgery</Link>
            </Box>
            <Box>
              <Link to="/">Pathology</Link>
            </Box>

            <Box>
              <Link to="/">Neurology</Link>
            </Box>
          </Grid>
          <Grid item xs="12" md="3">
            <Typography borderBottom={1} variant="h5">
              Openning Time
            </Typography>
            <Typography variant="subtitle2">Mon-Wed - 9:00AM-7:00PM</Typography>
            <Typography variant="subtitle2">
              Mon - Wed - 9:00 AM - 7:00 PM
            </Typography>
            <Typography variant="subtitle2">
              Mon - Wed - 9:00 AM - 7:00 PM
            </Typography>
            <Typography variant="subtitle2">Sat - Sun - Closed</Typography>
          </Grid>
          <Grid item xs="12" md="3">
            <Typography borderBottom={1} variant="h5">
              Doctors Time Table
            </Typography>
            <Typography variant="subtitle2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
              soluta?
            </Typography>
            <Button variant="contained">See Time Table</Button>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;

