import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import {connect} from "react-redux";
import ProductActions from "../../../../components/layout/productActions/ProdcutsAcitons";
import AkTable from "../../../../components/UI/Table/Table";
import {REMOVE_FROM_CART} from "../../../../dux/actions/actionTypes";
import {addToCart, like} from "../../../../dux/actions/userActions";
import '../../UserCart/UserCart.scss';
class UserWishList extends React.Component {

    addOne = (id) => {
        this.props.addToCart(id, 'addOne')
    };

    removeOne = (id) => {
        this.props.addToCart(id, 'removeOne')

    };

    render() {
        const {
            props: {
                // removeFromCart,
                liked,
                products
            },
            /*     addOne,
                 removeOne*/
        } = this;


        let dataTabel = [];
        const productsOnwishList = products.filter(product => liked.find(likedItem => product.id === likedItem.id));
        if (productsOnwishList.length > 0) {
            dataTabel = productsOnwishList.reduce((acc, itemOnWishList) => {
                const {productName, productPrice, id} = itemOnWishList;
                return [...acc, {productName, productPrice, id}]
            }, [])
        }

        return (
            <div className="userCart">
                <Grid container justify="center" alignItems="flex-start">
                    <Grid item container xs sm={10} justify="center" alignItems="center">
                        <Grid item xs={12}>
                            <Typography className="header" variant="subheading" component="h3"> wish list</Typography>
                        </Grid>
                        <Grid item container xs={11} justify="center">
                            <Grid item xs={12}>
                                <Typography variant="subheading" className="summery" component="p">
                                    you have <span className="cartcount">{liked.length}</span> items on your wish list
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <div className="tableWrapper">
                                    {dataTabel[0] &&
                                    <AkTable data={dataTabel} action={(id) => <div>
                                        <ProductActions id={id} favorite details />

                                    </div>}
                                             labels={['name', 'price']}/>}
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        liked: state.user.liked,
        info: state.user.info,
        products: state.products.products
    }
};
const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch({type: REMOVE_FROM_CART, payload: {item: {id}}}),
        addToCart: (id, action) => dispatch(addToCart(id, action)),
        toggleLike: (id) => dispatch(like(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserWishList);