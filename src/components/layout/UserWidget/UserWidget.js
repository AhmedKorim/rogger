import Avatar from "@material-ui/core/Avatar/Avatar";
import Button from "@material-ui/core/Button/Button";
import Divider from "@material-ui/core/Divider/Divider";
import Grid from "@material-ui/core/Grid/Grid";
import Icon from "@material-ui/core/Icon/Icon";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Typography from "@material-ui/core/Typography/Typography";
import React from 'react'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {logout} from "../../../dux/actions/authActions";
import './UserWidget.scss';

const UserWidget = props => {
    const {

        history: {push},
        location: {pathname},
        userIfo: {
            name,
            avatar,
            anonymous,
            gender,
            email
        },
        loginout
    } = props;
    console.log(name);
    const HIText = anonymous ? 'login now' : gender === 'female' ? 'welcome MRS ' : 'welcome MR ' + name;
    return (
        <div className="userWidget">
            <Grid container justify="center">
                <Grid item xs>
                    <header>
                        <Grid container justify="center" alignItems="center" className="noWrapper">
                            <Grid item xs={3}>
                                <Avatar>{avatar.toUpperCase()}</Avatar>
                            </Grid>
                            <Grid item container alignItems="center" justify="center" xs={7} className="userMetaData">
                                <Grid item xs={12}><Typography className="typo1">{name}</Typography></Grid>
                                <Grid item xs><Tooltip title={HIText}><Typography className="typo2">{HIText}</Typography></Tooltip></Grid>
                            </Grid>
                            <Grid item xs>
                                <Button className="smallButton" size="small"><Icon>settings</Icon></Button>
                            </Grid>
                        </Grid>
                    </header>
                    <Divider/>
                </Grid>
                <Grid item xs>
                    <div>
                        <List component="ul" className="userListItem">
                            <ListItem component="li" button className="userListItem" onClick={() => push('/my_dashboard')}>
                                <Grid container justify="center" alignItems="center">
                                    <Grid item xs={4}>
                                        <div><Icon className="iconCol">dashboard</Icon></div>
                                    </Grid>
                                    <Grid item xs><Typography className="typo2">My DashBoard</Typography></Grid>
                                </Grid>
                            </ListItem>
                            {anonymous ? <ListItem component="li" button className="userListItem" onClick={() => push('/auth')}>
                                    <Grid container justify="center" alignItems="center">
                                        <Grid item xs={4}>
                                            <div><Icon className="iconCol">lock</Icon></div>
                                        </Grid>
                                        <Grid item xs><Typography className="typo2"> Log In</Typography></Grid>
                                    </Grid>
                                    <Divider/>
                                </ListItem> :
                                <ListItem component="li" button className="userListItem" onClick={props.logout}>
                                    <Grid container justify="center" alignItems="center">
                                        <Grid item xs={4}>
                                            <div><Icon className="iconCol">power_settings_new</Icon></div>
                                        </Grid>
                                        <Grid item xs><Typography className="typo2"> Log Out</Typography></Grid>
                                    </Grid>
                                </ListItem>}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
};
const mapStateToProps = state => {
    return {
        userIfo: state.user.info
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserWidget));