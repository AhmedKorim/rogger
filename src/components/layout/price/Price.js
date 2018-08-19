import React from 'react'
import {withStyles} from "@material-ui/core";
import "./Price.scss";
import {green, red, Gray} from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography/Typography";

const styles = theme => ({
    Deleted: {
        color: red[500]
    },
    current: {
        color: green[900]
    },
    off: {
        color: "#9E9E9E"
    }
});
const Price = props => {
    const {
        price,
        odPrice,
        classes

    } = props;
    return (
        <div className="priceContainer">
            <div>
                <div className="offer">
                    <div className="oldPriceW">
                        <Typography className="oldPrice" variant="body1">25$
                        </Typography>
                    </div>
                </div>
                <div className="cPrice">
                    <Typography className="currentPrice" variant="body1">15$</Typography>
                </div>
            </div>
        </div>
    )
}
export default withStyles(styles)(Price);