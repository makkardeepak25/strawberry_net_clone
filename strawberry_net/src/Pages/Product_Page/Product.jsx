import React, { useEffect, useState } from 'react';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import styles from "./Product.module.css"
import OfferTag from '../../Components/offer_lable/OfferTag';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Product = () => {
    const {id}=useParams();
    console.log(id)
    // const product = {
    //     id: "1",
    //     prod_name: "ACADEMIE",
    //     prod_description: "Men Eye Contour Gel",
    //     size: [{size:"15ml/0.5oz",price:1300}],
    //     prod_details: ["Formulated from unique blend of oak & birch natural extracts",
    //         "  Offers tonifying, moisturizing calming & anti-oxydizing properties",
    //         "Eliminates appearance of fine lines & wrinkles",
    //         "Yeast extracts & acid complex enhance blood capillary network",
    //         "Reduces puffiness & dark circles",
    //         "Leaves eye zone velvety smooth & radiant"],
    //     reviews: [{
    //         title: "Nice",
    //         rev_desc: "I love this product",
    //         rating: 5,
    //         date: "05-05-2021"
    //     }],
    //     ratings: 5,
    //     images: [
    //         "https://a.cdnsbn.com/images/products/20937521339.jpg",
    //         "https://a.cdnsbn.com/images/products/20937521339-1.jpg",
    //         "https://a.cdnsbn.com/images/products/20937521339-2.jpg"
    //     ],
    //     offer:14
    // }
    let array = new Array(30).fill(0)

    const [activeTab, setActiveTab] = useState("details")

    const activeDetails = activeTab == "details" ? { fontWeight: "600" } : {}
    const activeReview = activeTab == "review" ? { fontWeight: "600" } : {}

    const [image,setImage]=useState(0)
    const [size,setSize]=useState(0)
    const [product,setProduct]=useState({})

    const GetProduct=()=>{
        axios.get(`https://6wwnt.sse.codesandbox.io/products/${id}`)
        .then(res=>{
           console.log(res.data);
           setProduct(res.data)
        })
    }
useEffect(()=>{
GetProduct()
},[id])

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
                    <p>Size: {product.size[size].size}</p>
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
                        <select >

                            {
                                array.map((el, i) => <option value="">{i + 1}</option>)
                            }
                        </select>

                        <button >Add to bag</button>
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
                                <p style={activeReview} >REVIEWS</p>
                            </div>
                            <div>
                                <p >Ratings</p>
                            </div>
                            <div>
                                <p>Add to wishlist</p>
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
                                     <h5>Rating star</h5>
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