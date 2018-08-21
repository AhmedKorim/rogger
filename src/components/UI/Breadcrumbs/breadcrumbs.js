import React from 'react'
import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";

const styles = theme => ({
    paper: theme.palette.background.default
})
const breadcrumbs = props => {
    const {classes} = props;
    return (
        <div className="container">
            <Paper className={classes.paper}>

            </Paper>
        </div>
    )
}
export default withStyles(styles)(breadcrumbs);