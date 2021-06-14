import React, { useEffect, useState } from "react";
import styles from "./SingleOrder.module.css";
import SideBar from "../../../SideBar/SideBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../../Loader/Loader";
const SingleOrder = () => {
  const { userId, orderId } = useParams();
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={styles.container}>
      <SideBar prop="orders" />

      <div className={styles.order}>
        <h1>Order ID :#{orderId}</h1>
        <div>
          <h5> Order Date: {order.date}</h5>
          <div className={styles.order_info}>
            <div className={styles.prod_cards}>
              {order!="" && order.bag.map((item) => (
                <div className={styles.item_card}>
                  <div>Product ID: {item._id}</div>
                  <div className={styles.card_img}>
                      <img src={item.images[0]} alt="" />
                      <div >
                          <h5>Brand: {item.prod_name}</h5>
                          <h5> Description {item.prod_description}</h5>
                      </div>

                    
                    <div className={styles.qty}>
                    <h4> Quantity:  {item.qty}</h4>
                    </div>
                   
                       
                  </div>
                </div>
              ))}
            { order!==""&& <div className={styles.main} >
                  <div>

                  </div>
              <div className={styles.cost}>
                 <div> <h5>Total:</h5> <h5  className={styles.color}>{order.Item_Total}</h5> </div>
                 <div> <h5>Extra 10% OFF:</h5> <h5 className={styles.color}>{order.newCustomerOff}</h5> </div>
                 <div> <h5>Standerd Shipping :</h5> <h5 className={styles.color}>{order.shipmentFee}</h5> </div>
                {order.promoDiscount&& <div> <h5>PromoCode Discount</h5> <h5 className={styles.color}>{order.promoDiscount}</h5> </div>}
                <div> <h3>Grand Total :</h3> <h3 className={styles.color}>{order.orderTot}</h3> </div>
              </div>
              </div> }
             
            </div>
           {order !="" && <div className={styles.address}>
              <div>
                <h4>
                  Name: {order.address.f_name} {order.address.l_name}
                </h4>
                <h4>Address: {order.address.address_tittle}</h4>
              </div>
            </div> }
          </div>
     
     <div>

     </div>

        </div>
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default SingleOrder;
