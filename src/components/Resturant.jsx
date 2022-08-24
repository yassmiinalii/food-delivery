import React from "react";
import {
  Card,
  CardMedia,
  CardActions,
  Typography,
  CardContent,
  Button,
  Rating,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";


const cardReStyle = {
  maxWidth: 340,
  boxShadow: "none",
  border: " 1px solid #E9E9E9",
  borderRadius: "14px",
};

const Resturant = (props) => {
  const { name, typeOfFood, image, rate } = props;

  const value = rate;

  return (
    <Card sx={cardReStyle}>
        <CardMedia
          image={image}
          component="img"
          height="200"
          alt="green iguana"
          sx={{ p: 2, borderRadius: "26px" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {typeOfFood}
          </Typography>
        </CardContent>
        <CardActions sx={{ paddingBottom: 2, paddingLeft: 2 }}>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating
              name="text-feedback"
              value={value}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
           
          </Box>
          <Button variant="outlined"> view Menu</Button>
        </CardActions>
    </Card>
  );
};

export default Resturant;
