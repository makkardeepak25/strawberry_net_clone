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
import { useDispatch,useSelector } from "react-redux";
import { getSearchData } from "../../Redux/Products/productAction";
import Badge from '@material-ui/core/Badge';
export const NavBar = () => {
  const[brand,setBrand]= React.useState({})
  const dispatch=useDispatch()

  const auth= useSelector((state)=>state.auth)
  const user = useSelector((state) => state.auth.user)
  const isAuth=useSelector(state=>state.auth.isAuth) //dont change this
   const bag=user&&auth.user.bag
  console.log("bag",bag);
console.log("user",user)
 const cart = user.bag
  const name = user.f_name
  console.log(name)


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
              {!isAuth?<li className={styles.loginlinks}>
                <Link to={"/signin"} className={styles.accname} href="#">
                  <IconContext.Provider value={{ color: "#B53788", size: "3.2em" }}>
                    <FaUserCircle />
                  </IconContext.Provider>
                  <span className={styles.aaccname}>Sign in</span>
                </Link>
              </li> : <li className={styles.loginlinks}>
              <Link  className={styles.accname} >
              <img className={styles.logimg} src={"https://a.cdnsbn.com/images/common/Strawbaby_default.png"} alt="strawlog"/>
                    <span className={styles.aaccname}>{name}</span>
                </Link>
              </li>}
              
              
              <li className={styles.loginlinks}>
                <a className={styles.accname} href="#">
                  <IconContext.Provider value={{ color: "#B53788", size: "3.2em" }}>
                    <AiFillHeart />
                  </IconContext.Provider>
                  <span className={styles.aaccname}>Wishlist</span>
                </a>
              </li>
              <li className={styles.loginlinks}>
               <Link to={"/user/bag"} className={styles.accname}>
                  <IconContext.Provider value={{ color: "#B53788", size: "3.2em" }}>
                  <Badge badgeContent={bag&&bag.length} color="secondary"   anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}>
                    <GiShoppingBag />
                    </Badge>
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