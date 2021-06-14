import React, { useEffect, useState } from 'react';
import styles from "./Orders.module.css"
import SideBar from "../SideBar/SideBar"
import axios from 'axios';
const Orders = () => {
const [orders,setOrders]=useState([])
    const getorders=()=>{
        axios.get(`https://api-strawberrynet.herokuapp.com/profiles`)
        .then((res)=>{
            const data=res.data
            for(let i=0;i<data.length;i++){
                
                for(let j=0;j<data[i].orders.length;i++){
                     console.log(data[i].orders[j]);
                    setOrders([...orders,data[i].orders[j]])
                }
            }
        })
        .catch((err)=>{

        })
    }
    console.log(orders);
   
useEffect(()=>{
getorders()
},[])
    return (
        <div className={styles.container}>
            <SideBar prop="orders"/>

            <div className={styles.orders}>
                <h1>Oders</h1>

                <div>
                    <div className={styles.header}>
                       <div><h4>Order ID</h4></div>
                       <div><h4>Total Products</h4></div>
                       <div><h4>Cost</h4></div>
                       <div><h4>Status</h4></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;