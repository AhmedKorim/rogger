import React from 'react'
import {PRODUCT_CARD_DETAILS} from "../../dux/actions/uiActions";
import {connect} from "react-redux";

const AuthDialogOpener = props => {
    console.log('rendered');
    props.authOPen();
    return (
        <div style={{display: 'none'}}>adfa</div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        authOPen: () => dispatch({type: PRODUCT_CARD_DETAILS, payload: {open: true, data: {}, component: 'AuthComponent', prevRoute: true}})
    }
}
export default connect(null, mapDispatchToProps)(AuthDialogOpener)