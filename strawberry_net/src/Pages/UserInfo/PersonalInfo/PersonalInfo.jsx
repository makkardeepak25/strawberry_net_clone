import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import styles from './PersonalInfo.module.css';
import styled from 'styled-components';
import { useDispatch,useSelector } from 'react-redux';


import {  userUpdate } from '../../../Redux/Auth/authAction';
import {countries} from '../countries';


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
      
    var days = new Array(31)
    days= days.fill(0,0,31)

export const PersonalInfo = ({onChange}) => { 
    const classes = useStyles();
    const [formData,setFormData] =React.useState()
    const [showButton,setShowButton] =React.useState(false)
    const [newPassword,setnewPassword] = React.useState(false)  
    const [imageurl, setImageURL] = React.useState(null);
   
    const imageRef = React.useRef();

    const dispatch = useDispatch()

    const initUser = useSelector((state)=>state.auth.user)
    const userId = useSelector((state)=>state.auth.userId)
    
    console.log(userId,"Inside Personal Info")
    console.log(initUser)
   
    
    

  
    React.useEffect(() =>{   
           setFormData(initUser)
    },[initUser])

    React.useEffect(()=>{
        setFormData({...formData,"avatar":imageurl})
        
    },[imageurl])
   
    
    console.log(formData)
    const {f_name,l_name,password,nickname,countryCode,phone,birth_date,birth_month,avatar,gender,location} =initUser
   

    const ShowUrlImage = () => {
       
        // imageRef.current.click()
        if (!imageRef.current.files[0]) {
        return;
        }
        const img = URL.createObjectURL(imageRef.current.files[0]);
        setImageURL(img);
       
    
        
      
    };
   
  
    
    

    const handleOnFocus=()=>{
        setShowButton(true)
   
    }

    const handleOnChange=(e)=>{
      
        setFormData({...formData,[e.target.name]:e.target.value})
      
  
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(userUpdate(userId,formData))
    }

    
  
    


   


  

    
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
                <div className={styles.inputCont}><UserInput placeholder="" name="nickname" defaultValue={nickname}  onFocus={handleOnFocus} onChange={handleOnChange}></UserInput></div>
                
            </div>
            <div className={styles.userCont}>
                <div className={styles.labelCont}>
                    <label htmlFor="">Mobile no.</label>
                </div>
                <div className={styles.inputCont} style={{display:'flex',alignItems:'center'}}>
                        <label htmlFor="" style={{width:'120px'}} >Country Code</label>
                        <select name="countryCode" defaultValue={countryCode} id="" style={{width:'30%'}} className={styles.selectBox} onFocus={handleOnFocus} onChange={handleOnChange}>
                
                        <option value={countryCode} selected>{location} {countryCode}</option>
                
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
                    <select defaultValue={gender} name="gender" id="" style={{width:'100%'}} className={styles.selectBox} onFocus={handleOnFocus} onChange={handleOnChange}>
                    <option value="Please Select">Please Select</option>
                        <option value={gender} selected>{gender}</option>
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
                        <select name="birth_date" defaultValue={birth_date}  id="" style={{width:'20%'}} className={styles.selectBox} onFocus={handleOnFocus} onChange={handleOnChange}>
                            
                        <option value={birth_date} selected>{birth_date}</option>
                            {
                                 days.map((item,i)=><option value={i+1}>{i+1}</option>)
                            }
                        </select>
                        <div style={{width:'25%'}} ></div>
                        <label htmlFor="" style={{width:'60px'}} >Month</label>
                        <select name="birth_month" defaultValue={birth_month}  id="" style={{width:'35%'}} className={styles.selectBox} onFocus={handleOnFocus} onChange={handleOnChange}>
                        <option value={birth_month} selected>{birth_month}</option>
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
                <select name="location" defaultvalue={location}  id="" style={{width:'100%'}} className={styles.selectBox} onFocus={handleOnFocus} onChange={handleOnChange}>
                <option value={location} selected>{location}</option>
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
                    <button onClick={handleSubmit}>Save</button>
                </div>
            </div>}
        </div>
    )
}
