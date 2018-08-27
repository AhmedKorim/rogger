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
import ProductDetails from "../ProductDetails";


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
                            <ProductDetails/>
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