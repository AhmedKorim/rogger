import Button from "@material-ui/core/Button/Button";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import CartActions from "../../../components/layout/Cart/CartActions/CartActions";
import AkTable from "../../../components/UI/Table/Table";
import {REMOVE_FROM_CART} from "../../../dux/actions/actionTypes";
import {addOrder, addToCart} from "../../../dux/actions/userActions";

import './UserCart.scss'

class UserCart extends React.Component {

    addOne = (id) => {
        this.props.addToCart(id, 'addOne')
    };

    removeOne = (id) => {
        this.props.addToCart(id, 'removeOne')

    };


    render() {
        const {
            props: {

                cart,
                products,
                history: {
                    push
                }
            },

        } = this;
        const productsOnCart = products.filter(product => cart.find(cartItem => product.id === cartItem.id));
        const dataTable = productsOnCart.map(productOnCart => {
            const cartItem = cart.find(item => item.id === (productOnCart || {}).id);
            if (cartItem) {
                const {productName, productPrice, preDiscount, id} = productOnCart;
                const count = cartItem.count;
                return {productName, count, productPrice: productPrice * count, saved: preDiscount ? (preDiscount - productPrice) * count : 0, id}
            }
        });
        const itemCount = cart.reduce((acc, item) => acc + item.count, 0);
        const orderSummery = dataTable.reduce((accumelator, {productName, productPrice, count, id}) => {
            const itemOnOrder = {
                productName,
                productPrice,
                count,
                id
            }
            return {
                ...accumelator,
                items: [...accumelator.items, {...itemOnOrder}],
                price: accumelator.price + (+productPrice * count)
            }
        }, {items: [], price: 0})

        return (
            <div className="userCart">
                <Grid container justify="center" alignItems="flex-start">
                    <Grid item container xs sm={10} justify="center" alignItems="center">
                        <Grid item xs={12}>
                            <Typography className="header" variant="subheading" component="h3"> check out</Typography>
                        </Grid>
                        <Grid item container xs={11} justify="center">
                            <Grid item xs={12}>
                                <Typography variant="subheading" className="summery" component="p">
                                    {orderSummery.price > 0 ? <Fragment>
                                            you have <span className="cartcount">{itemCount}</span> items on your cart
                                            that casts <span className="priceToPay">{orderSummery.price + '$'}</span>
                                            {/*150$ adn you have saved <span
                                     className="savedPrice">32$</span>*/}
                                        </Fragment> :
                                        <Fragment>
                                            <span>your cart is empty</span>
                                            <Button className="shopNow" mini onClick={() => push('/products')}>
                                                <Typography component="span" variant="subheading" className="SOText"> shop
                                                    now</Typography>
                                            </Button>
                                        </Fragment>
                                    }
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <div className="tableWrapper">
                                    {dataTable.length > 0 &&
                                    <AkTable data={dataTable} action={(id) => <CartActions id={id}/>}
                                             labels={['name', 'count', 'price', 'saved']}/>}
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container xs sm={10} justify="center" alignItems="center">
                        <Grid xs={11}>
                            <div className="orderSubmitionButton">
                                {/*   <Button variant="raised" color="primary" className="saveItForNow">
                                    <Typography component="span" variant="subheading" className="SOText">save </Typography>
                                </Button>*/}
                                {dataTable.length > 0 &&

                                <Button variant="raised" color="primary" onClick={() => this.props.addOrder(orderSummery,() => push('/products'))}>
                                    <Typography component="span" variant="subheading" className="SOText"> order
                                        now</Typography>
                                </Button>}
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapstateToProps = state => {
    return {
        cart: state.user.cart,
        info: state.user.info,
        products: state.products.products
    }
};
const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch({type: REMOVE_FROM_CART, payload: {item: {id}}}),
        addToCart: (id, action) => dispatch(addToCart(id, action)),
        addOrder: (order,callBack) => dispatch(addOrder(order,callBack))
    }
};

export default withRouter(connect(mapstateToProps, mapDispatchToProps)(UserCart));