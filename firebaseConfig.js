// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* Importando recursos da biblioteca de autenticação Firebase */
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUaJfb0yqEe4VexOUIXt3QGdleGIaw9Tg",
  authDomain: "app-autenticacao-ffa9c.firebaseapp.com",
  projectId: "app-autenticacao-ffa9c",
  storageBucket: "app-autenticacao-ffa9c.appspot.com",
  messagingSenderId: "762426082101",
  appId: "1:762426082101:web:c9088e43a69831b8b1827c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
/* Exportando os recursos de autenticação da biblioteca */
export const auth = getAuth(app);
