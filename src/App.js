import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

function App() {
	return (
		//BEM
		<div className='app'>
			<Router>
				<Switch>
					<Route path='/checkout'>
						<Header />
						<Checkout />
					</Route>

					{/* keep default Route at the bottom!!!! */}
					<Route path='/'>
						<Header />
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
