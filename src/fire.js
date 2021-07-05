import firebase from "firebase";
import "firebase/firestore";
import store from './store'

var config = {
  apiKey: "AIzaSyCrbfVUzpEuGYmeRZwXIqykLfn4wW8pXbM",
  authDomain: "alib-c54fb.firebaseapp.com",
  databaseURL: "https://alib-c54fb-default-rtdb.firebaseio.com",
  projectId: "alib-c54fb",
  storageBucket: "alib-c54fb.appspot.com",
  messagingSenderId: "82948275570",
  appId: "1:82948275570:web:83556e7fc58189527531eb",
  measurementId: "G-NKJD4XQJ3L"
};

var fire = firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
  });
export const db = firebase.firestore()
export const todosCollection = db.collection('message');
export const queryMessage= db.collection('message')
export default fire;
