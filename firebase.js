// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5rzvnJE0UfBtCJuVWOsfPYslCLg7kVSY",
    authDomain: "cuestionariosofka.firebaseapp.com",
    projectId: "cuestionariosofka",
    storageBucket: "cuestionariosofka.appspot.com",
    messagingSenderId: "874387918455",
    appId: "1:874387918455:web:fffdbae7a4244c0748c072"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const saveUser = (nombre) => {
    addDoc(collection(db, 'Puntajes'), { nombre })
}