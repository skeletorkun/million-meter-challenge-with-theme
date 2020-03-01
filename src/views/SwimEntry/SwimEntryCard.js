import React, {useCallback} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import {useForm} from 'react-hook-form';
import {addSession} from "../../actions/sessionActions";
import {useDispatch, useSelector} from "react-redux";
import {useFirebase} from "react-redux-firebase";

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};

const useStyles = makeStyles(styles);

export default function SwimEntryCard() {
    const firebase = useFirebase();
    const auth = useSelector(state => state.firebase.auth);
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const saveSession = useCallback(
        session => dispatch(addSession({firebase}, session)),
        [firebase]
    );
    const classes = useStyles();

    const onSubmit = session => {
        session.uid = auth.uid;
        console.log(session);
        saveSession(session);
    };

    return (
        <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>Enter new session</h4>
                    <p className={classes.cardCategoryWhite}>Add your swim details</p>
                </CardHeader>
                <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <CustomInput
                                id="distance"
                                name="distance"
                                register={register}
                                labelText="Distance"
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                            <CustomInput
                                id="date"
                                name="date"
                                register={register}
                                labelText="Date"
                                // id="entry-date"
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <CustomInput
                                id="notes"
                                name="notes"
                                register={register}
                                labelText="Notes to add"
                                // id="entry-notes"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    multiline: true,
                                    rows: 5,
                                }}
                            />
                        </GridItem>
                    </GridContainer>
                </CardBody>
                <CardFooter>
                    <Button color="primary" type="submit">Save</Button>
                </CardFooter>
            </form>

        </Card>
    );
}
