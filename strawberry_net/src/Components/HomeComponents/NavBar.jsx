import React from "react";
import styles from "./NavBar.module.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import { AiFillHeart } from "react-icons/ai";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BsFillGiftFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
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
                    value={{ color: "#b53788", size: "3.2em" }}
                  >
                    <FaUserCircle />
                  </IconContext.Provider>
                  <span className={styles.aaccname}>Sign in</span>
                </a>
              </li>

              <li className={styles.loginlinks}>
                <a className={styles.accname} href="#">
                  <IconContext.Provider
                    value={{ color: "#b53788", size: "3.2em" }}
                  >
                    <AiFillHeart />
                  </IconContext.Provider>
                  <span className={styles.aaccname}>Wishlist</span>
                </a>
              </li>

              <li className={styles.loginlinks}>
                <a className={styles.accname} href="#">
                  <IconContext.Provider
                    value={{ color: "#b53788", size: "3.2em" }}
                  >
                    <GiShoppingBag />
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
        <div className={styles.menucont}>
          <Link to={"/brands"}>
            {" "}
            <div className={styles.li1}>
              <span>
                <IconContext.Provider value={{ color: "white", size: "2em" }}>
                  <GiHamburgerMenu />
                </IconContext.Provider>
              </span>
              <span className={styles.clrspns}>SHOP BY BRAND</span>
            </div>
          </Link>
          <Link to={"/skincare"}>
            {" "}
            <div>
              <span className={styles.clrspn}>SKINCARE</span>
            </div>
          </Link>
          <Link>
            {" "}
            <div to={"/makeup"}>
              <span className={styles.clrspn}>MAKEUP</span>
            </div>
          </Link>
          <Link to={"/haircare"}>
            {" "}
            <div>
              <span className={styles.clrspn}>HAIRCARE</span>
            </div>
          </Link>
          <Link to={"/perfume"}>
            {" "}
            <div>
              <span className={styles.clrspn}>PERFUME</span>
            </div>
          </Link>
          <Link to={"/men-skincare"}>
            {" "}
            <div>
              <span className={styles.clrspn}>MEN'S SKINCARE</span>
            </div>
          </Link>
          <Link to={"/men-cologne"}>
            {" "}
            <div>
              <span className={styles.clrspn}>MEN'S COLOGNE</span>
            </div>
          </Link>
          <Link to={"/home-scents"}>
            {" "}
            <div>
              <span className={styles.clrspn}>HOME SCENTS</span>
            </div>
          </Link>
          <Link to={"/natural-beauty"}>
            {" "}
            <div>
              <span className={styles.clrspn}>NATURAL BEAUTY</span>
            </div>
          </Link>
          <Link to={"/specials"}>
            {" "}
            <div className={styles.li1}>
              <span>
                <IconContext.Provider value={{ color: "white", size: "2em" }}>
                  <BsFillGiftFill />
                </IconContext.Provider>
              </span>
              <span className={styles.clrspns}>SPECIALS</span>
            </div>
          </Link>
          <Link to={"/new-products"}>
            {" "}
            <div className={styles.li1}>
              <span>
                <IconContext.Provider value={{ color: "white", size: "2em" }}>
                  <AiFillStar />
                </IconContext.Provider>
              </span>
              <span className={styles.clrspns}>NEW</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
