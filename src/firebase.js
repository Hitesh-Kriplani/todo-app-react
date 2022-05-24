// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC5w6v75z7NVLF5Fxp9aytidPKKVNqg-ug',
  authDomain: 'todo-app-react-firebase-b57c3.firebaseapp.com',
  projectId: 'todo-app-react-firebase-b57c3',
  storageBucket: 'todo-app-react-firebase-b57c3.appspot.com',
  messagingSenderId: '33960739380',
  appId: '1:33960739380:web:954d7f10e04f8f79e4c061',
  measurementId: 'G-75BGGWY1E3',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const analytics = getAnalytics(firebaseApp);

export { db };
