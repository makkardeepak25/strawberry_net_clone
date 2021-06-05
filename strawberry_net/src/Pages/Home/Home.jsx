import React, { useEffect } from "react";
import axios from "axios";
import { Banner } from "../../Components/HomeComponents/Banner";
import { Footer } from "../../Components/HomeComponents/Footer";
import { NavBar } from "../../Components/HomeComponents/NavBar";
import styles from "./Home.module.css";
import { DailySpecial } from "../../Components/HomeComponents/DailySpecial";
import { BestDeals } from "../../Components/HomeComponents/BestDeals";
import { Top40 } from "../../Components/HomeComponents/Top40";
import { BestSellers } from "../../Components/HomeComponents/BestSellers";
import { NewArrivals } from "../../Components/HomeComponents/NewArrivals";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
export const Home = () => {

useEffect(()=>{
document.title= "Strawberrynet.com"
window.scrollTo(0,0);
},[])

  return (
    <div>
      {/* <NavBar /> */}
    
      <Banner />
      <div className={styles.dailyspecial}>
        <div className={styles.promopadding}>
          <div className={styles.promotitleline} />
          <div className={styles.promotitle}>
            <div className={styles.promotitlediv}>
              <h3>Daily Specials</h3>
              <div className={styles.dailymessage}>
                <span className={styles.dailypromocounter}>Ends in</span>
              </div>
            </div>
          </div>
          <div className={styles.textright}>
            <span className={styles.maxitem}>Max. 3 per order</span>
          </div>
        </div>
        <div className={styles.productgridlist}>
          <DailySpecial />
        </div>
      </div>
      <div className={styles.containerfluid}>
        <div className={styles.promoblockpicks}>
          <div className={styles.container}>
            <div className={styles.promblock}>
              <div className={styles.promotitlepad}>
                <div className={styles.promotitleline} />
                <div className={styles.promotitle}>
                  <div className={styles.promotitledeals}>
                    <h3>Best Deals</h3>
                  </div>
                </div>
              </div>
              <div className={styles.productgridlist}>
                <BestDeals />
              </div>
              <div className={styles.textright}>
                <button className={styles.bestbtn}>
                  View All <span className={styles.arrclr}>< ArrowForwardIosIcon/></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.promblock}>
          <div className={styles.promotitlepad}>
            <div className={styles.promotitleline} />
            <div className={styles.promotitle}>
              <div className={styles.promotitledeal}>
                <h3>TOP 40 SPECIALS</h3>
              </div>
            </div>
          </div>
          <div className={styles.productgridlist}>
            <Top40 />
          </div>
          <div className={styles.textright}>
            <button className={styles.bestbtn}>
              View All <span className={styles.arrclr}>< ArrowForwardIosIcon/></span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.promblock}>
          <div className={styles.promotitlepad}>
            <div className={styles.promotitleline} />
            <div className={styles.promotitle}>
              <div className={styles.promotitledeal}>
                <h3>Best Sellers</h3>
              </div>
            </div>
          </div>
          <div className={styles.productgridlist}>
            <BestSellers />
          </div>
          <div className={styles.textright}>
            <button className={styles.bestbtn}>
              View All <span className={styles.arrclr}>< ArrowForwardIosIcon/></span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.promblock}>
          <div className={styles.promotitlepad}>
            <div className={styles.promotitleline} />
            <div className={styles.promotitle}>
              <div className={styles.promotitledeal}>
                <h3>New Arrivals</h3>
              </div>
            </div>
          </div>
          <div className={styles.productgridlist}>
            <NewArrivals />
          </div>
          <div className={styles.textright}>
            <button className={styles.bestbtn}>
              View All <span className={styles.arrclr}>< ArrowForwardIosIcon/></span>
            </button>
          </div>
        </div>
          </div>
          <div className={styles.container}>
        <div className={styles.promblock}>
          <div className={styles.promotitlepad}>
            <div className={styles.promotitleline} />
            <div className={styles.promotitle}>
              <div className={styles.promotitledeal}>
                <h3>You may like these</h3>
              </div>
            </div>
          </div>
         
        </div>
      </div>

    </div>
  );
};
