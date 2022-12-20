import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import DetailsIcon from "@mui/icons-material/Details";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import ServiceTitile from "../Services/ServiceTitle";
import { IconButton, Tooltip } from "@mui/material";

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
  });
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  refetch();

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
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {doctor?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {doctor?.qualification}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {doctor?.category}
                </Typography>
              </CardContent>
              <CardActions>
                <Tooltip title="Book Appointment">
                  <IconButton>
                    <AddCircleSharpIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="See Details">
                  <IconButton>
                    <DetailsIcon />
                  </IconButton>
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
