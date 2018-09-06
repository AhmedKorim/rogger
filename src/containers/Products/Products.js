import React from 'react';
import withPadding from "../../HOC/WithPadding/WithPadding";
import Breadcrumbs from "../../components/UI/Breadcrumbs/breadcrumbs";
import Container from "../../HOC/Container/Container";
import Grid from "@material-ui/core/Grid/Grid";
import VitrineControler from "../../components/layout/ProductsVitrine/VitrineControler/VitrineControler";
import Vitrine from "../../components/layout/ProductsVitrine/Vitrine/Vitrine";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Button from "@material-ui/core/Button/Button";

import {withStyles} from "@material-ui/core";
import './Products.scss';
import WithHeight from "../../HOC/WithHeight";
import {withWidth} from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButton/ToggleButtonGroup";
import AKmenu from "../../components/UI/Menu/Menu";
import {connect} from "react-redux";
import ProductsFooter from "./Footer";
import Icon from "@material-ui/core/Icon/Icon";




const styles = theme => ({
    header: {
        boxShadow: theme.shadows[2],
        margin: ".6rem 0",
        position: 'relative',
        zIndex: 865
    },
})

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'normal',
            pages: props.products ? Math.ceil(props.products / 5) : 0,
            currentPage: 0,
            itemPerPage: 5,

        };
    }

    componentWillReceiveProps(nextProps, nextstate) {
        console.log('component  will recived props');

        if (this.props.products.length !== nextProps.products.length) {
            const items = nextProps.products.length || 0;
            console.log('component  will recived props');
            this.setState({pages: Math.ceil(items / this.state.itemPerPage)})
        }
    }

    componentWillMount() {
        const pages = Math.ceil(this.props.products.length / +this.state.itemPerPage);
        if (this.props.products.length !== pages) {
            this.setState({pages})
        }
    }


    handelView = (view) => {
        if (!view ) return;
        this.setState({view})
    }

    itemsPerPageChange = (value) => {
        console.log(value);
        const pages = Math.ceil(this.props.products.length / +value);

        this.setState({
            itemPerPage: +value,
            pages: pages,
            currentPage: this.state.currentPage > pages ? pages - 1 : this.state.currentPage
        })
    }


    goToPage = (pageIndex) => {
        this.setState({currentPage: pageIndex})
    }

    pageNavigate = (action) => {
        if (!action) return;
        const accumulator = action === 'next' ? 1 : -1;
        this.setState(prevState => ({currentPage: prevState.currentPage + accumulator}))
    }


    render() {
        const {
            props: {
                classes, headerHeight, width,
                products
            },
            state: {
                view,
                pages,
                currentPage,
                itemPerPage,
            },
            handelView,
            goToPage,
            pageNavigate,
            itemsPerPageChange
        } = this;

        const slicedProducts = products.slice((itemPerPage * currentPage), (itemPerPage * currentPage) + itemPerPage);
        return (
            <div className="products">
                <Breadcrumbs/>
                <Container>
                    <header className={classes.header}>
                        <Toolbar className="toolbar">
                            <Grid container alignItems="center" className="upperNavigation" justify="center">
                                <Grid className={(width === 'sm' || width === 'xs') ? null : 'sort'}>
                                    <Button size="small" className="smallButton">
                                        <Icon>sort</Icon>
                                    </Button>
                                </Grid>
                                <Grid item className="pageController">
                                    <div style={{textAlign: 'center'}}>
                                        <Button size="small" className="smallButton" onClick={() => pageNavigate('prev')} disabled={currentPage === 0}>
                                            <Icon>navigate_before</Icon>
                                        </Button>
                                        <div style={{display: 'inline-block'}}>
                                            <AKmenu
                                                listItems={["5", "15", "25"]}
                                                count={0}
                                                value={itemPerPage}
                                                change={itemsPerPageChange}
                                                label={`${itemPerPage} items/page`}>
                                            </AKmenu>
                                        </div>
                                        <Button size="small" className="smallButton" onClick={() => pageNavigate('next')} disabled={currentPage >= pages - 1}>
                                            <Icon>navigate_next</Icon>
                                        </Button>
                                    </div>
                                </Grid>
                                {!(width === 'xs' || width === 'sm') && <Grid item className="layoutController" container justify="flex-end">
                                    <Grid item>
                                        <ToggleButtonGroup value={view} exclusive onChange={handelView}>
                                            <ToggleButton value="expanded">
                                                <Icon>view_headline</Icon>
                                            </ToggleButton>
                                            <ToggleButton value="large">
                                                <Icon>view_module</Icon>
                                            </ToggleButton>
                                            <ToggleButton value="normal">
                                                <Icon>view_comfy</Icon>
                                            </ToggleButton>
                                        </ToggleButtonGroup>
                                    </Grid>
                                </Grid>
                                }
                            </Grid>
                        </Toolbar>
                    </header>
                    <Grid container>
                        {!(width === 'xs' || width === 'sm') && <Grid item md={3} lg={2}>
                            <WithHeight maxHeight={400}>
                                <VitrineControler/>
                            </WithHeight>
                        </Grid>
                        }
                        <Grid item md lg>
                            <WithHeight maxHeight={headerHeight + 170}>
                                <Vitrine view={view} products={slicedProducts}/>
                            </WithHeight>
                        </Grid>
                    </Grid>
                    <ProductsFooter currentPage={currentPage} pages={pages} goToPage={goToPage} classes={classes}/>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.products
    }
}
export default connect(mapStateToProps)(withStyles(styles)(withWidth()(withPadding((Products)))));
