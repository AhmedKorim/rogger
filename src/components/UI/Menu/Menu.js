import React, {Fragment} from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {withStyles} from '@material-ui/core';
import Icon from "@material-ui/core/Icon/Icon";
import './Menu.scss';
import {withWidth} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Badge from "@material-ui/core/Badge/Badge";
import Typography from "@material-ui/core/Typography/Typography";
import {getCoords, getStyle} from "../../../tools/tools";

const styles = theme => ({
    root: {},
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
    },

    popper: {
        zIndex: 1,
        '&[x-placement*="bottom"] $arrow': {
            top: 0,
            marginTop: '-0.9em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '0 1em 1em 1em',
                borderColor: `transparent transparent ${theme.palette.common.white} transparent`,
            },
        },

    },
    arrow: {
        position: 'absolute',
        fontSize: 7,
        left: 0,
        width: '3em',
        height: '3em',
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        },
    }


});

class AKmenu extends React.Component {
    state = {
        open: false,
        arrow: null
    };

    componentWillUnmount() {
        console.log('clear');
    }


    getArrowStyle = () => {
        const button = this.anchorEl;
        const arrow = this.state.arrow;
        if (!(arrow && button)) return;
        const transformX = getCoords(button).left -
            getCoords(arrow).left +
            (getStyle(button, 'width') / 2 - getStyle(arrow, 'width') / 2);
            console.log(transformX);
    }

    componentDidMount() {
    }

    handleToggle = () => {
        this.getArrowStyle()
        this.setState(state => ({open: !state.open}));

    };
    handleArrowRef = (node) => {
        if (this.state.arrow) return;
        window.arrowRef = node;
        this.setState({arrow: node})
    }


    handelChange = (event, val) => {
        console.log(val);
        if (this.props.change) {
            if (this.props.value !== val) this.props.change(val)
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
        const {classes, count, icon, placement, bLabel, tip, listItems, width, children, label, value} = this.props;
        const {open} = this.state;
        return (
            <div className={[classes.root, 'akMenu'].join(" ")}>
                <div>
                    <Tooltip title={bLabel || tip} placement="bottom-end">
                        <Button
                            className={["TWhite", "badgeButton", classes.button].join(' ')}
                            size="small"
                            buttonRef={node => {
                                window.buttonRef = node;
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
                    <Popper
                        className={classes.popper}
                        placement={placement ? placement : 'bottom'}
                        open={open}
                        anchorEl={this.anchorEl}
                        modifiers={{
                            flip: {
                                enabled: true,
                            },
                            preventOverflow: {
                                enabled: true,
                                boundariesElement: 'scrollParent',
                            },
                            arrow: {
                                enabled: true,
                                arrow: this.state.arrow
                            },
                        }}
                        transition disablePortal>
                        {({TransitionProps, placement}) => (
                            <Grow
                                {...TransitionProps}
                                id="menu-list-grow"
                                style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                            >
                                <Paper>
                                    <span ref={this.handleArrowRef} className={[classes.arrow, 'AkArrow'].join(' ')}/>
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
