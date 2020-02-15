import React from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import TotalDistanceSwimChartCard from "./TotalDistanceSwimChartCard";

export default function SwimChart() {
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <TotalDistanceSwimChartCard/>
                </GridItem>
            </GridContainer>
        </div>
    );
}
