import React from 'react'
import Hidden from "@material-ui/core/Hidden/Hidden";
import Drawer from "@material-ui/core/Drawer/Drawer";
import AppBar from "@material-ui/core/AppBar/AppBar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon/Icon";
import './Sidedrawer.scss';

const SideDrawe = props => {
    const {open, handelDrawerClose, children} = props;
    return (
        <div className="mainSideDrawer">
            <Hidden mdup>
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={open}
                    onClose={handelDrawerClose}
                    classes={{
                        paper: 'SideBar'
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <nav calssName="mainSideNav">
                        <AppBar position="static" className="SideBar">
                            <div><IconButton color="inherit" onClick={handelDrawerClose}><Icon>menu</Icon></IconButton></div>
                        </AppBar>
                        {children}
                    </nav>
                </Drawer>
            </Hidden>
        </div>
    )
};
export default SideDrawe;