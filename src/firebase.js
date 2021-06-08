import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDv6qZZsd0jTmN0_-iftjMF0AMYCL71pyk",
    authDomain: "slack2-abd9a.firebaseapp.com",
    projectId: "slack2-abd9a",
    storageBucket: "slack2-abd9a.appspot.com",
    messagingSenderId: "194697374466",
    appId: "1:194697374466:web:6f78a4ce27e6658058301b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};