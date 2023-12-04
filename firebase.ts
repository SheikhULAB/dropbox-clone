// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAz-LZeJtjc4IMmQIEhowUqmlSn03VxhQ",
  authDomain: "dropbox-clone-c5887.firebaseapp.com",
  projectId: "dropbox-clone-c5887",
  storageBucket: "dropbox-clone-c5887.appspot.com",
  messagingSenderId: "327990922935",
  appId: "1:327990922935:web:a7729896914382fc610732"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };