import React from "react";
import styles from "./Checkout.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Addressform } from "./Addressform/Addressform";



export function Checkout() {
  const user = useSelector((state) => state.auth.user);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const cart = user.bag && user.bag;
  const name = user.f_name;
  console.log(user);
  

  let total = 0;
  cart &&
    cart.map((el) => {
      total =
        total +
        Number(parseInt(el.size[0].price.replace(/,/g, ""))) * Number(el.qty);
    });
  let newCustomeroff = (0.1 * total).toFixed(2);
  let standardShip = 757.3;
  let frieghtSurcharge = Number(0.035 * total).toFixed(2);
  let orderTotal = 0;
  if (Number(total < 11370)) {
    orderTotal = (
      Number(total) +
      Number(standardShip) +
      Number(frieghtSurcharge) -
      Number(newCustomeroff)
    ).toFixed(2);
  } else {
    orderTotal = (
      Number(total) +
      Number(frieghtSurcharge) -
      Number(newCustomeroff)
    ).toFixed(2);
  }

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.pagetitle}>CHECKOUT</h1>

        <div className={styles.shopbag}>
          <div className={styles.cart}>
            {cart && cart.length > 0 && (
              <>
                <div className={styles.bagData}>
                  <div className={styles.notifications}>
                    <h2>NOTIFICATION (5)‎&lrm;</h2>
                    <ul>
                      <li>
                        Due to recent flight scheduling changes, orders may
                        experience delivery delays.
                      </li>
                      <li>
                        Due to current situation, a 3.5% freight surcharge will
                        be applied to your order
                      </li>
                      <li>
                        Please note that delivery to your selected region will
                        be delayed because order dispatches are on hold due to
                        shipping restrictions. For more information, please
                        contact info@strawberrynet.com.
                      </li>
                      <li>
                        This order may be subject to duties and taxes, which are
                        payable by the customer and are not refundable.
                      </li>
                      <li>
                        Spend a minimum of INR11,369.80 after discounts to
                        qualify for free shipping, or spend a minimum of
                        INR7,579.90 after discounts to qualify for a reduced
                        shipping cost at INR379.00.
                      </li>
                    </ul>
                  </div>
                  <div className={styles.bordbot} />
                  {cart.length > 0 &&
                    cart.map((el) => {
                      return (
                        <div className={styles.prodbag}>
                          <img src={el.images[0]} alt="product" />
                          <div style={{ width: "45%" }}>
                            <div>
                              <strong style={{ textTransform: "uppercase" }}>
                                {el.prod_name}
                              </strong>
                            </div>
                            <div>{el.prod_description}</div>
                            <div>{el.size[0].size}</div>
                            <div>
                              {Number(
                                parseInt(el.size[0].price.replace(/,/g, ""))
                              )}
                            </div>
                          </div>
                          <div>Qty. {el.qty}</div>
                          <div style={{ marginLeft: "10%" }}>
                            {Number(
                              parseInt(el.size[0].price.replace(/,/g, ""))
                            ) * Number(el.qty)}
                          </div>
                          <br />

                          <div className={styles.bordbott} />
                        </div>
                      );
                    })}

                  <div className={styles.bordbot} />
                  <div className={`${styles.flexsum} ${styles.bolditem}`}>
                    <div>Item Total: {cart.length} item(s)‎</div>
                    <div>INR {total}</div>
                  </div>
                </div>
                    <Addressform/>
               
              </>
            )}
          </div>
          <div className={styles.checksignout}>
            <div className={styles.checkoutbag}>
              <h1>ENTER PROMO CODE</h1>
              <div>
                <input />
              </div>
              <button className={styles.checkoutbagbtn}>APPLY</button>
            </div>
            <div className={styles.bordbotcheck} />
            <div className={styles.checkoutbag}>
              <div className={styles.summary}>
                <div className={`${styles.flexsum} ${styles.bolditem}`}>
                  <div>Item Total: {cart&&cart.length} item(s)‎</div>
                  <div>INR {total}</div>
                </div>
                <div className={`${styles.flexsum} ${styles.extraoff}`}>
                  <div>Extra 10% Off (New Customer)</div>
                  <div>-INR {newCustomeroff}</div>
                </div>
                {total < 11370 ? (
                  <div className={`${styles.flexsum}`}>
                    <div>Standard Shipping (Signature)</div>
                    <div>{standardShip}</div>
                  </div>
                ) : null}
                <div className={`${styles.flexsum}`}>
                  <div>Freight Surcharge</div>
                  <div>{frieghtSurcharge}</div>
                </div>
                <div className={styles.bordbott} />
                <div className={`${styles.flexsum} ${styles.bolditems}`}>
                  <div>Order Total: 1 item(s)‎</div>
                  <div>INR {orderTotal}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
