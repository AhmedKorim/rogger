import React from 'react';
import './Vitrine.scss';
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";
import ProductCard from "../../ProductCard/ProductCard";
import {connect} from "react-redux";

const styles = theme => ({
    header: {
        boxShadow: theme.shadows[2],
    },
})

const Vitrine = props => {

    const {
        classes, products

    } = props;
    const data = products || [];

    return (
        <div className="vitrine">
            <div>
                <Grid container alignItems="center" className="productCardContainer">
                    {data.slice(0, 12).map(product => <Grid item className="productCardItem"
                                                            key={product.id}><ProductCard {...product} />
                    </Grid>)}
                </Grid>
            </div>

        </div>
    )
}


const mapStateToProps = state => {
    return {
        products: state.products.products
    }
}
export default connect(mapStateToProps)(withStyles(styles)(Vitrine));