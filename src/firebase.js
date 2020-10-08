import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBnotXHUmF5CopYj_SuXXdWeH74kaHJ7XM",
    authDomain: "social-media-app-no1.firebaseapp.com",
    databaseURL: "https://social-media-app-no1.firebaseio.com",
    projectId: "social-media-app-no1",
    storageBucket: "social-media-app-no1.appspot.com",
    messagingSenderId: "329343451872",
    appId: "1:329343451872:web:a2165e805b6392698c8685",
    measurementId: "G-B2SZTK35Q3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;