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

// login(){

// this.facebookProvider = new app.auth.FacebookAuthProvider();
// return firebase.auth.signInWithPopup(this.facebookProvider)
// };
//
// logout(){
// return firebase.auth.signOut()
// }
// addFruit(fruit) {
//     //user presence control
//     if (!this.auth.currentUser) {
//         return alert('Not authorized')
//     }
//
//     //Adding documents to the collection of toto
//     return this.db.doc(`toto/${this.auth.currentUser.uid}`).set({
//         fruit: fruit
//     })
// }


export default firebase