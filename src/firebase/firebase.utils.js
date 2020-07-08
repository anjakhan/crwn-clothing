import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAh_00iPCknn4BynbJ_PibTdJgOExkEep8",
    authDomain: "crwn-db-e888c.firebaseapp.com",
    databaseURL: "https://crwn-db-e888c.firebaseio.com",
    projectId: "crwn-db-e888c",
    storageBucket: "crwn-db-e888c.appspot.com",
    messagingSenderId: "291004305755",
    appId: "1:291004305755:web:b17c455979ec4b94094a7e"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;