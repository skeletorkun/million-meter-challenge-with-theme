import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import ChartistGraph from "react-chartist";
import AccessTime from "@material-ui/icons/AccessTime";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import {thisWeekSwimChart} from "variables/charts.js";

const useStyles = makeStyles(styles);

export default function ThisWeekSwimChartCard() {
    const classes = useStyles();
    return (
        <Card chart>
            <CardHeader color="info">
                <ChartistGraph
                    className="ct-chart"
                    data={thisWeekSwimChart.data}
                    type="Bar"
                    options={thisWeekSwimChart.options}
                    responsiveOptions={thisWeekSwimChart.responsiveOptions}
                    listener={thisWeekSwimChart.animation}
                />
            </CardHeader>
            <CardBody>
                <h4 className={classes.cardTitle}>This week</h4>
                <p className={classes.cardCategory}>Your recent performances </p>
            </CardBody>
            <CardFooter chart>
                <div className={classes.stats}>
                    <AccessTime/> last session 2 days ago
                </div>
            </CardFooter>
        </Card>
    );
}
