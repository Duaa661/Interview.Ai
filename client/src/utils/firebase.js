import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-website-builder-5bce0.firebaseapp.com",
  projectId: "ai-website-builder-5bce0",
  storageBucket: "ai-website-builder-5bce0.appspot.com",
  messagingSenderId: "382935150780",
  appId: "1:382935150780:web:6ebf77bd6b1a3a1c42a0b9",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export { auth, provider };
