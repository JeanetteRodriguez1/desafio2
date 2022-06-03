// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXDJomI43p5Qpoibje0iUEVJOStXQVx68",
  authDomain: "rodriguez-react.firebaseapp.com",
  projectId: "rodriguez-react",
  storageBucket: "rodriguez-react.appspot.com",
  messagingSenderId: "101399166376",
  appId: "1:101399166376:web:83801a3eb9dc72f3bd319d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp (){
    return app
}
