import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
	return (
		<div className='login'>
			<Link to='/'>
				<img
					className='login__logo'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
					alt='Amazon Clone'
				/>
			</Link>
			<div className='login__container'>
				<h1>Sign-In</h1>
				<form>
					<h5>Email</h5>
					<input type='text' />
					<h5>Password</h5>
					<input type='password' />
				</form>

				<p>
					By singing-in, you agree to the AMAZON CLONE conditions of Use & Sale.
					Please see our Privacy Notice, our Cookies Notice and our
					Interest-Based Ads Notice. This is not just a cloned site of Amazon.
				</p>
			</div>
		</div>
	);
}

export default Login;
