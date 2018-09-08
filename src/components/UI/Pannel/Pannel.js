import React from 'react'
import {withStyles} from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel/ExpansionPanel";
import Icon from "@material-ui/core/Icon/Icon";
import Typography from "@material-ui/core/Typography/Typography";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails";

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor:'red'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: 600
    },
    panel: {
        borderRadius: 0,
        margin: 0,

    },
    details: {
        padding: 0,
        width:"100%"
    },
    radius: {
        borderRadius: "0 !important"
    }
});

const Pannel = props => {


    const {classes, children, heading} = props;
    return (
        <div className={classes.root}>
            <ExpansionPanel className={[classes.panel, 'VCpanel'].join(' ')} classes={{
                root: classes.radius
            }}>
                <ExpansionPanelSummary expandIcon={<Icon>expand_less</Icon>}>
                    <Typography className={classes.heading}>{heading}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    {children}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>

    )

};

export default withStyles(styles)(Pannel);

