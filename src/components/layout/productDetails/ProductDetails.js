import React from 'react'
import PoductImgaes from "./imgCarosel/imgCarousel";
import "./ProductDetails.scss"
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import Rating from "../rateing/Rateing";
import Price from "../price/Price";
import ProductActions from "../productActions/ProdcutsAcitons";
import Card from "@material-ui/core/Card/Card";

const ProductDetails = props => {
    return (
        <div className="productDetailsWrapper">
            <div className="proDetails">
                <div className="courouselWrapper">
                    <PoductImgaes/>
                </div>
                <div className="aboutPro">
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
                </div>
            </div>
        </div>
    )
}
export default ProductDetails