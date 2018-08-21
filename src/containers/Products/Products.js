import React from 'react';
import withPadding from "../../HOC/WithPadding/WithPadding";
import Breadcrumbs from "../../components/UI/Breadcrumbs/breadcrumbs";

class Products extends React.Component {
    render() {
        return (
            <div className="products">
                <Breadcrumbs/>
            </div>
        )
    }
}

export default withPadding(Products);
