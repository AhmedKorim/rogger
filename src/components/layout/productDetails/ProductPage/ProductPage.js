import React from 'react';
import './ProuductPage.scss';
import ProductDetails from "../ProductDetails";
import withPadding from "../../../../HOC/WithPadding/WithPadding";
import Breadcrumbs from "../../../UI/Breadcrumbs/breadcrumbs";
import Container from "../../../../HOC/Container/Container";
import Grid from "@material-ui/core/Grid/Grid";
import PoductImgaes from "../imgCarosel/imgCarousel";
import Typography from "@material-ui/core/Typography/Typography";
import Price from "../../price/Price";
import Rating from "../../Rateing/Rateing";
import Divider from "@material-ui/core/Divider/Divider";
import ProductActions from "../../productActions/ProdcutsAcitons";
import ProductHeader from "../ProdcutHeader/ProdcutHeader";

class ProductPage extends React.Component {
    render() {
        return (
            <div className="productPage">
                <Breadcrumbs/>
                <Container>
                    <Grid container>
                        <Grid item className="GridItemD" xs={12} md={5}>
                            <PoductImgaes/>
                        </Grid>
                        <Grid item className="GridItemD" xs={12} md={5}>
                            <div className="ProductDescription">
                                <ProductHeader/>
                                <div className="status">
                                    <div><Typography> <span className="poLandmark">Category</span> : <span className="poValue">electronics</span></Typography>
                                    </div>
                                    <div><Typography> <span className="poLandmark">Available</span> : <span className="poValue"> 5 pieces</span> </Typography>
                                    </div>
                                </div>
                                <div className="priceARate">
                                    <Price/>
                                    <Rating/>
                                </div>
                                <div>
                                    <Typography variant="body2" className="proDescription">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias assumenda cum delectus deserunt eius esse
                                        eveniet fuga
                                        hic illum, ipsam iste magni modi, necessitatibus praesentium quia quis tempore!
                                    </Typography>
                                </div>
                                <Divider className="proDivider"/>
                            </div>
                            <ProductActions/>
                        </Grid>
                    </Grid>
                </Container>
            </div>

        )
    }
}

export default withPadding(ProductPage);