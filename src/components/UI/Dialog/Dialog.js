import React from 'react'
import Slide from "@material-ui/core/Slide/Slide";
import {connect} from "react-redux";
import ProductDetails from "../../layout/productDetails/ProductDetails";
import Dialog from "@material-ui/core/Dialog/Dialog";
import {PRODCUT_CARD_DETIALSDETAILS} from "../../../dux/actions/uiActions";

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class RDialog extends React.Component {
    handleClose = () => {
        this.props.close();
    };

    render() {
        const {open} = this.props;
        console.log(open);
        return (
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose}
                fullWidth={true}
                maxWidth={false}
            >
                <ProductDetails/>
            </Dialog>
        )
    }

}

const mapStateToProps = state => {
    return {
        card: state.UI.productCard.activeCard,
        open: state.UI.productCard.open
    }
}
const mapDispatchToProps = dispatch => {
    return {
        close: () => dispatch({type: PRODCUT_CARD_DETIALSDETAILS, payload: {open: false, activeCard: null}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RDialog);