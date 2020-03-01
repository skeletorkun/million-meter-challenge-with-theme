import { SESSION_ADDED, ERROR } from "../actions/sessionActions";

const initState = [
    {
        date: "12-12-2020",
        notes: "100x100 Lido swim with the guys",
        distance : "10000"
    }
];

const sessionReducer = (state = initState, action) => {
    switch (action.type) {
        case SESSION_ADDED:
            console.log(JSON.stringify(action.session) + " added successfully");
            return state;
        case ERROR:
            console.log("session error : " + action.err);
            return state;
        default:
            return state;
    }
};

export default sessionReducer;
