import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import styles from './PersonalInfo.module.css';
import styled from 'styled-components';
import {countries} from '../countries';
import { useDispatch,useSelector } from 'react-redux';
import { getUserDetails } from '../../../Redux/Auth/authAction';


const UserInput = styled.input`
    background: none;
    width: 100%;
    height: 34px;
    border: 1px solid #623381;
    color: #808080c3;
    ::placeholder{
        /* font-size:16px; */
    }

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




      
                
  


  
 export const PersonalInfo = ({onChange}) => {
    
    const dispatch =useDispatch()
   
    const userID = useSelector((state)=>state.auth.userId)
    // console.log(userID)

    React.useEffect(() => {
        dispatch(getUserDetails(userID))
    },[userID])
   
    const initUser = useSelector((state)=>state.auth.user)
    console.log(initUser)

    const [formData,setFormData] =React.useState({...initUser})
   
    const {f_name,l_name,email,password,phone,birth_date,avatar,gender,points,addresses,wishlisht,bag,orders,saved_cards } =initUser
    console.log(formData)
<<<<<<< HEAD

  


=======
>>>>>>> 3701c1af4274175a669627ab4de5804d11bf39aa
    const [showButton,setShowButton] =React.useState(false)
    const [newPassword,setnewPassword] = React.useState(false)

    let days = new Array(31)
    days= days.fill(0,0,31)
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
    
    const classes = useStyles();

    const handleOnFocus=()=>{
        setShowButton(true)
    }

    const handleOnChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    return (
        <div className={styles.fullmainCont}>

        
        <div className={classes.root,styles.mainCont}>
            <Avatar className={classes.large}  alt="" src={"https://s.cdnsbn.com/images/profile/10364147.jpg?t=1622449131812"} />
            <div className={styles.UploadButton}>
            <input type="file" className={styles.customeFileInput} onFocus={handleOnFocus} />
           
           
            </div>
            
            
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">First name</label>
                </div>
                <div className={styles.inputCont} ><UserInput value={f_name} name="f_name" onFocus={handleOnFocus} onChange={handleOnChange}></UserInput></div>
                
            </div>
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">Surname</label>
                </div>
                <div className={styles.inputCont}><UserInput onFocus={handleOnFocus} value={l_name}></UserInput></div>
                
            </div>
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">NickName</label>
                    <div>(Optional)</div>
                </div>
                <div className={styles.inputCont}><UserInput placeholder="" onFocus={handleOnFocus}></UserInput></div>
                
            </div>
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">Mobile no.</label>
                </div>
                <div className={styles.inputCont} style={{display:'flex',alignItems:'center'}}>
                        <label htmlFor="" style={{width:'120px'}} >Country Code</label>
                        <select name="" id="" style={{width:'30%'}} className={styles.selectBox} onFocus={handleOnFocus}>
                {
                    countries.map(item=>
                        <option value="">{item.label} +{item.phone}</option>
                        )
                }
                    </select>
                    <div style={{width:'10%'}} ></div>
                        <label htmlFor="" style={{width:'70px'}} >Number</label>
                        <UserInput style={{width:'35%'}} onFocus={handleOnFocus} ></UserInput>

                </div>
                
            </div>
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">Gender</label>
                    <div>(Optional)</div>
                </div>
                <div className={styles.inputCont}>
                    <select name="" id="" style={{width:'100%'}} className={styles.selectBox} onFocus={handleOnFocus}>
                    <option value="">Please Select</option>
                        <option value="">Male</option>
                        <option value="">Female</option>
                        
                    </select>
                </div>
                
            </div>
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">Date of birth</label>
                 
                </div>
                <div className={styles.inputCont} style={{display:'flex',alignContent:'space-between',alignItems:'center',}}>
                <label htmlFor="" style={{width:'70px'}}>Day</label>
                        <select name="" id="" style={{width:'20%'}} className={styles.selectBox} onFocus={handleOnFocus}>
                            {
                                 days.map((item,i)=><option value="">{i+1}</option>)
                            }
                        </select>
                        <div style={{width:'25%'}} ></div>
                        <label htmlFor="" style={{width:'60px'}} >Month</label>
                        <select name="" id="" style={{width:'35%'}} className={styles.selectBox} onFocus={handleOnFocus}>
                            
                            {
                                months.map((item)=><option value="">{item}</option>)
                            }
                        </select>
                </div>
                
            </div>
            
         (Fill in your Birthday for an exclusive yearly Birthday Treat.)
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">Password</label>
                </div>
                {!newPassword?(<div className={styles.inputCont} style={{display:'flex'}}>
                    <div className={styles.passwordSpan}>{"**********"}</div>
                    <button className={styles.passwordBtn}  onClick={()=>setnewPassword(true)}>Change</button>
                    </div>):(
                     
                           <div className={styles.inputCont}>
                                <input className={styles.inputpassword} placeholder="Enter your password" type="password" name="" id="" />
                                <input className={styles.inputpassword} placeholder="Re-Enter your password"  type="password" name="" id="" />
                           </div>
                          
                    )}
                
            </div>
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">Location</label>
                </div>
                <div className={styles.inputCont} > 
                <select name="" id="" style={{width:'100%'}} className={styles.selectBox} onFocus={handleOnFocus}>
                {
                    countries.map(item=>
                        <option value="">{item.label}</option>
                        )
                }
                    </select>
                </div>
                
            </div>

            
        </div>
            {showButton && <div className={styles.saveButton}>
                <div>
                    <button>Save</button>
                </div>
            </div>}
        </div>
    )
}
