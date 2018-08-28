import React, {Fragment} from 'react'
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Grid from "@material-ui/core/Grid/Grid";
import {withStyles, withWidth} from '@material-ui/core'
import Typography from "@material-ui/core/Typography/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import Icon from "@material-ui/core/Icon/Icon";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import Navigation from "../Navigation/Navigation";
import AKmenu from "../../UI/Menu/Menu";
import StoreSetting from "../StoreSetting/StoreSetting";
import CategoriseMenu from "../CategoryMenu/CatergoryMenu";
import {HEADER_DIM} from "../../../dux/actions/uiActions";
import {getStyle} from "../../../tools/tools";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import ShoppingCart from "../Cart/Cart";
import Container from "../../../HOC/Container/Container";
import './Header.scss';
const styles = theme => {

    return ({
        mini: {

            boxShadow: theme.shadows[0],
            position: 'relative',
            zIndex: 2,
            padding: ".2rem 0"
        },
        grid: {},
        hidden: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }

        },
        shadow: {
            boxShadow: theme.shadows[5]
        },
        richToolbar: {
            backgroundColor: theme.palette.background.paper,
            paddingTop: "1rem",
            paddingBottom: "1rem"
        },
        flex: {
            justifyContent: "center",
            alignItems: "center"
        },
        input: {
            width: "100%"
        },
        brand: {
            textTransform: 'uppercase',
            fontWeight: 600,
            color: theme.palette.action.active
        },
        iconButton: {
            position: "absolute",
            top: "-10px",
            color: theme.palette.action.active,

        },
        Gray: {
            color: "#ffe"
        },
        mainHeader: {
            overflow: 'hidden'
        }
    });
}

class Header extends React.Component {


    componentDidMount() {
        this.calcHeight();
        window.addEventListener('resize', this.calcHeight)

    }

    calcHeight = () => {
        if (!this.headerRef) return;
        this.props.setHeight(getStyle(this.headerRef, "height"))
        console.log(getStyle(this.headerRef, "height"));

    }

    componentDidUpdate() {
        this.calcHeight();
    }

    loadRichHeader = () => {
        const hasHome = this.props.location.pathname.indexOf('home') > 0;
        const hasProducts = this.props.location.pathname.indexOf('products') > 0;
        return (hasHome)
    }


    // if width is lower than md show hamburger menu
    render() {
        const {
            props: {
                classes,
                width,
                userInfo,
                compared,
                wishList,
                cartCount
            },
            loadRichHeader
        } = this;
        return (
            <AppBar position="fixed" className={[classes.shadow,'mainHeader'].join(' ')}>
                <div ref={(node) => this.headerRef = node}>
                    <Toolbar variant="dense" className={[classes.mini,'toolbar'].join(' ')}>
                        <Container>
                            <Grid container justify="center" alignItems="center" className="GridToolbar">
                                <Grid className="leftGrid" item xs={12} sm container justify="flex-start" alignItems="center">
                                    <Grid xs item>
                                        <AKmenu
                                            listItems={["eng", 'fb', 'ar']}
                                            icon="compare"
                                            count={0}
                                            tip="compare">
                                        </AKmenu>
                                    </Grid>
                                    <Grid xs item>
                                        <AKmenu
                                            listItems={["eng", 'fb', 'ar']}
                                            icon="favorite"
                                            count={0}
                                            tip="wish list">
                                        </AKmenu>
                                    </Grid>
                                    <Grid xs item>
                                        <AKmenu
                                            icon="shopping_cart"
                                            count={cartCount}
                                            tip="shopping cart">
                                            <ShoppingCart/>
                                        </AKmenu>
                                    </Grid>
                                </Grid>
                                <Grid className="rightGrid" item xs container justify="flex-end" alignItems="center">
                                    <StoreSetting/>
                                </Grid>
                            </Grid>
                        </Container>
                    </Toolbar>
                    {loadRichHeader() && <Fragment>
                        <Toolbar variant="regular" className={[classes.richToolbar].join(' ')}>
                            <div className="container">
                                <Grid container className={classes.flex}>
                                    <Grid item xs={3} md={2}>
                                        <Typography variant="headline" className={classes.brand}>
                                            Rogger
                                        </Typography>
                                    </Grid>
                                    <Grid item md>
                                        <Navigation/>
                                    </Grid>
                                    <Grid item xs={9} md={3}>
                                        <TextField
                                            className={classes.input}
                                            id="input-with-icon-textfield"
                                            placeholder="search.."
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <Icon color="primary">search</Icon>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                        </Toolbar> <CategoriseMenu/></Fragment>

                    }
                </div>
            </AppBar>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        setHeight: (dim) => dispatch({type: HEADER_DIM, dim})
    }
}
const mapStateToProps = state => {
    return {
        userInfo: state.user.info,
        compared: state.user.compared,
        wishList: state.user.wishList,
        cartCount: state.user.cart.length
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withWidth()(withStyles(styles)(Header))));