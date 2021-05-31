import React from 'react';
import Container from '@material-ui/core/Container';
import styles from './Setting.module.css'
import { PersonalInfo } from '../PersonalInfo/PersonalInfo';
export const Setting = () => {
    const [toRender,setToRender] = React.useState("personalinfo")
    return (
        <div >
        <div className={styles.mainCont}>
                <button  onClick={()=>setToRender("personalinfo")} className={styles.userinfobtn}>PERSONAL INFORMATION</button>
                <button onClick={()=>setToRender("billingadd")}  className={styles.userinfobtn}> BILLING ADDRESS</button>
                <button onClick={()=>setToRender("deliveryaddadd")}  className={styles.userinfobtn}>DELIVERY ADDRESSES</button>

                     

        </div>
        {
                    toRender==="personalinfo" && <PersonalInfo/>
        } 

        {
                    toRender==="billingadd" && <div>2</div>
        } 
        {
                    toRender==="deliveryaddadd" && <div>3</div>
        } 

        </div>
    )
}
