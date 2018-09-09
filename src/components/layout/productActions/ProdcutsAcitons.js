import React from 'react'
import CardActions from "@material-ui/core/CardActions/CardActions";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import IconButton from "@material-ui/core/IconButton/IconButton";
import {connect} from "react-redux";
import {ADD_TO_CART, LIKE, MANAGE_COMPARED, SNACK_BAR_NEW_MESSAGE} from "../../../dux/actions/actionTypes";
import {addToCart, compared, like} from "../../../dux/actions/userActions";

const ProductActions = props => {
    const classes = {
        actions: {
            display: 'flex',
            justifyContent: 'center',
            padding: "8px 4px"
        }
    };
    const {
        openDetailes,
        likedAr,
        id,
        toggleLike,
        addToCart,
        cartAr,
        toggleCompared,
        comparedArr,
        message
    } = props;
    const liked = !!likedAr.find(item => item.id === id);
    const onCart = !!cartAr.find(item => item.id === id);
    const onCompare = !!comparedArr.find(item => item.id === id);
    return (
        <CardActions style={classes.actions} disableActionSpacing>
            <Tooltip title="Add to favorites" placement="bottom-start">
                <IconButton aria-label="Add to favorites" size="small" color={liked ? "secondary" : 'default'} onClick={() => toggleLike(id)}>
                    <i className="material-icons">
                        favorite
                    </i>
                </IconButton>
            </Tooltip>
            <Tooltip title="add to cart" placement="bottom-start">
                <IconButton aria-label="add to cart" color={onCart ? 'primary' : 'default'} onClick={() => {
                    addToCart(id, 'add');
                }}>
                    <i className="material-icons">
                        add_shopping_cart
                    </i>
                </IconButton>
            </Tooltip>
            <Tooltip title="add to compare" placement="bottom-start">
                <IconButton aria-label="add to compare que" color={onCompare ? 'primary' : 'default'} onClick={() => toggleCompared(id)}>
                    <i className="material-icons">
                        compare
                    </i>
                </IconButton>
            </Tooltip>
            <Tooltip title="more details" placement="bottom-start">
                <IconButton aria-label="more details" onClick={() => id ? openDetailes(id) : void 0}>
                    <i className="material-icons">
                        list_alt
                    </i>
                </IconButton>
            </Tooltip>
        </CardActions>
    )
};
const mapDispatchToProps = dispatch => {
    return {
        toggleLike: (id) => dispatch(like(id)),
        addToCart: (id, action) => dispatch(addToCart(id, action)),
        toggleCompared: (id) => dispatch(compared(id)),
        message: (message, variant, duration) => dispatch({type: SNACK_BAR_NEW_MESSAGE, payload: {message, variant, duration}})
    }
};
const mapStateToProps = state => {
    return {
        likedAr: state.user.liked,
        cartAr: state.user.cart,
        comparedArr: state.user.compared
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductActions)