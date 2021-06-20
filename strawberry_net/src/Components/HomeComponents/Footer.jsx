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
                  <li>
                    Shipping&tax&emsp;<span>|</span>&ensp;
                  </li>
                </Link>
                <Link>
                  <li>
                    Returns Policy&emsp;<span>|</span>&ensp;
                  </li>
                </Link>
                <Link>
                  {" "}
                  <li>
                    FAQ&emsp;<span>|</span>&ensp;
                  </li>
                </Link>
                <Link>
                  {" "}
                  <li>
                    Contact us&emsp;<span>|</span>&ensp;
                  </li>
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
                    Change Country/currency
                  </span>
                </>
              </Link>
            </div>
          </div>
          <div className={styles.hr1}></div>
          <div className={styles.gridmainbox}>
            <div className={styles.gridmainbox1}>
              <h3>PAY WITH:</h3>
              <div className={styles.gridmainbox1grid}>
                <img
                  src="https://a.cdnsbn.com/images/common/Visa_16.png"
                  alt="img"
                />
                <img
                  src="https://a.cdnsbn.com/images/common/Master_16.png"
                  alt=""
                />
                <img
                  src="https://a.cdnsbn.com/images/common/Paypal_16.png"
                  alt=""
                />
                <img
                  src="https://a.cdnsbn.com/images/common/JCB_16.png"
                  alt=""
                />
                <img
                  src="https://a.cdnsbn.com/images/common/AmericanExpress_16.png"
                  alt=""
                />
                <img
                  src="https://a.cdnsbn.com/images/common/Discover_16.png"
                  alt=""
                />
                <img
                  src="https://a.cdnsbn.com/images/common/DiscoverMore.png"
                  alt=""
                />
              </div>
            </div>

            <div className={styles.gridmainbox2}>
              <h6>MY ACCOUNT</h6>
              <div className={styles.gridmainbox2margin}>Track Order</div>
              <div className={styles.gridmainbox2margin}>Order History</div>
              <div className={styles.gridmainbox2margin}>My Reviews</div>
              <div className={styles.gridmainbox2margin}>
                Birthday Treat Program
              </div>
            </div>

            <div className={styles.gridmainbox2}>
              <h6>Our Company</h6>
              <div className={styles.gridmainbox2margin}>About Us</div>
              <div className={styles.gridmainbox2margin}>
                Point Rewards Program
              </div>
              <div className={styles.gridmainbox2margin}>Contact Us</div>
              <div className={styles.gridmainbox2margin}>Affiliates</div>

              <div className={styles.gridmainbox2margin}>Partners</div>
              <div className={styles.gridmainbox2margin}>Student Discount</div>
            </div>

            <div className={styles.gridmainbox4}>
              <h6>Download</h6>
              <div className={styles.gridmainbox4grid}>
                <img
                  src="https://blitzkidsradio.com/wp-content/uploads/2021/02/APPLE-APP-1.png"
                  alt=""
                />
                <img
                  src="https://www.maketecheasier.com/assets/uploads/2015/03/playstoreerrors-featured.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className={styles.gridmainbox1}>
              <h3>RATED EXCELLENT</h3>
              <div className={styles.gridmainbox5grid}>
                <img
                  src="https://medals.bizrate.com/medals/dynamic/27609_medal.gif"
                  alt="img"
                />
                <img
                  src="https://a.cdnsbn.com/images/common/HK-Trust-Mark_resize.png"
                  alt=""
                />
              </div>
              <h3>9.0 out of 10!</h3>
              <div className={styles.gridmainbox5grid}>
                <img
                  src="https://a.cdnsbn.com/images/common/2021Premiumeshop.png"
                  alt="img"
                />
                <img
                  src="https://a.cdnsbn.com/images/common/2021TRUSTeshop.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={styles.hr2}></div>
          <div className={styles.bottomline}>
            <p>
              Privacy & Security | Terms & Conditions | Point Rewards Program
              Terms & Conditions{" "}
            </p>
            <p>1998 - 2021 © StrawberryNET.com All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
