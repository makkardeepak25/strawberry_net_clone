import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FiGlobe } from "react-icons/fi";
export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.socialMedia}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div>
              <h5 className={styles.connect}>STAY CONNECTED</h5>
              <div className={styles.signup}>
                <div className={styles.inputGp}>
                  <input
                    className={styles.signupInp}
                    type="email"
                    placeholder="Enter your email for exclusive offers"
                    maxlength="50"
                    size="30"
                    name="signUp"
                  />
                  <span className={styles.signBut}>
                    <a className={styles.signupbtnref}>Sign Up</a>
                  </span>
                </div>
              </div>
              <span>
                <a className={styles.btnfb}> </a>
                <a className={styles.btntweet}> </a>
                <a className={styles.btntpint}> </a>
                <a className={styles.btninsta}> </a>
                <a className={styles.btnyoutube}> </a>
              </span>
            </div>
            <div>
              <div className={styles.bannerbot}>
                <span className={styles.imgbot} />
                <span className={styles.adv}>
                  <br></br>
                  Over
                  <br />
                  <b>33,000</b>
                  <br />
                  products from
                  <br />
                  <b>800 </b>
                  brands
                </span>
              </div>
            </div>
            <div>
              <div className={styles.bannerplane}>
                <span className={styles.imgplane}></span>
                <span>
                  <b>FREE Shipping Anywhere</b>
                  <br></br>
                  in the
                  <b>world!</b>
                  <br></br>
                  <span className={styles.fs15}>Conditions apply</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footercontainer}>
        <div className={styles.container}>
          <div className={styles.rowcont}>
            <div className={styles.colLeft}>
              <ul className={styles.textsz}>
                <Link>
                  {" "}
                  <li>Shipping&tax&emsp;|&ensp;</li>
                </Link>
                <Link>
                  <li>Returns Policy&emsp;|&ensp;</li>
                </Link>
                <Link>
                  {" "}
                  <li>FAQ&emsp;|&ensp;</li>
                </Link>
                <Link>
                  {" "}
                  <li>Contact us&emsp;|&ensp;</li>
                </Link>
              </ul>
            </div>
            <div className={styles.colrght}>
              <Link>
                {" "}
                <>
                  <span>
                    <IconContext.Provider
                      value={{ color: "white", size: "2em" }}
                    >
                      <FiGlobe />
                    </IconContext.Provider>
                  </span>
                  <span className={styles.country}>
                    Change COuntry/currency
                  </span>
                </>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
