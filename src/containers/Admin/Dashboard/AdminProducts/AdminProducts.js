import React, {Fragment} from 'react';
import ProductEditor from "./ProudctEditor/ProductEditor";
import AkTable from "../../../../components/UI/Table/Table";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button/Button";
import Icon from "@material-ui/core/Icon/Icon";
import {PRODUCT_CARD_DETAILS} from "../../../../dux/actions/actionTypes";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";

class AdminProducts extends React.Component {

    editItem = (id) => {
        const itemData = this.props.products.find(product => product.id === id);
        console.log(itemData);
        this.props.editItem(itemData)
    };
    addItem = () => {
        this.props.editItem({})
    };

    showItemDetails = (id) => {

    };

    render() {
        const {
            props: {
                products,
                maxHeight
            },
   /*         productCategory,*/
            showItemDetails, editItem, addItem
        } = this;


        const tableData = products.map(({id, productCategory, preDiscount, productPrice, productName}) => {
            return {
                productName,
                productPrice,
                offRatio: (preDiscount ? (100 - ((productPrice / preDiscount) * 100)).toFixed(2) : 0) + '%',
                productCategory,
                id,
            }
        });
        console.log(maxHeight);
        return (

            <Fragment>
                <div>
                    <AkTable
                        data={tableData} action={(id) => <Fragment>
                        <Tooltip title={"edit"}>
                            <Button variant="fab"
                                    className='actionAP'
                                    classes={{
                                        root: 'waining'
                                    }}
                                    onClick={() => editItem(id)}
                                    mini>
                                <Icon>edit</Icon>
                            </Button>
                        </Tooltip>
                        <Tooltip title={"move to item page"}>
                            <Button variant="fab" color="primary" mini
                                    className='actionAP'
                                    onClick={() => showItemDetails(id)}
                            >
                                <Icon>remove_red_eye</Icon>
                            </Button>
                        </Tooltip>
                    </Fragment>
                    }
                        labels={["Name", "Price", "discount", "Category"]
                        }/>
                </div>
                <div className="fabWrapper">
                    <Button variant="fab" color="primary" className="fabButton" onClick={addItem}>
                        <Icon>add</Icon>
                    </Button>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.products
    }
};

const mapDispatchToProps = dispatch => {
    return {
        editItem: (itemData) => dispatch({type: PRODUCT_CARD_DETAILS, payload: {open: true, data: itemData, component: 'ProductEditor'}})
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts)