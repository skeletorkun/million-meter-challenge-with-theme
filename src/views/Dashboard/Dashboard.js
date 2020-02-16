import React from "react";
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

const useStyles = makeStyles(styles);

export default function Dashboard() {
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="warning">
                                <Icon>emoji_events</Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Goal</p>
                            <h3 className={classes.cardTitle}>
                                1M <small>meters</small>
                            </h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <DateRange/>
                                Set on Feb 15, 2020
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
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <TotalDistanceSwimChartCard/>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <ThisWeekSwimChartCard/>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <SwimEntryCard/>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <SwimTableCard/>
                </GridItem>
            </GridContainer>
        </div>
    );
}
