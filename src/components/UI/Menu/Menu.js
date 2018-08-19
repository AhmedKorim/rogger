import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {withStyles} from '@material-ui/core/styles';
import Icon from "@material-ui/core/Icon/Icon";
import Typography from "@material-ui/core/Typography/Typography";
import './Menu.scss';
import NotificationIndicator from "../NotificationIndicator/NotificationIndicator";
import {withWidth} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";

const styles = theme => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing.unit * 2,
    },
    button: {
        margin: theme.spacing.unit,
        position: 'relative'
    },
    iconSmall: {
        fontSize: 20,
    }, leftIcon: {
        marginRight: theme.spacing.unit,
    }
});

class AKmenu extends React.Component {
    state = {
        open: false,
    };

    handleToggle = () => {
        this.setState(state => ({open: !state.open}));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }

        this.setState({open: false});
    };

    render() {
        const {classes, count, icon, bLabel, listItems, width} = this.props;
        const {open} = this.state;
        return (
            <div className={[classes.root, 'akMenu'].join(" ")}>
                <div>
                    <Tooltip  title={bLabel} placement="bottom-end">
                        <Button
                            className={["TWhite", classes.button].join(' ')}
                            size="small"
                            buttonRef={node => {
                                this.anchorEl = node;
                            }}
                            aria-owns={open ? 'menu-list-grow' : null}
                            aria-haspopup="true"
                            onClick={this.handleToggle}
                        >
                            <Icon className={[classes.leftIcon, "TWhite", classes.iconSmall].join(" ")}>{icon}</Icon>{width === 'xs' ? null :
                            <span className="TWhite">{bLabel}</span>}
                            <NotificationIndicator count={count}/>
                        </Button>
                    </Tooltip>
                    <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                        {({TransitionProps, placement}) => (
                            <Grow
                                {...TransitionProps}
                                id="menu-list-grow"
                                style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={this.handleClose}>
                                        <MenuList>
                                            {
                                                listItems.map(item => <MenuItem onClick={this.handleClose}>{item}</MenuItem>)
                                            }
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
        );
    }
}


export default withWidth()(withStyles(styles)(AKmenu));
