import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBpyAJL-YQsdyzmh_TKXFqOqqNxVI2di9c",
  authDomain: "backendecommerceob.firebaseapp.com",
  projectId: "backendecommerceob",
  storageBucket: "backendecommerceob.appspot.com",
  messagingSenderId: "798739841915",
  appId: "1:798739841915:web:48df98e4426f36912f33de"
};

const app = initializeApp(firebaseConfig);

export const db =getFirestore(app)