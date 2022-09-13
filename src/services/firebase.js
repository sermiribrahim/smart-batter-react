import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYvtA8r34ZmBs5PbgiG5ufX6FUwdFu2qY",
  authDomain: "smart-batter.firebaseapp.com",
  projectId: "smart-batter",
  storageBucket: "smart-batter.appspot.com",
  messagingSenderId: "364145360816",
  appId: "1:364145360816:web:d7778f4a7b61289d50e075",
  measurementId: "G-SHFBD80EQN"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export default firebaseApp;
export { auth, db, analytics, storage };
