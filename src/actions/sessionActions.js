export const SESSION_ADDED = "Added";
export const ERROR = "Error";

export const addSession = ({firebase}, session) => {
    let users = firebase.database().ref()
        .child('users');

    let user = users
        .child(session.uid);

    console.log('user in firebase' + user);
    let sessions = user
        .child('sessions');
    console.log('sessions in firebase' + sessions);

    return (dispatch, getState) => {
        sessions.push(session)
            .then(() => {
                console.log("Session is added");
                dispatch({type: SESSION_ADDED, session: session});
            })
            .catch(err => {
                dispatch({type: ERROR, err});
            });
    };
};
