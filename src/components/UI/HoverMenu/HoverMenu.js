import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {withStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography/Typography";
import "./HoverMenu.scss"
import Divider from "@material-ui/core/Divider/Divider";
const styles = theme => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing.unit * 2,
    },
});

class MenuListComposition extends React.Component {
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
        const {classes, items, label} = this.props;
        const {open} = this.state;

        return (
            <div className={[classes.root,"hoverMenu"].join(' ')}>
                <div>
                    <Button
                        size="small"
                        buttonRef={node => {
                            this.anchorEl = node;
                        }}
                        aria-owns={open ? 'menu-list-grow' : null}
                        aria-haspopup="true"
                        onClick={this.handleToggle}
                    >
                        <Typography variant="subheading" className="carHeader">{label}</Typography>
                    </Button>
                    <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                        {({TransitionProps, placement}) => (
                            <Grow
                                {...TransitionProps}
                                id="menu-list-grow"
                                style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={this.handleClose}>
                                        <div className="categContainer">
                                            {
                                                items.map(item => {
                                                    const key = Object.keys(item)[0];
                                                    return (
                                                        <div key={key} className="catGroup">
                                                            <Typography className="carHeader" variant="subheading">{key}</Typography>
                                                            <Divider/>
                                                            <MenuList>
                                                                {item[key].map(cat => (
                                                                    <MenuItem key={cat} onClick={this.handleClose}>{cat}</MenuItem>
                                                                ))}
                                                            </MenuList>
                                                        </div>

                                                    );
                                                })
                                            }
                                        </div>
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


export default withStyles(styles)(MenuListComposition);