import Axios from "axios"
import { GET_PROD_REQ, GET_PROD_SUCCESS, GET_PROD_FAILURE, GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS, GET_SEARCH_FAILURE} from "./productActionTypes"


export const getProdRequest =(payload)=>{
    return{
        type:GET_PROD_REQ,
    }
}
export const getProdSuccess =(payload)=>{
    return{
        type:GET_PROD_SUCCESS,
        payload
    }

}
export const getProdFailure =(payload)=>{
    return {
        type:GET_PROD_FAILURE,
        payload
    }
}

export const getProdData = () => dispatch => {
    dispatch(getProdRequest());
    Axios.get("https://6wwnt.sse.codesandbox.io/products")
        .then(res => {
        dispatch(getProdSuccess(res.data));
      })
      .catch(err => {
        dispatch(getProdFailure(err));
      });
  };



  export const getSearchRequest =(payload)=>{
    return{
        type:GET_SEARCH_REQUEST,
    }
}
export const getSearchSuccess =(payload)=>{
    return{
        type:GET_SEARCH_SUCCESS,
        payload
    }

}
export const getSearchFailure =(payload)=>{
    return {
        type:GET_SEARCH_FAILURE,
        payload
    }
}

export const getSearchData = (title) => dispatch => {
    dispatch(getSearchRequest());
    Axios.get(`https://6wwnt.sse.codesandbox.io/products?prod_name=${title}`)
        .then(res => {
        dispatch(getSearchSuccess(res.data));
        console.log(res.data)
      })
      .catch(err => {
        dispatch(getSearchFailure(err));
      });
  };



