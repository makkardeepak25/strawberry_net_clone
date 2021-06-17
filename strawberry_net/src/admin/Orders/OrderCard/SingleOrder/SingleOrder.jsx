import React, { useEffect, useState } from "react";
import styles from "./SingleOrder.module.css";
import SideBar from "../../../SideBar/SideBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../../Loader/Loader";
import {Button} from "@material-ui/core"
const SingleOrder = () => {
  const { userId, orderId } = useParams();
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [status,setStatus]=useState(order? order.orderStatus:undefined)
  const [change,setChange]=useState(false)

  const getUser = () => {
    setIsLoading(true);
    axios
      .get(`https://api-strawberrynet.herokuapp.com/profiles/${userId}`)
      .then((res) => {
        console.log(res.data);
        const data = res.data.orders;
        setOrders(data);
        for (let i = 0; i < data.length; i++) {
          console.log(data[i]);
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

  const updateUserOrder=()=>{
    console.log(updatedOrders);
  }
const newOrder={
  orders: updatedOrder
}
  
  const updateStatus=(payload)=>{
    setIsLoading(true);
    axios.patch(`https://api-strawberrynet.herokuapp.com/profiles/${userId}`,payload)
    .then((res)=>{
      console.log(res.data);
     // setOrder(res.data)
     const data = res.data.orders;
     setOrders(data);
     for (let i = 0; i < data.length; i++) {
       console.log(data[i]);
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
    })
  }
  
  useEffect(()=>{
  updateStatus(newOrder)
  },[status])

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={styles.container}>
      <SideBar prop="orders" />

    { order&& <div  className={styles.order}>
            <div className={styles.Maindiv}>Status for Order Id : {orderId}</div>
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
               <Button className={styles.change_btn} variant="contained" color="primary" onClick={()=>setChange(true)} >CHANGE STATUS</Button>
                </td> </tr>

        </thead>

        
            </table>
            
        

           
        </div>
}
      {isLoading && <Loader />}
    </div>
  );
};

export default SingleOrder;
