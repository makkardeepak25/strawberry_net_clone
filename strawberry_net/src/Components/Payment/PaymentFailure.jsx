import React from 'react'
import styles from './PaymentFailure.module.css'

export default function PaymentFailure() {
    return (
        <div  className={styles.failurewrapper}>
              <div className={styles.failure}>
                  <img src="https://kvnmail.com/in/wp-content/uploads/2017/08/round-error-icon-16.jpg" alt="" />
                <h1>Failure</h1>
            </div>

        </div>
      
    )
}
