import React from 'react';
import styles from './Authentication.module.css'
import { Signin } from './SignIn/Signin';
import { Signup } from './SignUp/Signup';
import CancelIcon from '@material-ui/icons/Cancel';

export const Authentication = () => {
    const [showSignup,setShowsignup]=React.useState(false)
    return (
      <div className={styles.auth_modal_cont}>
            <div className={styles.auth_modal}>
                <div className={styles.auth_modal_form_div}>
                    <button onClick={()=>setShowsignup(false)}>SignIn</button>
                    <button onClick={()=>setShowsignup(true)}>New Here?</button>
                </div>
                {
                    showSignup?<Signup/>:<Signin/>
                }
                    
                    
               
            </div>
            
            <button className={styles.close_modal}><CancelIcon/></button>
        
      </div>
    )
}
