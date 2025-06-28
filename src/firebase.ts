import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
    apiKey: "AIzaSyBvaSrWmCE_wBG6S_keAzIjc14hxALz15U",
    authDomain: "eatly-dashboard.firebaseapp.com",
    projectId: "eatly-dashboard",
    storageBucket: "eatly-dashboard.firebasestorage.app",
    messagingSenderId: "773952722123",
    appId: "1:773952722123:web:04ecdf4431988a6dafb74e",
    measurementId: "G-Q8ZNHBECL5"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const functions = getFunctions(app); // Export the Functions instance
export default app;