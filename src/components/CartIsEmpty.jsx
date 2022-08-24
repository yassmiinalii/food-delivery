import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import cartEmpty from '../assets/cart-empty.svg'

const style = {
    maxWidth: '240px',
}

const CartIsEmpty = () => {
  return (
    <Stack spacing={4} alignItems='center' pt={20}>
        <Box>
        <img src={cartEmpty} alt="cart empty" style={style} />
        </Box>
     
      <Typography variant="h4"> Your Cart Is Empty</Typography>
    </Stack>
  );
};

export default CartIsEmpty;
