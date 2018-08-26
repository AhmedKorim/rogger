import React from 'react'
import Slide from "@material-ui/core/Slide/Slide";
import {connect} from "react-redux";
import ProductDetails from "../../layout/productDetails/ProductDetails";
import Dialog from "@material-ui/core/Dialog/Dialog";
import {PRODCUT_CARD_DETIALSDETAILS} from "../../../dux/actions/uiActions";
import ProductEditor from "../../../containers/Admin/Dashboard/AdminProducts/ProudctEditor/ProductEditor";

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class RDialog extends React.Component {
    handleClose = () => {
        this.props.close();
    };

    render() {
        const {open, data, component} = this.props;
        console.log(component);
        const componentToLoad = component === 'ProductDetails' ? <ProductDetails product={data}/> : <ProductEditor data={data}/>

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
                {data && componentToLoad}
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
        close: () => dispatch({type: PRODCUT_CARD_DETIALSDETAILS, payload: {open: false, activeCard: null}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RDialog);