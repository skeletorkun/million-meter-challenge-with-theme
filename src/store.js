import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const composeEnhancers = composeWithDevTools({
    realtime: true
    // options like actionSanitizer, stateSanitizer
});


export const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(thunk))
);
