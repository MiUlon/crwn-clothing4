import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCXRoZAnWCYvKaqSlGCmP3QOFS8QEK1V54",
    authDomain: "crwn-clothing4-db.firebaseapp.com",
    projectId: "crwn-clothing4-db",
    storageBucket: "crwn-clothing4-db.appspot.com",
    messagingSenderId: "871924300196",
    appId: "1:871924300196:web:6d0d9dadf5667fe5dba931"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);