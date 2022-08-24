import React, {useCallback} from "react";
import NumberFormat from "react-number-format";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Card,
  CardMedia,
  CardActions,
  Typography,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { ADD_CART_PRODUCT } from "../redux/actions/cartActions";
import axios from "axios";


const cardReStyle = {
  boxShadow: "none",
  border: " 1px solid #E9E9E9",
  borderRadius: "14px",
};

const FoodItem = (props) => {
  const { id, title, priceBefore, price, resturantName, image } = props;
  const dispatch = useDispatch();
  	// dispatch(ADD_CART_PRODUCT({id, title, price, resturantName, image, quantity:1 }));

  const handleClickAddToCart = useCallback(
		() => {
      axios.post('http://localhost:3000/cart',{
        id: id,
      title: title,
      price: price,
      resturantName: resturantName,
      image: image,
      quantity: 1
      }).then(function (response) {
        console.log(response.status);
      })
      .catch(function (error) {
        console.log(error);
      });   
		},
		[id,title,price,resturantName,image]
	);

 

  return (
    <Card sx={cardReStyle}>
      <CardMedia
        image={image}
        component="img"
        height="200"
        alt="green iguana"
      />
      <CardContent sx={{ pt: 2, pb: 0 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {resturantName}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between", px: 2, pb: 2 }}
      >
        <Stack direction="row" spacing={1}>
          {/* price after discount */}
          <Typography variant="h6">
            <NumberFormat
              value={price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"EGP "}
            />
          </Typography>
          {/* price before discount */}
          <Typography
            variant="subtitle1"
            sx={{ textDecoration: "line-through rgba(0, 0, 0, 0.2)" }}
            color="text.secondary"
          >
            <NumberFormat
              value={priceBefore}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"EGP "}
            />
          </Typography>
        </Stack>
        <Button
        onClick={handleClickAddToCart}
          sx={{ justifyContent: "space-between", boxShadow: "none" }}
          variant="contained"
          endIcon={<AddShoppingCartIcon />}
        ></Button>
      </CardActions>
    </Card>
  );
};

export default FoodItem;
