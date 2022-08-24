import { Container } from "@mui/system";
import React, { useEffect } from "react";
import Resturant from "./Resturant";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { GET_ALL_RESTURANTS } from "../redux/actionTypes";
import { Box, Grid, Typography } from "@mui/material";
import CardSkeltonGroup from "./CardSkeltonGroup";

const Resturants = () => {
  const resturants = useSelector((state) => state.resturants);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3000/restaurants").then((response) => {
      dispatch({ type: GET_ALL_RESTURANTS, payload: response.data });
    });
  }, [dispatch]);

  return (
    <Box component="section" my={12}>
      <Container>
        <Typography variant="h3" mb={4}>
          Resturants
        </Typography>
        <Grid container spacing={4} >
          {resturants ? (
            resturants.map((resturant) => (
              <Grid key={resturant.id} item xs={12} sm={6} md={4}>
                <Resturant  {...resturant}></Resturant>
              </Grid>
            ))
          ) : (
            <CardSkeltonGroup></CardSkeltonGroup>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Resturants;

