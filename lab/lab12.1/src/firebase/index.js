// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD_kgK48tTJRxIy71aB__B64FAFqPwwuxk',
  authDomain: 'movies-db-dbaef.firebaseapp.com',
  projectId: 'movies-db-dbaef',
  storageBucket: 'movies-db-dbaef.appspot.com',
  messagingSenderId: '722722424325',
  appId: '1:722722424325:web:19fad779d027990d6c3e6c'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
