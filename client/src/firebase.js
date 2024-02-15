// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBXJHPtWCtE8RbPKOyAXp9KgAGAbMeBs60",

  authDomain: "budget-bite-b62b7.firebaseapp.com",

  projectId: "budget-bite-b62b7",

  storageBucket: "budget-bite-b62b7.appspot.com",

  messagingSenderId: "927549080419",

  appId: "1:927549080419:web:9176290b6591c787fa8956",

  measurementId: "G-1VESD9XVNB",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
