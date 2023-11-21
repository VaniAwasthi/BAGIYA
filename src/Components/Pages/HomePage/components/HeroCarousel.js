import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import slide2 from "../../../../Image/Slide1.png";
import Slide1 from "../../../../Image/Slide1.png";
import Slide4 from "../../../../Image/Slide4.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "First Image",
    imgPath: Slide1,
  },
  {
    label: "Second Image",
    imgPath: Slide4,
  },
  {
    label: "Third Image",
    imgPath: slide2,
  },
];

const HeroCarousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    // Your code here that needs to run on prop changes
    // For example, you can fetch data or perform other side effects

    // Clean up the effect (if needed) by returning a function
    return () => {
      // Cleanup code
    };
  }, []);

  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={setActiveStep}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "60vh", // Adjust this value as needed
                  display: "block",
                  width: "100%",
                  objectFit: "fill",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {/* MobileStepper code here */}
    </Box>
  );
};

export default HeroCarousel;
