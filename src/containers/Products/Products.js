import React from 'react';
import withPadding from "../../HOC/WithPadding/WithPadding";
import Breadcrumbs from "../../components/UI/Breadcrumbs/breadcrumbs";
import Container from "../../HOC/Container/Container";
import Grid from "@material-ui/core/Grid/Grid";
import VitrineControler from "../../components/layout/ProductsVitrine/VitrineControler/VitrineControler";
import Vitrine from "../../components/layout/ProductsVitrine/Vitrine/Vitrine";


class Products extends React.Component {
    render() {
        return (
            <div className="products">
                <Breadcrumbs/>
                <Container>
                    <Grid container>
                        <Grid item md={3}>
                            <VitrineControler/>
                        </Grid>
                        <Grid item md>
                            <Vitrine/>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default withPadding(Products);
