import React from 'react'
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Grid from "@material-ui/core/Grid/Grid";
import {withStyles, withWidth} from '@material-ui/core'
import Typography from "@material-ui/core/Typography/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import Icon from "@material-ui/core/Icon/Icon";

const styles = theme => {
    console.log(theme);
    return ({

        mini: {
            maxHeight: 30,
            minHeight: 30,
            boxShadow: theme.shadows[5],
            position: 'relative',
            zIndex: 2

        },
        grid: {
            [theme.breakpoints.down('md')]: {
                margin: '5px 0'
            }
        },
        shadow: {
            boxShadow: theme.shadows[5]
        },
        richToolbar: {
            backgroundColor: theme.palette.background.default
        },
        flex: {
            justifyContent: "center",
            alignItems: "baseline"
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
                        <Grid container>
                            <Grid item xs className={classes.grid}>
                                currency
                            </Grid>
                            <Grid item xs className={classes.grid}>
                                language
                            </Grid>
                            <Grid item xs className={classes.grid}>
                                account
                            </Grid>
                            <Grid item xs className={classes.grid}>
                                location
                            </Grid>
                        </Grid>
                    </div>
                </Toolbar>
                <Toolbar variant="regular" className={classes.richToolbar}>
                    <div className="container">
                        <Grid container className={classes.flex}>
                            <Grid item xs={3} md={2}>
                                <Typography variant="headline">
                                    Rogger
                                </Typography>
                            </Grid>
                            <Grid item xs={9} md>
                                <div>
                                    <Grid container spacing={8} alignItems="flex-end" >
                                        <Grid item>
                                            <Icon color="primary">search</Icon>
                                        </Grid>
                                        <Grid item>
                                            <TextField id="input-with-icon-grid" label="search evey thing"/>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item md>
                            </Grid>
                        </Grid>
                    </div>
                </Toolbar>
            </AppBar>
        </header>
    )
}
export default withWidth()(withStyles(styles)(Header));