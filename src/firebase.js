import firebase from 'firebase' 


const firebaseConfig = {
    apiKey: "AIzaSyDZRVwSCFSwmyS06p9bV2kpiTXAuA6hKH8",
    authDomain: "instagram-clone-26ff0.firebaseapp.com",
    projectId: "instagram-clone-26ff0",
    storageBucket: "instagram-clone-26ff0.appspot.com",
    messagingSenderId: "631101432281",
    appId: "1:631101432281:web:9de390fbf8d76d2245f9c8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage}