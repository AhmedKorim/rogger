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
import {withStyles, withWidth} from "@material-ui/core";
import Category from "../category/category";
import CartActions from "../../Cart/CartActions/CartActions";
import Card from "@material-ui/core/Card/Card";
import Panner from "../../Panner/Panner";
import AkTabs from "../../../UI/Taps/Taps";


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

class ProductPage extends React.Component {



    render() {
        const {
            props: {
                width,
                classes
            },
        } = this;
        return (
            <div className="productPage">
                <Breadcrumbs/>
                <Container>
                    <Grid container alignItems="flex-start">
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
                            <Grid container>
                                <Grid xs>
                                    <Card className={classes.root}>
                                        <AkTabs
                                            value={0}
                                            toolbarClasses={["toolBar", classes.shadow]}
                                            tab={[
                                                {label: 'about'},
                                                {label: 'reviews'},
                                                {label: 'FQA'}
                                            ]}
                                        >
                                            <div>
                                                <Typography variant="subheading">About</Typography>
                                            </div>
                                            <div>
                                                <Typography variant="subheading">reviews</Typography>
                                            </div>
                                            <div>
                                                <Typography variant="subheading">FQA</Typography>
                                            </div>
                                        </AkTabs>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        {(width === 'lg' || width === 'xl') ? (
                            <Grid item lg className={classes.pannerCont}>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i, index) => <div key={i * index + Math.random().toFixed(2)}><Panner/></div>)}
                            </Grid>
                        ) : null}
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default withStyles(styles)(withWidth()(withPadding(ProductPage)));