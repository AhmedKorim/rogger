import React, {Fragment} from 'react'
import Hidden from "@material-ui/core/Hidden/Hidden";
import Drawer from "@material-ui/core/Drawer/Drawer";

const SideDrawe = props => {
    const {open, handelDrawerClose, children} = props;
    return (
        <Fragment>
            <Hidden mdup>
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={open}
                    onClose={handelDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {children}
                </Drawer>
            </Hidden>
        </Fragment>
    )
}
export default SideDrawe