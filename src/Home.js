import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className='home'>
			<div className='home__container'>
				<img
					className='home__image'
					src='https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/Other/AWRD_21_02498_GWBleedingHero_1500x600_Final_en-US_PVD6553_Generic._CB661165540_.jpg'
					alt='Banner'
				/>

				<div className='home__row'>
					<Product />
					{/* Product */}
				</div>
				<div className='home__row'>
					{/* Product */}
					{/* Product */}
					{/* Product */}
				</div>
				<div className='home__row'>{/* Product */}</div>
			</div>
		</div>
	);
}

export default Home;
