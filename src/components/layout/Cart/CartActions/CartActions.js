import React from 'react'
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import './CartActions.scss';
import Icon from "@material-ui/core/Icon/Icon";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    shadow: {
        boxShadow: theme.shadows[2]
    }
})
const CartActions = props => {
    const {
        classes
    } = props;
    return (
        <div className="cartActions">
            <div className="CAWrapper">
                <div>
                    <Button variant="raised" size="small" className="orderCountController">
                        <Icon>expand_less</Icon>
                    </Button>
                </div>
                <div>
                    <div className={classes.shadow}>
                        <Typography variant="body2" component="span" className="orderPrice">5 items</Typography>
                    </div>
                </div>
                <div>
                    <Button variant="raised" size="small" className="orderCountController">
                        <Icon>expand_more</Icon>
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default withStyles(styles)(CartActions);