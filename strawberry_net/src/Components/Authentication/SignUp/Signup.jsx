import React from 'react';
import styled from 'styled-components';
import styles from './Signup.module.css';
import ReCAPTCHA from "react-google-recaptcha";
const AuthInput = styled.input`
    background: none;
    width: 100%;
    height: 34px;
    border: 1px solid #623381;
    text-align:left;
`
const AuthButton = styled.button`
    width: 60%;
    background-color: #623381;
    border: none;
    color: white;
    height: 42px;
    margin: auto;
    
`




export const Signup = () => {
    function onChange(value) {
        console.log("Captcha value:", value)
      }
    return (
        <form className={styles.signupform}>
            <AuthInput placeholder="  First Name"></AuthInput>
            <AuthInput placeholder="  Last Name"></AuthInput>
           
            <AuthInput placeholder="  Email Address"></AuthInput>
            <AuthInput placeholder="  Password"></AuthInput>
            <p style={{marginTop:'0',marginBottom:'0',lineHeight:"1.5"}}>
            Please enter a minimum of 8 characters, including at least 1 letter and 1 number.
            </p>
            <AuthInput placeholder="  Re-enter your Password"></AuthInput>
            
            <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChange} />
            <p style={{marginTop:'0',marginBottom:'0'}}>
            By creating your account, you agree to our 
           
            <p style={{color:'#623381',marginTop:'0',marginBottom:'0',lineHeight:"1.5"}}>
            Privacy Policy & Terms & Conditions
            </p>
            </p>
            <div className={styles.subscription_div}>
            <input type="checkbox" name="" id="" />
                <div>
                    
                Subscribe to our exclusive email offers
                </div>
            </div>
            <AuthButton>Register</AuthButton>
        </form>
    )
}
