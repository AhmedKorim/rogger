import React from 'react'
import CardActions from "@material-ui/core/CardActions/CardActions";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import IconButton from "@material-ui/core/IconButton/IconButton";
import {ADD_TO_CART, LIKE, MANAGE_COMPARED} from "../../../dux/actions/userActions";
import {connect} from "react-redux";

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
        comparedArr
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
                <IconButton aria-label="add to cart" color={onCart ? 'primary' : 'default'} onClick={() => addToCart(id, 'addOne')}>
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
                <IconButton aria-label="more details" onClick={openDetailes}>
                    <i className="material-icons">
                        list_alt
                    </i>
                </IconButton>
            </Tooltip>
        </CardActions>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        toggleLike: (id) => dispatch({type: LIKE, payload: {item: {id}}}),
        addToCart: (id, action) => dispatch({type: ADD_TO_CART, payload: {item: {id}}, action: action}),
        toggleCompared:(id, action) => dispatch({type: MANAGE_COMPARED, payload: {item: {id}}}),
    }
}
const mapStateToProps = state => {
    return {
        likedAr: state.user.liked,
        cartAr: state.user.cart,
        comparedArr:state.user.compared
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActions)