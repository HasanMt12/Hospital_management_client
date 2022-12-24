import React from "react";
// Import Swiper React components
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import DetailsIcon from "@mui/icons-material/Details";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Button, CardActionArea, IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import ServiceTitile from "../Services/ServiceTitle";

const DoctorInHome = () => {
  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctor"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/featureddoctors");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  refetch();
  console.log(doctors)

  return (
    <>
      <ServiceTitile
        title="Featured Doctors"
        colored="Services"
        sx={{ mb: 8 }}
      />
      <Swiper
        //   slidesPerView={3}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          788: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1170: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1600: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        //   spaceBetween={30}
        slidesPerGroup={1}
        grabCursor={true}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        //   navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper swipers mb-52"
      >
        {doctors.map((doctor) => (
          <SwiperSlide className="swipersSlider mb-10">
            <Card sx={{}}>
              <CardMedia
                component="img"
                alt="green iguana"
                image={doctor?.img}
                style={{height:200}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {doctor?.doctorName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {doctor?.degree}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {doctor?.department}
                </Typography>
              </CardContent>
              <CardActions>
                <Tooltip title="Book Appointment">
                  <IconButton>
                    <AddCircleSharpIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="See Details">
                  <Link to={`doctor/${doctor?._id}`}>
                    <IconButton>
                      <DetailsIcon />
                    </IconButton>
                  </Link>
                </Tooltip>
              </CardActions>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default DoctorInHome;
