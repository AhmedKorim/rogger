import RootRef from "@material-ui/core/RootRef/RootRef";
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
import {getCoords, getStyle} from "../../../tools/tools";

const styles = theme => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing.unit * 2,
        zIndex: 50,

    },
    popper: {
        left: 'auto',
        right: 15
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
    applayArrowStyle = (data) => {
        console.log('failed');
        if (!this.arrowREf) return;
        console.log('done');
        this.arrowREf.style.transform = `translate3d(0,0,0)`;
        this.arrowREf.style.opacity = `0`;
        this.arrowTimeout = setTimeout(() => {
            const target = this.anchorEl;
            const follower = this.arrowREf;
            if (!(target && follower)) return;
            const offset = getCoords(target).left - getCoords(follower).left + getStyle(target, 'width') / 2 - getStyle(follower, 'width') / 2;
            this.arrowREf.style.transform = `translate3d(${offset}px,0,0)`;
            this.arrowREf.style.opacity = `1`;
        }, 135)
    }
    handelChange = (event, val) => {
        console.log(val);
        if (this.props.change) {
            if (this.props.value !== val) this.props.change(val)

        }
        this.setState({open: false});
    };
    handleClose = event => {
        if (this.anchorEl.contains(event.target)) return;
        if (this.popperPaper.contains(event.target)) return;
        clearTimeout(this.arrowTimeout)
        this.setState({open: false});
    };

    render() {
        const {classes, count, icon, bLabel, tip, listItems, width, children, label, value, flootleft} = this.props;
        const {open,} = this.state;
        const applayArrowStyle = this.applayArrowStyle;
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
                    <Popper
                        className={flootleft ? classes.popper : null}
                        open={open}
                        onRendered
                        placement="bottom"
                        disablePortal
                        anchorEl={this.anchorEl}
                        modifiers={flootleft ? {
                            flip: {
                                enabled: true,
                            },
                            offset: {
                                enabled: true,
                                offset: '0 15px'
                            },
                            arrow: {
                                order: 900,
                                enabled: true,
                                fn: applayArrowStyle
                            },
                        } : null}
                        transition>
                        {({TransitionProps, placement}) => (
                            <Grow
                                {...TransitionProps}
                                id="menu-list-grow"
                                style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                            >
                                <RootRef rootRef={(node) => this.popperPaper = node}>
                                    <Paper>
                                        <ClickAwayListener onClickAway={this.handleClose}>
                                            {flootleft && <span ref={(node) => this.arrowREf = node} className="menuArrow"/>}
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
                                </RootRef>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
        );
    }
}


export default withWidth()(withStyles(styles)(AKmenu));
