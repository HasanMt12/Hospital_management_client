import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import { Button, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
const Footer = () => {
  return (
    <footer>
      <Box p={10} bgcolor="black" color="white">
        <Grid align="center" container maxWidth="lg" spacing={2}>
          <Grid align="center" item xs="12" md="3">
            <MedicationLiquidIcon fontSize="large" color="secondary" />
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
              <Link underline="hover" href="/" color="inherit">
                Cencer Screening
              </Link>
            </Box>

            <Box>
              <Link underline="hover" href="/" color="inherit">
                Cardiac Surgery
              </Link>
            </Box>
            <Box>
              <Link underline="hover" href="/" color="inherit">
                Pathology
              </Link>
            </Box>

            <Box>
              <Link underline="hover" href="/" color="inherit">
                Neurology
              </Link>
            </Box>
          </Grid>
          <Grid item xs="12" md="3">
            <Typography borderBottom={1} variant="h5">
              Openning Time
            </Typography>
            <Typography underline="hover" variant="subtitle2">
              Mon-Wed - 9:00AM-7:00PM
            </Typography>
            <Typography underline="hover" variant="subtitle2">
              Mon-Wed - 9:00AM-7:00PM
            </Typography>
            <Typography underline="hover" variant="subtitle2">
              Mon-Wed - 9:00AM-7:00PM
            </Typography>
            <Typography underline="hover" variant="subtitle2">
              Sat - Sun - Closed
            </Typography>
          </Grid>
          <Grid item xs="12" md="3">
            <Typography borderBottom={1} variant="h5">
              Doctors Time Table
            </Typography>
            <Typography variant="subtitle2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
              soluta?
            </Typography>
            <Box mt={2}>
              <Button variant="contained" color="secondary" size="small">
                See Time Table
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
