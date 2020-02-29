import { TARGET_UPDATED, ERROR } from "../actions/targetActions";

const initState = {
    type: "cumulative",
    name: "Million meter challange",
    distance: 1000000,
    completion : 7.8
};

const targetReducer = (state = initState, action) => {
    switch (action.type) {
        case TARGET_UPDATED:
            console.log(action.target + " target updated successfully");
            return state;
        case ERROR:
            console.log("target error : " + action.err);
            return state;
        default:
            return state;
    }
};

export default targetReducer;
