import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBHmTWXOTE7fP64YMKNg53FCB2ur3oI5xI",
  authDomain: "linkdenclone.firebaseapp.com",
  projectId: "linkdenclone",
  storageBucket: "linkdenclone.appspot.com",
  messagingSenderId: "908312411365",
  appId: "1:908312411365:web:eb9fd8cd1a40cd6e26e80c",
};

// eslint-disable-next-line no-unused-vars
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
