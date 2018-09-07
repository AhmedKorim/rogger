import React, {Fragment} from 'react'
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import './CartActions.scss';
import Icon from "@material-ui/core/Icon/Icon";
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";

import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import {ADD_TO_CART, REMOVE_FROM_CART} from "../../../../dux/actions/actionTypes";

const styles = theme => ({
    shadow: {
        boxShadow: theme.shadows[2]
    }
});
const CartActions = props => {
    const {
        classes,
        cart,
        addToCart,
        id,
        removeFromCart
    } = props;
    const OnCart = cart.find(item => item.id === id);
    if (OnCart) {
        OnCart.count < 1 && removeFromCart(id);
    }
    return (
        <div className="cartActions">
            <div className="CAWrapper">
                {OnCart ?
                    <Fragment>
                        <div>
                            <Button variant="raised" size="small" className="orderCountController" onClick={() => addToCart(id, 'addOne')}>
                                <Icon>expand_less</Icon>
                            </Button>
                        </div>
                        <div>
                            <div className={classes.shadow}>
                                <Typography variant="body2" component="span" className="orderPrice">{OnCart.count}items</Typography>
                            </div>
                        </div>
                        <div>
                            <Button variant="raised" size="small" className="orderCountController" onClick={() => addToCart(id, 'removeOne')}>
                                <Icon>expand_more</Icon>
                            </Button>
                        </div>
                    </Fragment> :
                    <Tooltip title="add to cart">
                        <Button variant="raised" classes={{
                            TouchRipple:{
                                classes:{
                                    root:"ahmedRipple"
                                }
                            }
                        }
                        } size="smal" color="primary" className="addToCart" fullWidth onClick={() => addToCart(id, 'add')}>
                            <Icon>add_shopping_cart</Icon>
                        </Button>
                    </Tooltip>

                }
            </div>
        </div>
    )
};
const mapStateToProps = state => {
    return {
        cart: state.user.cart
    }
};
const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id, action) => dispatch({type: ADD_TO_CART, payload: {item: {id}}, action: action}),
        removeFromCart: (id) => dispatch({type: REMOVE_FROM_CART, payload: {item: {id}}})
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CartActions));