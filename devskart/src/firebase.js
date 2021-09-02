import firebase from "firebase";
  const firebaseConfig = {
    apiKey: "AIzaSyBwIbZfEWjP7Ow30_u3yS0sAKfNeDNdYUg",
    authDomain: "devskart.firebaseapp.com",
    projectId: "devskart",
    storageBucket: "devskart.appspot.com",
    messagingSenderId: "541861516243",
    appId: "1:541861516243:web:35df462c946da002679526",
    measurementId: "G-275MS9TC2S"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth, provider};
