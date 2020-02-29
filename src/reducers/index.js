import { combineReducers } from "redux";
import { firebaseReducer as firebase } from "react-redux-firebase";
import targetReducer from "./targetReducer";

const rootReducer = combineReducers({
    firebase,
    target: targetResducer,
    // formData : formReducers
});

export default rootReducer;
