import React from 'react';
import styles from "./Panel.module.css"
import {Button} from "@material-ui/core"
import SideBar from '../SideBar/SideBar';
const Panel = () => {
    return (
        <div className={styles.admin_panel}>
            
            <SideBar prop="dashboard"/>

            <div className={styles.main_panel}>
<h1>DASHBOARD</h1>
            </div>
        </div>
    );
};

export default Panel;