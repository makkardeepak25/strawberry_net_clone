import React from "react";
import styles from "./Bag.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function Bag() {
  const bagProds = useSelector(state => state.prod.cartProd);
  // console.log(bagProds)
 
  const [quant, setQuant] = React.useState("");
  const handleChange = (e) => {
    setQuant(e.target.value)
  }
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
              <p>Spend INR2,554.30 more for a reduced standard shipping fee at INR379.​</p>
              <div className={styles.shipBar}>
                <div className={styles.shipAmt} style={{ width: "44%" }} />
              </div>
              <p>INR758.00 delivery fee for order below INR7,579.90.​ Free standard shipping for order above INR11,369.80.</p>
              <p style={{ marginTop: "25px" }}>Goods shipped from Strawberrynet</p>
              <div className={styles.bordbot} />
              {bagProds.map(el => {
                return (
                  <div className={styles.prodbag}>
                    <img src={el.images[0]} alt="product" />
                    <div>
                      <div>
                        <strong style={{ textTransform: "uppercase" }}>{el.prod_name}</strong>
                      </div>
                      <div style={{ width: "200px" }}>{el.prod_description}</div>
                      <div>{el.size[0].size}</div>
                      <div>{el.size[0].price}</div>
                    </div>
                    <select
                      onChange={handleChange}
                    >
                      <option value={1}>Qty.1</option>
                      <option value={2}>Qty.2</option>
                      <option value={3}>Qty.3</option>
                      <option value={4}>Qty.4</option>
                      <option value={5}>Qty.5</option>
                      <option value={6}>Qty.6</option>
                      <option value={7}>Qty.7</option>
                      <option value={8}>Qty.8</option>
                      <option value={9}>Qty.9</option>
                      <option value={10}>Qty.10</option>
                    </select>
                    <div>{Number(el.size[0].price)*Number(el.quantity)}</div>
                    <br />
                    <div className={styles.bordbott} />
                  </div>
                );
              })}

              <div className={styles.bordbot} />
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
                <div className={styles.bordbott} />
                <div className={`${styles.flexsum} ${styles.bolditems}`}>
                  <div>Order Total: 1 item(s)‎</div>
                  <div>INR 5990.50</div>
                </div>
              </div>
            </div>
            <div className={styles.notifications}>
              <h2>NOTIFICATION (5)‎&lrm;</h2>
              <ul>
                <li>Due to recent flight scheduling changes, orders may experience delivery delays.</li>
                <li>Due to current situation, a 3.5% freight surcharge will be applied to your order</li>
                <li>
                  Please note that delivery to your selected region will be delayed because order dispatches are on hold due to
                  shipping restrictions. For more information, please contact info@strawberrynet.com.
                </li>
                <li>
                  This order may be subject to duties and taxes, which are payable by the customer and are not refundable.
                </li>
                <li>
                  Spend a minimum of INR11,369.80 after discounts to qualify for free shipping, or spend a minimum of
                  INR7,579.90 after discounts to qualify for a reduced shipping cost at INR379.00.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.checksignout}>
            <div className={styles.checkoutbag}>
              <p>Checkout as Deepak?</p>
              <button>Check Out</button>
            </div>
            <div className={styles.bordbotcheck} />
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
