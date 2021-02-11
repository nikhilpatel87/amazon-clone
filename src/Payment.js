import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div className='payment'>
			<div className='payment__container'>
				{/* Delivery Address */}
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Delivery Address</h3>
					</div>
					<div className='payment__address'>
						<p>{!user ? 'Guest' : user.email}</p>
						<p>123 Fake Lane</p>
						<p>New York, NY 54321</p>
					</div>
				</div>

				{/* Review Basket Items */}
				<div className='payment__section'></div>

				{/* Payment Method */}
				<div className='payment__section'></div>
			</div>
		</div>
	);
}

export default Payment;
