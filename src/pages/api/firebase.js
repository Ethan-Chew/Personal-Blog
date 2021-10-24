import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId: process.env.FIREBASE_PROJID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MEASUREMENTID
}

if (firebaseConfig.apiKey === undefined) {
    console.error("API Key Missing/Corrupted")
} else {
    console.log("API Key Loaded")
}

try {
    const app = initializeApp(firebaseConfig)
    console.log("Initalized Firebase")
} catch (error) {
    console.error("Error in Initalizing Firebase")
    console.log(error)
}

let getFire = undefined

try {
    getFire = getFirestore()
    console.log("Initalized Cloud Firestore")
} catch (error) {
    console.error("Error in Getting Firestore")
    console.error(error)
}

export default getFire