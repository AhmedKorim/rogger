import React from 'react';
import './Vitrine.scss';
import {withStyles, withWidth} from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";
import ProductCard from "../../ProductCard/ProductCard";
import {connect} from "react-redux";

const styles = theme => ({
    header: {
        boxShadow: theme.shadows[2],
    },
})

const Vitrine = props => {

    let {
        classes, products, view, width

    } = props;
    if (width === 'sm' || width === 'xs') {
        view = 'normal';
    } else {
        view = view || 'normal';
    }
    const data = products || [];
    return (
        <div className="vitrine">
            <div>
                <Grid container alignItems="center" className="productCardContainer">
                    {data.slice(0, 12).map(product => <Grid item xs className={["productCardItem", view].join(' ')}
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
export default connect(mapStateToProps)(withStyles(styles)(withWidth()(Vitrine)));