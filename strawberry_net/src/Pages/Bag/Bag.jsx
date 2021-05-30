import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { CenterFocusWeakTwoTone } from '@material-ui/icons';
import styles from './Bag.module.css';
import IconButton from '@material-ui/core/IconButton';




import {
  IconFlagIN,
  IconFlagDE,
  IconFlagUS
} from 'material-ui-flags';
import CountrySelect from './CountrySearch';

const AuthButton = styled.button`
    width: 100%;
    background-color: #623381;
    border: none;
    color: white;
    height: 42px;
    margin: auto;
    font-size: 20px;
    font-weight: 500;
    
`

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#f5f5f5'
    
  },
  paper: {
    padding: theme.spacing(1),
    
   
    
  },
}));

export const Bag=()=>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} >

        <Grid item xs={12} sm={12} md={1} lg={1} xl={1}></Grid>
        
        
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
         
          <h1 className={styles.headingBag}>SHOPPING BAG</h1>
        </Grid>
          

        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}  >
          
          
        </Grid>

        <Grid item xs={12} sm={12} md={1} lg={1} xl={1}>
        
        </Grid>
        </Grid> 


        


        <Grid container spacing={1} item xs={12} sm={12} md={12} lg={12} xl={12}>

        <Grid item xs={12} sm={12} md={1} lg={1} xl={1}></Grid>
        
        
        <Grid container xs={12} sm={12} md={12} lg={7} xl={7}  className={styles.leftBag}>
          <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}  className={styles.deliveredHeading} >    DELIVERED:
          <IconButton><IconFlagIN/></IconButton>
          {/* <CountrySelect/>   */}
         
          </Grid>
          
        </Grid>
      

        <Grid item xs={12} sm={12} md={12} lg={3} xl={3} className={styles.RightBag}>
          <div>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} > 
              <p>Checkout as {"Kamal"}?</p>
              <AuthButton >CHECKOUT</AuthButton>
            </Grid>
            <div style={{borderBottom:'1px solid #f5f5f5',margin:"0"}}></div>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} > 
              <p>Not {"Kamal"}?</p>
              <AuthButton>SIGN OUT</AuthButton>
              </Grid>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={1} lg={1} xl={1}></Grid>
        </Grid> 
        
       
      </Grid>
    </div>
  );
}
