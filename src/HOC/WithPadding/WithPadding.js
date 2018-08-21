import React from 'react'
import {connect} from "react-redux";


const withPadding = (WrappedComponent) => {
    const mapStateToProps = state => {
        return {
            headerHeight: state.UI.headerHeight
        }
    }
    return connect(mapStateToProps)(class extends React.Component {
        render() {
        console.log(this.props.headerHeight);
            return <div style={{
                paddingTop: this.props.headerHeight
            }}>
                < WrappedComponent {...this.props}/>
            </div>
        }
    })
}


export default withPadding;