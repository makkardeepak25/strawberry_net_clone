import axios from "axios"
import {USERDATA_UPDATE, LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE,SIGNIN_REQUEST,
    SIGNIN_SUCCESS,SIGNIN_FAILURE,USERDATA_REQUEST,USERDATA_SUCCESS,USERDATA_FAILURE, 
    REMOVE_FROM_CART, IMAGE_URL_REQUEST, IMAGE_URL_SUCCESS,IMAGE_URL_FAILURE,LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,PAYMENT_SUCCESS} from "./authActionTypes"


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

export const logoutRequest =(payload)=>{
    return{
        type:LOGOUT_REQUEST,
        payload
    }
}
export const logoutSuccess =(payload)=>{
    return{
        type:LOGOUT_SUCCESS,
        payload
    }

}
export const logoutFailure =(payload)=>{
    return {
        type:LOGOUT_FAILURE,
        payload
    }
}

export const signinRequest =()=>{
    
    return{
        type:SIGNIN_REQUEST,
     
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
    console.log(payload)
    return {
      type: REMOVE_FROM_CART,
      payload
    };
  };





export const userDataRequest =(payload)=>{
    return{
        type:USERDATA_REQUEST,
        payload
    }
}
export const userDataSuccess =(payload)=>{
  
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





export const imageUrlRequest =(payload)=>{
    return{
        type:IMAGE_URL_REQUEST,
        payload
      
    }
}
export const imageUrlSuccess =(payload)=>{

    return{
        type:IMAGE_URL_SUCCESS,
        payload
    }

}
export const imageUrlFailure =(payload)=>{
    return {
        type:IMAGE_URL_FAILURE,
        payload
    }
}


export const paymentSuccess =(payload)=>{
    return {
        type:PAYMENT_SUCCESS,
        payload
    }
}



export const getSignIn =(payload)=>(dispatch)=>{
    dispatch(signinRequest())
    return axios.post('https://api-strawberrynet.herokuapp.com/profiles',payload).then((res)=>{
        dispatch(signinSuccess(res.data.id))
        console.log(res.data.id)

       
    })
    .catch(err=>
        dispatch(signINFailure(err))
        )

}

export const getLogin =({email,password})=>(dispatch)=>{
    dispatch(loginRequest())
  
    return axios.get(`https://api-strawberrynet.herokuapp.com/profiles?email=${email}`,{email,password}).then((res)=>{
        
        
        if(res.data[0].email===email && res.data[0].password===password){
            dispatch(loginSuccess(res.data[0]))
           
        }
        else {
          console.log("Error")
        dispatch(loginFailure("wfeg"))
        }
       
       
        
    })
    .catch(err=>{
        
        dispatch(loginFailure(err))
    
        })


}



export const getUserDetails = (id=localStorage.getItem("userId"))=>(dispatch)=>{
    dispatch(userDataRequest())
  
    return axios.get(`https://api-strawberrynet.herokuapp.com/profiles/${id.replace(/"/g,"")}`).then((res)=>{
       
    
        dispatch(userDataSuccess(res.data))
        
    })
    .catch(err=>
        dispatch(userDataFailure(err))
        )
}

export const userUpdate =(id=localStorage.getItem("userId"),payload)=> (dispatch)=>{
    dispatch(signinRequest())
    axios.patch(`https://api-strawberrynet.herokuapp.com/profiles/${id.replace(/"/g,"")}`,payload).then((res)=>{
   
        // alert('userUpdate')
      
        dispatch(userdataUpdate(res.data))
      dispatch(getUserDetails(id))
   
    })
    .catch(err=>
        dispatch(signINFailure(err))
     
        )

}
export const priceUpdate = (id=localStorage.getItem("userId"),payload) => (dispatch) => {
    dispatch(signinRequest())
    axios.patch(`https://api-strawberrynet.herokuapp.com/profiles/${id}`,payload).then((res)=>{
        
        alert(`Your details has been successfully saved into our server`)
       
        dispatch(userDataSuccess(res.data))
    })
    .catch(err=>
        dispatch(signINFailure(err))
        )
    
}





export const getlogout=()=>(dispatch)=>{
    dispatch(logoutRequest())
    return dispatch(logoutSuccess())
    
}



export const setPaymentSucceeded=()=>(dispatch)=>{
   return dispatch(paymentSuccess(true))
}



















export const removeItem=(id=localStorage.getItem("userId"),payload)=>(dispatch)=>{
    dispatch(signinRequest())
    // dispatch(removeFromCart(payload))
    alert("Item Removing...")
    return axios.patch(`https://api-strawberrynet.herokuapp.com/profiles/${id.replace(/"/g,"")}`,payload).then((res)=>{
   
        console.log(res.data)
        dispatch(userDataSuccess(res.data))
         dispatch(getUserDetails(id))
        
    })
    .catch(err=>
        dispatch(signINFailure(err))
        )

}






//imageRef.current.files[0]

export const GetimageUrl= (payload) => async(dispatch)=>{
    dispatch(imageUrlRequest())
    await axios({
      method: "post",
      url: "https://api.imgur.com/3/image",
      headers: {
        Authorization: "Client-ID fc509ad5b921bf3"
      },
      data:payload 
    })
      .then((res) => {
          
        imageUrlSuccess(res.data.data.link)
        alert('uploaded Successfully')
        console.log(res.data.data.link)
    })
      .catch((err) => imageUrlFailure(err));
  };

