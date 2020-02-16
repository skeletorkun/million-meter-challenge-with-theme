import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// @material-ui/icons
// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Authentication from "../Authentication/Authentication";

const useStyles = makeStyles(styles);

export default function Header(props) {
    const classes = useStyles();

    const {color, title} = props;
    const appBarClasses = classNames({
        [" " + classes[color]]: color
    });

    return (
        <AppBar className={classes.appBar + appBarClasses}>
            <Toolbar className={classes.container}>
                <div className={classes.flex}>
                    <GridContainer>
                        <GridItem xs={9} sm={6} md={10}>
                            {/* Here we create navbar brand, based on route name */}
                            {/*<div className={classes.logoImage}>*/}
                            {/*    <img src={logo} alt="logo" className={classes.img} />*/}
                            {/*</div>*/}
                            <Button color="transparent" href="#" className={classes.title}>
                                {title}
                            </Button>
                        </GridItem>
                        <GridItem xs={3} sm={6} md={2}>
                            <Authentication {...props} />
                        </GridItem>
                    </GridContainer>
                </div>
            </Toolbar>
        </AppBar>
    );
}

Header.propTypes = {
    color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
    rtlActive: PropTypes.bool,
    handleDrawerToggle: PropTypes.func,
    routes: PropTypes.arrayOf(PropTypes.object)
};
