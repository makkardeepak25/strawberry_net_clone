import { setUser, removeUser } from "../../Pages/Authentication/localstorage_s";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  USERDATA_REQUEST,
  USERDATA_SUCCESS,
  USERDATA_FAILURE,
  USERDATA_UPDATE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  REMOVE_FROM_CART,
  IMAGE_URL_REQUEST,
  IMAGE_URL_SUCCESS,
  IMAGE_URL_FAILURE,
  PAYMENT_SUCCESS,
} from "./authActionTypes";

let initState = {
  isPaymentSuccess: false,
  isLoading: false,
  isError: false,
  isAuth: localStorage.getItem("userId") ? true : false,
  userId: localStorage.getItem("userId") || "",
  user: undefined,
};
console.log(initState.isAuth);

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      setUser("userId", payload._id);
      console.log(payload._id);
      return {
        ...state,
        user: payload,
        isAuth: true,
        isLoading: false,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
        isAuth: false,
      };
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGOUT_SUCCESS: {
      removeUser();

      return {
        ...state,
        user: payload,
        isAuth: false,
        isLoading: false,
      };
    }
    case LOGOUT_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case USERDATA_REQUEST: {
      return {
        isLoading: true,
        ...state,
      };
    }
    case USERDATA_SUCCESS: {
      return {
        ...state,
        user: payload,
        isLoading: false,
      };
    }
    case USERDATA_FAILURE: {
      return {
        isError: true,
        isLoading: false,
        ...state,
      };
    }
    case SIGNIN_REQUEST: {
      // alert("Requesting.....")
      return {
        ...state,
        isLoading: true,
      };
    }
    case SIGNIN_SUCCESS: {
      setUser("userId", payload);
      return {
        ...state,
        isLoading: false,
      };
    }
    case SIGNIN_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case IMAGE_URL_REQUEST: {
      alert("IMAGE_URL_REQUEST");
      return {
        isLoading: true,
        ...state,
      };
    }
    case IMAGE_URL_SUCCESS: {
      alert("IMAGE_URL_SUCCESS");
      return {
        ...state,

        isLoading: false,
      };
    }
    case IMAGE_URL_FAILURE: {
      alert("IMAGE_URL_FAILURE");
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }

    case USERDATA_UPDATE: {
      alert("Details Updated SuccessFully");
      return {
        ...state,
        user: payload,
        isLoading: false,
      };
    }
    case PAYMENT_SUCCESS: {
      // alert('payment SuccessFull')
      return {
        ...state,
        isPaymentSuccess: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
