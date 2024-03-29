import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import './OurService.css'

const OurService = ({ serv }) => {
  const { img, title, details } = serv;
  // console.log(serv);
  return (
    <Card className="card mt-6 md:mt-4 bg-[#E8F3F4] lg:h-[250px] md:h-[220px] h-[200px]"
      sx={{
        maxWidth: 345,
        marginTop: "20px",
        pt: 2,
        mx: "auto",
        "&:hover": {
          boxShadow: "0 0 300px 0 rgba(0, 0, 0, 0.1)",
        },
      }}

    >
      <CardMedia
        component="img"
        sx={{ width: 85, marginLeft: 15 }}
        image={img}
        alt=""
      />
      <CardContent
        sx={{
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {title}

        <Typography
          gutterBottom
          variant="56"
          component="div"
          sx={{
            fontWeight: "bold",
          }}
        ></Typography>
        <Typography className="text-start ml-2" variant="body2" color="text.secondary">
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OurService;
