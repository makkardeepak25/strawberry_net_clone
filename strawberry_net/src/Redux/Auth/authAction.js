import axios from "axios"
import {USERDATA_UPDATE, LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE,SIGNIN_REQUEST,SIGNIN_SUCCESS,SIGNIN_FAILURE,USERDATA_REQUEST,USERDATA_SUCCESS,USERDATA_FAILURE, REMOVE_FROM_CART,} from "./authActionTypes"


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

export const userdataUpdateRequest=(payload)=>{
    return{
        type:USERDATA_UPDATE,
        payload
    }
  }
export const userdataUpdate=(payload)=>{
  return{
      type:USERDATA_UPDATE,
      payload
  }
}
export const userdataUpdateFailure=(payload)=>{
    return{
        type:USERDATA_UPDATE,
        payload
    }
  }
export const removeFromCart = payload => {
    return {
      type: REMOVE_FROM_CART,
      payload,
    };
  };





export const userDataRequest =(payload)=>{
    return{
        type:USERDATA_REQUEST,
        payload
    }
}
export const userDataSuccess =(payload)=>{
    console.log(payload);
    return{
        type:USERDATA_SUCCESS,
        payload
    }

}
export const userDataFailure =(payload)=>{
    return {
        type:USERDATA_FAILURE,
        payload
    }
}





export const getSignIn =(payload)=>(dispatch)=>{
    dispatch(signinRequest())
    return axios.post('https://6wwnt.sse.codesandbox.io/profiles',payload).then((res)=>{
        dispatch(signinSuccess(res))
       
    })
    .catch(err=>
        dispatch(signINFailure(err))
        )

}

export const getLogin =({email,password})=>(dispatch)=>{
    dispatch(loginRequest())
    return axios.get(`https://6wwnt.sse.codesandbox.io/profiles?email=${email}`,{email,password}).then((res)=>{

        // console.log(res.data[0].email===email && res.data[0].password===password);
        dispatch(loginSuccess(res.data[0]))
        
    })
    .catch(err=>
        dispatch(loginFailure(err))
        )


}



export const getUserDetails = (id=localStorage.getItem("userId"))=>(dispatch)=>{
    dispatch(userDataRequest())
    console.log(id.trim());
    return axios.get(`https://6wwnt.sse.codesandbox.io/profiles/${id.replace(/"/g,"")}`).then((res)=>{
        // console.log(`https://6wwnt.sse.codesandbox.io/profiles/${id}`)
    
        dispatch(userDataSuccess(res.data))
        
    })
    .catch(err=>
        dispatch(userDataFailure(err))
        )
}

export const userUpdate =(id=localStorage.getItem("userId"),payload)=>(dispatch)=>{
    dispatch(signinRequest())
    return axios.patch(`https://6wwnt.sse.codesandbox.io/profiles/${id.replace(/"/g,"")}`,payload).then((res)=>{
        // dispatch(userdataUpdate(res))
        // dispatch(getUserDetails(id))
        console.log(res.data)
        dispatch(userDataSuccess(res.data))
    })
    .catch(err=>
        dispatch(signINFailure(err))
        )

}




