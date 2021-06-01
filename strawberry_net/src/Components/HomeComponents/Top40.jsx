import React from "react";
import axios from "axios";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export const Top40 = () => {
  const [data, setData] = React.useState([]);
  const getData = () => {
    axios.get("https://6wwnt.sse.codesandbox.io/products").then(res => {
      console.log(res.data);
      setData(res.data);
    });
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {data.slice(11, 15).map(el => {
        return (
          <Link to={`/products/${el.id}`}>
            {" "}
            <div className={styles.prodDiv}>
              <a>
                <span className={styles.prodname}>{el.prod_name}</span>
                <p className={styles.desc}>
                  {el.prod_description}
                  <span> {el.size[0].size}</span>
                </p>
              </a>
              {el.offer ? <div className={styles.offers}>Save {el.offer}%</div> : null}
              <img className={styles.imgProd} src={el.images[0]} />
              <div className={styles.prodprice}>Rs&nbsp;{el.size[0].price}</div>
              <button className={styles.bagbtn}>Add to bag</button>
              <div className={styles.extraoff}>Extra 8% Off on US$80</div>
            </div>
            <div className={styles.wishlist}>
              <FavoriteBorderIcon style={{ color: "#662d91" }} />
            </div>
          </Link>
        );
      })}
    </>
  );
};
