// firebaseConfig.js

import { initializeApp } from "firebase/app";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCRJNCR_y56tCiX3Ra85Oev7je2agOxwvs",
  authDomain: "farmabeth365.firebaseapp.com",
  projectId: "farmabeth365",
  storageBucket: "farmabeth365.firebasestorage.app",
  messagingSenderId: "476131322922",
  appId: "1:476131322922:web:47b9026c3f762d90072753"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

export { app };
