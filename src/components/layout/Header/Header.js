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
import {HEADER_DIM} from "../../../dux/actions/actionTypes";
import {getStyle} from "../../../tools/tools";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import ShoppingCart from "../Cart/Cart";
import Container from "../../../HOC/Container/Container";
import './Header.scss';
import UserWidget from "../UserWidget/UserWidget";
import Notification from "../Notification/Notification";
import IconButton from "@material-ui/core/IconButton/IconButton";
import SideDrawe from "../../UI/Sidedrawer/SideDrawer";

const styles = theme => {

    return ({
        mini: {
            boxShadow: theme.shadows[0],
            position: 'relative',
            zIndex: 2,
            padding: ".2rem 0",
            backgroundColor: theme.palette.primary.main
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
            paddingTop: ".6rem",
            paddingBottom: ".6rem"
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

    state = {
        marge: false,
        open: true
    }

    componentDidMount() {
        this.calcHeight();
        window.addEventListener('resize', this.calcHeight)
    }

    calcHeight = () => {
        if (!this.headerRef) return;
        const heaerheight = getStyle(this.headerRef, "height");
        let richHeaderHeight = 0;
        if (this.props.location.pathname !== '/home') {
            this.props.setHeight(heaerheight);
            if (!this.state.marge) {
                this.setState({marge: true})
            }
            return;
        }
        const scrollY = this.props.scrollY;
        const transfromPC = scrollY / 450 * 100 < 101 ? scrollY / 450 * 100 : 101;
        if (this.richHeader) {
            richHeaderHeight = scrollY ? getStyle(this.richHeader, "height") / transfromPC : getStyle(this.richHeader, "height");
        }
        this.props.setHeight(heaerheight + richHeaderHeight)
    }

    componentDidUpdate() {
        this.calcHeight();
    }

    loadRichHeader = () => {
        const hasHome = this.props.location.pathname.indexOf('home') > 0;
        const hasProducts = this.props.location.pathname.indexOf('products') > 0;
        const mobile = this.props.width === 'xs' || this.props.width === 'sm';
        return ((hasHome && !mobile))
    }

    manageScroll = () => {
        const mobile = this.props.width === 'xs' || this.props.width === 'sm';
        if (mobile) return;
        const scrollY = this.props.scrollY || 0;
        if (this.props.location.pathname !== '/home') {
            return {transform: `translate3d(0, ${0}%, 0)`}
        }
        if (scrollY > 200) {
            // startScroll the rich header
            const transfromPC = scrollY / 450 * 100;
            if (transfromPC >= 100 && !this.state.marge) {
                this.setState({marge: true})
            } else if (this.state.marge && transfromPC < 100) {
                this.setState({marge: false})
            }
            if (transfromPC > 101) return {transform: `translate3d(0, ${-101}%, 0)`}
            return {transform: `translate3d(0, ${-transfromPC}%, 0)`}
        } else {
            if (this.state.marge) {
                console.log('fixhere');
                this.setState({marge: false})
            }
        }
        return {transform: `translate3d(0, ${0}%, 0)`}
    }
    handelDrawerClose = () => {
        this.setState(prevState => ({open: !prevState.open}))
    }


    // if width is lower than md show hamburger menu
    render() {
        const {
            state: {
                marge,
                open
            },
            props: {
                classes,
                width,
                userInfo,
                compared,
                liked,
                cartCount,
                orders,
            },
            handelDrawerClose,
            manageScroll,
            loadRichHeader
        } = this;
        const notificationCount = orders.concat(liked, compared).length;
        console.log(width === 'xs' || width === 'sm');
        return (
            <AppBar position="fixed" className={[classes.shadow, 'mainHeader'].join(' ')}>
                <div ref={(node) => this.headerRef = node} className="mainToolbarWrapper">
                    <Toolbar variant="dense" className={[classes.mini, 'toolbar'].join(' ')}>
                        <Container>
                            <Grid container justify="center" alignItems="center" className="GridToolbar">
                                {(width === 'xs' || width === 'sm') ?
                                    <Fragment>
                                        <Grid className="rightGrid" item xs container justify="flex-start" alignItems="center">
                                            <Grid>
                                                <IconButton color="inherit" onClick={handelDrawerClose}><Icon>menu</Icon></IconButton>
                                            </Grid>
                                        </Grid>
                                        <SideDrawe open={open} handelDrawerClose={handelDrawerClose}/>
                                    </Fragment>
                                    : <Fragment>
                                        <Grid className="rightGrid" item xs container justify="flex-start" alignItems="center">
                                            <StoreSetting/>
                                        </Grid>
                                        {marge ? <Grid item xs className="list-grid">
                                                <Navigation
                                                    selected='selectedNav'
                                                    indercatorClass='indercatorClass'
                                                    rootClass='rootClass'
                                                    tabRootClass='tabRootClass'
                                                />
                                            </Grid> :
                                            <Typography variant="subheading" className="welcomeMessage" component="p"> Welcome To Rogger store</Typography>}
                                    </Fragment>}
                                <Grid className="leftGrid" item xs container justify="flex-end" alignItems="center">
                                    <Grid item>
                                        <AKmenu
                                            icon="notifications"
                                            count={notificationCount}
                                            tip="notifications">
                                            <Notification/>
                                        </AKmenu>
                                    </Grid>
                                    <Grid item>
                                        <AKmenu
                                            icon="shopping_cart"
                                            count={cartCount}
                                            tip="shopping cart">
                                            <ShoppingCart/>
                                        </AKmenu>
                                    </Grid>
                                    <Grid item>
                                        <AKmenu
                                            icon="account_circle"
                                            count={0}
                                            tip="account">
                                            <UserWidget/>
                                        </AKmenu>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    </Toolbar>
                    {loadRichHeader() && <div className="richHeaderWrapper" style={manageScroll()} ref={node => this.richHeader = node}>
                        <Toolbar variant="regular" className={[classes.richToolbar].join(' ')}>
                            <div className="container">
                                <Grid container className={classes.flex}>
                                    <Grid item xs={3} md={2}>
                                        <Typography variant="headline" className={classes.brand}>
                                            Rogger
                                        </Typography>
                                    </Grid>
                                    <Grid item md>
                                        <Navigation
                                        />
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
                        </Toolbar> <CategoriseMenu/></div>
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
        scrollY: state.UI.scrollY,
        userInfo: state.user.info,
        compared: state.user.compared,
        liked: state.user.liked,
        orders: state.user.orders,
        cartCount: state.user.cart.length
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withWidth()(withStyles(styles)(Header))));