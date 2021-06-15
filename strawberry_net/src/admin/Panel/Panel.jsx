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
            setOrders([...orders, data[i].orders[j]]);
          }
        }
      })
      .catch(err => {});
  };
  console.log(orders);
  let processArray = [];
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].orderStatus == "Processing") {
      processArray.push(orders[i]);
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
          <div style={{ backgroundColor: "red" }} className={styles.orderBox}>
            <div>Cancelled Orders</div>
          </div>
          <div style={{ backgroundColor: "yellow" }} className={styles.orderBox}>
            <div>Processing Orders</div>
            <h1>{processArray.length}</h1>
          </div>
          <div style={{ backgroundColor: "teal" }} className={styles.orderBox}>
            <div>Shipping Orders</div>
          </div>
          <div style={{ backgroundColor: "green" }} className={styles.orderBox}>
            <div>Delievered Orders</div>
          </div>
          <div style={{ backgroundColor: "brown" }} className={styles.orderBox}>
            <div>Total Orders</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
