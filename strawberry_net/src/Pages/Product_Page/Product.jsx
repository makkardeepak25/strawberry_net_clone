import React from 'react';
import styles from "./Product.module.css"
const Product = () => {
    const product ={
        id:"1",
        prod_name:"ACADEMIE",
        prod_description:"Men Eye Contour Gel",
        size:[["15ml/0.5oz",1300]],
        prod_details:["Formulated from unique blend of oak & birch natural extracts",
          "  Offers tonifying, moisturizing calming & anti-oxydizing properties",
            "Eliminates appearance of fine lines & wrinkles",
            "Yeast extracts & acid complex enhance blood capillary network",
            "Reduces puffiness & dark circles",
            "Leaves eye zone velvety smooth & radiant"],
        reviews:[{
            title:"Nice",
            body:"I love this product",
            rating:5
        }],
        ratings:5,
        images:[
            "https://a.cdnsbn.com/images/products/20937521339.jpg",
            "https://a.cdnsbn.com/images/products/20937521339-1.jpg",
            "https://a.cdnsbn.com/images/products/20937521339-2.jpg"
        ]
    }
    
    return (
        <div className={styles.main_div}>
            <div className={styles.product_div}>

                <div className={styles.product_img}>

                </div>
                <div className={styles.product_info}>
                  <h1>{product.prod_name}</h1>
                  <h3>{product.prod_description}</h3>
                  <p>Size: {product.size[0][0]}</p>
                  <div className={styles.sale_card}>
                    
                     <div>sale</div>
                     <div>{product.size[0][0]}</div>
                  </div>
                  <div className={styles.price_tag}>
                      <h3>Rs.</h3>
                      <h1>{product.size[0][1]}</h1>
                      <h3>.00</h3>
                  </div>
                  <div>
                      <select>
                        <option value="1">1</option>
                      </select>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Product;