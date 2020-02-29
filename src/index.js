import React from "react";
import ReactDOM from "react-dom";
import "assets/css/material-dashboard-react.css?v=1.8.0";
import App from "./App";
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById("root")
);
serviceWorker.register();
