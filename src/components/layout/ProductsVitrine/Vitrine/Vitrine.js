import React, {Component} from 'react';
import './Vitrine.scss';
import {withStyles, withWidth} from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";
import ProductCard from "../../ProductCard/ProductCard";

const styles = theme => ({
    header: {
        boxShadow: theme.shadows[2],
    },
});


class Vitrine extends Component {



    render() {
        let {
            products, view, width

        } = this.props;
        if (width === 'sm' || width === 'xs') {
            view = 'normal';
        } else {
            view = view || 'normal';
        }
        const data = products || [];
        return (
            <div className="vitrine">
                <div>
                    <Grid container justify="center">
                        <Grid container item className="productCardContainer">
                            {data.map(product => <Grid item xs className={["productCardItem", view].join(' ')}
                                                       key={product.id}><ProductCard {...product} />
                            </Grid>)}
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(withWidth()(Vitrine));