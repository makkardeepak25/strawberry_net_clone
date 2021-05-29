import React from 'react';
import styles from './Authentication.module.css'
import { Signin } from './SignIn/Signin';
import { Signup } from './SignUp/Signup';

export const Authentication = () => {
    return (
      <div className={styles.auth_modal_cont}>
            <div className={styles.auth_modal}>
                <div className={styles.auth_modal_form_div}>
                    <button>SignIn</button>
                    <button>New Here?</button>
                </div>
                <Signup/>
                {/* <Signin/> */}
            </div>
            
            {/* <button className={styles.close_modal}>+</button> */}
        
      </div>
    )
}
