import app from 'firebase/app'
import 'firebase/auth';
import 'firebase/firebase-firestore';

import {firebaseConfig} from './config/firebaseConfig'

class Firebase {

    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.firestore();
        this.facebookProvider = new app.auth.FacebookAuthProvider();
    }

    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }

    isLoggedIn(){
        return this.auth.currentUser != null;
    }

    getCurrentUserAvatar() {
        return this.auth.currentUser && this.auth.currentUser.photoURL;
    }

    getCurrentUsername() {
        //return displayName if user is logged in
        return this.auth.currentUser && this.auth.currentUser.displayName
    }

    async getCurrentUserFruit() {
        const data = await this.db.doc(`toto/${this.auth.currentUser.uid}`).get();
        //export data
        return data.get('fruit')
    }

    login() {
        return this.auth.signInWithPopup(this.facebookProvider)
    }

    logout() {
        return this.auth.signOut()
    }

    async register(name, email, pass) {
        await this.auth.createUserWithEmailAndPassword(email, pass);
        return this.auth.currentUser.updateProfile({
            displayName: name
        });
    }

    addFruit(fruit) {
        //user presence control
        if (!this.auth.currentUser) {
            return alert('Not authorized')
        }

        //Adding documents to the collection of pckurdu
        return this.db.doc(`toto/${this.auth.currentUser.uid}`).set({
            fruit: fruit
        })
    }
}

export default new Firebase()