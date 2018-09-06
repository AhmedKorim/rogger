import React from 'react'
import PoductImgaes from "./imgCarosel/imgCarousel";
import "./ProductDetails.scss"
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import Rating from "../Rateing/Rateing";
import Price from "../price/Price";
import ProductActions from "../productActions/ProdcutsAcitons";
import Grid from "@material-ui/core/Grid/Grid";
import ProductHeader from "./ProdcutHeader/ProdcutHeader";
import Category from "./category/category";
import CartActions from "../Cart/CartActions/CartActions";

/*
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    shadow: {
        boxShadow: theme.shadows[3]
    },
    pannerCont: {
        marginTop: '1rem'
    }
})
*/

const ProductDetails = props => {

    const {product} = props;
    const priceRatio = product.preDiscount ? (100 - ((product.productPrice / product.preDiscount) * 100)).toFixed(2) : 0;

    return (
        <div className="productDetailsc">
            <Grid container alignItems="stretch">
                <Grid item className="GridItemD" xs={12} md={5} lg={6}>
                    <PoductImgaes product={product}/>
                </Grid>
                <Grid item className="GridItemD productDetails" xs={12} md={7} lg={6}>
                    <div className="ProductDescription">
                        <ProductHeader productName={product.productName}/>
                        <Rating/>
                        <div className="status">
                            <div><Typography className="typoG">Category</Typography> : <Category productCategory={product.productCategory}/></div>
                            <div><Typography className="typoG">Availability</Typography> : <Typography className="typoG matchCat ">5
                                pieces</Typography></div>
                        </div>
                        <div className="aboutProduct">
                            <Typography variant="body2" className="proDescription">
                                {product.productDescription}
                            </Typography>
                        </div>
                        <div className="priceAndAction">
                            <Grid container alignItems="center" justify="flex-start">
                                <Grid item xs><Price
                                    productPrice={product.productPrice}
                                    preDiscount={product.preDiscount}
                                    priceRatio={priceRatio}
                                /></Grid>
                                <Grid item xs>
                                    <CartActions id={product.id}/>
                                </Grid>
                            </Grid>
                        </div>
                        <Divider className="proDivider"/>
                    </div>
                    <ProductActions id={product.id}/>
                </Grid>
            </Grid>
        </div>

    )
}
export default ProductDetails