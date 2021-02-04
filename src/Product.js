import React from 'react';
import './Product.css';

function Product() {
	return (
		<div className='product'>
			<div className='product__info'>
				<p>The Power of Habit: Why We Do What We Do in Life and Business</p>
				<p className='product__price'>
					<small>$</small>
					<strong>18.29</strong>
				</p>
				<div className='product__rating'>
					<p>⭐</p>
				</div>
			</div>
			<img
				src='https://m.media-amazon.com/images/I/51Q4AwpPDkL.jpg'
				alt='The Power of Habit'
			/>
			<button>Add to Basket</button>
		</div>
	);
}

export default Product;
