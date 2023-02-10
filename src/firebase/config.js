import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyBM9zBH90pSoxomGSwIaRb3xenMqwgHpMk',
  authDomain: 'journal-app-71023.firebaseapp.com',
  projectId: 'journal-app-71023',
  storageBucket: 'journal-app-71023.appspot.com',
  messagingSenderId: '1007666147177',
  appId: '1:1007666147177:web:1fda26c64a54e38c88d7f8'
}

const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(firebaseApp)
export const firebaseDB = getFirestore(firebaseApp)
