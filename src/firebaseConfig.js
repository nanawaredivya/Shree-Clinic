// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//     apiKey: "AIzaSyBhlmK8_2RC_O1Z2D8Aachrv4kRe_H6RHQ",
//     authDomain: "portfolio-contact-from.firebaseapp.com",
//     projectId: "portfolio-contact-from",
//     storageBucket: "portfolio-contact-from.appspot.com",
//     messagingSenderId: "819359560589",
//     appId: "1:819359560589:web:12be579237c6d4831943c4",
//     measurementId: "G-BRMVMBW1VX"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
// export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5sPCK_S3dtP8_AMX083Vt6cv5fFS4YrU",
  authDomain: "shree-clinic-61a21.firebaseapp.com",
  projectId: "shree-clinic-61a21",
  storageBucket: "shree-clinic-61a21.appspot.com",
  messagingSenderId: "433189446845",
  appId: "1:433189446845:web:5ae40259baafdae00f43d4",
  measurementId: "G-VHKZ3RZVYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);