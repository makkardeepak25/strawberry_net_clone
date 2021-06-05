import React from 'react';
import { useHistory } from 'react-router';
import { fixed } from '../Product_card/add';
import styles from "./ProductCard.module.css"
const ProductCard = ({...prod}) => {
   // console.log(prod);
   var price= prod.size[0].price
 const history= useHistory()
 const redirect=()=>{
     history.push(`/${prod.category}/products/${prod.id}`)
 }
 
    return (
      <> {prod!==undefined&& <div className={styles.card_container}>
            <div onClick={redirect}  className={styles.product_info}>
                <h4>{prod.prod_name}</h4>
                <h4>{prod.prod_description}</h4>
                <p>{prod.size[0].size}</p>
            </div>
            <div onClick={redirect}  className={styles.product_img}>
                <img src={prod.images[0]} alt="" />
                <button>Click to View</button>
            </div>
            <div className={styles.prod_price}>
                <h2> {fixed(prod.size[0].price)}</h2>
                <h6>Extra 5% Off</h6>
            </div>
            <div className={styles.bag}>
                <button>ADD TO BAG</button>
            </div>
        </div>
}
        </>
    );
};

export default ProductCard;