import React from 'react'
import Grid from "@material-ui/core/Grid/Grid";
import './UserWidget.scss';
import Avatar from "@material-ui/core/Avatar/Avatar";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import ListItem from "@material-ui/core/ListItem/ListItem";
import List from "@material-ui/core/List/List";
import Icon from "@material-ui/core/Icon/Icon";
import Button from "@material-ui/core/Button/Button";
import {PRODUCT_CARD_DETAILS} from "../../../dux/actions/uiActions";
import {connect} from "react-redux";

const UserWidget = props => {
    const {

        authOPen

    } = props;
    return (
        <div className="userWidget">
            <header>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={3}>
                        <Avatar>An</Avatar>
                    </Grid>
                    <Grid item container alignItems="center" justify="center" xs>
                        <Grid item xs={12}><Typography className="typo1">user name</Typography></Grid>
                        <Grid item xs><Typography className="typo2">email</Typography></Grid>
                    </Grid>
                    <Grid item>
                        <Button className="smallButton" size="small"><Icon>settings</Icon></Button>
                    </Grid>
                </Grid>
            </header>
            <Divider/>
            <dig>
                <List component="ul" className="userListItem">
                    <ListItem component="li" button className="userListItem">
                        <Grid container justify="center" alignItems="center">
                            <Grid item xs={4}>
                                <div><Icon className="iconCol">dashboard</Icon></div>
                            </Grid>
                            <Grid item xs><Typography className="typo2">My DashBoard</Typography></Grid>
                        </Grid>
                    </ListItem>
                    <ListItem component="li" button className="userListItem" onClick={authOPen}>
                        <Grid container justify="center" alignItems="center">
                            <Grid item xs={4}>
                                <div><Icon className="iconCol">lock</Icon></div>
                            </Grid>
                            <Grid item xs><Typography className="typo2"> Log In</Typography></Grid>
                        </Grid>
                        <Divider/>
                    </ListItem> <ListItem component="li" button className="userListItem">
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={4}>
                            <div><Icon className="iconCol">power_settings_new</Icon></div>
                        </Grid>
                        <Grid item xs><Typography className="typo2"> Log Out</Typography></Grid>
                    </Grid>
                </ListItem>
                </List>
            </dig>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        authOPen: () => dispatch({type: PRODUCT_CARD_DETAILS, payload: {open: true, data: {}, component: 'AuthComponent'}})
    }
}
export default connect(null, mapDispatchToProps)(UserWidget)