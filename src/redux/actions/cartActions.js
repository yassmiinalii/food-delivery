import { ADD_PRODUCT_TO_CART } from "../actionTypes";

export const ADD_CART_PRODUCT = (product) => ({
	type: ADD_PRODUCT_TO_CART,
	payload: product,
});