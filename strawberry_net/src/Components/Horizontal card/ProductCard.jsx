import React from 'react';
import { useHistory } from 'react-router';
import { getUserDetails, userUpdate } from '../../Redux/Auth/authAction';
import { fixed } from '../Product_card/add';
import styles from "./ProductCard.module.css"
import {useDispatch,useSelector} from "react-redux"
const ProductCard = ({...prod}) => {
   // console.log(prod);
   var price= prod.size[0].price
   const [qty,setQty]=React.useState("1")
 const history= useHistory()
 const redirect=()=>{
     history.push(`/${prod.category}/products/${prod._id}`)
 }
 const addProduct={
    ...prod,
    size: [prod.size[0]],
   qty:qty
}

const user= useSelector((state)=>state.auth.user)
//const isAuth=useSelector((state)=>state.auth.isAuth)
const dispatch=useDispatch()



const AddToCard=(product)=>{
    
    const id=product.id
  
 if(user){
    dispatch(userUpdate(id,product))
 }else{
     history.replace("/signin")
 }
 

}



const addtoBag=()=>{
    if(!user){
  console.log(user);
    // AddToCard(userdata)
    history.push("/signin")
} else{
    //console.log(user);
    const bag=user&&user.bag
     const isPresent= bag.length>0&& bag.map((el)=> el._id===addProduct._id?{...el, qty:Number(el.qty)+Number(qty)}:el)
    // const isPresent= bag.length>0&& bag.find((el)=> el.id===product.id)
     const isPresentObject= bag.length>0&& bag.filter((el)=> el._id===addProduct._id&&{...el, qty:Number(el.qty)+Number(qty)})
    console.log(isPresentObject[0]);
     const userdata={

        ...user,
        bag:bag.length > 0?[...isPresent,addProduct]:[addProduct]
    }
    const userdata1={

        ...user,
        bag:bag.length > 0?[...isPresent]:[addProduct]
    }
     isPresentObject[0]?AddToCard(userdata1):AddToCard(userdata)
}
}

React.useEffect(()=>{
    const id= localStorage.getItem("userId")
    
    dispatch(getUserDetails(id))

},[])
    return (
      <> {prod!==undefined&& <div className={styles.card_container}>
            <div onClick={redirect}  className={styles.product_info}>
                <h4 style={{textTransform:"uppercase"}}>{prod.prod_name}</h4>
                <h4>{prod.prod_description}</h4>
                <p>{prod.size[0].size}</p>
            </div>
            <div onClick={redirect}  className={styles.product_img}>
                <img src={prod.images[0]} alt="" />
                <button>Click to View</button>
            </div>
            <div className={styles.prod_price}>
                <h2> {prod.size[0].price}</h2>
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