import React from 'react';
import styles from "./Bag.module.css"
import { Link } from 'react-router-dom';

 export function Bag(){
   return(
     <div className={styles.conatiner}>
       <h1 className={styles.pagetitle}>Shopping Bag</h1>
       <div className={styles.pagetitle1}>
        <Link> <div>Deliver to:</div> </Link>
       </div>
     </div>
   )

}





