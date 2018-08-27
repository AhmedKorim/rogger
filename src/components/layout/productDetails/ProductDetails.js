import React, {Fragment} from 'react'
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
import Card from "@material-ui/core/Card/Card";
import AkTabs from "../../UI/Taps/Taps";
import Panner from "../Panner/Panner";
import Container from "../../../HOC/Container/Container";
import {withStyles} from "@material-ui/core";

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

const ProductDetails = props => {
    const {product, classes} = props;
    return (
        <div className="productDetailsc">
            <Grid container alignItems="stretch">
                <Grid item className="GridItemD" xs={12} md={5} lg={6}>
                    <PoductImgaes/>
                </Grid>
                <Grid item className="GridItemD productDetails" xs={12} md={7} lg={6}>
                    <div className="ProductDescription">
                        <ProductHeader/>
                        <Rating/>
                        <div className="status">
                            <div><Typography className="typoG">Category</Typography> : <Category/></div>
                            <div><Typography className="typoG">Availability</Typography> : <Typography className="typoG matchCat ">5
                                pieces</Typography></div>
                        </div>
                        <div className="aboutProduct">
                            <Typography variant="body2" className="proDescription">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias assumenda cum delectus deserunt eius
                                esse
                                eveniet fuga
                                hic illum, ipsam iste magni modi, necessitatibus praesentium quia quis tempore!
                            </Typography>
                        </div>
                        <div className="priceAndAction">
                            <Grid container alignItems="center" justify="flex-start">
                                <Grid item xs><Price/></Grid>
                                <Grid item xs>
                                    <CartActions/>
                                </Grid>
                            </Grid>
                        </div>
                        <Divider className="proDivider"/>
                    </div>
                    <ProductActions/>
                </Grid>
            </Grid>
        </div>

    )
}
export default withStyles(styles)(ProductDetails)