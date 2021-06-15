import React from 'react'
import CustomizedSteppers from './demo'
import styles from "./OrderTracking.module.css"

export const OrderTracking = () => {
    return (
        <div>
            <div className={styles.Maindiv}>Status fro Order Id : 23344556667</div>
            <hr/>
            <table className={styles.Maintable}>
                
        <thead>
               <tr> <th className={styles.Thtable2}>Customer Name</th> <td className={styles.Tdtable1}>Mahi Makkar</td> </tr>
               <tr> <th className={styles.Thtable2}>Order Date</th> <td className={styles.Tdtable1}>23/5/2020</td> </tr>
               <tr>  <th className={styles.Thtable2}>Ship Date</th> <td className={styles.Tdtable1}>28/5/2020</td></tr>
               <tr>  <th className={styles.Thtable2}>Shipping Address</th> <td className={styles.Tdtable1}>Lorem ipsum dolor, 
                   sit amet consectetur adipisicing elit. Nostrum fuga illo mollitia. Corrupti, commodi aut?</td></tr>
               <tr> <th className={styles.Thtable2}>Destination</th><td className={styles.Tdtable1}>Mangalore</td></tr>
               <tr> <th className={styles.Thtable2}>Carrier</th><td className={styles.Tdtable1}>Delhivery</td></tr>
               <tr> <th className={styles.Thtable2}>Carrier Tracking Number </th><td className={styles.Tdtable1}>34455666677322333</td> </tr>

        </thead>

        
            </table>
            
            <CustomizedSteppers/>

            <div>
                <table className={styles.Trackingbox2}>
                <thead>
                    <tr className={styles.Colorclass} >

                    <th className={styles.Trackingbox3}>Date</th>
                    <th >Time</th>
                    <th>Description</th>
                    <th>Location</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <th className={styles.Trackingbox3}>2/08/2020</th>
                        <th>12:31 AM</th>
                        <th>Shipped</th>
                        <th>Delhi</th>
                    </tr>

                    <tr>
                        <th className={styles.Trackingbox3}>3/08/2020</th>
                        <th>2:31 PM</th>
                        <th>Shipped info Received</th>
                        <th>Sonipat</th>
                    </tr>

                    <tr >
                        <th className={styles.Trackingbox3}>3/08/2020</th>
                        <th>2:31 PM</th>
                        <th>Origin Scan</th>
                        <th>Chennai</th>
                    </tr>

                    <tr>
                        <th className={styles.Trackingbox3}>3/08/2020</th>
                        <th>2:31 PM</th>
                        <th>Shipping into Received</th>
                        <th>Bangalore</th>

                    </tr>
                </tbody>
                </table>
            </div>

        </div>
    )
}
