import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./Banner.module.css";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <Carousel
        showArrows={false}
        interval={5000}
        infiniteLoop={true}
        transitionTime={10}
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img className={styles.imght} src="https://a.cdnsbn.com/images/English/banner_ShopMore5off8offMay21_1170_1.jpg" alt="car" />
        </div>
        <div>
          <img className={styles.imght} src="https://a.cdnsbn.com/images/English/banner_BargainZoneMay21_1170_1.jpg" alt="car" />
        </div>
        <div>
          <img
            className={styles.imght}
            src="https://a.cdnsbn.com/images/English/banner_SkincareSerumMoistMay21_1170_1.jpg?v=3" alt="car"
          />
        </div>
        <div>
          <img
            className={styles.imght}
            src="https://a.cdnsbn.com/images/English/banner_HaircareVolumizingMay21_1170_1.jpg?v=3" alt="car"
          />
        </div>
        <div>
          <img className={styles.imght} src="https://a.cdnsbn.com/images/English/banner_May21SpecialPurchase_1170_1.jpg" alt="car" />
        </div>
        <div>
          <img className={styles.imght} src="https://a.cdnsbn.com/images/English/banner_May21top40_1170_1.jpg" alt="car"/>
        </div>
        <div>
          <img className={styles.imght} src="https://a.cdnsbn.com/images/English/banner_May21NewLines_1170_1.jpg" alt="car"/>
        </div>
        <div>
          <img className={styles.imght} src="https://a.cdnsbn.com/images/English/banner_VeganBeautyNov20_1170_1.jpg" alt="car"/>
        </div>
        <div>
          <img className={styles.imght} src="https://a.cdnsbn.com/images/English/banner_AshiyaMay21_1170_1.jpg" alt="car"/>
        </div>
        <div>
          <img className={styles.imght} src="https://a.cdnsbn.com/images/English/banner_MedicalMask28Sep20_1140_1.jpg" alt="car"/>
        </div>
        <div>
          <img className={styles.imght} src="https://a.cdnsbn.com/images/English/banner_BrandTacticalDemonFeb20_1140_1.jpg" alt="car"/>
        </div>
        <div>
          <img className={styles.imght} src="https://a.cdnsbn.com/images/English/banner_RewardProgramBP_1140_1.jpg" alt="car"/>
        </div>
      </Carousel>
    </div>
  );
};
