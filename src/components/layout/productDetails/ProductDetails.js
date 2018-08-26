import React, {Fragment} from 'react'
import PoductImgaes from "./imgCarosel/imgCarousel";
import "./ProductDetails.scss"
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import Rating from "../Rateing/Rateing";
import Price from "../price/Price";
import ProductActions from "../productActions/ProdcutsAcitons";
import Grid from "@material-ui/core/Grid/Grid";

const ProductDetails = props => {
    const {product} = props;
    return (
        <Fragment> {product && <div className="productDetailsWrapper">
            <Grid container className="proDetails">
                <Grid xs={12} md={6} item className="courouselWrapper">
                    <PoductImgaes/>
                </Grid>
                <Grid xs={12} md={6} item className="aboutPro">
                    <header>
                        <Typography className="poHeading" variant="display1">
                            {product.productName}
                        </Typography>
                    </header>
                    <div className="status">
                        <div><Typography> <span className="poLandmark">Category</span> : <span className="poValue">electronics</span></Typography></div>
                        <div><Typography> <span className="poLandmark">Available</span> : <span className="poValue"> 5 pieces</span> </Typography></div>
                    </div>
                    <div className="priceARate">
                        <Price {...product} />
                        <Rating/>
                    </div>
                    <div>
                        <Typography variant="body2" className="proDescription">
                            {product.productDescription}
                        </Typography>
                    </div>
                    <Divider className="proDivider"/>
                    <ProductActions/>
                </Grid>
            </Grid>
        </div>}</Fragment>
    )
}
export default ProductDetails