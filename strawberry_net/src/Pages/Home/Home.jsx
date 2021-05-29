import React from "react"
import axios from "axios";
import { Banner } from "../../Components/HomeComponents/Banner"
import { Footer } from "../../Components/HomeComponents/Footer"
import { NavBar } from "../../Components/HomeComponents/NavBar"
import styles from "./Home.module.css"
import { Card } from "../../Components/Product_card/Card";
export const Home = () => {
    const [data, setData] = React.useState([]);
    const getData = () => {
      axios.get("https://6wwnt.sse.codesandbox.io/products").then(res => {
        console.log(res.data);
        setData(res.data);
      });
    };
    React.useEffect(() => {
      getData();
    }, []);
    return (
        <div>
            <NavBar />
            <br></br><br></br>
            <Banner/>
            <div className={styles.dailyspecial} >
                <div className={styles.promopadding}>
                    <div className={styles.promotitleline}></div>
                    <div className={styles.promotitle}>
                        <div className={styles.promotitlediv}>
                            <h3>Daily Specials</h3>
                            <div className={styles.dailymessage}>
                                <span className={styles.dailypromocounter}>Ends in</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.textright}><span className={styles.maxitem}>Max. 3 per order</span></div>
                </div>
                <div className={styles.productgridlist}>
                {data.slice(0,8).map(el => {
                    return <Card {...el} key={el.id}/>
                })}
            </div>
            </div>
            <div className={styles.containerfluid}>
                <div className={styles.promoblockpicks}>
                    <div className={styles.container}>
                        <div className={styles.promblock}>
                            <div className={styles.promotitlepad}>
                                <div className={styles.promotitleline}></div>
                                <div className={styles.promotitle}>
                                    <div className={styles.promotitledeals}>
                                        <h3>Best Deals</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
         
           
           
            <Footer/>
        </div>
    )
}