import React from 'react'
import {connect} from "react-redux";


const withPadding = (WrappedComponent) => {
    const mapStateToprops = state => {
        return {
            headerHeight: state.UI.headerHeight
        }
    }
    return connect(mapStateToprops)(class extends React.Component {
        render() {

            return <div style={{
                paddingTop: this.props.headerHeight
            }}>
                < WrappedComponent {...this.props}/>
            </div>
        }
    })
}


export default withPadding;