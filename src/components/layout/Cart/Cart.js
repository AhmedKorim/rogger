import React, {Fragment} from 'react'
import './Cart.scss';
import Grid from "@material-ui/core/Grid/Grid";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon/Icon";
import Typography from "@material-ui/core/Typography/Typography";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Divider from "@material-ui/core/Divider/Divider";
import Button from "@material-ui/core/Button/Button";
import PerfectScrollbar from "react-perfect-scrollbar";
import {getStyle} from "../../../tools/tools";
import {connect} from "react-redux";

class ShoppingCart extends React.Component {
    state = {
        listHeight: null
    }


    componentDidMount() {
        if (!this.wrapper) return;
        const listHeight = getStyle(this.wrapper, 'height');
        console.log(listHeight);
        if (this.listHeight === listHeight) return;
        this.setState({listHeight: listHeight})
    }

    render() {
        const {
            state: {listHeight},
            props: {
                cart,
                products
            }
        } = this;

        const cartProducts = [...products].filter(product => {
            return cart.find(cartItem => {
                return cartItem.id === product.id
            })
        }).map(product => {
            const cartItem = cart.find(cartItem => product.id === cartItem.id)
            const newProduct = {...product};
            newProduct.count = cartItem.count;
            return product
        })
        return (
            <div className="shoppingCart">
                {cartProducts.length > 0 ? <Fragment>
                        <div className="cartItemsWrapper" ref={(node) => this.wrapper = node}>
                            <List component="ul" className="cartItemsList" style={{height: listHeight}}>
                                <PerfectScrollbar>
                                    {cartProducts.map((CartItem, index) => <Tooltip key={CartItem.id} title="more to page details" placement="bottom-end">
                                            <ListItem component="li" button className="cartListItem" onClick={() => console.log('list item clicked')}>
                                                <Grid alignItems="center" container className="cartItem" justify="center">
                                                    <Grid container item xs={10}>
                                                        <Grid container justify="center" alignItems="center">
                                                            <Grid item xs={4}>
                                                                <img src="//via.placeholder.com/300" alt="productName"/>
                                                            </Grid>
                                                            <Grid item container alignItems="center" xs className="itemData">
                                                                <Grid xs={12} item className="cartItemheader">
                                                                    <Typography variant="subheading" className="productTitle">
                                                                        product name
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid xs item className="cartItemPrice">
                                                                    <Typography variant="subheading" className="productPrice">
                                                                        150$
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid xs={2} item container alignItems="center" justify="center">
                                                        <div className="actionWrapper">
                                                            <div className="buttonFlooter">
                                                                <Tooltip title="remove item from the cart" placement="bottom-end">
                                                                    <IconButton className="cartItemButton"
                                                                                onClick={(event) => (event.stopPropagation(), console.log('clicked'))}>
                                                                        <Icon>delete</Icon>
                                                                    </IconButton>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </ListItem>
                                            {index > 1 && <Divider className="divider"/>}
                                        </Tooltip>
                                    )}
                                </PerfectScrollbar>
                            </List>
                        </div>
                        <Divider/>
                        <div className="cartItemsActions">
                            <Grid container justify="center" alignItems="center">
                                <Grid xs={8} item className="CIGrid">
                                    <Button variant="raised" size="small" color="primary" fullWidth>
                                        <Typography className="actionText">
                                            checkout now
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Fragment>
                    :
                    <Typography className="emptyCart"> your cart is empty</Typography>
                }
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        cart: state.user.cart,
        products: state.products.products
    }
}
export default connect(mapStateToProps)(ShoppingCart)