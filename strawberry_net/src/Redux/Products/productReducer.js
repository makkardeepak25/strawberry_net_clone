import { GET_PROD_FAILURE, GET_PROD_REQ, GET_PROD_SUCCESS } from "./productActionTypes";

let initState = {
  products: [],
  isloading: false,
  isError: false
};

export const prodReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PROD_REQ: {
      return {
        ...state
      };
    }
    case GET_PROD_SUCCESS: {
      return {
        ...state,
        products: payload,
        isloading: false
      };
    }
    case GET_PROD_FAILURE: {
      return {
        ...state,
        isError: true,
        isloading: false
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
