import React from 'react';
import styled from 'styled-components';
import styles from './SignIn.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getLogin, getUserDetails, signinRequest } from '../../../Redux/Auth/authAction';
import { getUser, setUser } from '../localstorage_s';
const AuthInput = styled.input`
    background: none;
    width: 100%;
    height: 34px;
    border: 1px solid #623381;
`
const AuthButton = styled.button`
    width: 60%;
    background-color: #623381;
    border: none;
    color: white;
    height: 42px;
    margin: auto;
    
`
const initSignIn ={
    email:"",
    password:""
}


export const Signin = () => {
  
    const [signInForm,setsignInForm] = React.useState(initSignIn)
    const {email,password} = signInForm
    const handleChange =(e)=>{
        setsignInForm({...signInForm,[e.target.name]:e.target.value})
    }
    const isAuth =useSelector((state)=>state.auth.isAuth)
   
    const isLoading =useSelector((state)=>state.auth.isLoading)
    const user =useSelector((state)=>state.auth)
    console.log(isAuth)
    console.log(user); 
    const userDetails =useSelector((state)=>state.auth.user)
    console.log(userDetails)

//    console.log(localStorage.getItem('userId'))
  
    const dispatch = useDispatch()
    const handleClick=(e)=>{
        e.preventDefault()
            dispatch(getLogin(signInForm)) 
            console.log(user); 
            // dispatch(getUserDetails(user.userId))
            
            
            
    }
    
    return (
        <form className={styles.signupform}>
        <AuthInput placeholder="Email Address" name="email" value={email} onChange={handleChange}></AuthInput>
        <AuthInput placeholder="Password" name="password" password={password} onChange={handleChange}></AuthInput>
        <h4 className={styles.signin_Text}>Forgot Password</h4>
        <AuthButton onClick={handleClick}>SignIn</AuthButton>
    </form>
    )
}
