import {withWidth} from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";
import React from 'react';
import {connect} from "react-redux";
import Vitrine from "../../../../components/layout/ProductsVitrine/Vitrine/Vitrine";

class ComparedList extends React.Component {
    render() {
        const {
            props: {
                products,
                comparedList,
                width
            }

        } = this;
        const productsOnCompare = products.filter(product => comparedList.find(item => item.id === product.id))
        return (
            <Grid container justify="center" alignItems="center">
                <Grid item xs>
                    <Vitrine
                        width={width}
                        products={productsOnCompare}
                    />
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.products,
        comparedList: state.user.compared,

    }
}


export default connect(mapStateToProps)(withWidth()(ComparedList));