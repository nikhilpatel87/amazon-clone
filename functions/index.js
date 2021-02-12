/* eslint-disable quotes */
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
// eslint-disable-next-line max-len
const stripe = require('stripe')(
	'sk_test_51IJo34ITIm8MM1SVQyQQ9HIMb9PNVF9kWaW41jCeCiIwDqBZSXPIJZldihJJTivm8OFBWUD1ncr2JFrfynNUsPpt00VYwreC7p'
);

// API

// App config
const app = express();

// middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
	const total = request.query.total;
	console.log('Payment Request Recieved!!', total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, //subunits of the currency
		currency: 'usd',
	});

	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// Listen Command
exports.api = functions.https.onRequest(app);
