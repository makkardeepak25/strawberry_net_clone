import React from "react";
import styles from "./NavBar.module.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import MenuIcon from "@material-ui/icons/Menu";
import StarIcon from "@material-ui/icons/Star";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import { AiFillHeart } from "react-icons/ai";
import { GiShoppingBag } from "react-icons/gi";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSearchData } from "../../Redux/Products/productAction";
export const NavBar = () => {
  const[brand,setBrand]= React.useState({})
  const dispatch=useDispatch()
 


  const handleChange=(e)=>{
    setBrand(e.target.value)
  }

  const handleClick=()=>{
    dispatch(getSearchData(brand))

    
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.headerbg}>
        <div className={styles.container}>
          <a className={styles.navbrand} />
          <div className={styles.navform1}>
            <div>
              <input type="text" placeholder="SEARCH BRAND / PRODUCT" autocomplete="off" className={styles.inpsearch1} onChange={handleChange} />
              <Link to={"/search/product-search"} className={styles.searchbtn1} >
                <BsSearch onClick={handleClick} />
              </Link>
            </div>
          </div>
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
                <Link to={"/user/signin"} className={styles.accname} href="#">
                  <IconContext.Provider value={{ color: "#B53788", size: "3.2em" }}>
                    <FaUserCircle />
                  </IconContext.Provider>
                  <span className={styles.aaccname}>Sign in</span>
                </Link>
              </li>
              <li className={styles.loginlinks}>
                <a className={styles.accname} href="#">
                  <IconContext.Provider value={{ color: "#B53788", size: "3.2em" }}>
                    <AiFillHeart />
                  </IconContext.Provider>
                  <span className={styles.aaccname}>Wishlist</span>
                </a>
              </li>
              <li className={styles.loginlinks}>
               <Link to={"/bag"} className={styles.accname}>
                  <IconContext.Provider value={{ color: "#B53788", size: "3.2em" }}>
                    <GiShoppingBag />
                  </IconContext.Provider>
                  <span className={styles.aaccname}>Bag</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.navbarmenu1}>
        <ul className={styles.menucont}>
          <Link to={"/brands"}>
            {" "}
            <li className={styles.li1}>
              <span>
                <MenuIcon style={{ width: "30px", height: "15px", color: "white" }} />
              </span>
              <span className={styles.clrspns}>SHOP BY BRAND</span>
            </li>
          </Link>
          <Link to={"/skincare"}>
            {" "}
            <li>
              <span className={styles.clrspn}>SKINCARE</span>
            </li>
          </Link>
          <Link>
            <li to={"/makeup"}>
              <span className={styles.clrspn}>MAKEUP</span>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/haircare"}>
            {" "}
            <li>
              <span className={styles.clrspn}>HAIRCARE</span>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/perfumes"}>
            {" "}
            <li>
              <span className={styles.clrspn}>PERFUME</span>
            </li>
          </Link>
          <Link to={"/men-skincare"}>
            {" "}
            <li>
              <span className={styles.clrspn}>MEN'S SKINCARE</span>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/men-cologne"}>
            {" "}
            <li>
              <span className={styles.clrspn}>MEN'S COLOGNE</span>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/home-scents"}>
            {" "}
            <li>
              <span className={styles.clrspn}>HOME SCENTS</span>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/natural-beauty"}>
            {" "}
            <li>
              <span className={styles.clrspn}>NATURAL BEAUTY</span>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/specials"}>
            {" "}
            <li className={styles.li1}>
              <span>
                <CardGiftcardIcon style={{ width: "30px", height: "15px", color: "white" }} />
              </span>
              <span className={styles.clrspn}>SPECIALS</span>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/new-products"}>
            {" "}
            <li className={styles.li1}>
              <span>
                <StarIcon style={{ width: "30px", height: "15px", color: "white" }} />
              </span>
              <span className={styles.clrspns}>NEW</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className={styles.navbarmenu2}>
        <MenuIcon style={{ width: "50px", height: "50px", color: "white",cursor:"pointer" }} />
        <div className={styles.navform2}>
          <div>
            <input type="text" placeholder="SEARCH BRAND / PRODUCT" autocomplete="off" className={styles.inpsearch2} />
            <a className={styles.searchbtn2} href="#">
              <BsSearch />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};