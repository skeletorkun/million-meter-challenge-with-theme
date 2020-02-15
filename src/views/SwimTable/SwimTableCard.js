import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Table from "components/Table/Table.js";

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

export default function SwimTableCard() {
    const classes = useStyles();
    return (
        <Card>
            <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Swimmer Stats</h4>
                <p className={classes.cardCategoryWhite}>
                    Distances covered as of today
                </p>
            </CardHeader>
            <CardBody>
                <Table
                    tableHeaderColor="warning"
                    tableHead={["Name", "Target", "Week", "% weekly", "% total"]}
                    tableData={[
                        ["Dakota Rice", "1000000", "36500", "110%", "12%"],
                        ["Minerva Hooper", "50000", "23200", "77%", "7%"],
                        ["Sage Rodriguez", "1000000", "56000", "55%", "5%"],
                        ["Philip Chaney", "1000000", "38700", "60%", "92%"]
                    ]}
                />
            </CardBody>
        </Card>
    );
}
