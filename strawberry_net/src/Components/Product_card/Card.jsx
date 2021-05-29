import React from "react";
import axios from "axios";
import styles from "./Card.module.css";

export const Card = ({prod_name,prod_description,size,images,}) => {
  // const [data, setData] = React.useState([]);
  // const getData = () => {
  //   axios.get("https://6wwnt.sse.codesandbox.io/products").then(res => {
  //     console.log(res.data);
  //     setData(res.data);
  //   });
  // };
  // React.useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className={styles.prodDiv}>
      <a>
        <span className={styles.prodname}>{prod_name}</span>
        <p className={styles.desc}>
          {prod_description}
          {/* <span> {size[0].size}</span> */}
        </p>
      </a>

      <img className={styles.imgProd} src={images} />
      {/* <div className={styles.prodprice}>Rs&nbsp;{size[0].price}</div> */}
      <button className={styles.bagbtn}>Add to bag</button>
      <div className={styles.extraoff}>Extra 8% Off on US$80</div>
    </div>
  );
};
