import React, {useEffect, useState} from 'react'
import firebase from '../firebase'
import {CircularProgress} from '@material-ui/core';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from "history";
import AdminWithoutSideBar from '../layouts/AdminWithoutSideBar';

import { useFirebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";

const hist = createBrowserHistory();

function App(props) {
    useFirebaseConnect({path:"data"});
    const data = useSelector(state => state.firebase.ordered.data);
    const avatar = useSelector(state => state.firebase.auth.currentUser && state.firebase.auth.currentUser.photoURL);
    const username = useSelector(state => state.firebase.auth.currentUser && state.firebase.auth.currentUser.displayName);

    const [firebaseInitialized, setFirebaseInitialized] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);


    // Show a message while loading
    if (!isLoaded(data)) {
        return <div id="loader"><CircularProgress/></div>
    }

    console.log('data is loaded : ' + data);
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
        avatarUrl={avatar}
        userName={username}
        isLoggedIn={isLoggedIn}
        {...props} />;

    return (
        <Router history={hist}>
            <Switch>
                <Route path="/" render={adminWithoutSideBar}/>
                <Redirect from="/" to="/admin/dashboard"/>
            </Switch>
        </Router>
    )
}

export default App