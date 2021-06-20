import React from "react";

import styles from "./Setting.module.css";
import { PersonalInfo } from "../PersonalInfo/PersonalInfo";
import { BillingAddress } from "../BillingAddress/BillingAddress";
import { DeliveryAddress } from "../DeliverAddress/DeliveryAddress";
export const Setting = () => {
  const [toRender, setToRender] = React.useState("personalinfo");
  const activebtn = React.useRef();
  React.useEffect(() => {
    activebtn.current.focus();
  }, []);

  return (
    <div>
      <div className={styles.mainCont}>
        <button
          ref={activebtn}
          onClick={() => setToRender("personalinfo")}
          className={styles.userinfobtn}
        >
          PERSONAL INFORMATION
        </button>
        <button
          onClick={() => setToRender("billingadd")}
          className={styles.userinfobtn}
        >
          {" "}
          BILLING ADDRESS
        </button>
        <button
          onClick={() => setToRender("deliveryaddadd")}
          className={styles.userinfobtn}
        >
          DELIVERY ADDRESSES
        </button>
      </div>
      {toRender === "personalinfo" && <PersonalInfo />}

      {toRender === "billingadd" && (
        <div>
          <BillingAddress />
        </div>
      )}
      {toRender === "deliveryaddadd" && (
        <div>
          <DeliveryAddress />
        </div>
      )}
    </div>
  );
};
