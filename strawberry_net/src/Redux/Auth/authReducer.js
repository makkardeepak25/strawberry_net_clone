import { getUser, setUser } from "../../Pages/Authentication/localstorage_s"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS, 
    USERDATA_REQUEST,USERDATA_SUCCESS,USERDATA_FAILURE, USERDATA_UPDATE, REMOVE_FROM_CART} from "./authActionTypes"


let initState ={
    isLoading: false,
    isError: false,
    isAuth:localStorage.getItem("userId")?true:false,
    userId:localStorage.getItem("userId") ||"",
    user:{}
}


export const authReducer=(state=initState,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:{
            return {
                ...state,
                isLoading:true,
            }
        }
        case LOGIN_SUCCESS:{
            setUser("userId",payload.id)
            return{
                
                 ...state,
                 user:payload,
                isAuth:true,
                 isLoading:false,

            }
        }
        case LOGIN_FAILURE:{
            return{
                 ...state,
                 isError:true,
                 isLoading:false,

            }
        }
        case USERDATA_REQUEST:{
            return {
                isLoading:true,
                ...state,
            }
        }
        case USERDATA_SUCCESS:{
            return{
                ...state,
                user:payload,
               
                  isAuth:true,
                 isLoading:false


            }
        }
        case USERDATA_FAILURE:{
            return{
                isError:true,
                isLoading:false,
                 ...state
                
            }
        }
        case SIGNIN_REQUEST:{
            return {
                isLoading:true,
                ...state
            }
        }
        case SIGNIN_SUCCESS:{
            return{
                 ...state

            }
        }
        case SIGNIN_FAILURE:{
            return{
                 ...state
                
            }
        }
        case USERDATA_UPDATE:{
         
            return {
                ...state,
                user:payload,
                isLoading:false,
             
            }
        }
        case REMOVE_FROM_CART:
            let user_new = state.user.bag.filter(item=> item.id !== payload)
            return {
              ...state,
            user:user_new
            };
        default:{
            return{
                ...state
            }
        }

    }
}
