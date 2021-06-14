
import React from 'react';

import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';


import styles from './Gradient.module.css';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(
    { 
      root: {
          
          fontSize:'35px',
         
          
          
        }
    }
)

export const Gradient = () => {
    const classes = useStyles();
 


    return (
        <div className={styles.mainCont}>      
            <div className={styles.gradeHeader}>
            <div className={styles.iconList}>
                
               
             
              
               
          
            <Link  className={styles.menuIcons}><PermIdentityIcon className={classes.root}  />
              ACCOUNT
            </Link>
            <Link className={styles.menuIcons}><FavoriteBorderIcon className={classes.root}/>
                WISHLIST
            </Link>
            <Link className={styles.menuIcons}><LoyaltyOutlinedIcon  className={classes.root}/>
                POINTS
            </Link>

            <Link to={'/user/orders'} className={styles.menuIcons}><ShoppingCartOutlinedIcon className={classes.root} />
                ORDERS
            </Link>
            <Link className={styles.menuIcons}><GradeOutlinedIcon className={classes.root} />
                REVIEWS
            </Link>
            <Link to={'/user/setting'}   className={styles.menuIcons}><SettingsOutlinedIcon className={classes.root}/>
                SETTINGS
            </Link>
            </div>
            
            
        </div>
         

        </div>  )
}
