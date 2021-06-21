import React, { useEffect, useState } from "react";
import styles from "./Orders.module.css";
import SideBar from "../SideBar/SideBar";
import axios from "axios";
import OrderCard from "./OrderCard/OrderCard";
import Loader from "../Loader/Loader";
import { formateDate } from "./date";
import { Button } from "@material-ui/core";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [all, setAll] = useState("");
  const [date, setDate] = useState("");
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState("all");
  const newDate = new Date();

  const getorders = () => {
    const order = [];
    setIsLoading(true);
    axios
      .get(`https://api-strawberrynet.herokuapp.com/profiles`)
      .then((res) => {
        const data = res.data;
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].orders.length; j++) {
            // all.push(data[i].orders[j])
            if (filter === "all") {
              if (date !== "") {
                if (data[i].orders[j].date == formateDate(date)) {
                  order.push(data[i].orders[j]);
                }
              } else if (
                data[i].orders[j].date == newDate.toLocaleDateString()
              ) {
                order.push(data[i].orders[j]);
              }
            } else {
              if (date !== "" && data[i].orders[j].orderStatus == filter) {
                if (data[i].orders[j].date == formateDate(date)) {
                  order.push(data[i].orders[j]);
                }
              } else if (
                data[i].orders[j].date == newDate.toLocaleDateString() &&
                data[i].orders[j].orderStatus == filter
              ) {
                order.push(data[i].orders[j]);
              }
            }
          }
        }

        setOrders(order.splice(page * 8, 8));
      })
      .catch((err) => {})
      .finally((res) => {
        setIsLoading(false);
      });
  };
  // console.log(orders);

  useEffect(() => {
    getorders();
  }, [date, page, filter]);
  return (
    <div className={styles.container}>
      <SideBar prop="orders" />

      <div className={styles.orders}>
        <h1>ORDERS</h1>
        <div className={styles.page_no}>
          {" "}
          <h3>PAGE:{page + 1}</h3>
          <h3>
            Date:
            {date !== "" ? formateDate(date) : newDate.toLocaleDateString()}
          </h3>{" "}
        </div>
        <div className={styles.table}>
          <div className={styles.header}>
            <div>
              <h4>Order ID</h4>
            </div>
            <div>
              <h4>Total Products</h4>
            </div>
            <div>
              <h4>Cost</h4>
            </div>
            <div  className={styles.filter_container}>
              <h4>Status</h4>
              <select
                className={styles.select_filter}
                name=""
                onChange={(e) => setFilter(e.target.value)}
                id=""
              >
                <option value="all"> All </option>
                <option value="Processing"> Processing </option>
                <option value="Shipped"> Shipped </option>
                <option value="Delivered"> Delivered </option>
              </select>
            </div>
            <div>
              <h4>Date</h4>{" "}
              <input type="date" onChange={(e) => setDate(e.target.value)} />{" "}
            </div>
          </div>

          <div>
            {orders.length > 0 &&
              orders.map((order) => (
                <OrderCard key={order.orderId} {...order} />
              ))}
          </div>
          
        </div>
        {
          <div className={styles.pagination}>
            <Button
              onClick={() => setPage(page - 1)}
              variant="contained"
              color="primary"
              disabled={page === 0}
            >
              PREV
            </Button>
            <Button
              onClick={() => setPage(page + 1)}
              variant="contained"
              color="primary"
              disabled={orders.length < 8}
            >
              NEXT
            </Button>
          </div>
        }
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default Orders;
