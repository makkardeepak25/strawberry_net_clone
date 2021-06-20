import React from "react";
import { useHistory } from "react-router";
import { getUserDetails, userUpdate } from "../../Redux/Auth/authAction";

import styles from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
const Card = ({ ...prod }) => {
  // console.log(prod);
  var price = prod.size[0].price;
  const history = useHistory();
  const redirect = () => {
    history.push(`/admin/product/${prod._id}`);
  };

  return (
    <>
      {" "}
      {prod !== undefined && (
        <div className={styles.card_container}>
          <div onClick={redirect} className={styles.product_info}>
            <h4 style={{ textTransform: "uppercase" }}>{prod.prod_name}</h4>
            <h4>{prod.prod_description}</h4>
          </div>
          <div onClick={redirect} className={styles.product_img}>
            <img src={prod.images[0]} alt="" />
          </div>
          <div className={styles.prod_price}>
            <h2> {prod.size[0].price}</h2>
            <h6>Extra 5% Off</h6>
          </div>
          <div className={styles.bag}>
            <button>Edit</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
