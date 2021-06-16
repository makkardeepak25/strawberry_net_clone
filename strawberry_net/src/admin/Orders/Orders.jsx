import React, { useEffect, useState } from 'react';
import styles from "./Orders.module.css"
import SideBar from "../SideBar/SideBar"
import axios from 'axios';
import OrderCard from './OrderCard/OrderCard';
import Loader from '../Loader/Loader';
import { formateDate } from './date';
import {Button} from "@material-ui/core"

const Orders = () => {
const [orders,setOrders]=useState([])
const [isLoading,setIsLoading]=useState(true)
const [all,setAll]=useState("")
const [date,setDate]=useState("")
const [page,setPage]=useState(0)
const newDate = new Date()
function ass (a, b)
{
    return b.date - a.date
}
    const getorders=()=>{
        const order=[]
        setIsLoading(true)
        axios.get(`https://api-strawberrynet.herokuapp.com/profiles`)
        .then((res)=>{
            const data=res.data
            // for(let i=0;i<data.length;i++){
                
            //     for(let j=0;j<data[i].orders.length;i++){
            //          console.log(data[i].orders[j]);
            //         setOrders([...orders,data[i].orders[j]])
            //     }
            // }

            for(let i=0;i<data.length;i++){
              
                for(let j=0;j<data[i].orders.length;j++){
                    console.log( data[i].f_name, data[i].orders[j]);
                    // all.push(data[i].orders[j])
                    if(date!==""){
                        if(data[i].orders[j].date==formateDate(date)){
                            order.push(data[i].orders[j])
                        }
                    } else if(data[i].orders[j].date==newDate.toLocaleDateString()){
                        order.push(data[i].orders[j])
                    }
                  
                }
            }
            
            setOrders(order.splice((page*8),8))
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
},[date,page])
    return (
        <div className={styles.container}>
            <SideBar prop="orders"/>

           <div className={styles.orders}>
                <h1>Oders</h1>
               <h5>{date!=""&& formateDate(date)}</h5>
               <h5>{newDate.toLocaleDateString()}</h5>
                <div className={styles.table}>
                    <div className={styles.header}>
                       <div><h4>Order ID</h4></div>
                       <div><h4>Total Products</h4></div>
                       <div><h4>Cost</h4></div>
                       <div><h4>Status</h4></div>
                       <div><h4>Date</h4> <input type="date" onChange={(e)=>setDate(e.target.value)}/> </div>
                    </div>

                    <div>
                        {
                            orders.length>0&& orders.map((order)=> <OrderCard key={order.orderId} {...order} /> )
                        }
                    </div>
                </div>
                {
                  <div className={styles.pagination}>
                       <Button onClick={()=> setPage(page-1) } variant="contained" color="primary" disabled={page===0} >PREV</Button> 
                       <Button onClick={()=> setPage(page+1) } variant="contained" color="primary" disabled={orders.length<8}>NEXT</Button>
                  </div>
                }
            </div>
            {
             isLoading&&  <Loader/>
            }
           

        </div>
    );
};

export default Orders;