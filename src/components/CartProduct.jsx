import React, {useEffect} from 'react';
import {
    TableCell,
    TableRow,
    IconButton,
    Typography,
    Stack,
  } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from 'axios';
import { GET_ALL_CART_PRODUCTS } from "../redux/actionTypes";
import {useDispatch } from "react-redux";
const CartProduct = (props) => {
    const dispatch = useDispatch();
    const { id, title, price, resturantName, image, quantity } = props;


    const handleDelete = ()=>{
        axios.delete(`http://localhost:3000/cart/${id}`)
        .then(() => {console.log('delete')});
        console.log(id);
      }

      
     

    return (
        <TableRow
                 
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell composnent="th" scope="row">
                    <Stack direction="row" spacing={2} alignItems="center">
                      <img
                        style={{ maxWidth: "100px", borderRadius: "16px" }}
                        src={image}
                        alt=""
                      />
                      <Stack spacing={0.5}>
                        <Typography variant="h6"> {title} </Typography>
                        <Typography variant="body2">
                          {resturantName}
                        </Typography>
                      </Stack>
                    </Stack>
                  </TableCell>
                  <TableCell align="center">{quantity}</TableCell>
                  <TableCell align="center">{price}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={handleDelete}  aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
    );
};

export default CartProduct;