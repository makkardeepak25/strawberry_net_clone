import React, { useEffect } from "react";
import axios from "axios";
import { Banner } from "../../Components/HomeComponents/Banner";
import styles from "./Home.module.css";
import { DailySpecial } from "../../Components/HomeComponents/DailySpecial";
import { BestDeals } from "../../Components/HomeComponents/BestDeals";
import { Top40 } from "../../Components/HomeComponents/Top40";
import { BestSellers } from "../../Components/HomeComponents/BestSellers";
import { NewArrivals } from "../../Components/HomeComponents/NewArrivals";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Timer } from "../../Components/HomeComponents/Timer";
import { MayLike } from "../../Components/HomeComponents/mayLike";
export const Home = () => {
  useEffect(() => {
    document.title = "Strawberrynet.com";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.home}>
      <Banner />
      <div className={styles.offerdaily}>
        <div className={styles.extraline}>
          <div className={styles.line} />
          <div className={styles.dailyspec}>
            <h3>Daily Specials</h3>
            <div className={styles.endsin}>
              <span className={styles.dailypromocounter}>
                Ends in{" "}
                <strong style={{ color: "hotpink" }}>
                  <Timer />
                </strong>
              </span>
            </div>
          </div>
          <div className={styles.line} />
        </div>
        <div className={styles.textright}>
          <span className={styles.maxitem}>Max. 3 per order</span>
        </div>
        <div className={styles.productgridlist}>
          <DailySpecial />
        </div>
      </div>
      <div className={styles.dealsdaily}>
        <div className={styles.extraline}>
          <div className={styles.lines} />
          <div className={styles.dailyspec}>
            <h3>Best deals</h3>
          </div>
          <div className={styles.lines} />
        </div>
        <div className={styles.productgridlist}>
          <BestDeals />
        </div>
        <div className={styles.textright}>
          <button className={styles.bestbtn}>
            View All{" "}
            <span className={styles.arrclr}>
              <ArrowForwardIosIcon
                style={{ width: "13px", height: "13px", marginTop: "5px" }}
              />
            </span>
          </button>
        </div>
      </div>
      <div className={styles.offerdaily}>
        <div className={styles.extraline}>
          <div className={styles.line} />
          <div className={styles.dailyspec}>
            <h3>TOP 40 SPECIALS</h3>
          </div>
          <div className={styles.line} />
        </div>
        <div className={styles.productgridlist}>
          <Top40 />
        </div>
        <div className={styles.textright}>
          <button className={styles.bestbtn}>
            View All{" "}
            <span className={styles.arrclr}>
              <ArrowForwardIosIcon
                style={{ width: "13px", height: "13px", marginTop: "5px" }}
              />
            </span>
          </button>
        </div>
      </div>
      <div className={styles.offerdaily}>
        <div className={styles.extraline}>
          <div className={styles.line} />
          <div className={styles.dailyspec}>
            <h3>Best Sellers</h3>
          </div>
          <div className={styles.line} />
        </div>
        <div className={styles.textright}>
          <span className={styles.maxitem}>Max. 3 per order</span>
        </div>
        <div className={styles.productgridlist}>
          <BestSellers />
        </div>
        <div className={styles.textright}>
          <button className={styles.bestbtn}>
            View All{" "}
            <span className={styles.arrclr}>
              <ArrowForwardIosIcon
                style={{ width: "13px", height: "13px", marginTop: "5px" }}
              />
            </span>
          </button>
        </div>
      </div>

      <div className={styles.offerdaily}>
        <div className={styles.extraline}>
          <div className={styles.line} />
          <div className={styles.dailyspec}>
            <h3>New Arrivals</h3>
          </div>
          <div className={styles.line} />
        </div>
        <div className={styles.textright}>
          <span className={styles.maxitem}>Max. 3 per order</span>
        </div>
        <div className={styles.productgridlist}>
          <NewArrivals />
        </div>
        <div className={styles.textright}>
          <button className={styles.bestbtn}>
            View All{" "}
            <span className={styles.arrclr}>
              <ArrowForwardIosIcon
                style={{ width: "13px", height: "13px", marginTop: "5px" }}
              />
            </span>
          </button>
        </div>
      </div>

      <div className={styles.offerdaily}>
        <div className={styles.extraline}>
          <div className={styles.line} />
          <div className={styles.dailyspec}>
            <h3>You may like these</h3>
          </div>
          <div className={styles.line} />
        </div>
        <div className={styles.maylike}>
          <MayLike />
        </div>
      </div>
    </div>
  );
};
