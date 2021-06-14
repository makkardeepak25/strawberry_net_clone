import React from 'react'
import CustomizedSteppers from './demo'
import styles from "./OrderTracking.module.css"

export const OrderTracking = () => {
    return (
        <div>
            <div>Status fro Order Id : 23344556667</div>
            <hr/>
            <table className={styles.Maintable}>
                
        <thead>
               <tr> <th >Customer Name</th> <td  style={{textAlign:"left",width:"400px",margin:"0px auto",padding:"0px"}}>Mahi Makkar</td> </tr>
               <tr> <th>Order Date</th> <td>23/5/2020</td> </tr>
               <tr>  <th>Ship Date</th> <td>28/5/2020</td></tr>
               <tr>  <th>Shipping Address</th> <td>Lorem ipsum dolor, 
                   sit amet consectetur adipisicing elit. Nostrum fuga illo mollitia. Corrupti, commodi aut?</td></tr>
               <tr> <th>Destination</th><td>Mangalore</td></tr>
               <tr> <th>Carrier</th><td>Delhivery</td></tr>
               <tr> <th>Carrier Tracking Number </th><td>34455666677322333</td> </tr>

        </thead>

        
            </table>
            
            <CustomizedSteppers/>
        </div>
    )
}
