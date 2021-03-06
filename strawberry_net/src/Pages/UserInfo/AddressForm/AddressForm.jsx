import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './AddressForm.module.css'

import { states } from './states';
import { countries } from '../countries';
import {v4 as uuid} from 'uuid'
import { userUpdate } from '../../../Redux/Auth/authAction';
import { useHistory } from 'react-router-dom';


const initAddress ={
    addressId:uuid(),
    address_tittle:"",
    f_name:"",
    l_name:"",
     company:"",
     country:"India",
     locality:"",
    city:"",
    state:"",
    pincode:"",
    countryCode:"",
    phone:"",
 
    defaultAdd:false,

}

export const AddressForm = ({handleClose}) => {

    const [addressForm,setAddressForm] = React.useState(initAddress)
    const { address_tittle,f_name,l_name, company, country, locality,city,state,pincode,countryCode,phone,defaultAdd} =addressForm
   
    const user = useSelector(state => state.auth.user)
 
    React.useEffect(()=>{
   
    console.log(user,"From AddressForm")
    
   },[])

    const handleOnChange=(e)=>{
        setAddressForm({...addressForm,["f_name"]:user.f_name,["l_name"]:user.l_name,["phone"]:user.phone,[e.target.name]:e.target.value})
        
        
    }

    const phonecode =React.useRef()
    React.useEffect(()=>{
        setAddressForm({...addressForm,["countryCode"]:phonecode.current.value})
    },[country])


    const dispatch = useDispatch()
    const history = useHistory()
    const  handleSubmit = (e)=>{
        e.preventDefault()        
        dispatch(userUpdate(user.id,{addresses:[...user.addresses,addressForm]}))

        handleClose()
   
    }
    return (
        <div className={styles.addressformCont}>
            <div className={styles.addressForm}>
          <div><input type="text"  placeholder="Address Nickname: (e.g. Home, Office)" name="address_tittle" value={address_tittle} onChange={handleOnChange}/></div>
          <div><input type="text" placeholder="First Name *"  defaultValue={user.f_name} name="f_name" onChange={handleOnChange}/></div>
          <div><input type="text" placeholder="Last Name *"  defaultValue={user.l_name} name="l_name" onChange={handleOnChange}/></div>
          <div><input type="text"  placeholder="Company" name="company" value={company} onChange={handleOnChange}/></div>
       
          
         <div> <select name="country" id="" value={country} onChange={handleOnChange}>
             default:
                <option  Value={user.location}>{user.location}</option>
                {
                    countries.map((item,i)=><option key={i} Value={item.label}>{item.label}</option>)
                }

             </select></div>
          
                
         


          <div>
              <div><input type="text" placeholder="Address *" defaultValue={locality}  name="locality" onChange={handleOnChange}/></div>
              {/* <div><input type="text" style={{borderTop:'none'}} defaultValue={locality}  name="locality" onChange={handleOnChange}/></div>
              <div><input type="text" style={{borderTop:'none'}}   defaultValue={locality}  name="locality" onChange={handleOnChange}/></div> */}
          </div>
          <div><input type="text" placeholder="City/town *" value={city}  name="city" onChange={handleOnChange}/></div>
         <div> 
             {user.location==="India"?<select id="" value={state}  name="state" onChange={handleOnChange}>
             
             {states.map((item,i)=><option key={i} value={item}>{item}</option>)}
            
            </select>:<input type="text" placeholder="State/Province *" value={state}  name="state" onChange={handleOnChange}/>}
             
             </div>
             <div><input type="text" placeholder="Zip/Postcode *" value={pincode}  name="pincode" onChange={handleOnChange}/></div>

          <div className={styles.lastone}>
              <div>
                  <input type="text" name="countryCode" value={
                  "+"+countries.find(item=>item.label==country).phone
                 

              } onChange={handleOnChange} ref={phonecode} /></div>
              <div></div>
              
              <div><input type="text"  placeholder="Mobile *" value={phone}  name="phone" onChange={handleOnChange}/></div>
          </div>


       
        </div>
        <div className={styles.saveButton}>
                <div>
                    <button onClick={()=>alert("Not Save")}>Cancel</button>
                    <button onClick={handleSubmit}>Save</button>
                </div>
            </div>
        </div>
    )
}
