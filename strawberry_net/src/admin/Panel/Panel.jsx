import React, { useState } from "react";
import styles from "./Panel.module.css";
import { Button } from "@material-ui/core";
import SideBar from "../SideBar/SideBar";
import axios from "axios";
import Loader from "../Loader/Loader";
import { convert } from "./orders";
const Panel = () => {
  const [total, setTotal] = React.useState([]);
  const [processing,setProcessing]=useState([])
  const [shipped,setShipped]=useState([])
  const [delivered,setDelivered]=useState([])
const [isLoading,setIsloding]=useState(false)
  const getorders = () => {
    const orders=[]
    setIsloding(true)
    axios
      .get(`https://api-strawberrynet.herokuapp.com/profiles`)
      .then(res => {
        // const data = res.data;
        // for (let i = 0; i < data.length; i++) {
        //   for (let j = 0; j < data[i].orders.length; i++) {

        //      orders.push(data[i].orders[j])
        //      setTotal(orders)
        //      console.log(data[i].f_name,data[i].orders[j]);
        //      if(data[i].orders[j].orderStatus==="Processing"){
        //       processing.push(data[i].orders[j])
        //      }
        //      if(data[i].orders[j].orderStatus==="Shipped"){
        //       shipped.push(data[i].orders[j])
        //      }
        //      if(data[i].orders[j].orderStatus==="Delivered"){
        //       delivered.push(data[i].orders[j])
        //      }
        //   }
        // }
        const data = res.data;
    

        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].orders.length; j++) {
          
                // console.log(data[i].f_name, data[i].orders[j]);
                        orders.push(data[i].orders[j])
             setTotal(orders)
             
             if(data[i].orders[j].orderStatus==="Processing"){
              processing.push(data[i].orders[j])
             }
             if(data[i].orders[j].orderStatus==="Shipped"){
              shipped.push(data[i].orders[j])
             }
             if(data[i].orders[j].orderStatus==="Delivered"){
              delivered.push(data[i].orders[j])
             }
          }
        }
        setIsloding(false)
      })
      .catch(err => {})
      .finally(()=>{
       
      });
  };

 
  React.useEffect(() => {
    getorders();
  }, []);
  return (
    <div className={styles.admin_panel}>
      <SideBar prop="dashboard" />
      
      <div className={styles.main_panel}>
        <h1>DASHBOARD</h1>
        <div className={styles.main_flex}>
           <div className={styles.order_boxes}>
             <div> <h3>Processing Orders</h3> <h1>{convert(processing.length)}</h1> </div>
             <div> <h3>Shipped Orders</h3> <h1>{convert(shipped.length)}</h1> </div>
             <div> <h3>Delivered Orders</h3> <h1>{convert(delivered.length)}</h1> </div>
             <div> <h3>Cancel <br/>Orders</h3> <h1>00</h1> </div>
             <div> <h3>Total <br /> Orders</h3> <h1>{convert(total.length)}</h1> </div>
           </div>
        </div>
      </div>
      {
        isLoading&&<Loader/>
      }
    </div>
  );
};

export default Panel;
