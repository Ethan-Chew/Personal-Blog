import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC2Wc0NxNkVWX-5uAadIDrHZTF8d8Av43I",
    authDomain: "ethanchewblog.firebaseapp.com",
    projectId: "ethanchewblog",
    storageBucket: "ethanchewblog.appspot.com",
    messagingSenderId: "198313002287",
    appId: "1:198313002287:web:75e9294012b0f92dd04dda",
    measurementId: "G-8T5R24YHHD"
}

const app = initializeApp(firebaseConfig)

export default getFirestore()