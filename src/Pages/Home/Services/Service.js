import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import './service.css'

const Service = ({ serv }) => {
  const { img, title, details } = serv;
  console.log(serv);
  return (
    <Card className="card mt-10"
      sx={{
        maxWidth: 345,
        boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px white",
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
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
          }}
        ></Typography>
        <Typography variant="body2" color="text.secondary">
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Service;
