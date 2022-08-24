import React from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Paper,
  styled,
} from "@mui/material";

import { tableCellClasses } from "@mui/material/TableCell";
import CartProduct from "./CartProduct";

const CartProducts = () => {
  const cartProductsList = useSelector((state) => state.cartProducts);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
  }));

  return (
    <Grid className="products-Container" item xs={12} lg={8}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="customized table">
          <TableHead>
            <TableRow sx={{ backGround: "#D3D3D3" }}>
              <StyledTableCell>Product</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">price</StyledTableCell>
              <StyledTableCell align="right"> </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartProductsList ? (
              cartProductsList.map((product) => (
                <CartProduct key={product.id} {...product}></CartProduct>
              ))
            ) : (
              <dive> looading </dive>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default CartProducts;
