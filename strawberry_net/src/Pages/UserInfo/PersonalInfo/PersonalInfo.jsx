import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import styles from './PersonalInfo.module.css';
import styled from 'styled-components';



const UserInput = styled.input`
    background: none;
    width: 100%;
    height: 34px;
    border: 1px solid #623381;
`


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      margin: "auto"
    
    },
  }));
  
export const PersonalInfo = () => {
    const classes = useStyles();
    return (
        <div className={classes.root,styles.mainCont}>
            <Avatar className={classes.large}  alt="" src={"https://s.cdnsbn.com/images/profile/10364147.jpg?t=1622449131812"} />
            <div className={styles.UploadButton}>
            <input type="file" className={styles.customeFileInput} />
           
           
            </div>
            
            
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">First name</label>
                </div>
                <div className={styles.inputCont} ><UserInput value={"Kamal"}></UserInput></div>
                
            </div>
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">Surname</label>
                </div>
                <div className={styles.inputCont}><UserInput value={"Gupta"}></UserInput></div>
                
            </div>
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">NickName</label>
                    <div>(Optional)</div>
                </div>
                <div className={styles.inputCont}><UserInput></UserInput></div>
                
            </div>
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">Mobile no.</label>
                </div>
                <div className={styles.inputCont}>
                        <label htmlFor="">Country Code</label>
                        <input type="text" />
                        <label htmlFor="">Number</label>
                        <input type="text" />

                </div>
                
            </div>
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">Gender</label>
                    <div>(Optional)</div>
                </div>
                <div className={styles.inputCont}><UserInput></UserInput></div>
                
            </div>
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">Date of birth</label>
                 
                </div>
                <div className={styles.inputCont}>
                <label htmlFor="">Day</label>
                        <input type="text" />
                        <label htmlFor="">Month</label>
                        <input type="text" />
                </div>
                
            </div>
            
         (Fill in your Birthday for an exclusive yearly Birthday Treat.)
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">Password</label>
                </div>
                <div className={styles.inputCont}><button>Change</button></div>
                
            </div>
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">Location</label>
                </div>
                <div className={styles.inputCont}><UserInput></UserInput></div>
                
            </div>
        </div>
    )
}
