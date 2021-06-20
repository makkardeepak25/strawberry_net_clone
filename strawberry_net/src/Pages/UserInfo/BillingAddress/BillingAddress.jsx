import React from "react";
import styles from "./BillingAddress.module.css";
import AddIcon from "@material-ui/icons/Add";
import { Checkbox } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { AddressForm } from "../AddressForm/AddressForm";
import { useSelector } from "react-redux";

// var addresses = [{
//     address_tittle:"Home",
//     defaultAdd:true,
//     f_name:"Kamal",
//     l_name:"Gupta",
//     company:"Masai",
//     country:"India",
//     city:"New Delhi",
//     state:"Delhi",
//     pincode:"110067",
//     countryCode:"+91",
//     phone:"7500013500"
// }]

const GreenCheckbox = withStyles({
  root: {
    color: "#623381",
    "&$checked": {
      color: "#623381",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles({
  root: {
    color: "#623381",
    fontSize: "24px",
  },
});
export const BillingAddress = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({});
  const [showAddressform, setShowAddressForm] = React.useState(false);
  const addresses = useSelector((state) => state.auth.user.addresses);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleClose = () => {
    setShowAddressForm(false);
  };
  return showAddressform ? (
    <div>
      <AddressForm handleClose={handleClose} />
    </div>
  ) : (
    <div className={styles.billingAddress}>
      <div className={styles.left}>
        <button
          className={styles.addBtn}
          onClick={() => setShowAddressForm(true)}
        >
          <AddIcon fontSize="large" />
          <p className={styles.hideme}>Add New Address</p>
        </button>
      </div>

      <div className={styles.right}>
        {addresses &&
          addresses.map((item, index) => (
            <div key={index} className={styles.addressCont}>
              <div className={styles.lineone}>
                <p style={{ fontSize: "24px", marginRight: "20px" }}>
                  {item.address_tittle}
                </p>
                <GreenCheckbox
                  checked={state.checkedG}
                  onChange={handleChange}
                  name="checkedG"
                />
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
              <div className={styles.linefour}>
                <DeleteIcon classes={{ root: classes.root }} />
                <EditIcon classes={{ root: classes.root }} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
