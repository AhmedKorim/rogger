import React from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";

import './UserCart.scss'
import AkTable from "../../../components/UI/Table/Table";
import {REMOVE_FROM_CART} from "../../../dux/actions/userActions";
import {connect} from "react-redux";

class UserCart extends React.Component {

    showItemDetails = (id) => {

    }

    remvoeFromCart = () => {
        this.props.editItem({})
    }

    render() {
        const {
            props: {
                removeFromCart,
                cart,
                products
            },
            showItemDetails,
            remvoeFromCart
        } = this;

        const productsOnCart = cart.map(item => products.find(product => product.id === item.id));
        const dataTable = productsOnCart.map(productOnCart => {
            const cartItem = cart.find(item => item.id === productOnCart.id);
            if (cartItem) {
                const {productName, productPrice, preDiscount, id} = productOnCart;
                const count = cartItem.count;
                return {productName, count, productPrice: productPrice * count, saved: preDiscount ? (preDiscount - productPrice) * count : 0, id}
            }
        })
        const itemCount = cart.reduce((acc, item) => acc + item.count, 0)
        console.log(dataTable);
        return (
            <div className="userCart">

                <Grid container justify="center" alignItems="flex-start">
                    <Grid item container xs sm={10} justify="center" alignItems="center">
                        <Grid item xs={12}>
                            <Typography className="header" variant="subheading" component="h3"> cart</Typography>
                        </Grid>
                        <Grid item container xs={11} justify="center">
                            <Grid item xs={12}>
                                <Typography variant="subheading" className="summery" component="p">
                                    you have <span className="cartcount">{itemCount}</span> items on your cart
                                    that casts <span className="priceToPay">150$</span> adn you have saved <span className="savedPrice">32$</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <div className="tableWrapper">
                                    <AkTable data={dataTable} actionA={remvoeFromCart} actionB={showItemDetails} actionAIcon="edit" actionBIcon='remove_red_eye'  labels={['name', 'count', 'price', 'saved']}/>
                                </div>
                            </Grid>
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
}
const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch({type: REMOVE_FROM_CART, payload: {item: {id}}})
    }
}

export default connect(mapstateToProps, mapDispatchToProps)(UserCart);