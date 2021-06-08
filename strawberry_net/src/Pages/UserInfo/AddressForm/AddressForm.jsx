import React from 'react';
import styles from './AddressForm.module.css'

export const AddressForm = () => {
    return (
        <div className={styles.addressForm}>
          <div><input type="text"  placeholder="Address Nickname: (e.g. Home, Office)"/></div>
          <div><input type="text" placeholder="First Name *" /></div>
          <div><input type="text" placeholder="Last Name *" /></div>
          <div><input type="text"  placeholder="Company"/></div>
          <div><input type="text" /></div>
          
         <div> <select name="" id=""></select></div>
          

         


          <div>
              <div><input type="text" placeholder="Address *"/></div>
              <div><input type="text" style={{borderTop:'none'}} /></div>
              <div><input type="text" style={{borderTop:'none'}} /></div>
          </div>
          <div><input type="text" placeholder="City/town *"/></div>
         <div> <select name="" id=""></select></div>

          <div className={styles.lastone}>
              <div><input type="text" value={"+1"} /></div>
              <div></div>
              
              <div><input type="text"  placeholder="Mobile *"/></div>
          </div>
        </div>
    )
}
