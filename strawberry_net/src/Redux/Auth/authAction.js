import axios from "axios"
import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE,SIGNIN_REQUEST,SIGNIN_SUCCESS,SIGNIN_FAILURE} from "./authActionTypes"


export const loginRequest =(payload)=>{
    return{
        type:LOGIN_REQUEST,
        payload
    }
}
export const loginSuccess =(payload)=>{
    return{
        type:LOGIN_SUCCESS,
        payload
    }

}
export const loginFailure =(payload)=>{
    return {
        type:LOGIN_FAILURE,
        payload
    }
}



export const signinRequest =(payload)=>{
    return{
        type:SIGNIN_REQUEST,
        payload
    }
}
export const signinSuccess =(payload)=>{
    return{
        type:SIGNIN_SUCCESS,
        payload
    }

}
export const signINFailure =(payload)=>{
    return {
        type:SIGNIN_FAILURE,
        payload
    }
}






export const getSignIn =(payload)=>(dispatch)=>{
    dispatch(signinRequest())
    return axios.post('https://6wwnt.sse.codesandbox.io/profiles',payload).then((res)=>{
        dispatch(signinSuccess(res))
        console.log(res);
    })
    .catch(err=>
        dispatch(signINFailure(err))
        )

}

export const getLogin =({email,password})=>(dispatch)=>{
    dispatch(loginRequest())
    return axios.get(`https://6wwnt.sse.codesandbox.io/profiles?email=${email}`,{email,password}).then((res)=>{
        console.log(res.data[0]);
        dispatch(loginSuccess(res.data[0]))
        
    })
    .catch(err=>
        dispatch(loginFailure(err))
        )


}






