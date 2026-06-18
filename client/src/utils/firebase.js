
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "iqinterview-43be8.firebaseapp.com",
  projectId: "iqinterview-43be8",
  storageBucket: "iqinterview-43be8.firebasestorage.app",
  messagingSenderId: "199057417186",
  appId: "1:199057417186:web:9ebb518370f31e03ec8fbb"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
