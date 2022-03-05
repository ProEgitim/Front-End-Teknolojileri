import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJk8724zpkpptAJUYeqKvWrNdEBPgBPgg",
  authDomain: "linkedin-clone-743fe.firebaseapp.com",
  projectId: "linkedin-clone-743fe",
  storageBucket: "linkedin-clone-743fe.appspot.com",
  messagingSenderId: "291350014750",
  appId: "1:291350014750:web:b548bffa25b8b684c7370f",
  measurementId: "G-5SCMSV9T9B"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
 
  export {auth, provider, storage};
  export default db;