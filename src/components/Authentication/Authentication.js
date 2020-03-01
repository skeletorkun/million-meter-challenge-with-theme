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
import {useSelector} from "react-redux";

const useStyles = makeStyles(styles);

export default function Authentication(props) {
    const classes = useStyles();
    const user = useSelector(state => state.firebase.profile);
    const { onLogin, onLogout} = props;
    console.log('user is ' + JSON.stringify(user));
    const Compo = () => !user.isEmpty ?
        <div className={classes.flex}>
            <GridContainer>
                <GridItem xs={1} sm={1} md={9}>
                    <Hidden mdDown implementation="css">

                        <Button color="inherit" href="#" className={classes.title} style={{float: 'right'}}>
                            Welcome {user.displayName}
                        </Button>
                    </Hidden>
                </GridItem>
                <GridItem xs={11} sm={11} md={3}>

                    <IconButton style={{float: "right"}}
                                color="inherit"
                                onClick={onLogout}
                    >
                        <Avatar alt='' src={user.avatarUrl} width='50px'/>
                    </IconButton>
                </GridItem>
            </GridContainer>

        </div>
        :
        <div className={classes.flex}>
            <GridContainer>
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
