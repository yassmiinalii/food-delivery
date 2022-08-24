import { ADD_PRODUCT_TO_CART, GET_ALL_CART_PRODUCTS } from "../actionTypes";

// const initialState = {0};

const reducer = (state = 0 , { type, payload }) => {
  switch (type) {
    case GET_ALL_CART_PRODUCTS:
      return payload;
      case ADD_PRODUCT_TO_CART:
      return [...state, payload];
    default:
      return state;
  }
};

export default reducer;
