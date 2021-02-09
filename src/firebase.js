import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBKQcBcRw5mOTScH6y94IgkQxCJij7hQIM',
	authDomain: 'amzn-clone-np.firebaseapp.com',
	projectId: 'amzn-clone-np',
	storageBucket: 'amzn-clone-np.appspot.com',
	messagingSenderId: '871755045091',
	appId: '1:871755045091:web:98b74434d54827053ecdd6',
	measurementId: 'G-2Q8WDR20PZ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
