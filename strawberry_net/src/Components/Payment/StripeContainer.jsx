import React from 'react';
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from './PaymentForm';


const PUBLIC_KEY = 'pk_test_51J13Q1SF70YdlggmqaMoucL1z6kzRr2bD1ZzUGpv7mzEyO05OJ5HnR45Lep7Xkg4k3OGgZvuHUCn8QnsvLZqjIlD00v9rwMLjn'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}