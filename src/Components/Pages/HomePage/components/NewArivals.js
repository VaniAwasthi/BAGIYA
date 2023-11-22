import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Rating,
  Typography,
} from "@mui/material";
import NewArrivalIcon from "../../../../Image/newArrival.png";
import Newarrival1 from "../../../../Image/newarrival1.jpg";
import Newarrival2 from "../../../../Image/newarrival2.jpeg";
import Newarrival3 from "../../../../Image/newarrival3.jpg";
import Newarrival4 from "../../../../Image/newarrival4.jpg";
import Newarrival5 from "../../../../Image/newarrival5.webp";
import Newarrival6 from "../../../../Image/newarrival6.webp";
import Newarrival7 from "../../../../Image/newapprival7.webp";
import Newarrival8 from "../../../../Image/newarrival8.webp";

const NewArrival = () => {
  const NewArrivalData = [
    {
      Image: Newarrival1,
      label: "Jade Plant",
      Price: "₹199",
      rating: 2,
    },
    {
      Image: Newarrival2,
      label: "Pink Rose Plant",
      Price: "₹199",
      rating: 3,
    },
    {
      Image: Newarrival3,
      label: "Snake Plant",
      Price: "₹250",
      rating: 4,
    },
    {
      Image: Newarrival4,
      label: "Cactus Plant",
      Price: "₹350",
      rating: 5,
    },
    {
      Image: Newarrival5,
      label: "Fern Morpankhi - Medium",
      Price: "₹450",
      rating: 5,
    },
    {
      Image: Newarrival6,
      label: "Peperomia Variegated Plant",
      Price: "₹250",
      rating: 2,
    },
    {
      Image: Newarrival7,
      label: "Peperomia Angulata Plant",
      Price: "₹350",
      rating: 2,
    },
    {
      Image: Newarrival8,
      label: "Chlorophytum Spider Plant",
      Price: "₹250",
      rating: 5,
    },
  ];

  const [ratings, setRatings] = React.useState(
    NewArrivalData.map((item) => item.rating)
  );

  const handleRatingChange = (index, newValue) => {
    const newRatings = [...ratings];
    newRatings[index] = newValue;
    setRatings(newRatings);
  };

  return (
    <Box margin={3}>
      <Box display="flex" alignItems="center" m={5}>
        <Box
          component="img"
          src={NewArrivalIcon}
          alt="BestSeller"
          width={55}
          height={55}
          mr={2}
        />
        <Typography variant="h4" textAlign="center" mt={2}>
          New Arrival
        </Typography>
      </Box>
      <Box
        m={5}
        display="flex"
        justifyContent={{ xs: "space-between", sm: "space-between" }}
        flexWrap="wrap"
      >
        {NewArrivalData.map((NewArrivalDatas, index) => (
          <Card sx={{ width: 300, margin: "10px" }} elevation={5} key={index}>
            <CardMedia
              sx={{ height: 300 }}
              image={NewArrivalDatas.Image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {NewArrivalDatas.label}
              </Typography>
              <Typography variant="h6" color="green">
                From {NewArrivalDatas.Price}
              </Typography>
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Rating
                  name={`rating-${index}`}
                  value={ratings[index]}
                  onChange={(event, newValue) =>
                    handleRatingChange(index, newValue)
                  }
                />
              </Box>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
            <CardActions sx={{ mb: 2 }}>
              <Button
                size="medium"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#179355",
                  "&:hover": {
                    color: "#179355",
                    backgroundColor: "#ffff",
                  },
                }}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default NewArrival;
