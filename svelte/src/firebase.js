import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";
    let firebaseConfig = {
    apiKey: "AIzaSyCiTgwY4X28iN8AeygO7E_0ZVXifEyx93w",
    authDomain: "gigaservices-20c0b.firebaseapp.com",
    databaseURL: "https://gigaservices-20c0b.firebaseio.com",
    projectId: "gigaservices-20c0b",
    storageBucket: "gigaservices-20c0b.appspot.com",
    messagingSenderId: "448734134799",
    appId: "1:448734134799:web:75a080d011d0c3ea9dd97a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   
    
    export var Fdb = firebase.firestore();
    export const Fstorage = firebase.storage();
    export let fbx = firebase;
    export const  auth = firebase.auth();