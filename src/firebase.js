// Import modul-modul yang diperlukan dari Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: "AIzaSyC67bn6f71jMQ5rb1f7hbW96ibvW6D67_w",
  authDomain: "netflix-clone-1489d.firebaseapp.com",
  projectId: "netflix-clone-1489d",
  storageBucket: "netflix-clone-1489d.appspot.com",
  messagingSenderId: "1028452173877",
  appId: "1:1028452173877:web:d1a2c61e106d402601097c",
};

// Inisialisasi Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Inisialisasi layanan yang ingin Anda gunakan
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// Ekspor layanan yang akan digunakan di aplikasi Anda
export { auth };
export default db;
