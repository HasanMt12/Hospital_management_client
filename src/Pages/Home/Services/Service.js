import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Service = ({ serv }) => {
  const { img, title, details } = serv;
  console.log(serv);
  return (
    <Card
      sx={{
        maxWidth: 345,
        // boxShadow: 'none',
        boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.1)",
        bgcolor: "",
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
        {serv.title}

        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
          }}
        ></Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, odio
          incidunt, accusamus, quasi dolores earum pariatur ullam fuga aut
          molestias dolor atque
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Service;