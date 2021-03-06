import React, { useEffect } from "react";
import styles from "./Bag.module.css";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import { getlogout, removeItem, setPaymentSucceeded } from "../../Redux/Auth/authAction";
import { Redirect } from "react-router";
import { Link, useHistory } from "react-router-dom";
import {Spinner} from "./../../Components/Spinner"

export function Bag() {
  const user = useSelector(state => state.auth.user);
  const isAuth = useSelector(state => state.auth.isAuth);
  const isLoading = useSelector(state => state.auth.isLoading);
  const dispatch = useDispatch();
  let paymentConfirmation = useSelector(state => state.auth.isPaymentSuccess);
  const history= useHistory()
  const cart = user&& user.bag && user.bag;
  const name = user&&user.f_name;
  console.log(user);
  useEffect(() => {
    dispatch(setPaymentSucceeded(false));
    window.scrollTo(0, 0);
  },[])

  let total = 0;
  cart &&
    cart.map(el => {
      total = total + Number(parseInt(el.size[0].price)) * el.qty;
    });
  let newCustomeroff = (0.1 * total).toFixed(2);
  let standardShip = 757.3;
  let frieghtSurcharge = Number(0.035 * total).toFixed(2);
  let orderTotal = 0;
  if (Number(total < 11370)) {
    orderTotal = (Number(total) + Number(standardShip) + Number(frieghtSurcharge) - Number(newCustomeroff)).toFixed(2);
  } else {
    orderTotal = (Number(total) + Number(frieghtSurcharge) - Number(newCustomeroff)).toFixed(2);
  }

  console.log(orderTotal);
  const [quant, setQuant] = React.useState("");
  const handleChange = (e, id) => {
    setQuant(e.target.value);
    // quantityUpdate(id)
  };
  // const payload= {
  //   tot: total,
  //   newCust: newCustomeroff,
  //   ship: standardShip,
  //   orderTot:orderTotal
  // }
  // const Addtouser = () => {
  //   const order = user && user.orders
  //   order[0]=payload
  //   dispatch(priceUpdate(order))
  // }
  // console.log(payload)

  const RemovefromCard = product => {
    const id = product.id;
    console.log(id, product);
     dispatch(removeItem(id, product));
  };
  const removeFromBag = _id => {
    const bag = user && user.bag;
    let new_bag = bag.filter(item => item._id !== _id);
    const userdata = {
      ...user,
      bag: new_bag
    };
    console.log(_id)
    RemovefromCard(userdata);
  };

  // const quantityUpdate = (id) => {
  //   const bag = user && user.bag;
  //   // let new_bag = bag.find(item => item.id === id && {...item,qty:Number(quant)})
  //   // let removedQuantity = bag.filter(item => item.id !== id)
  //   const isPresent= bag.length>0&& bag.map((el)=> el.id===id?{...el, qty:Number(quant)}:el)
  //   const userdata = {
  //     ...user,
  //     bag:isPresent
  //   };
  //   console.log(quant)
  //   console.log(userdata)
  //   RemovefromCard(userdata);
  // };
  // React.useEffect(() => {
  //   Addtouser()
  // }, [payload])
  if (!isAuth) {
    return <Redirect to={"/signin"} />;
  }


  const handleLogout=()=>{
      dispatch(getlogout())
      history.replace("/")
  }


 

  return (
    <div>
      { 
     user&& <div className={styles.container}>
        <h1 className={styles.pagetitle}>Shopping bag</h1>
        <div className={styles.shopbag}>
          <div className={styles.cart}>
          {cart && cart.length > 0 ? (
              <>
            <div className={styles.country}>
              <span>
                Deliver to: <strong>Country Name</strong>
              </span>
            </div>
          
                <div className={styles.bagData}>
                  <p>Spend INR2,554.30 more for a reduced standard shipping fee at INR379.???</p>
                  <div className={styles.shipBar}>
                    <div className={styles.shipAmt} style={{ width: "44%" }} />
                  </div>
                  <p>
                    INR758.00 delivery fee for order below INR7,579.90.??? Free standard shipping for order above INR11,369.80.
                  </p>
                  <p style={{ marginTop: "25px" }}>Goods shipped from Strawberrynet</p>
                  <div className={styles.bordbot} />
                  {isLoading ? (
                    <Spinner />
                  ) :<>{cart.length > 0 &&
                    cart.map(el => {
                      return (
                        <div className={styles.prodbag}>
                          <img src={el.images[0]} alt="product" />
                          <div style={{ width: "45%" }}>
                            <div>
                              <strong style={{ textTransform: "uppercase" }}>{el.prod_name}</strong>
                            </div>
                            <div>{el.prod_description}</div>
                            <div>{el.size[0].size}</div>
                            <div>{Number(parseInt(el.size[0].price))}</div>
                          </div>
                          <select value={el.qty} onChange={e => handleChange(e, el.id)}>
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
                            <option value={11}>Qty.11</option>
                            <option value={12}>Qty.12</option>
                            <option value={13}>Qty.13</option>
                            <option value={14}>Qty.14</option>
                            <option value={15}>Qty.15</option>
                            <option value={16}>Qty.16</option>
                            <option value={17}>Qty.17</option>
                            <option value={18}>Qty.18</option>
                            <option value={19}>Qty.19</option>
                            <option value={20}>Qty.20</option>
                          </select>
                          <div style={{ marginLeft: "10%" }}>
                            {Number(parseInt(el.size[0].price)) * Number(el.qty)}
                          </div>
                          <br />
                          <div onClick={() => removeFromBag(el._id)} className={styles.removeprod}>
                            <CloseIcon />
                          </div>
                          <div className={styles.bordbott} />
                        </div>
                      );
                    })}
</>}
                  
                  <div className={styles.bordbot} />
                  <div className={styles.summary}>
                    <div className={`${styles.flexsum} ${styles.bolditem}`}>
                      <div>Item Total: {cart&&cart.length} item(s)???</div>
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
                      <div>Order Total: 1 item(s)???</div>
                      <div>INR {orderTotal}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.notifications}>
                  <h2>NOTIFICATION (5)???&lrm;</h2>
                  <ul>
                    <li>Due to recent flight scheduling changes, orders may experience delivery delays.</li>
                    <li>Due to current situation, a 3.5% freight surcharge will be applied to your order</li>
                    <li>
                      Please note that delivery to your selected region will be delayed because order dispatches are on hold due
                      to shipping restrictions. For more information, please contact info@strawberrynet.com.
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
              </>
            ) : <div className={styles.emptybag}>
              <div className={styles.addprods}>Bag is Empty! Add some Products</div>
            <Link to={"/"}><button className={styles.backtohome}>Go to Home Page</button></Link>
            </div>}
          </div>
          <div className={styles.checksignout}>
            <div className={styles.checkoutbag}>
              <p>Checkout as {name}?</p>
              <Link to={"/user/checkout"}>
                {" "}
                <button className={styles.checkoutbagbtn}>Check Out</button>{" "}
              </Link>
            </div>
            <div className={styles.bordbotcheck} />
            <div className={styles.checkoutbag}>
              <p>Not {name}?</p>
              <button className={styles.checkoutbagbtn} onClick={handleLogout}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
}
    </div>
  );
}
