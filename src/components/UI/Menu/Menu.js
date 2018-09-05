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
import './Menu.scss';
import {withWidth} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Badge from "@material-ui/core/Badge/Badge";
import Typography from "@material-ui/core/Typography/Typography";

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

    handelChange = (event, val) => {
        if (this.props.change) {
            if (this.props.value === val) this.props.change(val)

        }
        this.handleClose(event)
    }
    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }

        this.setState({open: false});
    };

    render() {
        const {classes, count, icon, bLabel, tip, listItems, width, children, label, value} = this.props;
        const {open} = this.state;
        return (
            <div className={[classes.root, 'akMenu'].join(" ")}>
                <div>
                    <Tooltip title={bLabel || tip} placement="bottom-end">
                        <Button
                            className={["TWhite", "badgeButton", classes.button].join(' ')}
                            size="small"
                            buttonRef={node => {
                                this.anchorEl = node;
                            }}
                            aria-owns={open ? 'menu-list-grow' : null}
                            aria-haspopup="true"
                            onClick={this.handleToggle}
                        >
                            {count > 0 ? <Badge badgeContent={count} color="secondary" className="badge">
                                    {width === 'xs' ?
                                        <Icon className={[classes.leftIcon, "TWhite", classes.iconSmall].join(" ")}>{icon}</Icon>
                                        : <span className="TWhite">{bLabel || null} <Icon
                                            className={[classes.leftIcon, "TWhite", classes.iconSmall].join(" ")}>
                                        {icon}</Icon>
                                    </span>}
                                </Badge> :
                                icon ? <Icon className={[classes.leftIcon, "TWhite", 'badge', classes.iconSmall].join(" ")}>{icon}</Icon>
                                    : <Typography>{label}</Typography>
                            }
                        </Button>
                    </Tooltip>
                    <Popper open={open} anchorEl={this.anchorEl} transition disablePortal className="ppp">
                        {({TransitionProps, placement}) => (
                            <Grow
                                {...TransitionProps}
                                id="menu-list-grow"
                                style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={this.handleClose}>
                                        {listItems ? <MenuList>
                                            {listItems.map(item => <MenuItem
                                                key={item + ' ' + bLabel || tip}
                                                onClick={(event) => this.handelChange(event, item)}
                                                selected={value == item}
                                            >{item}
                                            </MenuItem>)}
                                        </MenuList> : children}
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
