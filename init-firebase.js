// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyASD8iaxtiAPSSKV9xQ5vktAUC8npR54tQ",
    authDomain: "foodportotcc.firebaseapp.com",
    databaseURL: "https://foodportotcc.firebaseio.com",
    projectId: "foodportotcc",
    storageBucket: "foodportotcc.appspot.com",
    messagingSenderId: "518604574406",
    appId: "1:518604574406:web:ce292dbedfac5eed"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

