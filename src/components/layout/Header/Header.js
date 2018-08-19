import React from 'react'
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Grid from "@material-ui/core/Grid/Grid";

const styles = theme => ({})
const Header = props => {

    return (
        <header>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Grid container>
                        <Grid item xs={6} md>
                            currency
                        </Grid>
                        <Grid item xs={6} md>
                            language
                        </Grid>
                        <Grid item xs={6} md>
                            account
                        </Grid>
                        <Grid item xs={6} md>
                            location
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </header>
    )
}
export default Header