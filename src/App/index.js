import React, {useEffect, useState} from 'react'
import firebase from '../firebase'
import strava from '../strava'
import {CircularProgress} from '@material-ui/core';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from "history";
import AdminWithoutSideBar from '../layouts/AdminWithoutSideBar';

import { useFirebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { client } from '../../functions/oauth2';
import StravaLoginCallback from '../views/StravaLoginCallback/StravaLoginCallback';

const hist = createBrowserHistory();

function App(props) {
    useFirebaseConnect('users');
    const data = useSelector(state => state.firebase.data.users);
    const user = useSelector(state => state.firebase.auth.currentUser);

    // Show a message while loading
    if (!isLoaded(data)) {
        return <div id="loader"><CircularProgress/></div>
    }

    function onStravaLogin() {
        window.open('/redirect', 'firebaseAuth', 'height=715,width=700');
    }

    async function onFacebookLogin(){
        try {
            await firebase.login({provider:'facebook', type:'popup'});

        } catch (error) {
            alert(error.message)
        }
    }

    async function onLogout() {
        await firebase.logout();
    }

    let adminWithoutSideBar = (props) => <AdminWithoutSideBar
        onFacebookLogin={onFacebookLogin}
        onStravaLogin={onStravaLogin}
        onLogout={onLogout}
        avatarUrl={user && user.photoURL}
        userName={user && user.displayName}
        {...props} />;

    return (
        <Router history={hist}>
            <Switch>
                <Route path="/auth/strava/callback" component={StravaLoginCallback}/>
                <Route path="/" render={adminWithoutSideBar}/>
                <Redirect from="/" to="/admin/dashboard"/>
            </Switch>
        </Router>
    )
}

export default App