import React from "react";
import styles from "./Panel.module.css";
import { Button } from "@material-ui/core";
import SideBar from "../SideBar/SideBar";
import axios from "axios";
const Panel = () => {
  const [orders, setOrders] = React.useState([]);
  const getorders = () => {
    axios
      .get(`https://api-strawberrynet.herokuapp.com/profiles`)
      .then(res => {
        const data = res.data;
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].orders.length; i++) {
            console.log(data[i].orders[j]);
            orders.push(data[i].orders[j]);
          }
        }
      })
      .catch(err => {});
  };
  console.log(orders);
  let processArray = [];
  let shipArray = [];
  let cancelArray = [];
  let delArray = [];

  for (var i = 0; i < orders.length; i++) {
    if (orders[i].orderStatus == "Processing") {
      processArray.push(orders[i]);
    }
    if (orders[i].orderStatus == "Shipped") {
      shipArray.push(orders[i]);
    }
    if (orders[i].orderStatus == "Cancelled") {
      cancelArray.push(orders[i]);
    }
    if (orders[i].orderStatus == "Delivered") {
      delArray.push(orders[i]);
    }
  }
  console.log(processArray);
  React.useEffect(() => {
    getorders();
  }, []);
  return (
    <div className={styles.admin_panel}>
      <SideBar prop="dashboard" />

      <div className={styles.main_panel}>
        <div className={styles.main_flex}>
          <div className={styles.orderBox}>
            <div>Cancelled Orders</div>
            <h1>{cancelArray.length < 10 ? `0${cancelArray.length}` : cancelArray.length}</h1>
          </div>
          <div className={styles.orderBox}>
            <div>Processing Orders</div>
            <h1>{processArray.length < 10 ? `0${processArray.length}` : processArray.length}</h1>
          </div>
          <div className={styles.orderBox}>
            <div>Shipping Orders</div>
            <h1>{shipArray.length < 10 ? `0${shipArray.length}` : shipArray.length}</h1>
          </div>
          <div className={styles.orderBox}>
            <div>Delhivered Orders</div>
            <h1>{delArray.length<10? `0${delArray.length}`:delArray.length}</h1>
          </div>
          <div className={styles.orderBox}>
            <div>Total Orders</div>
            <h1>{orders.length<10? `0${orders.length}`:orders.length}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
