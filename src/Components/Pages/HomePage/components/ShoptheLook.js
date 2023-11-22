import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import FirstSlider from "../../../../Image/ShopLookSlider/firstSlider.webp";
import SecondSlider from "../../../../Image/ShopLookSlider/Living_Room.webp";
import ThirdSlider from "../../../../Image/ShopLookSlider/ShoptheLook.webp";

const ShoptheLook = () => {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false, // Set to false to remove dots
    arrows: true,
  };

  const slides = [
    { id: 1, image: FirstSlider, alt: "img1" },
    { id: 2, image: SecondSlider, alt: "img2" },
    { id: 3, image: ThirdSlider, alt: "img3" },
  ];

  return (
    <Box>
      <Typography textAlign="center" variant="h3" m={2}>
        Shop The Look
      </Typography>

      <Slide {...properties}>
        {slides.map((slide) => (
          <div key={slide.id} className="each-slide">
            <div>
              <img src={slide.image} alt={slide.alt} />
            </div>
          </div>
        ))}
      </Slide>

      <Box textAlign="center" mt={-7}>
        <Button variant="contained" color="success">
          View More
        </Button>
      </Box>
    </Box>
  );
};

export default ShoptheLook;
