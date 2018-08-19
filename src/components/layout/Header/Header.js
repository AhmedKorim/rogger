import React from 'react'
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

const styles = theme => {
    console.log(theme);
    return ({
        mini: {
            maxHeight: 38,
            minHeight: 38,
            boxShadow: theme.shadows[0],
            position: 'relative',
            zIndex: 2,
            padding: 0
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
        }
    });
}
const Header = props => {
    const {
        classes,
        width
    } = props;
    // if width is lower than md show hamburger menu
    return (
        <header>
            <AppBar position="fixed" className={[classes.shadow].join(' ')}>
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
                                            listItems={["login", 'logout']}
                                            icon="shopping_cart"
                                            count={5}
                                            bLabel="cart">
                                        </AKmenu>
                                    </Grid>
                                    <Grid item xs className={classes.grid}>
                                        <AKmenu
                                            listItems={["login", 'logout']}
                                            icon="list-alt"
                                            count={5}
                                            bLabel="wishlist">
                                        </AKmenu>
                                    </Grid>
                                    <Grid item xs className={classes.grid}>
                                        <AKmenu
                                            listItems={["login", 'logout']}
                                            icon="compare"
                                            count={5}
                                            bLabel="compare">
                                        </AKmenu>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {width === 'lg' ? < Grid item xs>
                                <Grid container alignItems="center" justify="flex-end">
                                    <StoreSetting/>
                                </Grid>
                            </Grid> : null}
                        </Grid>
                    </div>
                </Toolbar>
                <Toolbar variant="regular" className={classes.richToolbar}>
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
                </Toolbar>
                <CategoriseMenu/>
            </AppBar>
        </header>
    )
}
export default withWidth()(withStyles(styles)(Header));