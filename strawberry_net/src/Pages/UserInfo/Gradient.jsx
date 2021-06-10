
import React from 'react';

import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import { Setting } from './Settings/Setting';
import styles from './Gradient.module.css';


export const Gradient = () => {
    return (
        <div className={styles.mainCont}>      
            <div className={styles.gradeHeader}>
            <div className={styles.iconList}>
                
               
             
              
               
          
            <div className={styles.menuIcons}><PermIdentityIcon  style={{fontSize:'30px'}}/>
              ACCOUNT
            </div>
            <div className={styles.menuIcons}><FavoriteBorderIcon style={{fontSize:'30px'}}/>
                WISHLIST
            </div>
            <div className={styles.menuIcons}><LoyaltyOutlinedIcon  style={{fontSize:'30px'}}/>
                POINTS
            </div>

            <div className={styles.menuIcons}><ShoppingCartOutlinedIcon style={{fontSize:'30px'}} />
                ORDERS
            </div>
            <div className={styles.menuIcons}><GradeOutlinedIcon style={{fontSize:'30px'}} />
                REVIEWS
            </div>
            <div className={styles.menuIcons}><SettingsOutlinedIcon style={{fontSize:'30px'}}/>
                SETTINGS
            </div>
            </div>
            
            
        </div>
            <Setting/>

        </div>  )
}
