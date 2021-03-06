import React from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import SwimEntryCard from "./SwimEntryCard";

export default function SwimEntry() {
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <SwimEntryCard/>
                </GridItem>
            </GridContainer>
        </div>
    );
}
