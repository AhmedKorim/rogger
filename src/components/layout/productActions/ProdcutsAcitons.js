import React from 'react'
import CardActions from "@material-ui/core/CardActions/CardActions";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import IconButton from "@material-ui/core/IconButton/IconButton";
import red from "@material-ui/core/colors/red";
import Card from "@material-ui/core/Card/Card";

const ProductActions = props => {
    const classes = {
        actions: {
            display: 'flex',
            justifyContent: 'center',
            padding: "8px 4px"
        }
    };
    const {
        openDetailes
    } = props;
    return (
        <CardActions style={classes.actions} disableActionSpacing>
            <Tooltip title="Add to favorites" placement="bottom-start">
                <IconButton aria-label="Add to favorites" size="small" color='secondary'>
                    <i className="material-icons" color={red[500]}>
                        favorite
                    </i>
                </IconButton>
            </Tooltip>
            <Tooltip title="share" placement="bottom-start">
                <IconButton aria-label="Share">
                    <i className="material-icons">
                        share
                    </i>
                </IconButton>
            </Tooltip>
            <Tooltip title="add to compare" placement="bottom-start">
                <IconButton aria-label="add to compare que">
                    <i className="material-icons">
                        compare
                    </i>
                </IconButton>
            </Tooltip>
            <Tooltip title="more details" placement="bottom-start">
                <IconButton aria-label="more details" onClick={openDetailes}>
                    <i className="material-icons">
                        list_alt
                    </i>
                </IconButton>
            </Tooltip>
        </CardActions>
    )
}
export default ProductActions