import React from 'react'
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Grid from "@material-ui/core/Grid/Grid";
import {withStyles} from '@material-ui/core'

const styles = theme => {
    console.log(theme);
    return ({

        mini: {
            maxHeight: 30,
            minHeight: 30,
            boxShadow: theme.shadows[5],
            position:'relative',
            zIndex:2

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
        }

    });
}
const Header = props => {
    const {
        classes
    } = props;
    return (
        <header>
            <AppBar position="fixed" className={[classes.shadow].join(' ')}>
                <Toolbar variant="dense" className={classes.mini}>
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
                </Toolbar>
                <Toolbar variant="regular" className={classes.richToolbar}>
                </Toolbar>
            </AppBar>
        </header>
    )
}
export default withStyles(styles)(Header);