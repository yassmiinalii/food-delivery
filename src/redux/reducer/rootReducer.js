import { combineReducers } from "redux";
import resturantsReducer from './resturantsReducer'
import offersReducer from './offersReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
	resturants: resturantsReducer,
	offers: offersReducer,
	cartProducts: cartReducer

});

export default rootReducer;
