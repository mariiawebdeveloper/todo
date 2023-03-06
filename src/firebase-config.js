import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpAbrdUXuTGu2F9zZXOjpJCiij4LcKthk",
    authDomain: "todolist-269fc.firebaseapp.com",
    projectId: "todolist-269fc",
    storageBucket: "todolist-269fc.appspot.com",
    messagingSenderId: "803604823531",
    appId: "1:803604823531:web:ff7532660c3b1f3d64edae",
    measurementId: "G-4CG1QVBYZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)