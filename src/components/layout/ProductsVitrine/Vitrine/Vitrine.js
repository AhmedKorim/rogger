import React from 'react';
import './Vitrine.scss';
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";
import Icon from "@material-ui/core/es/Icon/Icon";
import Button from "@material-ui/core/Button/Button";
import ProductCard from "../../ProductCard/ProductCard";
import Typography from "@material-ui/core/Typography/Typography";
import {connect} from "react-redux";

const styles = theme => ({
    header: {
        boxShadow: theme.shadows[2]
    }
})
const Vitrine = props => {
    const {classes, products} = props;
    const data = Object.entries(products).map(product => {
        const item = product[1];
            item.id = product[0]
        return item;
    })
    return (
        <div className="vitrine">
            <header className={classes.header}>
                <Toolbar>
                    <Grid container alignItems="center" className="upperNavigation">
                        <Grid item className="sort">
                            <Button size="small" className="smallButton">
                                <Icon>sort</Icon>
                            </Button>
                        </Grid>
                        <Grid item className="pageController">
                            <div style={{textAlign: 'center'}}>
                                <Button size="small" className="smallButton">
                                    <Icon>navigate_before</Icon>
                                </Button>
                                <Button size="small" className="smallButton">
                                    <Typography className="itemsPerPage" variant="body1">Items per page</Typography>
                                </Button>
                                <Button size="small" className="smallButton">
                                    <Icon>navigate_next</Icon>
                                </Button>
                            </div>
                        </Grid>
                        <Grid item className="layoutController" container justify="flex-end">
                            <Grid item>
                                <Button aria-label="view" size="small" className="smallButton"><Icon>view_headline</Icon></Button>
                                <Button size="small" className="smallButton"><Icon>view_module</Icon></Button>
                                <Button size="small" className="smallButton"><Icon>view_comfy</Icon></Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </header>
            <div>
                <Grid container alignItems="center" className="productCardContainer">
                    {data.map(product => <Grid item className="productCardItem"
                                               key={product.id}><ProductCard {...product} />
                    </Grid>)}
                </Grid>
            </div>
            <footer>
                <Toolbar className={[classes.header, 'l'].join(' ')}>
                    <Grid container alignItems="center" className="upperNavigation">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => <div key={i * i + 'l'}>
                            {index < 3 ? < Button size="small" className="smallButton">{i}</Button> :
                                (index === 4 && <Button size="small" className="smallButton">...</Button>)}
                        </div>)}
                        <Button variant="raised" color="primary">
                            5
                        </Button>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i, index, array) => <div key={i * index / .5 + 'lio'}>
                            {array.length >= 3 ? (index >= (array.length - 3) ? < Button size="small" className="smallButton">{i}</Button> :
                                (index === 4 && <Button size="small" className="smallButton">...</Button>))
                                : < Button variant="small" className="smallButton">{i}</Button>}
                        </div>)}
                    </Grid>
                </Toolbar>
            </footer>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        products: state.products.products
    }
}
export default connect(mapStateToProps)(withStyles(styles)(Vitrine));