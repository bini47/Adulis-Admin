import {
  GET_TOTAL_USERS,
  PRODUCT_LOADING,
  GET_USERS_COUNT
} from "../action/types";

const initialState = {
  allusers: [],
  userCount: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_LOADING:
      return { ...state };

    case GET_TOTAL_USERS:
      return {
        ...state,
        allusers: action.payload
      };

    case GET_USERS_COUNT:
      console.log("action.payload", action.payload);
      return {
        ...state,
        userCount: action.payload
      };

    default:
      return state;
  }
}
