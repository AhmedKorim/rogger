import React, {Fragment} from 'react';
import {withStyles} from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableBody from "@material-ui/core/TableBody/TableBody";
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table/Table";
import Grid from "@material-ui/core/Grid/Grid";
import TableSortLabel from "@material-ui/core/es/TableSortLabel/TableSortLabel";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700
    },
    GridPadding: {
        padding: '1rem .5rem'
    }

})

class AkTable extends React.Component {
    render() {
        const {
            props: {
                classes
            },


        } = this;

        return (
            <Fragment>
                <Grid container justify="center" alignItems="center">
                    <Grid xs md={8} lg={6} className={classes.GridPadding}>
                        <Paper className={classes.root}>
                            <Table className="table" aria-label="label">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <Tooltip
                                                title="Sort"
                                                enterDelay={300}
                                            >
                                                <TableSortLabel
                                                    active
                                                >
                                                    Name
                                                </TableSortLabel>
                                            </Tooltip>
                                        </TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Off ratio</TableCell>
                                        <TableCell>Sables</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

export default withStyles(styles)(AkTable);