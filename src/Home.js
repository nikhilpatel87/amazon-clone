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
					<Product
						id='23556883'
						title='XTERRA Fitness TRX3500 Folding Treadmill'
						price={899.99}
						image={
							'https://images-na.ssl-images-amazon.com/images/I/71JP%2Bd3aFNL._AC_SY450_.jpg'
						}
						rating={4}
					/>
					<Product
						id='88358693'
						title='Keychron K2 Bluetooth Mechanical Keyboard'
						price={74.99}
						image={
							'https://images-na.ssl-images-amazon.com/images/I/61efvyxdAZL._AC_SY355_.jpg'
						}
						rating={5}
					/>
				</div>
				<div className='home__row'>
					<Product
						id='72057092'
						title='The Power of Habit: Why We Do What We Do in Life and Business Hardcover – Illustrated, February 28, 2012'
						price={18.29}
						image={'https://m.media-amazon.com/images/I/51Q4AwpPDkL.jpg'}
						rating={5}
					/>
					<Product
						id='13458324'
						title='All-new Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal'
						price={44.99}
						image={
							'https://images-na.ssl-images-amazon.com/images/I/714Rq4k05UL._AC_SY355_.jpg'
						}
						rating={4}
					/>
					<Product
						id='92757621'
						title='Assassin’s Creed Valhalla PlayStation 5 Standard Edition'
						price={39.99}
						image={
							'https://images-na.ssl-images-amazon.com/images/I/818BQbUANnL._SX342_.jpg'
						}
						rating={5}
					/>
				</div>
				<div className='home__row'>
					<Product
						id='90764924'
						title='New Apple iMac Pro (27-inch, 3.0GHz 10-core Intel Xeon W Processor, 32GB RAM, 1TB SSD Storage)'
						price={(4, 799.99)}
						image={
							'https://images-na.ssl-images-amazon.com/images/I/71PDNyTXIzL._AC_SX522_.jpg'
						}
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
