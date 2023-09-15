import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';

var config = {
  apiKey: "AIzaSyAhFiLFSBHJXJ2uIJHOveUAoIVEUD_uSGg",
  authDomain: "chapter9-4eb39.firebaseapp.com",
  projectId: "chapter9-4eb39",
  storageBucket: "chapter9-4eb39.appspot.com",
  messagingSenderId: "801768744792",
  appId: "1:801768744792:web:adf11da5842d1388bde72d",
  measurementId: "G-2H74EWHR71"
}

firebase.initializeApp(config);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
