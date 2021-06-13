import React from "react";
import styles from "./Checkout.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Addressform } from "./Addressform/Addressform";
import { priceUpdate } from "../../Redux/Auth/authAction";
import { PaymentMethods } from "../../Components/Payment/PaymentMethods";
import { Checkbox } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { v4 as uuid } from "uuid";

const GreenCheckbox = withStyles({
  root: {
    color: "#623381",
    "&$checked": {
      color: "#623381"
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const useStyles = makeStyles({
  root: {
    color: "#623381",
    fontSize: "24px"
  }
});

export function Checkout() {
  const user = useSelector(state => state.auth.user);
  const isAuth = useSelector(state => state.auth.isAuth);
  const addressAvail = user && user.addresses;
  const [promCode, setPromCode] = React.useState(false);
  const [state, setState] = React.useState({});
  console.log(addressAvail);
  const dispatch = useDispatch();
  const cart = user.bag && user.bag;
  const name = user.f_name;
  let promoDisc = 0;
  console.log(user);
  const [promo, setPromo] = React.useState("");
  const handlePromo = () => {
    if (promo === "STRAW5") {
      setPromCode(true);
    } else {
      setPromCode(false);
      alert("Wrong PromoCode Applied");
    }
  };
  let orderid = uuid()
    .toString()
    .replace("-", "")
    .substring(0, 8);
  console.log(orderid);
  let total = 0;
  cart &&
    cart.map(el => {
      total = total + Number(parseInt(el.size[0].price)) * Number(el.qty);
    });
  let newCustomeroff = (0.1 * total).toFixed(2);
  let standardShip = 757.3;
  let frieghtSurcharge = Number(0.035 * total).toFixed(2);
  if (promCode === true) {
    promoDisc = (0.05 * total).toFixed(2);
  }
  let orderTotal = 0;
  if (Number(total < 11370)) {
    orderTotal = (
      Number(total) +
      Number(standardShip) +
      Number(frieghtSurcharge) -
      Number(promoDisc) -
      Number(newCustomeroff)
    ).toFixed(2);
  } else {
    orderTotal = (Number(total) - Number(promoDisc) + Number(frieghtSurcharge) - Number(newCustomeroff)).toFixed(2);
  }
  let today = Date.now();
  const payload = {
    Item_Total: total,
    newCustomerOff: newCustomeroff,
    shipmentFee: standardShip,
    orderTot: orderTotal,
    bag: cart,
    promoDiscount: promoDisc,
    address: addressAvail && addressAvail[0],
    orderId: orderid,
    date: today.toLocaleDateString()
  };
  const Addtouser = () => {
    const order = user && user.orders;
    order[0] = payload;
    dispatch(priceUpdate(order));
    console.log(user);
  };
  console.log(payload);
  React.useEffect(
    () => {
      if (cart) {
        Addtouser();
      }
    },
    [payload]
  );
  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
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
                      <li>Due to recent flight scheduling changes, orders may experience delivery delays.</li>
                      <li>Due to current situation, a 3.5% freight surcharge will be applied to your order</li>
                      <li>
                        Please note that delivery to your selected region will be delayed because order dispatches are on hold
                        due to shipping restrictions. For more information, please contact info@strawberrynet.com.
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
                  <div className={styles.bordbot} />
                  {cart.length > 0 &&
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
                            <div>{Number(parseInt(el.size[0].price.replace))}</div>
                          </div>
                          <div>Qty. {el.qty}</div>
                          <div style={{ marginLeft: "10%" }}>{Number(parseInt(el.size[0].price)) * Number(el.qty)}</div>
                          <br />

                          <div className={styles.bordbott} />
                        </div>
                      );
                    })}

                  <div className={styles.bordbot} />
                  <div className={`${styles.flexsums} ${styles.bolditem}`}>
                    <div>Item Total: {cart && cart.length} item(s)‎</div>
                    <div>INR {total}</div>
                  </div>
                </div>
                {addressAvail && addressAvail.length > 0 ? (
                  <div>
                    {addressAvail.map((item, index) => (
                      <div key={index} className={styles.addressCont}>
                        <div className={styles.lineone}>
                          <p style={{ fontSize: "24px", marginRight: "20px" }}>{item.address_tittle}</p>
                          <GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />
                          <h6>Default billing address</h6>
                        </div>

                        <div className={styles.linetwo}>
                          <h5>
                            {item.f_name} {item.l_name}
                          </h5>
                          <p style={{ marginTop: "-30px" }}>
                            {item.city}, {item.state}, {item.country}, {item.pincode}{" "}
                          </p>
                          <p style={{ marginTop: "-12px" }}>
                            Tel. {item.countryCode} {item.phone}
                          </p>
                        </div>
                        {/* <div className={styles.linefour}>
                          <DeleteIcon classes={{ root: classes.root }} />
                          <EditIcon classes={{ root: classes.root }} />
                        </div> */}
                      </div>
                    ))}
                  </div>
                ) : (
                  <Addressform />
                )}
                <PaymentMethods />
              </>
            )}
          </div>
          {cart && cart.length > 0 && (
            <div className={styles.checksignout}>
              <div className={styles.checkoutbag}>
                <div className={styles.promocode}>ENTER PROMO CODE</div>
                <div>
                  <input
                    type="text"
                    className={styles.promInput}
                    onChange={e => {
                      setPromo(e.target.value);
                    }}
                  />
                </div>
                <button onClick={handlePromo} className={styles.checkoutbagbtn}>
                  APPLY
                </button>
                {promCode && <p style={{ color: "hotpink", marginTop: "10px" }}>Promo Code Applied successfully</p>}
              </div>
              <div className={styles.bordbotcheck} />

              <div className={styles.checkoutbag}>
                <div className={styles.summary}>
                  <div className={`${styles.flexsum} ${styles.bolditem}`}>
                    <div>Item Total: {cart && cart.length} item(s)‎</div>
                    <div>INR {total}</div>
                  </div>
                  <div className={`${styles.flexsum} ${styles.extraoff}`}>
                    <div>Extra 10% Off (New Customer)</div>
                    <div>-INR {newCustomeroff}</div>
                  </div>
                  {promCode ? (
                    <div className={`${styles.flexsum} ${styles.extraoff}`}>
                      <div>Promo Code 5% Off</div>
                      <div>-INR {promoDisc}</div>
                    </div>
                  ) : null}

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
          )}
        </div>
      </div>
    </div>
  );
}
