import React from "react";
import ReactDOM from "react-dom";
import "assets/css/material-dashboard-react.css?v=1.8.0";
import App from "./App";
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import {store} from "./store";
import firebase from "./firebase";

const rrfProps = {
    firebase,
    config: {
        userProfile: "users"
    },
    dispatch: store.dispatch
};

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App/>
        </ReactReduxFirebaseProvider>
    </Provider>
    ,
    document.getElementById("root")
);
serviceWorker.register();
