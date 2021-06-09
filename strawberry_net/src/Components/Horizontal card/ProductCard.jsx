import React from 'react';
import { useHistory } from 'react-router';
import { userUpdate } from '../../Redux/Auth/authAction';
import { fixed } from '../Product_card/add';
import styles from "./ProductCard.module.css"
import {useDispatch,useSelector} from "react-redux"
const ProductCard = ({...prod}) => {
   // console.log(prod);
   var price= prod.size[0].price
 const history= useHistory()
 const redirect=()=>{
     history.push(`/${prod.category}/products/${prod.id}`)
 }
 const addProduct={
    ...prod,
    size: [prod.size[0]],
   qty:"1"
}

const user= useSelector((state)=>state.auth.user)
const isAuth=useSelector((state)=>state.auth.isAuth)
const dispatch=useDispatch()



const AddToCard=(product)=>{
    
    const id=product.id
 console.log(id,product);
 if(user){
    dispatch(userUpdate(id,product))
 }else{
     history.replace("/signin")
 }
 

}
const addtoBag=()=>{
    const bag=user.bag
    const userdata={

        ...user,
       bag:bag.length>0?[...bag,addProduct]:[addProduct]
    }
     AddToCard(userdata)
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
                <button onClick={addtoBag}>ADD TO BAG</button>
            </div>
        </div>
}
        </>
    );
};

export default ProductCard;