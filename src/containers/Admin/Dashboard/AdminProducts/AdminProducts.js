import React from 'react';
import ProductEditor from "./ProudctEditor/ProductEditor";
import PerfectScrollbar from 'react-perfect-scrollbar'
import AkTable from "../../../../components/UI/Table/Table";
import {connect} from "react-redux";

class AdminProducts extends React.Component {
    render() {
       const {
           props:{
               products
           }
       } =this;
       const tableData = products.map(({id ,productCategory, preDiscount ,productPrice,productName} )=>{
           return {
               productName,
               productPrice,
               offRatio: (preDiscount ? (100 - ((productPrice / preDiscount) * 100)).toFixed(2) : 0) +'%',
               productCategory,
               id,
           }
       })
        return (
            <PerfectScrollbar>
                <div>
                    <AkTable data={tableData}/>
                </div>
                <div>
                    <ProductEditor/>
                </div>
            </PerfectScrollbar>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.products
    }
}
export default connect(mapStateToProps)(AdminProducts)