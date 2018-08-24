import React from 'react';
import './ProuductPage.scss';
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
import {withWidth} from "@material-ui/core";
import Category from "../category/category";

class ProductPage extends React.Component {
    render() {
        const {
            props: {
                width
            }

        } = this;
        console.log(width);
        return (
            <div className="productPage">
                <Breadcrumbs/>
                <Container>
                    <Grid container>
                        <Grid item container xs lg={10}>
                            <Grid item className="GridItemD" xs={12} md={5} lg={6}>
                                <PoductImgaes/>
                            </Grid>
                            <Grid item className="GridItemD" xs={12} md={7} lg={6}>
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
                                        <Grid container>
                                        <Grid item><Price/></Grid>
                                        <Grid item>
                                            <CartActions/>
                                        </Grid>
                                        </Grid>

                                    </div>
                                    <Divider className="proDivider"/>
                                </div>
                                <ProductActions/>
                            </Grid>
                        </Grid>
                        {(width === 'lg' || width === 'xl') ? (
                            <Grid item lg>
                                recommnded items
                            </Grid>
                        ) : null}
                    </Grid>
                </Container>
            </div>

        )
    }
}

export default withWidth()(withPadding(ProductPage));