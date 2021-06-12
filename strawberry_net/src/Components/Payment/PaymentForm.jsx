import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react';
import { Spinner } from "../Spinner";
import PaymentFailure from "./PaymentFailure";
import styles from './PaymentForm.module.css'
import PaymentSucces from "./PaymentSucces";
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#623381",
			color: "#623381",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#grey" }
		},
		invalid: {
			iconColor: "grey",
			color: "#623381"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const [isLoading,setisLoading]=React.useState(false)
    const [isError,setisError]=React.useState(false)
    const [closeSuccess,setcloseSuccess]=React.useState(false)
    const [closeFailure,setcloseFailure]=React.useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


        

    if(!error) {
        try {
            const {id} = paymentMethod
            setisLoading(true)
            const response = await axios.post("http://localhost:4000/payment", {
                amount: 1000,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
                setisLoading(false)
            }

        } catch (error) {
            console.log("Error", error)
            setisError(true)
            setisLoading(false)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        {!success ? 
        <div>
            { 
                isLoading ?(<Spinner/>): isError? <div>
                
                { !closeFailure &&
                     <div>
                          <PaymentFailure />
                         <CancelOutlinedIcon className={styles.closemodal} onClick={()=>setcloseFailure(!closeFailure)}/>
                     </div>
                
                }
             </div>:<form onSubmit={handleSubmit}>
                <fieldset className={styles.FormGroup}>
                    <div className={styles.FormRow}>
                        <CardElement options={CARD_OPTIONS}/>
                    </div>
                </fieldset>
                <button>Pay</button>
                </form>
            }
        </div>
        :
            <div>
                
               { !closeSuccess &&
                    <div>
                         <PaymentSucces />
                        <CancelOutlinedIcon className={styles.closemodal} onClick={()=>setcloseSuccess(!closeSuccess)}/>
                    </div>
               
               }
            </div>
        }
            
        </>
    )
}