export const TARGET_UPDATED = "Changed";
export const ERROR = "Error";

export const editTarget = ({firebase}, target) => {
    let users = firebase.database().ref()
        .child('users');

    let user = users
        .child(target.uid);

    let targetNode = user
        .child('target');

    return (dispatch, getState) => {
        targetNode.update(target)
            .then(() => {
                console.log("Target is set " + JSON.stringify(target));
                dispatch({type: TARGET_UPDATED, target});
            })
            .catch(err => {
                dispatch({type: ERROR, err});
            });
    };
};
