import React from 'react';
import ProductEditor from "./ProudctEditor/ProductEditor";
import PerfectScrollbar from 'react-perfect-scrollbar'
import AkTable from "../../../../components/UI/Table/Table";

class AdminProducts extends React.Component {
    render() {
        return (
            <PerfectScrollbar>
                <div>
                    <AkTable/>
                </div>
                <div>
                    <ProductEditor/>
                </div>
            </PerfectScrollbar>
        )
    }
}

export default AdminProducts;