import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database'
import {firebaseConfig} from './config/firebaseConfig'

try {
    firebase.initializeApp(firebaseConfig);

    console.log("Firebase Initialized");
} catch (err) {
    console.log("Error Initializing Firebase");
}

export default firebase