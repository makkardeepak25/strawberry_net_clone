import React, { useState } from "react";
import styles from "./AdminSignin.module.css";
import { TextField, Button } from "@material-ui/core";
import { Redirect, useHistory } from "react-router-dom";
const AdminSignin = () => {
  const history = useHistory();
  const [input, setInput] = useState("");
  const redirect = () => {
    localStorage.setItem("admin", input);
    history.replace("/admin/dashboard");
  };
  const admin = localStorage.getItem("admin");
  console.log(admin);
  if (admin) {
    return <Redirect to="/admin/dashboard" />;
  }

  return (
    <div className={styles.container}>
      <div>
        <img
          src="https://1000logos.net/wp-content/uploads/2021/05/Strawberrynet-logo.png"
          alt=""
        />
      </div>
      <div>
        <TextField
          onChange={(e) => setInput(e.target.value)}
          className={styles.input}
          id="outlined-basic"
          label="Admin Name"
          variant="outlined"
        />
        <div className={styles.divider}></div>
        <Button
          onClick={redirect}
          className={styles.btn}
          variant="contained"
          color="secondary"
        >
          SIGN IN
        </Button>
      </div>
    </div>
  );
};

export default AdminSignin;
