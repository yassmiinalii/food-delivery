import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import React, {useMemo}from "react";
import { useSelector,  } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartSummary = () => {
    const cartProductsList = useSelector((state) => state.cartProducts);	const navigate = useNavigate();

   const handleClick = ()=>{
    navigate("/orderStatus");
   }
    const sumTotalTest = useMemo(( ) =>{
        let sum = 0;
        if (cartProductsList) {cartProductsList.map((p) => { return sum += p.price })}   
        return sum; 
    },[cartProductsList])
  return (
    <Grid item xs={12} lg={4}>
      <Paper>
        <Stack p={4} spacing={4}>
          <Typography variant="h4"> Card Total :{sumTotalTest}</Typography>
          
          <Button variant="contained" sx={{color: 'white'}} onClick={handleClick} >Checkout</Button>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default CartSummary;
