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
import {withWidth} from "@material-ui/core/es";
import ToggleButton from "@material-ui/lab/ToggleButton/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButton/ToggleButtonGroup";
import AKmenu from "../../components/UI/Menu/Menu";
import {connect} from "react-redux";
import {creatArray} from "../../tools/tools";

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


    handelView = (view) => {
        this.setState({view})
    }
    itemsPerPageChange = (value) => {
        const pages = Math.ceil(this.props.products.length / +value);
        this.setState({
            itemPerPage: +value,
            pages: Math.ceil(this.props.products.length / +value),
            currentPage: this.state.currentPage > pages ? pages - 1 : this.state.currentPage
        })
    }

    componentWillReceiveProps(nextProps, nextstate) {
        if (this.props.products.length !== nextProps.products.length) {
            const items = nextProps.products.length || 0;
            this.setState({pages: Math.ceil(items / this.state.itemPerPage)})
        }
    }

    componentWillMount() {
        console.log('component will mount');
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

        const pageCount = creatArray(pages, true);

        const prevItems = currentPage === 0 ? pageCount.slice(0, currentPage ) : pageCount.slice(0, currentPage);

        const nextItems = currentPage === pageCount.length ? pageCount.slice(currentPage + 1, pageCount.length) : pageCount.slice(currentPage + 1, pageCount.length);
        console.log(pageCount, '/n',
            prevItems, 'next items', nextItems, 'current page', currentPage
        )
        ;
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
                                        <Button size="small" className="smallButton" onClick={() => pageNavigate('next')} disabled={currentPage >= pages -1}>
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
                            <WithHeight maxHeight={350}>
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
                    <footer>
                        <Toolbar className={[classes.header, 'toolbar'].join(' ')}>
                            <Grid container alignItems="center" className="upperNavigation">
                                {prevItems.map((i, index) => <div key={i * i + 'l'}>
                                    {index < 3 ? < Button size="small" className="smallButton" onClick={() => goToPage(i)}>{i}</Button> :
                                        (index === 4 && <Button size="small" className="smallButton">...</Button>)}
                                </div>)}
                                <Button variant="raised" color="primary">
                                    {currentPage}
                                </Button>
                                {nextItems.map((i, index, array) => <div key={i * index / .5 + 'lio'}>
                                    {array.length >= 3 ? (index >= (array.length - 3) ?
                                        < Button size="small" className="smallButton" onClick={() => goToPage(i)}>{i}</Button> :
                                        (index === 4 && <Button size="small" className="smallButton">...</Button>))
                                        : < Button variant="small" className="smallButton" onClick={() => goToPage(i)}>{i}</Button>}
                                </div>)}
                            </Grid>
                        </Toolbar>
                    </footer>
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
