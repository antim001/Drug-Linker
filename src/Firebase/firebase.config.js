
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB6LpB_UnDiqwObkh5Ykw7x2X90aB_2YJI",
  authDomain: "drug-linker.firebaseapp.com",
  projectId: "drug-linker",
  storageBucket: "drug-linker.appspot.com",
  messagingSenderId: "937016860972",
  appId: "1:937016860972:web:a193fd02fe72b06c220c89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


 export const auth = getAuth();