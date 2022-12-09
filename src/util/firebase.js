import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA6odg4_Rj7FVywfjitkzEvOYaJqDhKdnk",
  authDomain: "crud-4be2f.firebaseapp.com",
  projectId: "crud-4be2f",
  storageBucket: "crud-4be2f.appspot.com",
  messagingSenderId: "279092472897",
  appId: "1:279092472897:web:54713ac1b1a01053796ac0",
  measurementId: "G-MVRN7WSRTV"
};

firebase.initializeApp(firebaseConfig);

export default firebase;