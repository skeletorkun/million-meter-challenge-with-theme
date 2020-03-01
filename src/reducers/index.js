import { combineReducers } from "redux";
import { firebaseReducer as firebase } from "react-redux-firebase";
import targetReducer from "./targetReducer";
import sessionReducer from "./sessionReducer";

const rootReducer = combineReducers({
    firebase,
    target: targetReducer,
    sessions: sessionReducer,
    // formData : formReducers
});

export default rootReducer;
