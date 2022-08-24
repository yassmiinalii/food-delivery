
import { GET_ALL_RESTURANTS } from "../actionTypes";

const initialState = null;

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_ALL_RESTURANTS:
			return payload;
		default:
			return state;
	}
};


export default reducer