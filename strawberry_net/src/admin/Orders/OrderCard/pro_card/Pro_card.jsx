import React from "react";
import styles from "./Pro_card.module.css";
const Pro_card = ({ ...prod }) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={prod.images[0]} alt="" />
      </div>
      <div>
        <h3>{prod.prod_name}</h3>
        <h3>{prod.prod_description}</h3>
      </div>
      <div>
        <p> QTY.{prod.qty}</p>
      </div>
      <div>
        <p>PRICE: Rs.{prod.size[0].price} </p>
      </div>
    </div>
  );
};

export default Pro_card;
