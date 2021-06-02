import React from "react";
import styles from "./Bag.module.css";
import { Link } from "react-router-dom";

export function Bag() {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.pagetitle}>Shopping bag</h1>
        <div className={styles.shopbag}>
          <div className={styles.cart}>
            <div className={styles.country}>
              <span>
                Deliver to: <strong>Country Name</strong>
              </span>
            </div>
            <div className={styles.bagData}>
              <p>Spend INR2,554.30 more for a reduced standard shipping fee at INR379.00.​</p>
              <div className={styles.shipBar}>
                <div className={styles.shipAmt} style={{ width: "44%" }}></div>
                
              </div>
              <p>INR758.00 delivery fee for order below INR7,579.90.​ Free standard shipping for order above INR11,369.80.</p>
            <p style={{marginTop:"25px"}}>Goods shipped from Strawberrynet</p>
              <div className={styles.bordbot}></div>
              <div className={styles.prodbag}>
                <img src="https://a.cdnsbn.com/images/products/15853100802.jpg" alt="product" />
                <div>
                  <div><strong>Product-Name</strong></div>
                  <div>Product-Description</div>
                  <div>200ml/6.8oz</div>
                  <div>price per product</div>
                </div>
                <select>
                  <option>Qty.1</option>
                  <option>Qty.2</option>
                  <option>Qty.3</option>
                  <option>Qty.4</option>
                  <option>Qty.5</option>
                  <option>Qty.6</option>
                  <option>Qty.7</option>
                  <option>Qty.8</option>
                  <option>Qty.9</option>
                  <option>Qty.10</option>
                </select>
                <div>Price with quantity</div>
              </div>
              <div className={styles.bordbot}></div>
              <div className={styles.summary}>
                <div className={`${styles.flexsum} ${styles.bolditem}`}>
                  <div>Item Total: 1 item(s)‎</div>
                  <div>INR 5912.50</div>
                </div>
                <div className={`${styles.flexsum} ${styles.extraoff}`}>
                <div>Extra 10% Off (New Customer)</div>
                  <div>-INR 591.30</div>
                </div>
                <div className={`${styles.flexsum} ${styles.extraoff}`}>
                  <div>Extra 5% Off Sitewide (Summer Sale)</div>
                <div>-INR 295.60</div>
                </div>
                <div className={`${styles.flexsum}`}>
                  <div>Standard Shipping (Signature)</div>
                <div>INR 758.00</div>
                </div>
                <div className={`${styles.flexsum}`}>
                  <div>Extra 5% Off Sitewide (Summer Sale)</div>
                  <div>INR 206.90</div>
                </div>
                <div className={styles.bordbott}></div>
                <div className={`${styles.flexsum} ${styles.bolditems}`}>
                  <div>Order Total: 1 item(s)‎</div>
                  <div>INR 5990.50</div>
                </div>
              </div>
            </div>
            <div className={styles.notifications} >
              <h2>NOTIFICATION (5)‎&lrm;</h2>
              <ul>
                <li>Due to recent flight scheduling changes, orders may experience delivery delays.</li>
                <li>Due to current situation, a 3.5% freight surcharge will be applied to your order</li>
                <li>Please note that delivery to your selected region will be delayed because order dispatches are on hold due to shipping restrictions. For more information, please contact info@strawberrynet.com.</li>
                <li>
                  This order may be subject to duties and taxes, which are payable by the customer and are not refundable.
                </li>
                <li>
                Spend a minimum of INR11,369.80 after discounts to qualify for free shipping, or spend a minimum of INR7,579.90 after discounts to qualify for a reduced shipping cost at INR379.00.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.checksignout}>
            <div className={styles.checkoutbag}>
              <p>Checkout as Deepak?</p>
              <button>Check Out</button>
            </div>
            <div className={styles.bordbotcheck}></div>
            <div className={styles.checkoutbag}>
            <p>Not Deepak?</p>
              <button>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
