import React from 'react';
import styles from "./Profiles.module.css"
import SideBar from '../SideBar/SideBar';
const Profiles = () => {
    return (
        <div className={styles.container}>
            <SideBar prop="profiles"/>

            <div className={styles.profiles}>
            <h1>Profiles</h1>
            </div>
        </div>
    );
};

export default Profiles;