import React, {useCallback} from "react";
// react plugin for creating charts
// @material-ui/core
import {makeStyles} from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import SwimEntryCard from "../SwimEntry/SwimEntryCard";
import SwimTableCard from "../SwimTable/SwimTableCard";
import TotalDistanceSwimChartCard from "../SwimChart/TotalDistanceSwimChartCard";
import ThisWeekSwimChartCard from "../SwimChart/ThisWeekSwimChartCard";
import InputBase from "@material-ui/core/InputBase";
import {useFirebase, useFirebaseConnect} from "react-redux-firebase";
import {useDispatch, useSelector} from "react-redux";
import {editTarget} from "../../actions/targetActions";

const useStyles = makeStyles(styles);

export default function Dashboard() {
    const classes = useStyles();
    const firebase = useFirebase();
    useFirebaseConnect('users');

    // load all the data of the users
    const data = useSelector(state => state.firebase.data.users);
    console.log('data is ' + JSON.stringify(data));

    // get current user
    const auth = useSelector(state => state.firebase.auth);
    console.log('auth is ' + JSON.stringify(auth));

    const dispatch = useDispatch();
    const saveTarget = useCallback(
        target => dispatch(editTarget({firebase}, target)),
        [firebase]
    );

    // default
    let target = {
        type: "cumulative",
        name: "Million meter challenge",
        distance: 1000000,
        setOn: new Date()
    };

    if(!auth.isEmpty && data[auth.uid] && data[auth.uid].target){
         target = data[auth.uid].target;
    }

    const sampleTarget = {
        type: "cumulative",
        name: "Million meter challenge",
        setOn: new Date()
    };

    const onTargetChange = e => {
        e.preventDefault();
        sampleTarget.uid = auth.uid;
        sampleTarget.distance = e.target.value;
        saveTarget(sampleTarget);
    };

    return (
        <div>
            {/*4 little info*/}
            <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="warning">
                                <Icon>emoji_events</Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Goal</p>
                            <h3 className={classes.cardTitle}>
                                <InputBase className={classes.targetInput} defaultValue={target.distance}
                                           inputProps={{ style: {textAlign: 'right'} }}
                                           onChange={(e) => onTargetChange(e)}/>
                                <small> meters</small>
                            </h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <DateRange/>
                                {target.setOn}
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="success" stats icon>
                            <CardIcon color="success">
                                <Icon>pool</Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Total Distance</p>
                            <h3 className={classes.cardTitle}>
                                247500 <small>meters</small>
                            </h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <LocalOffer/>
                                35% completed
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="danger" stats icon>
                            <CardIcon color="danger">
                                <Icon>fitness_center</Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Last week</p>
                            <h3 className={classes.cardTitle}>34500 <small>meters</small></h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <DateRange/>
                                Last 24 Hours
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="info" stats icon>
                            <CardIcon color="info">
                                <Accessibility/>
                            </CardIcon>
                            <p className={classes.cardCategory}>Challengers</p>
                            <h3 className={classes.cardTitle}>245km+</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <Update/>
                                Total distance we swam together
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>

            {/*New Entry + Swim Table*/}
            <GridContainer>
                <GridItem xs={12} sm={12} md={7}>
                    <SwimTableCard/>
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                    <SwimEntryCard/>
                </GridItem>
            </GridContainer>

            {/*Charts*/}
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <TotalDistanceSwimChartCard/>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <ThisWeekSwimChartCard/>
                </GridItem>
            </GridContainer>

        </div>
    );
}
