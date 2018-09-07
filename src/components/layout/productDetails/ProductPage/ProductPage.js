import React, {Fragment} from 'react';
import './ProuductPage.scss';
import withPadding from "../../../../HOC/WithPadding/WithPadding";
import Breadcrumbs from "../../../UI/Breadcrumbs/breadcrumbs";
import Container from "../../../../HOC/Container/Container";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import {withStyles, withWidth} from "@material-ui/core";
import Card from "@material-ui/core/Card/Card";
import Panner from "../../Panner/Panner";
import EnhancedTabs from "../../../UI/EnhancedTabs/EnhancedTabs";
import ProductDetails from "../ProductDetails";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    shadow: {
        boxShadow: theme.shadows[3]
    },
    pannerCont: {
        marginTop: '0 0 .6rem 0'
    }
});

class ProductPage extends React.Component {


    render() {
        const {
            props: {
                width,
                classes,
                products,
                match
            },
        } = this;
        console.log(products, match.params);
        const product = products.find(product => product.id === match.params.productId);
        return (
            <div className="productPage">
                {product && <Fragment>
                    <Breadcrumbs/>
                    <Container>
                            <Grid container alignItems="flex-start">
                                <Grid item container xs lg={10}>
                                    <ProductDetails product={product}/>
                                    <Grid container>
                                        <Grid xs>
                                            <Card className={classes.root}>
                                                <EnhancedTabs
                                                    value={0}
                                                    tab={[
                                                        {label: 'about'},
                                                        {label: 'reviews'},
                                                        {label: 'FQA'}
                                                    ]}
                                                >
                                                    <div>
                                                        <Typography variant="subheading">About</Typography>
                                                        <br/>
                                                        <br/>
                                                        <br/>
                                                        <br/>
                                                        <br/>
                                                    </div>
                                                    <div>
                                                        <Typography variant="subheading">reviews</Typography>
                                                    </div>
                                                    <div>
                                                        <Typography variant="subheading">FQA</Typography>
                                                    </div>
                                                </EnhancedTabs>
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
                </Fragment>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.products
    }
};
export default withRouter(connect(mapStateToProps)(withStyles(styles)(withWidth()(withPadding(ProductPage)))));