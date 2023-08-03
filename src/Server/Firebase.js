// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAqH07MaTUCoAar8yU0hPInMXxYLLZc_FI',
	authDomain: 'simplelogin-todo.firebaseapp.com',
	projectId: 'simplelogin-todo',
	storageBucket: 'simplelogin-todo.appspot.com',
	messagingSenderId: '339083829992',
	appId: '1:339083829992:web:57ce2a0780a934d901df5d',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
