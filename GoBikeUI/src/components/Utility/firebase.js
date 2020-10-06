import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDdirsI30qKUpmZHLXSPQdmjM5CcxqSQsI",
    authDomain: "gobike-2a19a.firebaseapp.com",
    databaseURL: "https://gobike-2a19a.firebaseio.com",
    projectId: "gobike-2a19a",
    storageBucket: "gobike-2a19a.appspot.com",
    messagingSenderId: "854188013823",
    appId: "1:854188013823:web:28990563eb47bdc6ef34ca"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;