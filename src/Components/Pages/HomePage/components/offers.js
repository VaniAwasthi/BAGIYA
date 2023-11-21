import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const OfferSection = () => {
  return (
    <Box sx={{ backgroundColor: "#fff6f4" }}>
      <Grid container spacing={2} mt={2} alignItems="center">
        <Grid
          container
          item
          xs={12}
          sm={6}
          justifyContent={{ xs: "none", sm: "right" }}
        >
          <Box padding={2}>
            <Typography variant="h5" fontWeight={600} color="#179355">
              Our very new shades of green
            </Typography>
            <Typography variant="h5" fontWeight={600} color="#179355">
              Check out our latest sales and offers
            </Typography>
          </Box>
        </Grid>
        <Grid container item xs={12} sm={6} padding={2}>
          <Button
            variant="contained"
            sx={{
              width: "200px",
              height: "50px",
              backgroundColor: "#179355",
              borderRadius: "6%",
              "&:hover": {
                color: "#179355",
                backgroundColor: "white",
                border: "2px solid #179355",
              },
            }}
          >
            View All Offfers
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OfferSection;
