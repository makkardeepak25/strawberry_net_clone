import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from "./OrderCard.module.css"
const OrderCard = ({...order}) => {
  const history =useHistory()

  const redirect=()=>{
      history.push(`/admin/orders/${order.userId}/${order.orderId}`)
  }

    return (
        <div onClick={redirect} className={styles.orderCard}>
            <div><h4>#{order.orderId}</h4></div>
            <div><h4>{order.bag.length}</h4></div>
            <div><h4>{order.orderTot}</h4></div>
            <div><h4 style={{color:"green"}} >{order.orderStatus}</h4></div>
            <div><h4>{order.date}</h4></div>
        </div>
    );
};

export default OrderCard;