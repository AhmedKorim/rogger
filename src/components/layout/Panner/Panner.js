import React from 'react'
import Card from "@material-ui/core/Card/Card";
import Typography from "@material-ui/core/Typography/Typography";
import {withStyles} from "@material-ui/core";


const styles = theme => ({
    root: {
        padding: '.3rem'
    },
    Typography: {
        textAlign: 'center',
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: "10rem"
    }
})
const Panner = props => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <Typography variant="display1" className={classes.Typography}>Panner Here</Typography>
            </Card>
        </div>

    )
}
export default withStyles(styles)(Panner);