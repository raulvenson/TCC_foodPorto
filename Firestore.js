import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyASD8iaxtiAPSSKV9xQ5vktAUC8npR54tQ",
    authDomain: "foodportotcc.firebaseapp.com",
    databaseURL: "https://foodportotcc.firebaseio.com",
    projectId: "foodportotcc",
    storageBucket: "foodportotcc.appspot.com",
    messagingSenderId: "518604574406",
    appId: "1:518604574406:web:ce292dbedfac5eed"
  };
firebase.initializeApp(config);
export default firebase;