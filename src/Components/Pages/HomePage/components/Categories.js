import { Box, Typography } from "@mui/material";
import React from "react";
import Thirdsec1 from "../../../../Image/Thirdsec1.jpg";
import Thirdsec2 from "../../../../Image/Thirdsec2.jpeg";
import Thirdsec3 from "../../../../Image/Thirdsec3.jpg";
import Thirdsec4 from "../../../../Image/Thirdsec4.jpeg";
import Thirdsec5 from "../../../../Image/Thirdsec5.jpg";
import Thirdsec6 from "../../../../Image/Thirdsec6.jpg";

const Categories = () => {
  const CategoriesData = [
    {
      label: "Best Seller",
      image: Thirdsec5,
    },
    {
      label: "Easy to Care",
      image: Thirdsec2,
    },
    {
      label: "Interior Plant",
      image: Thirdsec6,
    },
    {
      label: "Outdoor Plant",
      image: Thirdsec4,
    },
    {
      label: "Fertilizer",
      image: Thirdsec1,
    },
    {
      label: "Seeds",
      image: Thirdsec3,
    },
  ];

  return (
    <Box
      display="flex"
      justifyContent={{ xs: "center", sm: "space-evenly" }}
      flexWrap={{ xs: "wrap", lg: "nowrap" }}
      padding={{ xs: 0, sm: 4 }}
    >
      {CategoriesData.map((CategoriesData, index) => (
        <Box
          key={index}
          width={{ xs: "100%", sm: "auto" }}
          mb={4}
          mx={{ xs: 0, sm: 2 }}
          textAlign="center"
        >
          <Box
            component="img"
            src={CategoriesData.image}
            alt={CategoriesData.label}
            margin={1}
            width={150}
            height={150}
            sx={{ borderRadius: "50%", border: "2px solid yellow" }}
          />
          <Typography variant="h6">{CategoriesData.label}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Categories;
