import Axios from "axios"
import { GET_PROD_REQ, GET_PROD_SUCCESS, GET_PROD_FAILURE} from "./productActionTypes"


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



