import React from "react"
import {useDispatch,useSelector} from "react-redux"
import { userUpdate } from "../../Redux/Auth/authAction"


export const AddToCard=(product)=>{
const user= useSelector((state)=>state.auth.user)
const dispatch=useDispatch()
const bag=user.bag

console.log(product);
// dispatch(userUpdate(id,product))

}