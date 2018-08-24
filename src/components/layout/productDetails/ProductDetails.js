import React from 'react'
import PoductImgaes from "./imgCarosel/imgCarousel";
import "./ProductDetails.scss"
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import Rating from "../Rateing/Rateing";
import Price from "../price/Price";
import ProductActions from "../productActions/ProdcutsAcitons";
import Grid from "@material-ui/core/Grid/Grid";

const ProductDetails = props => {
    return (
        <div className="productDetailsWrapper">
            <Grid container className="proDetails">
                <Grid xs={12} md={6}  item className="courouselWrapper">
                    <PoductImgaes/>
                </Grid >

                <Grid xs={12} md={6} item className="aboutPro">
                    <header>
                        <Typography className="poHeading" variant="display1">
                            product name
                        </Typography>
                    </header>
                    <div className="status">
                        <div><Typography> <span className="poLandmark">Category</span> : <span className="poValue">electronics</span></Typography></div>
                        <div><Typography> <span className="poLandmark">Available</span> : <span className="poValue"> 5 pieces</span> </Typography></div>
                    </div>
                    <div className="priceARate">
                        <Price/>
                        <Rating/>
                    </div>
                    <div>
                        <Typography variant="body2" className="proDescription">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias assumenda cum delectus deserunt eius esse eveniet fuga
                            hic illum, ipsam iste magni modi, necessitatibus praesentium quia quis tempore!
                        </Typography>
                    </div>
                    <Divider className="proDivider"/>
                    <ProductActions/>
                </Grid>
            </Grid>
        </div>
    )
}
export default ProductDetails