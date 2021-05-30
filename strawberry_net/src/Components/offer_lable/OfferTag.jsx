import React from 'react';
import styles from "./OfferTag.module.css"
const OfferTag = ({lable}) => {
    return (
        <>
       { lable&& <div className={styles.tag}>
            <p>save</p>
            <h5>{lable}%</h5>
        </div>
}
        </>
    );
};

export default OfferTag;