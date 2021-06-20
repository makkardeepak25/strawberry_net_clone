import React from "react";
import styled from "styled-components";
import styles from "./Signup.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import Checkbox from "@material-ui/core/Checkbox";
import { getSignIn } from "../../../Redux/Auth/authAction";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginLeft: "150px",
    marginTop: "20px",
    color: "#623381",
  },
});
const AuthInput = styled.input`
  background: none;
  width: 100%;
  height: 34px;
  border: 1px solid #623381;
  text-align: left;
`;
const AuthButton = styled.button`
  width: 60%;
  background-color: #623381;
  border: none;
  color: white;
  height: 42px;
  margin: auto;
  cursor: pointer;

  &:hover {
    background-color: #62338199;
  }
`;

const iniState = {
  id: uuid(),
  f_name: "",
  l_name: "",
  email: "",
  phone: "",
  password: "",
  phone: "",
  birth_date: "",
  birth_month: "",
  location: "",
  nickname: "",
  avatar: "",
  gender: "",
  points: 0,
  addresses: [],
  wishlisht: [],
  bag: [],
  orders: [],
  saved_cards: [],
};

export const Signup = () => {
  const isLoading = useSelector((state) => state.auth.isLoading);
  const classes = useStyles();

  const [sigupData, setSignUpdata] = React.useState(iniState);
  const [isMatched, SetIsMatched] = React.useState(true);
  const [hasregistered, setHasRegistered] = React.useState(false);
  const {
    f_name,
    l_name,
    email,
    password,
    phone,
    birth_date,
    avatar,
    points,
    addresses,
    wishlisht,
    orders,
    saved_cards,
    birth_month,
    location,
    nickname,
  } = sigupData;
  const handleOnchange = (e) => {
    setSignUpdata({ ...sigupData, [e.target.name]: e.target.value });
    if (password == "secret-1") {
      SetIsMatched(true);
    } else {
      SetIsMatched(false);
    }
  };
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();

    dispatch(getSignIn(sigupData));
    setHasRegistered(true);
    history.replace("/");
  };
  function onChange(value) {
    // console.log("Captcha value:", value)
  }

  const [isPasswordMatching, setIsPasswordMatching] = React.useState(true);
  function handleMatch(e) {
    if (e.target.value == password) {
      setIsPasswordMatching(true);
    } else {
      setIsPasswordMatching(false);
    }
  }
  return isLoading ? (
    <CircularProgress disableShrink classes={{ root: classes.root }} />
  ) : (
    <form className={styles.signupform} onSubmit={handleClick}>
      <AuthInput
        placeholder="  First Name"
        name="f_name"
        value={f_name}
        onChange={handleOnchange}
      ></AuthInput>
      <AuthInput
        placeholder="  Last Name"
        name="l_name"
        value={l_name}
        onChange={handleOnchange}
      ></AuthInput>

      <AuthInput
        type="email"
        placeholder="  Email Address"
        name="email"
        value={email}
        onChange={handleOnchange}
        required
      ></AuthInput>
      <AuthInput
        required
        type="password"
        placeholder="  Password"
        name="password"
        value={password}
        onChange={handleOnchange}
        required
      ></AuthInput>
      {/* {
            isMatched? 
            ( */}
      {/* <p style={{marginTop:'0',marginBottom:'0',lineHeight:"1.5"}}>
            Please enter a minimum of 8 characters, including at least 1 letter and 1 number.
            </p> */}
      {/* ):
            (<p style={{marginTop:'0',marginBottom:'0',lineHeight:"1.5",color:'red'}}>
            Please enter a minimum of 8 characters, including at least 1 letter and 1 number.
            </p>)} */}
      <AuthInput
        type="password"
        placeholder="  Re-enter your Password"
        onChange={handleMatch}
        required
      ></AuthInput>
      {!isPasswordMatching && (
        <div style={{ color: "red" }}>The passwords do not match.</div>
      )}
      <ReCAPTCHA
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={onChange}
      />
      <p style={{ marginTop: "0", marginBottom: "0" }}>
        By creating your account, you agree to our
        <p
          style={{
            color: "#623381",
            marginTop: "0",
            marginBottom: "0",
            lineHeight: "1.5",
          }}
        >
          Privacy Policy & Terms & Conditions
        </p>
      </p>
      <div className={styles.subscription_div}>
        <div>
          <Checkbox
            color="#6d1b7b"
            value="checkedA"
            inputProps={{ "aria-label": "Checkbox A" }}
          />
        </div>
        <div>Subscribe to our exclusive email offers</div>
      </div>
      <AuthButton>Register</AuthButton>
    </form>
  );
};
