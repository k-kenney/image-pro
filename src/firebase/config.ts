// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD-dLA5Nde2AOfvOObAzV_lYFSQFzGXiE",
  authDomain: "image-gallery-decc0.firebaseapp.com",
  projectId: "image-gallery-decc0",
  storageBucket: "image-gallery-decc0.appspot.com",
  messagingSenderId: "932055102018",
  appId: "1:932055102018:web:276ef6df56f6db4199b3db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const storage = getStorage(app)
export { auth, storage }
