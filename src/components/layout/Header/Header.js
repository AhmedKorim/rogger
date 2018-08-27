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
import Badge from "@material-ui/core/Badge/Badge";
import Button from "@material-ui/core/Button/Button";
import ShoppingCart from "../Cart/Cart";

const styles = theme => {
    ;
    return ({
        mini: {
            maxHeight: 38,
            minHeight: 38,
            boxShadow: theme.shadows[0],
            position: 'relative',
            zIndex: 2,
            padding: ".2rem 0"
        },
        grid: {
            maxHeight: "100%",
            padding: "0 .4rem",
        },
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
        this.props.setHeight(getStyle(this.headerRef, "height"))
        console.log(getStyle(this.headerRef, "height"));

    }

    componentDidUpdate() {
        this.calcHeight();
    }

    loadRichHeader = () => {
        const hasHome = this.props.location.pathname.indexOf('home') > 0;
        const hasProducts = this.props.location.pathname.indexOf('products') > 0;
        return (hasHome   )
    }


    // if width is lower than md show hamburger menu
    render() {
        const {
            props: {
                classes,
                width
            },
            loadRichHeader
        } = this;
        return (
            <AppBar position="fixed" className={[classes.shadow].join(' ')}>
                <div ref={(node) => this.headerRef = node}>
                    <Toolbar variant="dense" className={classes.mini}>
                        <div className="container">
                            <Grid container alignItems="center" justify="center">
                                <Grid item xs>
                                    <Grid container alignItems="center" justify="center">
                                        <Grid item className={classes.hidden}>
                                            <div>
                                                <Typography className={classes.Gray}>
                                                    Welcome to Rogger store
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs className={classes.grid}>
                                            <AKmenu
                                                icon="shopping_cart"
                                                count={5}
                                                tip="shopping cart">
                                                <ShoppingCart/>
                                            </AKmenu>
                                        </Grid>
                                        <Grid item xs className={classes.grid}>
                                            <AKmenu
                                                listItems={["login", 'logout']}
                                                icon="list-alt"
                                                count={5}
                                                tip="wishlist">
                                            </AKmenu>
                                        </Grid>
                                        <Grid item xs className={classes.grid}>
                                            <AKmenu
                                                listItems={["login", 'logout']}
                                                icon="compare"
                                                count={5}
                                                tip="compare">
                                            </AKmenu>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                < Grid item xs>
                                    <Grid container alignItems="center" justify="flex-end">
                                        <StoreSetting/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
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

export default withRouter(connect(null, mapDispatchToProps)(withWidth()(withStyles(styles)(Header))));