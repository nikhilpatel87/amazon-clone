import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './axios';

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();
	const history = useHistory();

	const stripe = useStripe();
	const elements = useElements();

	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState('');
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(null);
	const [clientSecret, setClientSecret] = useState(true);

	useEffect(() => {
		//generate a new secret client whenever basket items change
		const getClientSecret = async () => {
			const response = await axios({
				method: 'post',
				//Stripe exports the total in currenices subunits
				url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
			});
			setClientSecret(response.data.clientSecret);
		};
		getClientSecret();
	}, [basket]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setProcessing(true);

		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				//paymentIntent = payment confirmation
				setSucceeded(true);
				setError(null);
				setProcessing(false);

				history.replace('/orders');
			});
	};

	const handleChange = (e) => {
		//Listen for changes in CardElement and display errors as the customer inputs details
		setDisabled(e.empty);
		setError(e.error ? e.error.message : '');
	};

	return (
		<div className='payment'>
			<div className='payment__container'>
				<h1>
					Checkout (<Link to='/checkout'>{basket?.length} Items</Link>)
				</h1>

				{/* Delivery Address */}
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Delivery Address</h3>
					</div>
					<div className='payment__address'>
						<p>{user?.email}</p>
						<p>123 Fake Lane</p>
						<p>New York, NY 54321</p>
					</div>
				</div>

				{/* Review Basket Items */}
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Review Items and Delivery</h3>
					</div>

					<div className='payment__items'>
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>

				{/* Payment Method */}
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Payment Method</h3>
					</div>
					<div className='payment__details'>
						{/* Stripe Payment */}

						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />

							<div className='payment__priceContainer'>
								<CurrencyFormat
									renderText={(value) => (
										<>
											<h3>Order Total: {value}</h3>
										</>
									)}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={'text'}
									thousandSeparator={true}
									prefix={'$'}
								/>

								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
								</button>
							</div>

							{/* Errors */}
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
