import React from 'react'
import CustomizedSteppers from './Stepper'
import styles from "./OrderTracking.module.css"
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import { Spinner } from "../../Components/Spinner";

export const OrderTracking = () => {
    const {id} = useParams()
    const [order,setOrder]=React.useState({})
    
    const userId = useSelector(state => state.auth.userId)
    // const f_name = useSelector(state => state.auth.user.f_name)
    // const l_name = useSelector(state => state.auth.user.l_name)

 
    const [isLoading,setisLoading]=React.useState(false)
     const [isError,setisError]=React.useState(false)
    const getOrderData=()=>{
        setisLoading(true)
        return axios.get(`https://api-strawberrynet.herokuapp.com/profiles/${userId.replace(/"/g,"")}`).then((res)=>{
          setOrder(res.data.orders.find(item=>item.orderId===id))
          setisLoading(false)
        })
        .catch((err)=>{
          setisError(true)
          setisLoading(false)
        })
      }
     
      const {date,orderId}=order && order

     
      React.useEffect(()=>{
        
        
     
            getOrderData() 
        window.scrollTo(0,0);
          
    },[ ])
    
    
  
    
    
      var address =order.address ?order.address :{
        addressId:"",address_tittle:"",f_name:"",l_name:"",city:"",locality:"",pincode:"",state:""
      } 



      const {addressId,address_tittle,f_name,l_name,city,locality,pincode,state}=address
      console.log(order)
    return isLoading?<div className={styles.tobecenter}><Spinner /></div>:(
        <div>
            <div className={styles.Maindiv}>Status for Order Id : {id}</div>
            <hr/>
            <table className={styles.Maintable}>
                
        <thead>
               <tr> <th className={styles.Thtable2}>Customer Name</th> <td className={styles.Tdtable1}>{f_name!=="" && l_name!==""?(f_name+" "+l_name):"N/A"} </td> </tr>
               <tr> <th className={styles.Thtable2}>Order Date</th> <td className={styles.Tdtable1}>{ orderId && date!==""?date:"N/A"}</td> </tr>
               <tr>  <th className={styles.Thtable2}>Ship Date</th> <td className={styles.Tdtable1}>N/A</td></tr>
               <tr>  <th className={styles.Thtable2}>Shipping Address</th> <td className={styles.Tdtable1}>{locality!==""?locality:"N/A"}</td></tr>
               <tr> <th className={styles.Thtable2}>Destination</th><td className={styles.Tdtable1}>{city!==""?city:"N/A"}</td></tr>
               <tr> <th className={styles.Thtable2}>Carrier</th><td className={styles.Tdtable1}>{city!==""?"Delhivery":"N/A"}</td></tr>
               <tr> <th className={styles.Thtable2}>Carrier Tracking Number </th><td className={styles.Tdtable1}>{addressId!==""?addressId:"N/A"}</td> </tr>

        </thead>

        
            </table>
            
            <CustomizedSteppers order={order} isLoading={isLoading} isError={isError}/>

            {/* <div>
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
                        <th>6:31 PM</th>
                        <th>Origin Scan</th>
                        <th>Chennai</th>
                    </tr>

                    <tr>
                        <th className={styles.Trackingbox3}>3/08/2020</th>
                        <th>10:31 PM</th>
                        <th>Shipping into Received</th>
                        <th>Bangalore</th>

                    </tr>
                </tbody>
                </table>
            </div> */}

        </div>
    )
}
