import * as firebase from "firebase";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCtUjKJ72B_Z9kq3SBxLfGCh3VVVTktmvc",
  authDomain: "rn-formlist.firebaseapp.com",
  projectId: "rn-formlist",
  storageBucket: "rn-formlist.appspot.com",
  messagingSenderId: "1091708443897",
  appId: "1:1091708443897:web:f799ee5d79a2c9aee91628",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
