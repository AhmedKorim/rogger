import React, {Fragment} from 'react'
import Slide from "@material-ui/core/Slide/Slide";
import {connect} from "react-redux";
import ProductDetails from "../../layout/productDetails/ProductDetails";
import Dialog from "@material-ui/core/Dialog/Dialog";
import {PRODUCT_CARD_DETAILS} from "../../../dux/actions/actionTypes";
import ProductEditor from "../../../containers/Admin/Dashboard/AdminProducts/ProudctEditor/ProductEditor";
import PerfectScrollbar from "react-perfect-scrollbar";
import './dialog.scss'
import Button from "@material-ui/core/Button/Button";
import Icon from "@material-ui/core/Icon/Icon";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Auth from "../../../containers/Auth/Auth";
import {withRouter} from "react-router-dom";

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class RDialog extends React.Component {
    handleClose = () => {
        this.props.close();
        const prevRoute = this.props.prevRoute;
        if (!prevRoute) return;
        this.props.history.goBack();
    };

    render() {
        const {open, data, component} = this.props;
        let componentToLoad;
        switch (component) {
            case 'ProductDetails':
                componentToLoad = <ProductDetails product={data}/>;
                break;
            case 'ProductEditor':
                componentToLoad = <ProductEditor data={data}/>
                break;
            case 'AuthComponent' :
                console.log('dilog opend');
                componentToLoad = <Auth data={data}/>
                break;
            default:
                componentToLoad = null;
        }
        return (
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose}
                fullWidth={true}
                maxWidth={false}
                className="dialog"
                PaperProps={{
                    classes: {
                        root: 'paperViable'
                    }
                }}
            >
                <div className="dialogWrapper">
                    <Tooltip title='close dialog'>
                        <Button variant="fab" color="secondary" className="dialogFloatButton" onClick={this.handleClose}>
                            <Icon>close</Icon>
                        </Button>
                    </Tooltip>
                    <PerfectScrollbar>
                        {data && componentToLoad}
                    </PerfectScrollbar>
                </div>
            </Dialog>
        )
    }

}

const mapStateToProps = state => {
    return {
        data: state.UI.dialog.data,
        component: state.UI.dialog.component,
        open: state.UI.dialog.open,
        prevRoute: state.UI.dialog.prevRoute
    }
}
const mapDispatchToProps = dispatch => {
    return {
        close: () => dispatch({type: PRODUCT_CARD_DETAILS, payload: {open: false, activeCard: null, prevRoute: null}})
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RDialog));