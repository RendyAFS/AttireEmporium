// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmsSlDTLyavisHsS4t4SI4pBaVoamUAyc",
  authDomain: "aeproject-f53ba.firebaseapp.com",
  projectId: "aeproject-f53ba",
  storageBucket: "aeproject-f53ba.appspot.com",
  messagingSenderId: "71262398168",
  appId: "1:71262398168:web:f26b963f72f55eb3bd99ad",
  measurementId: "G-LJ9ZDCSY1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;