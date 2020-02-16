import React, {useEffect, useState} from 'react'
import firebase from '../firebase'
import {CircularProgress} from '@material-ui/core';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from "history";
import AdminWithoutSideBar from "layouts/AdminWithoutSideBar.js";

const hist = createBrowserHistory();

function App(props) {
    const [firebaseInitialized, setFirebaseInitialized] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {

        firebase.isInitialized().then(val => {
            setFirebaseInitialized(val);
            setLoggedIn(firebase.isLoggedIn());
        })
    });

    async function onLogin(){
        try {
            await firebase.login();
            setLoggedIn(true);
        } catch (error) {
            alert(error.message)
        }
    }

    async function onLogout() {
        await firebase.logout();
        setLoggedIn(false);
    }

    let adminWithoutSideBar = (props) => <AdminWithoutSideBar
        onLogin={onLogin}
        onLogout={onLogout}
        avatarUrl={firebase.getCurrentUserAvatar()}
        userName={firebase.getCurrentUsername()}
        isLoggedIn={isLoggedIn}
        {...props} />;

    return firebaseInitialized !== false ? (
        <Router history={hist}>
            <Switch>
                <Route path="/" render={adminWithoutSideBar}/>
                <Redirect from="/" to="/admin/dashboard"/>
            </Switch>
        </Router>
    ) : <div id="loader"><CircularProgress/></div>
}

export default App