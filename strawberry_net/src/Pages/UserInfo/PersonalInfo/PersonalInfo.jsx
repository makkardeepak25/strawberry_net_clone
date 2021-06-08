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

    const initUser = useSelector((state)=>state.auth.user)
    console.log(initUser)
   

    const [formData,setFormData] =React.useState()
    React.useEffect(() =>{
        
           setFormData(initUser)
            
    
        
    },[initUser])
   
    
     console.log(formData)
    const {f_name,l_name,email,password,countryCode,phone,birth_date,birth_month,avatar,gender,points,location,addresses,wishlisht,bag,orders,saved_cards } =initUser
   

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

    const imageRef = React.useRef();
    const [imageurl, setImageURL] = React.useState(null);
    const ShowUrlImage = () => {
       
        // imageRef.current.click()
        if (!imageRef.current.files[0]) {
        return;
        }
        const img = URL.createObjectURL(imageRef.current.files[0]);
        setImageURL(img);
       
    
        
      
    };


    React.useEffect(()=>{
        setFormData({...formData,"avatar":imageurl})
        
    },[imageurl])

    return (
        <div className={styles.fullmainCont}>

        
        <div className={classes.root,styles.mainCont}>
          <Avatar className={classes.large}  alt="" src={imageurl}/>
       
            <div className={styles.UploadButton}>
            <input type="file" style={{display:'none'}} className={styles.customeFileInput} onChange={ShowUrlImage}  ref={imageRef} />
            <button onClick={()=>{imageRef.current.click()}}>Upload profile photo</button>
           
           
            </div>
            
            
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">First name</label>
                </div>
                <div className={styles.inputCont} ><UserInput defaultValue={f_name} name="f_name" onFocus={handleOnFocus} onChange={handleOnChange}></UserInput></div>
                
            </div>
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">Surname</label>
                </div>
                <div className={styles.inputCont}><UserInput onFocus={handleOnFocus} defaultValue={l_name} name="l_name" onChange={handleOnChange} ></UserInput></div>
                
            </div>
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">NickName</label>
                    <div>(Optional)</div>
                </div>
                <div className={styles.inputCont}><UserInput placeholder="" name="nickname" onFocus={handleOnFocus} onChange={handleOnChange}></UserInput></div>
                
            </div>
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">Mobile no.</label>
                </div>
                <div className={styles.inputCont} style={{display:'flex',alignItems:'center'}}>
                        <label htmlFor="" style={{width:'120px'}} >Country Code</label>
                        <select name="countryCode" value={countryCode} id="" style={{width:'30%'}} className={styles.selectBox} onFocus={handleOnFocus} onChange={handleOnChange}>
                {
                    countries.map(item=>
                        <option value={`+${item.phone}`}>{item.label} +{item.phone}</option>
                        )
                }
                    </select>
                    <div style={{width:'10%'}} ></div>
                        <label htmlFor="" style={{width:'70px'}} >Number</label>
                        <UserInput style={{width:'35%'}} onFocus={handleOnFocus} name="phone" defaultValue={phone} onChange={handleOnChange} ></UserInput>

                </div>
                
            </div>
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">Gender</label>
                    <div>(Optional)</div>
                </div>
                <div className={styles.inputCont}>
                    <select defaultValue={gender} name="" id="" style={{width:'100%'}} className={styles.selectBox} onFocus={handleOnFocus} onChange={handleOnChange}>
                    <option value="Please Select">Please Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        
                    </select>
                </div>
                
            </div>
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">Date of birth</label>
                 
                </div>
                <div className={styles.inputCont} style={{display:'flex',alignContent:'space-between',alignItems:'center',}}>
                <label htmlFor="" style={{width:'70px'}}>Day</label>
                        <select name="birth_date" value={birth_date}  id="" style={{width:'20%'}} className={styles.selectBox} onFocus={handleOnFocus} onChange={handleOnChange}>
                            {
                                 days.map((item,i)=><option value={i+1}>{i+1}</option>)
                            }
                        </select>
                        <div style={{width:'25%'}} ></div>
                        <label htmlFor="" style={{width:'60px'}} >Month</label>
                        <select name="birth_month" value={birth_month}  defaultValue={birth_date} id="" style={{width:'35%'}} className={styles.selectBox} onFocus={handleOnFocus} onChange={handleOnChange}>
                            
                            {
                                months.map((item)=><option value={item}>{item}</option>)
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
                    <button className={styles.passwordBtn}  onClick={()=>setnewPassword(true)} >Change</button>
                    </div>):(
                     
                           <div className={styles.inputCont}>
                                <input className={styles.inputpassword} placeholder="Enter your password" type="password" name="password" defaultValue={password} onChange={handleOnChange} onFocus={handleOnFocus}  id="" />
                                <input className={styles.inputpassword} placeholder="Re-Enter your password"  type="password" name="password" defaultValue={password} onChange={handleOnChange} onFocus={handleOnFocus}  id="" />
                           </div>
                          
                    )}
                
            </div>
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">Location</label>
                </div>
                <div className={styles.inputCont} > 
                <select name="location" value={location}  id="" style={{width:'100%'}} className={styles.selectBox} onFocus={handleOnFocus} onChange={handleOnChange}>
                {
                    countries.map(item=>
                        <option value={item.label}>{item.label}</option>
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
