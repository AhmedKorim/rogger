import React from 'react'
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/es/Typography/Typography";
import ExpansionPanelSummary from "@material-ui/core/es/ExpansionPanelSummary/ExpansionPanelSummary";
import ExpansionPanel from "@material-ui/core/ExpansionPanel/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/es/ExpansionPanelDetails/ExpansionPanelDetails";
import Icon from "@material-ui/core/Icon/Icon";

const styles = theme => ({
    root: {
        width: '100%',
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
        padding: 0
    }
});

const Pannel = props => {


    const {classes, children, heading} = props;
    return (
        <div className={classes.root}>
            <ExpansionPanel className={[classes.panel, 'VCpanel'].join(' ')}>
                <ExpansionPanelSummary expandIcon={<Icon>expand_less</Icon>}>
                    <Typography className={classes.heading}>{heading}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    {children}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>

    )

}

export default withStyles(styles)(Pannel);

