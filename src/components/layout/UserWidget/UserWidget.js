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
import {withRouter} from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";

const UserWidget = props => {
    const {

        history: {push},
        location: {pathname},
        userIfo: {
            name,
            avatar,
            anonymous,
            admin,
            email
        }
    } = props;
    const HIText = anonymous ? 'login now' : 'welcome MR' + name;
    return (
        <div className="userWidget">
            <header>
                <Grid container justify="center" alignItems="center" className="noWrapper">
                    <Grid item xs={3}>
                        <Avatar>{avatar}</Avatar>
                    </Grid>
                    <Grid item container alignItems="center" justify="center" xs={7} className="userMetaData">
                        <Grid item xs={12}><Typography className="typo1">{name}</Typography></Grid>
                        <Grid item xs><Tooltip label={HIText}><Typography className="typo2">{HIText}</Typography></Tooltip></Grid>
                    </Grid>
                    <Grid item xs>
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
                    <ListItem component="li" button className="userListItem" onClick={() => push(pathname + '/auth')}>
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
const mapStateToProps = state => {
    return {
        userIfo: state.user.info
    }
}
export default connect(mapStateToProps)(withRouter(UserWidget));