import React from 'react';
import styles from "./Panel.module.css"
import {Button} from "@material-ui/core"
const Panel = () => {
    return (
        <div className={styles.admin_panel}>
            <div className={styles.side_panel}>
               
               <div className={styles.user}>
                   <div className={styles.user_img}>

                   </div>

                   <h1>Admin Name</h1>

                  <div className={styles.sign_out}> <Button color="primary" variant="contained"> Sign Out</Button></div>
               </div>


            </div>

            <div className={styles.main_panel}>

            </div>
        </div>
    );
};

export default Panel;