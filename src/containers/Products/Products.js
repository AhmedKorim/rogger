import React from 'react';
import withPadding from "../../HOC/WithPadding/WithPadding";
import Breadcrumbs from "../../components/UI/Breadcrumbs/breadcrumbs";
import Container from "../../HOC/Container/Container";
import Grid from "@material-ui/core/Grid/Grid";
import VitrineControler from "../../components/layout/ProductsVitrine/VitrineControler/VitrineControler";
import Vitrine from "../../components/layout/ProductsVitrine/Vitrine/Vitrine";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Button from "@material-ui/core/Button/Button";
import Icon from "@material-ui/core/es/Icon/Icon";
import Typography from "@material-ui/core/Typography/Typography";
import {withStyles} from "@material-ui/core";
import './Products.scss';
import WithHeight from "../../HOC/WithHeight";

const styles = theme => ({
    header: {
        boxShadow: theme.shadows[2],
        margin: ".6rem 0"
    },
})

class Products extends React.Component {
    state = {
        pages: 0,
        itemPerPage: 15
    }

    render() {
        const {
            props: {
                classes, headerHeight

            },
            state: {
                pages,
                itemPerPage
            }
        } = this;
        return (
            <div className="products">
                <Breadcrumbs/>
                <Container>
                    <header className={classes.header}>
                        <Toolbar className="toolbar">
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
                    <Grid container>
                        <Grid item md={3} lg={2}>
                            <WithHeight maxHeight={300}>
                                <VitrineControler/>
                            </WithHeight>
                        </Grid>
                        <Grid item md lg>
                            <WithHeight maxHeight={headerHeight + 170}>
                                <Vitrine/>
                            </WithHeight>
                        </Grid>
                    </Grid>
                    <footer>
                        <Toolbar className={[classes.header, 'toolbar'].join(' ')}>
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
                </Container>
            </div>
        )
    }
}

export default withStyles(styles)(withPadding(Products));
