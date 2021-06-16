import React, { useEffect, useState } from 'react';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import styles from "./Product.module.css"
import OfferTag from '../../Components/offer_lable/OfferTag';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import SimpleRating from "../../Components/Rating/ReadRating"
import {Rating} from "@material-ui/lab";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import {useDispatch,useSelector} from "react-redux"
import { getUserDetails, removeItem, userUpdate } from '../../Redux/Auth/authAction';
const Product = () => {
    const {id}=useParams();


    let array = new Array(30).fill(0)
    
    const [activeTab, setActiveTab] = useState("details")

    const activeDetails = activeTab == "details" ? { fontWeight: "600" } : {}
    const activeReview = activeTab == "review" ? { fontWeight: "600" } : {}

    const [image,setImage]=useState(0)
    const [size,setSize]=useState(0)
    const [product,setProduct]=useState({})
    const [qty,setQty]=useState("1")
    const history= useHistory()

    const GetProduct=()=>{
        axios.get(`https://api-strawberrynet.herokuapp.com/products/${id}`)
        .then(res=>{
        //    console.log(res.data);
           setProduct(res.data)
        })
    }
    const addProduct={
        ...product,
        size: [{size:product.size?product.size[size].size:"",price:product.size?product.size[size].price:"0"}],
       qty:Number(qty)
    }

    const user= useSelector((state)=>state.auth.user)
    const userid= useSelector((state)=>state.auth.userId)
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
        console.log(user);
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


useEffect(()=>{
GetProduct()
window.scrollTo(0, 0);


},[])
useEffect(()=>{
    dispatch(getUserDetails(userid))

},[])

    return (
        <>
        { product.images&&
        <div className={styles.main_div}>
            <div className={styles.product_div}>
               
                <div className={styles.product_img}>
                   <div className={styles.preview}>
                  {
                     <div className={styles.offer_tag}>
                          <OfferTag lable={product.offer}/>
                     </div>
                  }
                       <img src={product.images[image]} alt="product image" />
                   </div>
                   <div className={styles.all_img}>
                       {
                           product.images.map((img,index)=> <img src={img} onClick={()=>setImage(index)} />)
                       }
                   </div>
                </div>
                <div className={styles.product_info}>
                    <h1>{product.prod_name}</h1>
                    <h3>{product.prod_description}</h3>
                    <div >
                    <p>Size: {product.size[size].size}</p>
                    <SimpleRating value="2"/>
                    </div>
                    
                    <div className={styles.sale_card_div}>
                        {
                            product.size.map((obj,i)=> 
                            <div onClick={()=>setSize(i)} className={size===i? styles.active_sale_card:styles.sale_card}>

                            <div>sale</div>
                            <div>{obj.size}</div>
                        </div>
                            )
                        }
                    </div>
                
                    <div className={styles.price_tag}>
                        <h3>Rs.</h3>
                        <h1>{product.size[size].price}</h1>
                        <h3>.00</h3>
                    </div>
                    <div className={styles.select_tag_btn_div}>
                        <select onChange={(e)=>setQty(e.target.value)} >

                            {
                                array.map((el, i) => <option value={i+1}>{i + 1}</option>)
                            }
                        </select>

                        <button onClick={addtoBag} >Add to bag</button>
                        <h5>Low in Stock</h5>

                    </div>
                    <div className={styles.offers}>
                        <LocalOfferIcon className={styles.tag} /> <h6> Extra 8% Off on US$80</h6>
                    </div>

                    <div>
                        <div className={styles.tabs}>
                            <div onClick={() => setActiveTab("details")} className={activeTab === "details" && styles.active_tab}>
                                <p style={activeDetails}>PRODUCT DETAILS</p>
                            </div>
                            <div onClick={() => setActiveTab("review")} className={activeTab === "review" && styles.active_tab}>
                                <p style={activeReview} >REVIEWS ({product.reviews.length}) </p>
                            </div>
                            <div>
                            {/* <Rating name="read-only" value={2} readOnly /> */}
                            <SimpleRating value="2"/>
                            </div>
                            <div>
                                <div className={styles.wish_list}> <FavoriteBorderIcon className={styles.wish_icon} /><p>ADD TO WISHLIST</p></div>
                            </div>
                            <div className={styles.write}>
                                <button>Write Review</button>
                            </div>
                        </div>
                        <div className={styles.divider}></div>
                        {
                            activeTab === "details" && <div className={styles.prod_details}>
                                {
                                    product.prod_details.map(el => <li>{el}</li>)
                                }
                            </div>


                        }
                        {
                            activeTab == "review" &&
                             <div>

                               {
                                 product.reviews.map((object)=>
                                 <div className={styles.reviews}>
                                     <div >
                                         
                                    <SimpleRating value={2}/>
                                 <p>{object.date&&object.date}</p>
                                     </div>
                                     <div>
                                         <h5>{object.title}</h5>
                                         <p>{object.rev_desc}</p>
                                         <p className={styles.helpful}>is this helpful? </p>
                                     </div>
                                
                             </div>)
                               }
                               
                            </div>
                        }

                    </div>

                </div>
            </div>
        </div>
        }
        </>
    );
};

export default Product;