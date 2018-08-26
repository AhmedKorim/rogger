import React, {Fragment} from 'react';
import ProductEditor from "./ProudctEditor/ProductEditor";
import AkTable from "../../../../components/UI/Table/Table";
import {connect} from "react-redux";

class AdminProducts extends React.Component {
    render() {
        const {
            props: {
                products,
                maxHeight
            }
        } = this;
        const tableData = products.map(({id, productCategory, preDiscount, productPrice, productName}) => {
            return {
                productName,
                productPrice,
                offRatio: (preDiscount ? (100 - ((productPrice / preDiscount) * 100)).toFixed(2) : 0) + '%',
                productCategory,
                id,
            }
        })
        console.log(maxHeight);
        return (

            <Fragment>
                <div>
                    <AkTable data={tableData}/>
                </div>
                <div>
                    <ProductEditor/>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.products
    }
}
export default connect(mapStateToProps)(AdminProducts)