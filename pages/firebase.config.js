import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAh937wIBYnB_1-hY1JQeZ0fbIiQW_tXXs",
  authDomain: "pokesaledev.firebaseapp.com",
  projectId: "pokesaledev",
  storageBucket: "pokesaledev.appspot.com",
  messagingSenderId: "1040792252994",
  appId: "1:1040792252994:web:2e14a87e121c32004f73db"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const gprovider = new GoogleAuthProvider();
//const fprovider = new FacebookAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export const signInWithGoogle = () => {
  signInWithPopup(auth, gprovider)
  .then((result) => {
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;

    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("profilePic", profilePic)
  })
  .catch((error) => {
    console.log("fejl google login")
  }
  );
};

//export const signInWithFacebook = () => {
//  signInWithPopup(auth, fprovider)
//  .then((result) => {
//    console.log("hello world2");
//  })
//  .catch((error) => {
//    console.log("fejl Facebook login");
//  }
//  );
//}

export {app, db, storage};

//const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)