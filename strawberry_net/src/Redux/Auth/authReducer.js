import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "./authActionTypes"

let initState ={

}


export const authReducer=(state=initState,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:{
            return {
                ...state
            }
        }
        case LOGIN_SUCCESS:{
            return{
                 ...state

            }
        }
        case LOGIN_FAILURE:{
            return{
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
