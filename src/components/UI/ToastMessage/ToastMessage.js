import {withStyles} from "@material-ui/core";
import {amber, green} from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon/Icon";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Slide from "@material-ui/core/Slide/Slide";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent/SnackbarContent";
import {Styles} from "jss";
import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {CLOSE_TOAST_MESSAGE} from "../../../dux/actions/actionTypes";

const styles = theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.dark,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
    margin: {
        margin: theme.spacing.unit,
    },
});

const variantIcon = {
    success: "check_circle",
    warning: "warning",
    error: "error",
    info: "info",
};

class ToastMessage extends React.Component {
    handleClose = () => {
        this.props.closeToast();
    }


    render() {
        const {
            props: {
                classes,
                className,
                onClose,
                snackbar: {
                    message,
                    variant,
                    open,
                    duration
                },
                ...other
            },
            handleClose
        } = this;
        return (
            <Fragment>
                <Snackbar anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                          open={open}
                          autoHideDuration={duration ? duration : 5000}
                          onClose={handleClose}
                >
                    <SnackbarContent
                        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                        open={open}
                        className={[className, classes[variant]].join(' ')}
                        aria-describedby="client-snackbar"
                        onClose={this.handleClose}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={
                            <span id="client-snackbar" className={classes.message}>
                            <Icon className={[classes.icon, classes.iconVariant].join(' ')}>{variantIcon[variant]}</Icon>
                                {message}</span>
                        }
                        action={[
                            <IconButton
                                key="close"
                                aria-label="Close"
                                color="inherit"
                                className={classes.close}
                                onClick={handleClose}
                            >
                                <Icon className={classes.icon}>close</Icon>
                            </IconButton>,
                        ]}
                    />
                </Snackbar>
            </Fragment>
        )
    }
}

const mapStatetoProps = state => ({
    snackbar: state.UI.snackbar
})

const madDispatchToProps = dispatch => {
    return {
        closeToast: () => dispatch({type: CLOSE_TOAST_MESSAGE})
    }
}
export default connect(mapStatetoProps, madDispatchToProps)(withStyles(styles)(ToastMessage));