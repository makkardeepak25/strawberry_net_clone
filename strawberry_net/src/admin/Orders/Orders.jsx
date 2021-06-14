import React, { useEffect, useState } from 'react';
import styles from "./Orders.module.css"
import SideBar from "../SideBar/SideBar"
import axios from 'axios';
import OrderCard from './OrderCard/OrderCard';
import Loader from '../Loader/Loader';
const Orders = () => {
const [orders,setOrders]=useState([])
const [isLoading,setIsLoading]=useState(true)
    const getorders=()=>{
        setIsLoading(true)
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
        .finally((res)=>{
            setIsLoading(false)
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
                       <div><h4>Date</h4></div>
                    </div>

                    <div>
                        {
                            orders.length>0&& orders.map((order)=> <OrderCard key={order.orderId} {...order} /> )
                        }
                    </div>
                </div>
            </div>
            {
             isLoading&&  <Loader/>
            }
           

        </div>
    );
};

export default Orders;