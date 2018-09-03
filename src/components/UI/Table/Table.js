import React from 'react';
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
    actions: {
        padding: 0
    }

})

class AkTable extends React.Component {
    state = {
        page: 0,
        rowsPerPage: 5,
    }
    handleChangePage = (event, page) => {
        this.setState({page});
    };
    handleChangeRowsPerPage = event => {
        this.setState({rowsPerPage: event.target.value});
    };

    render() {
        const {
            props: {
                classes,
                data,
                labels,
                action
            },
            state: {
                rowsPerPage,
                page
            },
            handleChangePage,
            handleChangeRowsPerPage
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
                                            {labels.map(label => <TableCell key={label}>
                                                <Tooltip
                                                    title="Sort"
                                                    enterDelay={300}>
                                                    <TableSortLabel active>{label}</TableSortLabel>
                                                </Tooltip>
                                            </TableCell>)}
                                            <TableCell>
                                                Actions
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            data.slice((page * rowsPerPage), ((page * rowsPerPage) + rowsPerPage)).map(item => {
                                                let cells = Object.values(item);
                                                cells = cells.slice(0, cells.length - 1);
                                                console.log(cells);
                                                return <TableRow hover className='tableRow' key={item.id}>
                                                    {cells.map(cell => <TableCell key={item.id + cell}>
                                                        {cell}
                                                    </TableCell>)}
                                                    <TableCell className={classes.actions}>
                                                        {action(item.id)}
                                                    </TableCell>
                                                </TableRow>
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </PerfectScrollbar>
                            <TablePagination
                                component="div"
                                count={data.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                backIconButtonProps={{
                                    'aria-label': 'Previous Page',
                                }}
                                nextIconButtonProps={{
                                    'aria-label': 'Next Page',
                                }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(AkTable);