import React from 'react';
import styles from './PaymentMethods.module.css'
import Radio from '@material-ui/core/Radio';
import StripeContainer from './StripeContainer';

export const PaymentMethods = () => {
    const [selectedValue, setSelectedValue] = React.useState('');
    

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
    return (
        <div className={styles.paymentmethods}>
    <div className={styles.payOptions}><Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        color="default"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
        />
        <img src="https://s.cdnsbn.com/images/common/Visa.png" alt="" />
        <label htmlFor="">Visa - credit or debit card</label>
    </div>
    {
        selectedValue === 'a' && <StripeContainer/>
    }

    <div className={styles.payOptions}><Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        color="default"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
       />
       <img src="https://s.cdnsbn.com/images/common/Master.png" alt="" />
       <label htmlFor="">MasterCard - credit or debit card</label>
    </div>
    {
        selectedValue === 'b' && <StripeContainer/>
    }

    <div className={styles.payOptions}><Radio
        checked={selectedValue === 'c'}
        onChange={handleChange}
        value="c"
        color="default"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'C' }}
       />
        <img src="https://s.cdnsbn.com/images/common/Paypal.png" alt="" />
        <label htmlFor="">PayPal</label>
    </div>
    {
        selectedValue === 'c' && <StripeContainer/>
    }

    <div className={styles.payOptions}><Radio
        checked={selectedValue === 'd'}
        onChange={handleChange}
        value="d"
        color="default"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'D' }}
      />
     <img src="https://s.cdnsbn.com/images/common/AmericanExpress.png" alt="" />
     <label htmlFor="">American Express</label>
    </div>
    {
        selectedValue === 'd' && <StripeContainer/>
    }
    <div className={styles.payOptions}><Radio
        checked={selectedValue === 'e'}
        onChange={handleChange}
        value="e"
        color="default"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'E' }}
      />
      <img src="https://s.cdnsbn.com/images/common/DinersClub.png" alt="" />
      <label htmlFor=""> Diners</label>
    </div>
    {
        selectedValue === 'e' && <StripeContainer/>
    }
    <div className={styles.payOptions}><Radio
        checked={selectedValue === 'f'}
        onChange={handleChange}
        value="f"
        color="default"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'F' }}
      />
      <img src="https://s.cdnsbn.com/images/common/Discover.png" alt="" />
      <label htmlFor="">Discover</label>
    </div>
    {
        selectedValue === 'f' && <StripeContainer/>
    }
    <div className={styles.payOptions}><Radio
        checked={selectedValue === 'g'}
        onChange={handleChange}
        value="g"
        color="default"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'G' }}
      />
      <img src="https://s.cdnsbn.com/images/common/JCB.png" alt="" />
      <label htmlFor="">JCB</label>
    </div>
    {
        selectedValue === 'g' && <StripeContainer/>
    }
    <div className={styles.payOptions}><Radio
        checked={selectedValue === 'h'}
        onChange={handleChange}
        value="h"
        color="default"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'H' }}
      />
      <img src="https://s.cdnsbn.com/images/common/union_pay.png" alt="" />
      <label htmlFor="">CHINA UNION PAY</label>
    </div>
    {
        selectedValue === 'h' && <StripeContainer/>
    }

    {
      selectedValue === '' &&     <button className={styles.center}>Pay Now</button>
    }
        </div>
    )
}
