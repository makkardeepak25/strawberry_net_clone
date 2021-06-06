import { getUser, setUser } from "../../Pages/Authentication/localstorage_s"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS, 
    USERDATA_REQUEST,USERDATA_SUCCESS,USERDATA_FAILURE} from "./authActionTypes"


let initState ={
    isLoading: false,
    isError: false,
    isAuth:getUser("userId")?true:false,
    userId:getUser("userId") ||"",
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
               
              
                 isLoading:false,


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
        default:{
            return{
                ...state
            }
        }

    }
}