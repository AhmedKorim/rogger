import React from 'react'

import './Container.scss';
import {connect} from "react-redux";

const Container = props => {
    const {children, open, className} = props;
    return (
        <div className={['flexContainer', className, !open ? 'center' : ''].join(' ')}>
            {children}
        </div>
    )
}
const mapStateToProps = state => ({
    open: state.UI.aside.open
})
export default connect(mapStateToProps)(Container);