import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: "ethanchewpblog.firebaseapp.com",
    projectId: "ethanchewpblog",
    storageBucket: "ethanchewpblog.appspot.com",
    messagingSenderId: "949351827892",
    appId: "1:949351827892:web:e0baa5ada29df335ec8ae1",
    measurementId: "G-K1PMJMRBND"
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