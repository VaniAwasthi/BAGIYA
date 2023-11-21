import { Box, Typography } from "@mui/material";
import React from "react";
import "./style.css";
import PlantCare from "../../../../Image/PlantCare.jpg";
import PlantSinfourth from "../../../../Image/Plantsinfourth.jpg";
import PotsFourth from "../../../../Image/potsFourth.jpeg";
import SeedsFourth from "../../../../Image/SeedsFourth.jpeg";

const FeatureSection = () => {
  const FeatureSectionData = [
    {
      label: "Plants",
      image: PlantSinfourth,
    },
    {
      label: "Seeds",
      image: SeedsFourth,
    },
    {
      label: "Pots and Planter",
      image: PotsFourth,
    },
    {
      label: "Plant Care",
      image: PlantCare,
    },
  ];

  return (
    <>
      <Typography variant="h4" textAlign="center">
        What are you looking for?
      </Typography>
      <Box
        display="flex"
        justifyContent={{ xs: "center", sm: "space-evenly" }}
        flexWrap={{ xs: "wrap", lg: "nowrap" }}
        padding={{ xs: 0, sm: 4 }}
      >
        {FeatureSectionData.map((data, index) => (
          <Box
            key={index}
            width={{ xs: "100%", sm: "auto" }}
            mb={4}
            mx={{ xs: 0, sm: 2 }}
            textAlign="center"
            overflow="hidden"
            position="relative"
          >
            <Box
              component="img"
              src={data.image}
              alt={data.label}
              // margin={1}
              width={250}
              height={350}
              className="zoom-effect-container"
            />
            <Typography variant="h6">{data.label}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default FeatureSection;
