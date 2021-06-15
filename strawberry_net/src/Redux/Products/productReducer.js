import { GET_PROD_FAILURE, GET_PROD_REQ, GET_PROD_SUCCESS, GET_SEARCH_FAILURE, GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS } from "./productActionTypes";

let initState = {
  products: [],
  isloading: false,
  isError: false,
  searchProd:[]
};

export const prodReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PROD_REQ: {
      return {
        ...state,
        isloading:true
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

    case GET_SEARCH_REQUEST: {
      return {
        ...state
      };
    }
    case GET_SEARCH_SUCCESS: {
      return {
        ...state,
        searchProd: payload,
        isloading: false
      };
    }
    case GET_SEARCH_FAILURE: {
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
