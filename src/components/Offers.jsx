import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  Pagination,
  Stack,
} from "@mui/material";
import CardSkeltonGroup from "./CardSkeltonGroup";
import FoodItem from "./FoodItem";
import { useSelector, useDispatch } from "react-redux";
import { GET_ALL_OFFERS } from "../redux/actionTypes";
import axios from "axios";
import usePagination from "./pagintaion";

const Offers = () => {
  let [page, setPage] = useState(1);
  const PER_PAGE = 4;

  const offers = useSelector((state) => state.offers);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3000/offers").then((response) => {
      dispatch({ type: GET_ALL_OFFERS, payload: response.data });
    });
  }, [dispatch]);

  const count = Math.ceil(offers.length / PER_PAGE);
  const _DATA = usePagination(offers, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <Box component="section" my={12}>
      <Container>
        <Typography variant="h3" pb={4}>
          Offers
        </Typography>

        <Grid container spacing={4}>
          {offers ? (
            _DATA.currentData().map((offer) => (
              <Grid key={offer.id} item xs={12} sm={6} md={4} lg={3}>
                <FoodItem {...offer}></FoodItem>
          
              </Grid>
            ))
          ) : (
            <CardSkeltonGroup></CardSkeltonGroup>
          )}
        </Grid>
        <Stack display="flex" alignItems="flex-end">
          <Pagination
            count={count}
            size="large"
            page={page}
            variant="outlined"
            color="primary"
            onChange={handleChange}
            sx={{ mt: 4 }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Offers;
