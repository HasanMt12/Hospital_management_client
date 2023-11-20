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
      details: "Emergency medicine doctors quickly stabilize and treat patients in the emergency department, regardless of their condition, focusing on determining the best course of action.",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tQFTNscskfpAXYJ1w0HRFlwdxEeeIz1JF2pPyDioGAkJ-TfwCdxGKVz1ZMVaX712rio&usqp=CAU",
      title: "Call Center 24/7",
      details:
      "Connect with a doctor 24/7 for quick consultations and prescriptions. Easily access and review your consultation history and online prescriptions.",
    },
    {
      id: 3,
      img: "https://media.istockphoto.com/id/1296931945/vector/neworganset.jpg?s=612x612&w=0&k=20&c=3kC1j87wSx2NblNiAEDmTmsRtSXqeqpXjUWlXRVjYbE=",
      title: "Heart disease",
      details:
        "Achieved Specialist Qualification in 2015 with a Master of Surgery (MS) in Cardiovascular and Thoracic Surgery from the National Institute of Cardiovascular Diseases (NICVD).",
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEdoGdeThfMDkxbgIOjYcu6oRbLf0RV10Hg&usqp=CAU",
      title: "Blood Test",
      details:
        "Lab tests assess treatment progress, detect failures, and monitor side effects using specimens like stool, urine, blood, and other body fluids.",
    },
    {
      id: 5,
      img: "https://media.istockphoto.com/id/1226588537/vector/a-group-of-doctors-listens-to-the-heart-examination-diagnosis-and-treatment-of.jpg?s=612x612&w=0&k=20&c=pFvhg_pMqLGr9aJV41ueCdBBwDRFyDcuYKwW-gO3qsw=",
      title: "Cardiac Surgery",
      details: "A list of cardiac surgeries done by our Cardiac Surgery Department which are supervised by Dr. Jahangir Kabir along with Dr. Sayedur Rahman Khan and Dr.",
    },
    {
      id: 2,
      img: "https://t3.ftcdn.net/jpg/01/19/75/26/360_F_119752602_gm4OfWfuBRw8rOKaXqMgSSjNPjgyhNPE.jpg",
      title: "Ophthalmology",
      details: "Diagnostic services include assessing visual acuity, refraction, slit lamp, ophthalmoscopy, tonometry, pachymetry, gonioscopy, fundus photography, and visual field testing.",

    },
  ];

  return (
    <Container className="customService "
      data-aos="zoom-in-up" data-aos-duration="2500">
      <Box>
        <ServiceTitle
          className="textColor"
          title="Services We Offer"
          // colored="Services"
          sx={
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
