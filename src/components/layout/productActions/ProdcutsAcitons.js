import React, {Component} from 'react'
import CardActions from "@material-ui/core/CardActions/CardActions";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import IconButton from "@material-ui/core/IconButton/IconButton";
import {connect} from "react-redux";
import {ADD_TO_CART, LIKE, MANAGE_COMPARED, PRODUCT_CARD_DETAILS, SNACK_BAR_NEW_MESSAGE} from "../../../dux/actions/actionTypes";
import {addToCart, compared, like} from "../../../dux/actions/userActions";

class ProductActions extends Component {

    aciveProduct = null;

    openDetailes = (id) => {
        if (this.props.openDetailes) {
            this.props.openDetailes(id);
        }
        this.aciveProduct = this.props.products.find(product => product.id === id)
        this.props.openProductDetails(this.aciveProduct)
    }


    render() {
        const classes = {
            actions: {
                display: 'flex',
                justifyContent: 'center',
                padding: "8px 4px"
            }
        };
        const {
            likedAr,
            id,
            toggleLike,
            addToCart,
            cartAr,
            toggleCompared,
            comparedArr,
            message,
            details,
            compare,
            favorite
        } = this.props;
        const liked = !!likedAr.find(item => item.id === id);
        const onCart = !!cartAr.find(item => item.id === id);
        const onCompare = !!comparedArr.find(item => item.id === id);
        return (
            <CardActions style={classes.actions} disableActionSpacing>
                {favorite &&
                <Tooltip title={`${liked ? 'remove from' : 'add to '} wish list`} placement="bottom-start">
                    <IconButton aria-label="Add to favorites" size="small" color={liked ? "secondary" : 'default'} onClick={() => toggleLike(id)}>
                        <i className="material-icons">
                            favorite
                        </i>
                    </IconButton>
                </Tooltip>
                }
                <Tooltip title={`${onCart ? 'already added to cart' : 'add to cart'}`}  placement="bottom-start">
                    <IconButton aria-label="add to cart" color={onCart ? 'primary' : 'default'} onClick={() => {
                        addToCart(id, 'add');
                    }}>
                        <i className="material-icons">
                            add_shopping_cart
                        </i>
                    </IconButton>
                </Tooltip>
                {compare &&
                <Tooltip title={`${onCompare ? 'remove from' : 'add to'} compare`} placement="bottom-start">
                    <IconButton aria-label="add to compare que" color={onCompare ? 'primary' : 'default'} onClick={() => toggleCompared(id)}>
                        <i className="material-icons">
                            compare
                        </i>
                    </IconButton>
                </Tooltip>
                }
                {details &&
                <Tooltip title="more details" placement="bottom-start">
                    <IconButton aria-label="more details" onClick={() => { id ? this.openDetailes(id) : void 0;}}>
                        <i className="material-icons">
                            list_alt
                        </i>
                    </IconButton>
                </Tooltip>
                }
            </CardActions>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleLike: (id) => dispatch(like(id)),
        addToCart: (id, action) => dispatch(addToCart(id, action)),
        toggleCompared: (id) => dispatch(compared(id)),
        message: (message, variant, duration) => dispatch({type: SNACK_BAR_NEW_MESSAGE, payload: {message, variant, duration}}),
        openProductDetails: (activeCard) => dispatch({
            type: PRODUCT_CARD_DETAILS, payload: {open: true, data: activeCard, component: 'ProductDetails'}
        })
    }
};
const mapStateToProps = state => {
    return {
        likedAr: state.user.liked,
        cartAr: state.user.cart,
        comparedArr: state.user.compared,
        products: state.products.products
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductActions)