import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, browserLocalPersistence} from 'firebase/auth'; 


const firebaseConfig = {
  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID,
  // measurementId: process.env.FIREBASE_MEASUREMENT_ID

  apiKey: "AIzaSyCCMCBL0r3iu6BEJDWgOkq9geND4M6C-AE",
  authDomain: "gokiltech.firebaseapp.com",
  projectId: "gokiltech",
  storageBucket: "gokiltech.firebasestorage.app",
  messagingSenderId: "941836526215",
  appId: "1:941836526215:web:d67cee168e92f505e14e22",
  measurementId: "G-76XRB2WLT8"
}


// Cek apakah app sudah diinisialisasi, jika belum maka inisialisasi
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const auth = initializeAuth(app, {
  persistence: browserLocalPersistence
});

const db = getFirestore(app);

console.log('Firebase app initialized', app.name);

export { auth, app, db };
