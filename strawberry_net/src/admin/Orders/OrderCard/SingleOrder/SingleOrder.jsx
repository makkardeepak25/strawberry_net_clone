import React, { useEffect, useState } from "react";
import styles from "./SingleOrder.module.css";
import SideBar from "../../../SideBar/SideBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../../Loader/Loader";
import {Button} from "@material-ui/core"
import Pro_card from "../pro_card/Pro_card";
import CustomizedSteppers from "../../../../Pages/OrderTracking/Stepper"

const SingleOrder = () => {
  const { userId, orderId } = useParams();
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [status,setStatus]=useState(order? order.orderStatus:undefined)
  const [change,setChange]=useState(false)
   const [user,setUser]=useState(undefined)
  const getUser = () => {
    setIsLoading(true);
    axios
      .get(`https://api-strawberrynet.herokuapp.com/profiles/${userId}`)
      .then((res) => {
        // console.log(res.data);
        const data = res.data.orders;
        setUser(res.data)
        setOrders(data);
        for (let i = 0; i < data.length; i++) {
          // console.log(data[i]);
          if (data[i].orderId === orderId) {
            setOrder(data[i]);
          }
        }
      })
      .catch((err) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };
  const updatedOrder={
    ...order,
    orderStatus: status
  }
  const updatedOrders= orders.map((ord)=> ord.orderId===orderId?updatedOrder:ord )


const newOrder={
  ...user,
orders: updatedOrders.length!==0?updatedOrders: orders
}
  
  const updateStatus=(payload)=>{
    // console.log(payload);
   setIsLoading(true);
    axios.patch(`https://api-strawberrynet.herokuapp.com/profiles/${userId}`,payload)
    .then((res)=>{
      console.log(res.data);
     // setOrder(res.data)
     const data = res.data.orders;
     setOrders(data);
     for (let i = 0; i < data.length; i++) {
      //  console.log(data[i]);
       if (data[i].orderId === orderId) {
         setOrder(data[i]);
       }
     }

    })
    .catch(()=>{

    })
    .finally(()=>{
      setIsLoading(false)
      setChange(false)
      setStatus(undefined)
    })
  }
  
  

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={styles.container}>
      <SideBar prop="orders" />

    { order&& <div  className={styles.order}>
            <div className={styles.Maindiv}>ORDER ID : {orderId}</div>
            <hr/>
            <table className={styles.Maintable}>
                
        <thead>
               <tr> <th className={styles.Thtable2}>Customer Name</th> <td className={styles.Tdtable1}>{order.address.f_name} {order.address.l_name}  </td> </tr>
               <tr> <th className={styles.Thtable2}>Order Date</th> <td className={styles.Tdtable1}>{order.date}</td> </tr>
               <tr>  <th className={styles.Thtable2}>Country</th> <td className={styles.Tdtable1}>{order.address.country}</td></tr>
               <tr>  <th className={styles.Thtable2}>Shipping Address</th> <td className={styles.Tdtable1}>{order.address.locality}</td></tr>
               <tr> <th className={styles.Thtable2}>Destination</th><td className={styles.Tdtable1}>{order.address.city}</td></tr>
               <tr> <th className={styles.Thtable2}>Pincode</th><td className={styles.Tdtable1}>{order.address.pincode}</td></tr>
               <tr> <th className={styles.Thtable2}>Mobile</th><td className={styles.Tdtable1}>{order.address.phone}</td></tr>
               <tr> <th className={styles.Thtable2}> Order Status</th><td className={styles.Tdtable1}> {!change? order.orderStatus :
               <select className={styles.select_tag} name="" value={status} onChange={(e)=>setStatus(e.target.value)} id="">
                 <option value="Processing"> Processing </option>
                 <option value="Shipped"> Shipped </option>
                 <option value="Delivered"> Delivered </option>
               </select> }
              {!status? <Button className={styles.change_btn} variant="contained" color="primary" onClick={()=>setChange(true)} >CHANGE STATUS</Button>

              : <Button className={styles.change_btn} variant="contained" color="primary" onClick={()=>updateStatus(newOrder)} >UPDATE STATUS</Button> }
                </td> </tr>

        </thead>

        
            </table>
            <CustomizedSteppers order={order} />
            
            <div>
              {
                order.bag.map((prod)=> <Pro_card   {...prod}/> )
              }
            </div>
        
        <div className={styles.order_info}>
          <div  className={styles.order_div}><h3>Total:</h3> <h3>{order.Item_Total}</h3> </div>
          <div className={styles.order_div}><h3>New Customer Off:</h3> <h3>{order.newCustomerOff}</h3> </div>
          <div className={styles.order_div}><h3>PromoCode  Off:</h3> <h3>{order.promoDiscount}</h3> </div>
          <div className={styles.order_div}><h3>Shipment Fee:</h3> <h3>{order.shipmentFee}</h3> </div>
          <div className={styles.order_div}><h4>Grand Total:</h4> <h4>{order.orderTot}</h4> </div>
        </div>

           
        </div>
}
      {isLoading && <Loader />}
    </div>
  );
};

export default SingleOrder;
