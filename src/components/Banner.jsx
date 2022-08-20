import React from "react";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BanerBG from "../assets/BG-image.png";

const banerBoxStyle = {
    display: "flex",
    backgroundImage: `url(${BanerBG})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    justifyContent: "center",
    alignItems: "center"
}

const banerTextStackStyle = {
    maxWidth:{ sm: 2/3, md: 1/2, lg: 1/3}, color: "white", m:{ xs: 8, md: 10, lg: 16}
}

const Banner = () => {

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
      </style>
      <Box
        sx={banerBoxStyle}
      >
        <Stack sx={banerTextStackStyle} spacing={2}  > 
          <Typography variant="h2" sx={{ fontFamily: "'Playfair Display', serif" }} align="center">
            Choosing good & Best Burger 
          </Typography>
          <Typography variant="body1" align="center">
            {" "}
            Order Now from the best App in the city and enjoy unlimited offers with fast delivery.
          </Typography>
       
        </Stack>
       
      </Box>
    </>
  );
};

export default Banner;
