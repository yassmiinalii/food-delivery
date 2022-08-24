import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect} from "react";
import CartProducts from "../components/CartProducts";
import CartSummary from "../components/CartSummary";
import { useSelector, useDispatch } from "react-redux";
import CartIsEmpty from "../components/CartIsEmpty";
import axios from "axios";
import { GET_ALL_CART_PRODUCTS } from "../redux/actionTypes";

const Cart = () => {
  const cartProductsList = useSelector((state) => state.cartProducts);
  const dispatch = useDispatch();

  //get Cart Product
  useEffect(() => {
    axios.get("http://localhost:3000/cart").then((response) => {
      dispatch({ type: GET_ALL_CART_PRODUCTS, payload: response.data });
    });
  });

  
  let cartIsEmpty = cartProductsList.length;

  return (
    <Box component="section" sx={{ height: "100vh" }}>
      <Container>
        {cartIsEmpty ? (
          <Grid container spacing={4} my={4}>
            <CartProducts></CartProducts>
            <CartSummary summaryTotal ></CartSummary>
          </Grid>
        ) : (
          <CartIsEmpty />
        )}
      </Container>
    </Box>
  );
};

export default Cart;
