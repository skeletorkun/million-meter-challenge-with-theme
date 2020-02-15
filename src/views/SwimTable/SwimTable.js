import React from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import SwimTableCard from "./SwimTableCard";

export default function SwimTable() {
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <SwimTableCard/>
                </GridItem>
            </GridContainer>
        </div>
    );
}
