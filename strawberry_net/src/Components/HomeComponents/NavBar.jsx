import React from "react";
import styles from "./NavBar.module.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.headerbg}>
        <div className={styles.container}>
          <a className={styles.navbrand}></a>
          <div className={styles.navright}>
            <nav className={styles.addnav}>
              <ul className={styles.addnavlang}>
                <li>
                  Rs&nbsp;.&nbsp;INR&nbsp;India: English |
                  <a className={styles.glyphicon} aria-hidden="true">
                    {AiOutlineDown}
                  </a>
                </li>
                <li>
                  <a className={styles.ordertrack}> Order Tracking</a>
                </li>
              </ul>
            </nav>
            <ul className={styles.menunavright}>
              <li className={styles.loginlinks}>
                <a className={styles.accname} href="#">
                  <IconContext.Provider
                    value={{ color: "blue", height:"50px",width:"5px", className: "global-class-name" }}
                  >
                    <div>
                      < FaUserCircle />
                    </div>
                  </IconContext.Provider>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.navform}>
            <div>
              <input
                type="text"
                placeholder="SEARCH BRAND / PRODUCT"
                autocomplete="off"
                className={styles.inpsearch}
              />
              <a className={styles.searchbtn} href="#">
                <BsSearch />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navbarmenu}>
        <ul className={styles.menucont}>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
