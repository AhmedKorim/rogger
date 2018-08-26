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
import Button from "@material-ui/core/Button/Button";
import Icon from "@material-ui/core/Icon/Icon";
import './Table.scss'
import PerfectScrollbar from 'react-perfect-scrollbar'
import TablePagination from "@material-ui/core/TablePagination/TablePagination";


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
    },
    slightMargin: {
        margin: " 0 .2rem"
    }, actions: {
        padding: 0
    }

})

class AkTable extends React.Component {
    render() {
        const {
            props: {
                classes,
                data
            },
        } = this;
        return (
            <div className="Table">
                <Grid container justify="center" alignItems="center">
                    <Grid xs md={9} lg={8} className={classes.GridPadding}>
                        <Paper className={classes.root}>
                            <PerfectScrollbar>
                                <Table className="table" aria-label="label">
                                    <TableHead>
                                        <TableRow className="tableRow">
                                            <TableCell>
                                                <Tooltip
                                                    title="Sort"
                                                    enterDelay={300}>
                                                    <TableSortLabel active>Name</TableSortLabel>
                                                </Tooltip>
                                            </TableCell>
                                            <TableCell><Tooltip
                                                title="Sort"
                                                enterDelay={300}>
                                                <TableSortLabel active>Price</TableSortLabel>
                                            </Tooltip>
                                            </TableCell>
                                            <TableCell>
                                                <Tooltip
                                                    title="Sort"
                                                    enterDelay={300}>
                                                    <TableSortLabel active>discount</TableSortLabel>
                                                </Tooltip>
                                            </TableCell>
                                            <TableCell>
                                                <Tooltip
                                                    title="Sort"
                                                    enterDelay={300}>
                                                    <TableSortLabel active>Category</TableSortLabel>
                                                </Tooltip>
                                            </TableCell>
                                            <TableCell>
                                                <Tooltip
                                                    title="Sort"
                                                    enterDelay={300}>
                                                    <TableSortLabel active>Actions</TableSortLabel>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            data.slice(0, 6).map(item => {
                                                let cells = Object.values(item);
                                                cells = cells.slice(0, cells.length - 1);
                                                console.log(cells);
                                                return <TableRow hover className='tableRow' key={item.id}>
                                                    {cells.map(cell => <TableCell key={item.id + cell}>
                                                        {cell}
                                                    </TableCell>)}
                                                    <TableCell className={classes.actions}>
                                                        <Tooltip title={"edit"}>
                                                            <Button variant="fab"
                                                                    classes={{
                                                                        root: 'waining'
                                                                    }}
                                                                    className={classes.slightMargin} mini>
                                                                <Icon>edit</Icon>
                                                            </Button>
                                                        </Tooltip>
                                                        <Tooltip title={"move to item page"}>
                                                            <Button variant="fab" color="primary" className={classes.slightMargin} mini>
                                                                <Icon>remove_red_eye</Icon>
                                                            </Button>
                                                        </Tooltip>
                                                    </TableCell>
                                                </TableRow>
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </PerfectScrollbar>

                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(AkTable);