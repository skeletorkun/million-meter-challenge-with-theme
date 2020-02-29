import firebase from 'firebase/app'
import 'firebase/auth';
import  'firebase/database'
import {firebaseConfig} from './config/firebaseConfig'

try {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.database();
    this.facebookProvider = new firebase.auth.FacebookAuthProvider();
    console.log("Firebase Initialized");
} catch (err) {
    console.log("Error Initializing Firebase");
}


    // isInitialized() {
    //     return new Promise(resolve => {
    //         this.auth.onAuthStateChanged(resolve)
    //     })
    // }
    //
    // isLoggedIn(){
    //     return this.auth.currentUser != null;
    // }
    //
    // getCurrentUserAvatar() {
    //     return this.auth.currentUser && this.auth.currentUser.photoURL;
    // }
    //
    // getCurrentUsername() {
    //     //return displayName if user is logged in
    //     return this.auth.currentUser && this.auth.currentUser.displayName
    // }
    //
    // async getCurrentUserTarget() {
    //     const data = await this.db.doc(`data/${this.auth.currentUser.uid}`).get();
    //     console.log("data retrieved : " + data);
    //     return data.get('target')
    // }
    //
    // login() {
    //     return this.auth.signInWithPopup(this.facebookProvider)
    // }
    //
    // logout() {
    //     return this.auth.signOut()
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