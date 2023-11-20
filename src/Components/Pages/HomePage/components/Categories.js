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
      lable: "Best Seller",
      image: Thirdsec5,
    },
    {
      lable: "Easy to Care",
      image: Thirdsec2,
    },
    {
      lable: "Interior Plant",
      image: Thirdsec6,
    },
    {
      lable: "Outdoor Plant",
      image: Thirdsec4,
    },
    {
      lable: "Fertilizer",
      image: Thirdsec1,
    },
    {
      lable: "Seeds",
      image: Thirdsec3,
    },
  ];

  return (
    <Box
      display={{ xs: "block", sm: "flex" }}
      justifyContent={{ xs: "center0", sm: "space-evenly" }}
      p={3}
    >
      {CategoriesData.map((CategoriesDatas, index) => (
        <Box
          key={index}
          width={170}
          height={170}
          sx={{ borderRadius: "50%", border: "2px solid green" }}
        >
          <Box
            component="img"
            src={CategoriesDatas.image}
            margin={1}
            width={150}
            height={150}
            sx={{ borderRadius: "50%", border: "2px solid yellow" }}
          />
          <Box>
            <Typography variant="h6" textAlign="center">
              {CategoriesDatas.lable}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Categories;
