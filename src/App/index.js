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
    const user = useSelector(state => state.firebase.auth.currentUser);

    // Show a message while loading
    if (!isLoaded(data)) {
        return <div id="loader"><CircularProgress/></div>
    }

    console.log('data is loaded : ' + data);
    async function onLogin(){
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
        onLogin={onLogin}
        onLogout={onLogout}
        avatarUrl={user && user.photoURL}
        userName={user && user.displayName}
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