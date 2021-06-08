import { GET_PROD_FAILURE, GET_PROD_REQ, GET_PROD_SUCCESS, GET_SEARCH_FAILURE, GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS } from "./productActionTypes";

let initState = {
  products: [],
  isloading: false,
  isError: false,
  cartProd:[{
    id: 1,
    prod_name: "matrix",
    prod_description: "Biolage R.A.W. Recover Shampoo (For Stressed, Sensitized Hair)",
    size: [
      {
        size: "325ml/11oz",
        price: "1512"
      },
      {
        size: "1000ml/33.8oz",
        price: "3288"
      }
    ],    
    images: [
      "https://a.cdnsbn.com/images/products/21214640137.jpg"
    ],
    quantity: 4,
    pr:2330
  },
  {
    id: 2,
    prod_name: "hermes",
    prod_description: "Eau De Narcisse Bleu Eau De Cologne Spray",
    size: [
      {
        "size": "100ml/3.3oz",
        "price": "8540"
      }
    ],
    quantity: 2,
    pr:2880,
    images:["https://a.cdnsbn.com/images/products/24425699239.jpg"]
  }],
  searchProd:[]
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
