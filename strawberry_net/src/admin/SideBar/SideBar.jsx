import React, { useState } from 'react';
import styles from "./SideBar.module.css"
import {Button} from "@material-ui/core"
import { useHistory } from 'react-router-dom';
const SideBar = ({prop}) => {
 
const [active,setActive]=useState(prop)
console.log("sidebar",prop,active);
 const history=useHistory()
    const redirects=(path)=>{
      history.push(path)
    }
    return (
        <div className={styles.admin_panel}>
            <div className={styles.side_panel}>
               
               <div className={styles.user}>
                   <div className={styles.user_img}>
                      <img src="https://www.clipartmax.com/png/middle/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png" alt="" />
                   </div>

                   <h1>Admin Name</h1>

                  <div className={styles.sign_out}> <Button className={styles.button} color="primary" variant="contained"> Sign Out</Button></div>
               </div>
              
              <div className={styles.tabs}>
              <div onClick={()=>redirects("/admin/dashboard")} className={active==="dashboard"?styles.active_tab:styles.tab}> <h3>DASHBOARD</h3> </div>
                  <div onClick={()=>redirects("/admin/profiles")} className={active==="profiles"?styles.active_tab:styles.tab}> <h3>USERS</h3> </div>
                  <div onClick={()=>redirects("/admin/products")} className={active==="products"?styles.active_tab:styles.tab}> <h3>PRODUCTS</h3> </div>
                  <div onClick={()=>redirects("/admin/orders")} className={active==="orders"?styles.active_tab:styles.tab}> <h3>ORDERS</h3> </div>
                  <div onClick={()=>redirects("/admin/dashboard")} className={styles.tab}> <h3>USERS</h3> </div>
                  <div onClick={()=>redirects("/admin/dashboard")} className={styles.tab}> <h3>USERS</h3> </div>

              </div>

            </div>

            </div>
    
    );
};

export default SideBar;