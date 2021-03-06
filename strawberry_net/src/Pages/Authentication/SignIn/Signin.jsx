import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";

import { getLogin} from '../../../Redux/Auth/authAction';
import styles from './SignIn.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        marginLeft:'150px', 
        marginTop:'20px'  ,  
      color: '#623381',
     
    },
   
  });

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
    cursor: pointer;

    &:hover{
        background-color:#62338199;
    }
    
`
const initSignIn ={
    email:"",
    password:""
}



export const Signin = () => {
    const classes = useStyles();
  
    const [signInForm,setsignInForm] = React.useState(initSignIn)
    const {email,password} = signInForm
    const handleChange =(e)=>{
        setsignInForm({...signInForm,[e.target.name]:e.target.value})
    }
    const isAuth =useSelector((state)=>state.auth.isAuth)
    const isError =useSelector((state)=>state.auth.isError)
   
    const isLoading =useSelector((state)=>state.auth.isLoading)
    const user =useSelector((state)=>state.auth)
    console.log(isAuth)
    console.log(user); 
    const userDetails =useSelector((state)=>state.auth.user)
    console.log(userDetails)

//    console.log(localStorage.getItem('userId'))
  
    const history= useHistory()

    const dispatch = useDispatch()
    const handleClick=(e)=>{
            e.preventDefault()
           dispatch(getLogin(signInForm))

            
    history.replace('/user/setting') 
        
    }
    
    

    return isLoading?(   <CircularProgress disableShrink classes={{root: classes.root}}/>) :(
        <form className={styles.signupform} onSubmit={handleClick}>
        <AuthInput type="email" placeholder="Email Address" name="email" value={email} onChange={handleChange} required></AuthInput>
        <AuthInput type="password" placeholder="Password" name="password" password={password} onChange={handleChange} required></AuthInput>
        <h4 className={styles.signin_Text}>Forgot Password</h4>
        <AuthButton >SignIn</AuthButton>
     
    </form>
    )
}
