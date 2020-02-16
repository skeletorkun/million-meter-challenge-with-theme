import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";
import {FacebookLoginButton} from "react-social-login-buttons";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import IconAccountCircle from '@material-ui/icons/AccountCircle'
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import Hidden from "@material-ui/core/Hidden";
// import FacebookIcon from '@material-ui/icons/Facebook';

// @material-ui/icons
// core components

const useStyles = makeStyles(styles);

export default function Authentication(props) {
    const classes = useStyles();
    const {isLoggedIn, onLogin, onLogout, avatarUrl, userName} = props;

    const Compo = () => isLoggedIn ?
        <div className={classes.flex}>
            <GridContainer>
                <GridItem xs={1} sm={1} md={9}>
                    <Hidden mdDown implementation="css">

                        <Button color="inherit" href="#" className={classes.title} style={{float: 'right'}}>
                            Welcome {userName}
                        </Button>
                    </Hidden>
                </GridItem>
                <GridItem xs={11} sm={11} md={3}>

                    <IconButton style={{float: "right"}}
                                color="inherit"
                                onClick={onLogout}
                    >
                        <Avatar alt='' src={avatarUrl} width='50px'/>
                    </IconButton>
                </GridItem>
            </GridContainer>

        </div>
        :
        <div className={classes.flex}>
            <GridContainer >
                <GridItem xs={1} sm={11} md={1}>
                    <Hidden mdUp implementation="css">
                        <Button tooltip="Login" onClick={onLogin} className={classes.title}>
                            Login <IconAccountCircle/>
                        </Button>
                    </Hidden>
                </GridItem>
                <GridItem xs={1} sm={1} md={11}>
                    <Hidden mdDown implementation="css">
                        <FacebookLoginButton onClick={onLogin}/>
                    </Hidden>
                </GridItem>
            </GridContainer>
        </div>
    ;

    return <Compo/>
}
