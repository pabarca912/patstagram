import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMj3ALJBUCTjELqh-5Ose6ShTiy-bse1E",
  authDomain: "patstagram-361ca.firebaseapp.com",
  projectId: "patstagram-361ca",
  storageBucket: "patstagram-361ca.appspot.com",
  messagingSenderId: "879851330618",
  appId: "1:879851330618:web:78233d43ced68a193f6903",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
