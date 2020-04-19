import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyASD8iaxtiAPSSKV9xQ5vktAUC8npR54tQ",
    authDomain: "foodportotcc.firebaseapp.com",
    databaseURL: "https://foodportotcc.firebaseio.com",
    projectId: "foodportotcc",
    storageBucket: "foodportotcc.appspot.com",
    messagingSenderId: "518604574406",
    appId: "1:518604574406:web:ce292dbedfac5eed",
    measurementId: "G-4J2SDR4DKN"
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = app.analytics();

export { analytics, app };