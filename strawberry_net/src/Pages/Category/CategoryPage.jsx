import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ProductCard from '../../Components/Horizontal card/ProductCard';
import styles from "./CategoryPage.module.css"
import ReorderIcon from '@material-ui/icons/Reorder';
import AppsIcon from '@material-ui/icons/Apps';
const CategoryPage = () => {
    const {category}= useParams()
    const [product,setProduct]=useState([])
    const history=useHistory()
   function getProduct(){
    axios.get(`https://6wwnt.sse.codesandbox.io/products?category=${category}`)
    .then(res=>{
       console.log(res.data);
       setProduct(res.data)
       res.data.length<1&&history.push("/404/product-not-available")
    })
    .catch(err=>{
          history.push("/404/product-not-available")
    })
   }

   useEffect(()=>{
    
  getProduct()
   },[category])
    return (
        <div className={styles.main_div}>
            <div className={styles.category_title}>
               <p>{category}</p>
               <div>
               <h1>{category.toUpperCase()}</h1>
               <img src="https://a.cdnsbn.com/images/English/category_SummerSavingsSale5offJun21_692_1.jpg" alt="poster" />
               </div>
              
            </div>
            <div className={styles.container}>
            <div className={styles.filter_container}>
                <div>

                </div>
                <div className={styles.by_brand}>
                    <h3>Refine By Brand</h3>
                    <div className={styles.checkbox}>
                        {
                            product.map((object)=> <div> <input type="checkbox" id={object.id}/> <label htmlFor={object.id} >{object.prod_name}</label> </div>)
                        }
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
             <div className={styles.top_brands}>
                 <div className={styles.top_brand_title}>TOP {category.toUpperCase()} BRANDS</div>
                <table>
                    <tbody>
                        <tr>
                            <td>ANTHONY</td>
                            <td>BAXTER OF CALIFORNIA</td>
                            <td>BIOTHERM</td>
                            <td>CLARINS</td>
                        </tr>
                        <tr>
                            <td>CLINIQUE</td>
                            <td>ELEMIS</td>
                            <td>JACK BLACK</td>
                            <td>KIEHL'S</td>
                        </tr>
                        <tr>
                            <td>LAB SERIES</td>
                            <td>LANCOME</td>
                            <td>THE ART OF SHAVING</td>
                            
                        </tr>
                    </tbody>
                </table>
                 <div className={styles.all_brand_btn}>
                     <button>VIEW ALL {category.toUpperCase()} BRANDS {`>`}</button>
                 </div>
             </div>
             <div>
                 <h4>{product.length} results for <span style={{color:"#C7007D"}}>{category}</span></h4>
             </div>
             <div className={styles.divider}></div>
           
           <div className={styles.view}>
               <div></div>
                 <div className={styles.sort_by}>
                     <h6>View</h6>
                     <div> <div><ReorderIcon className={styles.list} /></div>
                     <div className={styles.by_list}>list</div> </div>
                     <div><div> <AppsIcon className={styles.list}/></div> <div className={styles.by_list}>grid</div></div>
                     <select>
                         <option value="lower"> SORT BY POPULARITY</option>
                         <option value="lower"> SORT BY LOWEST PRICE</option>
                         <option value="lower"> SORT BY BRAND A-Z</option>
                         <option value="lower"> SORT BY BRAND Z-A</option>
                     </select>
                 </div>
           </div>

             <div className={styles.brand_title}>
                 <h4>{category.toUpperCase()}</h4>
             </div>

             <div>
                 {
                     product.length>0 && product.map((prod)=> <ProductCard key={prod.id} {...prod}/> )
                     
                 }
             </div>
             </div>
            </div>
        </div>
    );
};

export default CategoryPage;