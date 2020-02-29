export const TARGET_UPDATED = "Changed";
export const ERROR = "Error";

export const editTarget = ({firebase}, target) => {
    let uid = firebase.auth.currentUser.uid;
    let currentTarget = firebase.database().ref()
        .child('data')
        .child(uid)
        .child('target');

    return (dispatch, getState) => {
        currentTarget.set(target)
            .then(() => {
                console.log("Target is set");
                dispatch({type: TARGET_UPDATED, target});
            })
            .catch(err => {
                dispatch({type: ERROR, err});
            });
    };
};
