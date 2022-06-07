// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASYoyW2l7l5W_V3C7wy2XOlYKQxSmSF2I",
  authDomain: "movie-app-cac61.firebaseapp.com",
  projectId: "movie-app-cac61",
  storageBucket: "movie-app-cac61.appspot.com",
  messagingSenderId: "252759024066",
  appId: "1:252759024066:web:5398dbda44ec57a3e5f65b"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };