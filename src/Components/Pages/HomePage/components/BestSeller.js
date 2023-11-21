import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import BestSellerIcon from "../../../../Image/BestSeller.png";
import Bestseller1 from "../../../../Image/Bestseller1.jpg";
import Bestseller2 from "../../../../Image/Bestseller2.jpg";
import Bestseller3 from "../../../../Image/BestSeller3.jpg";
import Bestseller4 from "../../../../Image/Bestseller4.jpg";

const BestSeller = () => {
  const BestSellerData = [
    {
      Image: Bestseller1,
      label: "Money plant",
      Price: "₹150",
    },
    {
      Image: Bestseller2,
      label: "Jade Mini plant",
      Price: "₹250",
    },
    {
      Image: Bestseller3,
      label: "Broken Heart Plant",
      Price: "₹250",
    },
    {
      Image: Bestseller4,
      label: "Bamboo plant",
      Price: "₹350",
    },
  ];
  return (
    <Box>
      <Box display="flex" alignItems="center" m={5}>
        <Box
          component="img"
          src={BestSellerIcon}
          alt="BestSeller"
          width={55}
          height={55}
          mr={2}
        />
        <Typography variant="h3" textAlign="center" mt={2}>
          BestSeller
        </Typography>
      </Box>
      <Box
        m={5}
        display="flex"
        justifyContent={{ xs: "center", sm: "space-between" }}
        flexWrap={{ xs: "wrap", lg: "nowrap" }}
      >
        {BestSellerData.map((BestSellerDatas, index) => (
          <Card sx={{ width: 300, margin: "10px" }} key={index}>
            <CardMedia
              sx={{ height: 200 }}
              image={BestSellerDatas.Image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {BestSellerDatas.label}
              </Typography>
              <Typography variant="h6" color="green">
                From {BestSellerDatas.Price}
              </Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" variant="contained">
                View More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default BestSeller;
