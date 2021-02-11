import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Payment';

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		//will only run once when the app component loads
		auth.onAuthStateChanged((authUser) => {
			console.log('The User is => ', authUser);

			if (authUser) {
				//user just logged in
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				//the user is logged out
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
	}, []);
	return (
		//BEM

		<Router>
			<div className='app'>
				<Switch>
					<Route path='/login'>
						<Login />
					</Route>

					<Route path='/checkout'>
						<Header />
						<Checkout />
					</Route>

					<Route path='/payment'>
						<Header />
						<Payment />
					</Route>

					{/* keep default Route at the bottom!!!! */}
					<Route path='/'>
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
