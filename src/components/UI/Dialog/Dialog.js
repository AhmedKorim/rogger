import React from 'react'
import Slide from "@material-ui/core/Slide/Slide";
import {connect} from "react-redux";
import ProductDetails from "../../layout/productDetails/ProductDetails";
import Dialog from "@material-ui/core/Dialog/Dialog";
import {PRODUCT_CARD_DETAILS} from "../../../dux/actions/uiActions";
import ProductEditor from "../../../containers/Admin/Dashboard/AdminProducts/ProudctEditor/ProductEditor";
import PerfectScrollbar from "react-perfect-scrollbar";

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class RDialog extends React.Component {
    handleClose = () => {
        this.props.close();
    };

    render() {
        const {open, data, component} = this.props;
        const componentToLoad = component === 'ProductDetails' ? <ProductDetails product={data}/> : <ProductEditor  data={data}/>

            console.log(componentToLoad);
        return (
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose}
                fullWidth={true}
                maxWidth={false}
            >
                <PerfectScrollbar>
                    {data && componentToLoad}
                </PerfectScrollbar>
            </Dialog>
        )
    }

}

const mapStateToProps = state => {
    return {
        data: state.UI.dialog.data,
        component: state.UI.dialog.component,
        open: state.UI.dialog.open
    }
}
const mapDispatchToProps = dispatch => {
    return {
        close: () => dispatch({type: PRODUCT_CARD_DETAILS, payload: {open: false, activeCard: null}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RDialog);