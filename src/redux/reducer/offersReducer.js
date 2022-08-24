import { GET_ALL_OFFERS } from "../actionTypes";

// const initialState = {0};

const reducer = (state = 0, { type, payload }) => {
  switch (type) {
    case GET_ALL_OFFERS:
      return payload;
    default:
      return state;
  }
};

export default reducer;
