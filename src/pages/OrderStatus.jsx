import React from 'react';
import { Stack, Typography,Box } from "@mui/material";
import deliveryImg from "../assets/food-delivery.svg";

const style = {
  maxWidth: "240px",
};


const OrderStatus = () => {
    return (
        <Stack spacing={4} alignItems="center" pt={20} sx={{ height: "100vh" }}>
        <Box>
          <img src={deliveryImg} alt="cart empty" style={style} />
        </Box>
  
        <Typography variant="h4"> Your Order Palaced successfully! </Typography>
      </Stack>
    );
};

export default OrderStatus;