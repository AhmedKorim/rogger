import React from 'react'


const withPadding = (WrappedComponent) => {
    return class extends React.Component {

        styles = {}

        render() {
            return <div style={this.styles}>
                <WrappedComponent {...this.props}/>
            </div>
        }
    }
}


export default withPadding;