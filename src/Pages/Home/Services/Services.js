import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import SectionTitile from './SectionTitile';
import Service from './Service';

export const Services = () => {

    const text = [
        'amr sonar bangla',
        'https://i.ibb.co/r0gHkvM/color-palette-1.png',
        'https://i.ibb.co/CvQwzKC/coding-1.png',
    ];
    const doctorservices = [

        {
            id: 1,
            img: "https://img.freepik.com/premium-vector/doctor-medical-emergency-hurrying-help-patient-cartoon_251661-95.jpg?w=2000 ",
            title: "Emergency Care",
            details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
        },
        {
            id: 2,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tQFTNscskfpAXYJ1w0HRFlwdxEeeIz1JF2pPyDioGAkJ-TfwCdxGKVz1ZMVaX712rio&usqp=CAU",
            title: "Call Center 24/7",
            details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
        },
        {
            id: 3,
            img: "https://media.istockphoto.com/id/1296931945/vector/neworganset.jpg?s=612x612&w=0&k=20&c=3kC1j87wSx2NblNiAEDmTmsRtSXqeqpXjUWlXRVjYbE=",
            title: "Heart disease",
            details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
        },
        {
            id: 4,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEdoGdeThfMDkxbgIOjYcu6oRbLf0RV10Hg&usqp=CAU",
            title: "Blood Test",
            details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
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
        {
            id: 2,
            img: "https://images1-fabric.practo.com/mpr-dental-care-1452521809-5693b951f0bc8.jpeg",
            title: "Dental Care",
            details: "",

        },
        {
            id: 2,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNcHzrHeThMAoW7WzjyfYCOc1zkLJ9xPV7yKHvnwGOQ2UVte9pDzhnyy0j2gV_ubWMxGE&usqp=CAU",
            title: "Outdoor Checkup",
            details: "",

        },
        {
            id: 2,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe47GZhBOi4ltjWdFqq9FdNmqBW6lv_MBjBeEC_pGq1oEMLtcvBnSswH5o8Eo_w48Ty0w&usqp=CAU",
            title: "  kidney  treatment",
            details: "",

        },


    ]

    return (
        <Container>
            <Box >
                <SectionTitile
                    title='Service We Offer'
                    colored='Services'
                    sx={{ mb: 8, }}
                />

                <Grid sx={{ mb: 8 }} container spacing={2}>
                    {/* {serviceImages.map((image, index) => (
                        <Grid item xs={12} sm={8} md={4} key={index}>

                        </Grid>
                    ))} */}

                    {

                        doctorservices.map(serv => <Service serv={serv} ></Service>)


                    }
                </Grid>
            </Box>
        </Container>

    )
}
