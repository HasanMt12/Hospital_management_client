import { Box, Container, Grid, Paper } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import React from "react";

import ServiceTitle from "./ServiceTitle";
import Service from "./Service";
import "./service.css"

const Services = () => {
  const doctorservices = [
    {
      id: 1,
      img: "https://img.freepik.com/premium-vector/doctor-medical-emergency-hurrying-help-patient-cartoon_251661-95.jpg?w=2000 ",
      title: "Emergency Care",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tQFTNscskfpAXYJ1w0HRFlwdxEeeIz1JF2pPyDioGAkJ-TfwCdxGKVz1ZMVaX712rio&usqp=CAU",
      title: "Call Center 24/7",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    },
    {
      id: 3,
      img: "https://media.istockphoto.com/id/1296931945/vector/neworganset.jpg?s=612x612&w=0&k=20&c=3kC1j87wSx2NblNiAEDmTmsRtSXqeqpXjUWlXRVjYbE=",
      title: "Heart disease",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEdoGdeThfMDkxbgIOjYcu6oRbLf0RV10Hg&usqp=CAU",
      title: "Blood Test",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    },
    {
      id: 5,
      img: "https://media.istockphoto.com/id/1226588537/vector/a-group-of-doctors-listens-to-the-heart-examination-diagnosis-and-treatment-of.jpg?s=612x612&w=0&k=20&c=pFvhg_pMqLGr9aJV41ueCdBBwDRFyDcuYKwW-gO3qsw=",
      title: "Cardiac Surgery",
      details: "",
    },
    {
      id: 2,
      img: "https://t3.ftcdn.net/jpg/01/19/75/26/360_F_119752602_gm4OfWfuBRw8rOKaXqMgSSjNPjgyhNPE.jpg",
      title: "Ophthalmology",
      details: "",

    },
  ];

  return (
    <Container className="customService">
      <Box>
        <ServiceTitle
        className="textColor"
          title="Services We Offer"
          // colored="Services"
          sx = {
              {
                mb: 8,
                color: "#0f8383"
                }
                }
        />

        <Grid sx={{ mb: 8 }} container spacing={2}>
          {doctorservices.map((serv) => (
            <Service serv={serv}></Service>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;
