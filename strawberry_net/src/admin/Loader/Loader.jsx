import React from 'react';
import { Spinner } from '../../Components/Spinner';
import styles from "./Loader.module.css"
const Loader = () => {
    return (
        <div className={styles.container}>
           <div>
           <Spinner/>
           </div>
        </div>
    );
};

export default Loader;