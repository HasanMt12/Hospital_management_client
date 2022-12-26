import { Typography } from "@mui/material";
import React from "react";

const ServiceTitile = ({ title, sx }) => {
  return (
    <div>
      <Typography
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom:"10px",
          ...sx,
        }}
      >
        {title}
      </Typography>
    </div>
  );
};

export default ServiceTitile;
