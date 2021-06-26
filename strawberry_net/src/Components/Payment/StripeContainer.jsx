import React from 'react';
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from './PaymentForm';


const PUBLIC_KEY = 'pk_test_51J6eTuSFQU4XiTIauUBWHL739iztFEUCKoJz2C82F3MeSgknoeWx6FF6kjlp57PT0LMF8HCk6hbBoMdjITJ1iB2y00ry9DU9MK'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}