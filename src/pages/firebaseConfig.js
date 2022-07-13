
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig={
    apiKey: "AIzaSyADsQDNoCZyeHxpTDGHBc7CfACXXkdX8_A",
    authDomain: "furniture-app-c7797.firebaseapp.com",
    projectId: "furniture-app-c7797",
    storageBucket: "furniture-app-c7797.appspot.com",
    messagingSenderId: "555951801946",
    appId: "1:555951801946:web:07749311b342f5a23c7a63"
}

const app=initializeApp(firebaseConfig);
export const db= getFirestore(app);
export const auth =getAuth(app)
export default app;