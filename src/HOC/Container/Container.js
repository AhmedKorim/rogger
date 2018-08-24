import React from 'react'
import connect from "react-redux/es/connect/connect";
import './Container.scss';

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