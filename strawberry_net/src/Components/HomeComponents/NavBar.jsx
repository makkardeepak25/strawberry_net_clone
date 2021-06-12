import React, { useEffect } from "react";
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
import { Link, NavLink, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearchData } from "../../Redux/Products/productAction";
import Badge from "@material-ui/core/Badge";
import { useState } from "react";
import { getUserDetails } from "../../Redux/Auth/authAction";
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ControlPointDuplicateIcon from '@material-ui/icons/ControlPointDuplicate';
import ListAltIcon from '@material-ui/icons/ListAlt';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SettingsIcon from '@material-ui/icons/Settings';
export const NavBar = () => {
  const [brand, setBrand] = React.useState({});
  const dispatch = useDispatch();
  const [flag,setFlag]=React.useState(false)
  const user = useSelector((state) => state.auth.user);
  const isAuth = useSelector((state) => state.auth.isAuth); //dont change this
  const [userAuth, setUserAuth] = useState(isAuth);
  
  const bag = user && user.bag;
  console.log("bag", bag);

  //const cart = user&&user.bag
  const name = user && user.f_name;


  const {category}= useParams()

 console.log("navbar",category);
  const handleChange = (e) => {
    setBrand(e.target.value);
  };

  const handleClick = () => {
    localStorage.setItem("searchKey",JSON.stringify( brand))
    dispatch(getSearchData(brand));
  };

  const showProfileBox=()=>{
    setFlag(true)
  }
  const hideProfileBox=()=>{
    setFlag(false)
  }
 
  useEffect(() => {
    const id = localStorage.getItem("userId");
    id && dispatch(getUserDetails(id));
  }, []);
  return (
    <div className={styles.navbar}>
        <div className={styles.container}>
          <Link to={"/"}><img src="/strawIcon.png" className={styles.navbrand} /></Link>
          <div className={styles.navform1}>
            <div>
              <input
                type="text"
                placeholder="SEARCH BRAND / PRODUCT"
                autocomplete="off"
                className={styles.inpsearch1}
                onChange={handleChange}
              />
              <Link to={"/search/product-search"} className={styles.searchbtn1}>
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
              {!isAuth ? (
                <li className={styles.loginlinks}>
                  <Link to={"/signin"} className={styles.accname} href="#">
                    <IconContext.Provider
                      value={{ color: "#B53788", size: "2.5em" }}
                    >
                      <FaUserCircle />
                    </IconContext.Provider>
                    <span className={styles.aaccname}>Sign in</span>
                  </Link>
                </li>
              ) : (
                <li className={styles.loginlinks} onMouseOver={showProfileBox} onMouseLeave={hideProfileBox} >
                  <Link className={styles.accname} >
                    <img
                      className={styles.logimg}
                      src={
                        "https://a.cdnsbn.com/images/common/Strawbaby_default.png"
                      }
                      alt="strawlog"
                    />
                    <span className={styles.aaccname}>{name}</span>
                  </Link>
                      {flag && <div className={styles.showProfileOn} onMouseLeave={hideProfileBox}  >
                   <Link> <div className={styles.showProfileOptions} ><PermIdentityOutlinedIcon style={{width:"15px", height:"15px",color: "#6b3a87"}}/> <span>Account</span></div></Link>
                   <Link> <div className={styles.showProfileOptions}><AcUnitIcon style={{width:"15px", height:"15px",color: "#6b3a87"}}/> <span>Wishlist</span></div> </Link>
                  <Link>  <div className={styles.showProfileOptionss}><ControlPointDuplicateIcon style={{width:"15px", height:"15px",color: "#6b3a87"}}/> <span>Point Rewards</span></div></Link>
                  <Link>  <div className={styles.showProfileOptionsor}><ListAltIcon style={{width:"15px", height:"15px",color: "#6b3a87"}}/> <span>Orders</span></div> </Link>
                   <Link> <div className={styles.showProfileOptions}><StarBorderIcon style={{width:"15px", height:"15px",color: "#6b3a87"}}/> <span>Reviews</span></div> </Link>
                   <Link> <div className={styles.showProfileOptions}><SettingsIcon style={{width:"15px", height:"15px",color: "#6b3a87"}}/> <span>Settings</span></div> </Link>
                   <Link> <div className={styles.showProfilePink}>Get 10% Off</div> </Link>
                  </div>}
                  

                  

                </li>
              )}

              <li className={styles.loginlinks}>
                <a className={styles.accname} href="#">
                  <IconContext.Provider
                    value={{ color: "#B53788", size: "2.5em" }}
                  >
                    <AiFillHeart />
                  </IconContext.Provider>
                  <span className={styles.aaccname}>Wishlist</span>
                </a>
              </li>
              <li className={styles.loginlinks}>
                <Link to={"/user/bag"} className={styles.accname}>
                  <IconContext.Provider
                    value={{ color: "#B53788", size: "2.3em" }}
                  >
                    <Badge
                      badgeContent={bag && bag.length}
                      color="secondary"
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      <GiShoppingBag />
                    </Badge>
                  </IconContext.Provider>
                  <span className={styles.aaccname}>Bag</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      
      <div className={styles.navbarmenu1}>
        <ul className={styles.menucont}>
          <Link className={styles.foc}  to={"/brands"}>
            {" "}
            <li className={styles.li1}>
              <span>
                <MenuIcon
                  style={{ width: "30px", height: "15px", color: "white" }}
                />
              </span>
              <span className={styles.clrspns}>SHOP BY BRAND</span>
            </li>
          </Link>
          <Link className={styles.foc} to={"/skincare"}>
            {" "}
            <li >
              <span  className={styles.clrspn} >SKINCARE</span>
            </li>
          </Link>
          <Link className={styles.foc}>
            <li to={"/makeup"}>
              <span className={styles.clrspn}>MAKEUP</span>
            </li>
          </Link>
          <Link className={styles.foc}  to={"/haircare"}>
            {" "}
            <li>
              <span className={styles.clrspn}>HAIRCARE</span>
            </li>
          </Link>
          <Link className={styles.foc} to={"/perfumes"}>
            {" "}
            <li>
              <span className={styles.clrspn}>PERFUME</span>
            </li>
          </Link>
          <Link className={styles.foc} to={"/men-skincare"}>
            {" "}
            <li>
              <span className={styles.clrspn}>MEN'S SKINCARE</span>
            </li>
          </Link>
          <Link className={styles.foc} to={"/men-cologne"}>
            {" "}
            <li>
              <span className={styles.clrspn}>MEN'S COLOGNE</span>
            </li>
          </Link>
          <Link className={styles.foc} to={"/home-scents"}>
            {" "}
            <li>
              <span className={styles.clrspn}>HOME SCENTS</span>
            </li>
          </Link>
          <Link className={styles.foc} to={"/natural-beauty"}>
            {" "}
            <li>
              <span className={styles.clrspn}>NATURAL BEAUTY</span>
            </li>
          </Link>
          <Link className={styles.foc} to={"/specials"}>
            {" "}
            <li className={styles.li1}>
              <span>
                <CardGiftcardIcon
                  style={{ width: "30px", height: "15px", color: "white" }}
                />
              </span>
              <span className={styles.clrspn}>SPECIALS</span>
            </li>
          </Link>
          <Link className={styles.foc} to={"/new-products"}>
            {" "}
            <li className={styles.li1}>
              <span>
                <StarIcon
                  style={{ width: "30px", height: "15px", color: "white" }}
                />
              </span>
              <span className={styles.clrspns}>NEW</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className={styles.navbarmenu2}>
        <MenuIcon
          style={{
            width: "50px",
            height: "50px",
            color: "white",
            cursor: "pointer",
          }}
        />
        <div className={styles.navform2}>
          <div>
            <input
              type="text"
              placeholder="SEARCH BRAND / PRODUCT"
              autocomplete="off"
              className={styles.inpsearch2}
              onChange={handleChange}
            />
           <Link to={"/search/product-search"} className={styles.searchbtn2}>
                <BsSearch onClick={handleClick} />
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};