import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import ChartistGraph from "react-chartist";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import {totalDistanceChart} from "variables/charts.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function TotalDistanceSwimChartCard() {
    const classes = useStyles();
    return (
        <Card chart>
            <CardHeader color="success">
                <ChartistGraph
                    className="ct-chart"
                    data={totalDistanceChart.data}
                    type="Line"
                    options={totalDistanceChart.options}
                    listener={totalDistanceChart.animation}
                />
            </CardHeader>
            <CardBody>
                <h4 className={classes.cardTitle}>Total Distance</h4>
                <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory}/> 55%
                </span>{" "}
                    increase this month
                </p>
            </CardBody>
            <CardFooter chart>
                <div className={classes.stats}>
                    <AccessTime/> updated 4 minutes ago
                </div>
            </CardFooter>
        </Card>
    );
}
