import React from "react";
import styles from "./NavBar.module.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import {AiFillHeart} from "react-icons/ai"
import {GiShoppingBag} from "react-icons/gi"
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
                    value={{ color: "#b53788",size:"3.2em" }}
                  >
                   
                      < FaUserCircle />
                   
                  </IconContext.Provider>
                  <span className={styles.aaccname}>Sign in</span>
                </a>
              </li>


              <li className={styles.loginlinks}>
                <a className={styles.accname} href="#">
                  <IconContext.Provider
                    value={{ color: "#b53788",size:"3.2em" }}
                  >
                   
                      < AiFillHeart />
                   
                  </IconContext.Provider>
                  <span className={styles.aaccname}>Wishlist</span>
                </a>
              </li>


              <li className={styles.loginlinks}>
                <a className={styles.accname} href="#">
                  <IconContext.Provider
                    value={{ color: "#b53788",size:"3.2em" }}
                  >
                   
                      < GiShoppingBag />
                   
                  </IconContext.Provider>
                  <span className={styles.aaccname}>Bag</span>
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
