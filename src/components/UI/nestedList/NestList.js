import React, {Fragment} from 'react';
import {withStyles} from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import './NestedList.scss';
import PerfectScrollbar from 'react-perfect-scrollbar'


const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class NestedList extends React.Component {
    constructor(props) {
        super(props);
        const {categories} = props;
        console.log(categories);
        this.state = {
            open: categories.reduce((acc, item) => {
                const key = Object.keys(item)[0];
                return {
                    ...acc,
                    [key]: {
                        open: false,
                        nest: item[key].reduce((acc, item) => {
                            const key = Object.keys(item)[0];
                            return {
                                ...acc,
                                [key]: false
                            }
                        }, {})
                    }

                }
            }, {})
        }
    }


    handleClick = (key) => {
        this.setState(prevState => ({
                open: {
                    ...prevState.open,
                    [key]: {
                        ...prevState.open[key],
                        open: !prevState.open[key].open
                    }
                }
            }), () => {
                console.log(this.state);
            }
        )
    };
    handleNestedClick = (key, nestedKey) => {
        this.setState(prevState => ({
            open: {
                ...prevState.open,
                [key]: {
                    ...prevState.open[key],
                    nest: {
                        ...prevState.open[key].nest,
                        [nestedKey]: !prevState.open[key].nest[nestedKey]
                    }
                }
            }
        }))
    }

    render() {
        const {
            props: {classes, categories},
            state: {open}
        } = this;

        return (
            <div>
                <div className={classes.root}>
                    <PerfectScrollbar>
                        <List component="ul" className="topLevel">
                            {categories.map(item => {
                                const key = Object.keys(item)[0];
                                return (
                                    <Fragment key={key}>
                                        <ListItem component="li" className="listItem" button onClick={() => this.handleClick(key)}>
                                            <ListItemText inset primary={key}/>
                                            {open[key].open ? <ExpandLess/> : <ExpandMore/>}
                                        </ListItem>
                                        <Collapse in={open[key].open} timeout="auto" unmountOnExit>
                                            <div className="PSWrapper">
                                                <PerfectScrollbar>
                                                    <List component="ul" className="nested" disablePadding>
                                                        {
                                                            item[key].map(section => {
                                                                const nestedKey = Object.keys(section)[0];
                                                                return <Fragment>
                                                                    <ListItem component="li" className="listItem" button
                                                                              onClick={() => this.handleNestedClick(key, nestedKey)}
                                                                    >
                                                                        <ListItemText inset primary={nestedKey}/>
                                                                        {open[key].nest[nestedKey] ? <ExpandLess/> : <ExpandMore/>}
                                                                    </ListItem>
                                                                    <Collapse in={open[key].nest[nestedKey]} timeout="auto" unmountOnExit>
                                                                        <List component="ul" className="bottomLevel" disablePadding>
                                                                            {section[nestedKey].map(item => <ListItem component="li" className="listItem" button>
                                                                                <ListItemText inset primary={item}/>
                                                                            </ListItem>)}
                                                                        </List>
                                                                    </Collapse>
                                                                </Fragment>
                                                            })
                                                        }
                                                    </List>
                                                </PerfectScrollbar>
                                            </div>
                                        </Collapse>
                                    </Fragment>

                                )
                            })}
                        </List>
                    </PerfectScrollbar>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(NestedList);