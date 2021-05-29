import React from 'react';
import styled from 'styled-components';
import styles from './SignIn.module.css'
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

export const Signin = () => {
    
    return (
        <form className={styles.signupform}>
        <AuthInput placeholder="Email Address"></AuthInput>
        <AuthInput placeholder="Password"></AuthInput>
        <h4 className={styles.signin_Text}>Forgot Password</h4>
        <AuthButton>SignIn</AuthButton>
    </form>
    )
}
