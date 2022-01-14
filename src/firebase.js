// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyRwUh2U_qtKpceApcI0IrhB-WXK9ttaE",
    authDomain: "whatsapp-mern-6afe7.firebaseapp.com",
    projectId: "whatsapp-mern-6afe7",
    storageBucket: "whatsapp-mern-6afe7.appspot.com",
    messagingSenderId: "204560714076",
    appId: "1:204560714076:web:858853111e75051a4f9999",
    measurementId: "G-E4NN4J12KZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }