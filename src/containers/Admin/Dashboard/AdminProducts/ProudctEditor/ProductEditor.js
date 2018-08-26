import React from 'react';
import FormController from "../../../../../components/UI/FormControles/FormControle";
import Grid from "@material-ui/core/Grid/Grid";
import ProductCard from "../../../../../components/layout/ProductCard/ProductCard";
import './ProductEditor.scss';
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import axiosOrders from "../../../../../axios/axios";
import {getData} from "../../../../../dux/actions/productsActions";
import {connect} from "react-redux";

const inputSchema = [
    {value: '', label: 'Product Name', id: 'productName'},
    {value: '', label: 'Product img', id: 'productImg'},

    {value: '', label: 'Product price', id: 'productPrice'},
    {value: '', label: 'Product price before discount', id: 'preDiscount'},

    {value: '', label: 'Items available', id: 'productAvailability'},
    {
        value: 'men',
        type: "select",
        label: 'Product Category',
        id: 'productCategory',
        options: ['closes', 'electronics', 'music', 'furniture', 'jewellery']
    },
    {value: '', label: 'Product description', id: 'productDescription', multiline: true},
]


class ProductEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            controllers: [...inputSchema].map(controller => {
                if (!props.data) return controller;
                const newController = {...controller};
                const value = props.data[newController.id];
                newController.value = value ? value : controller.value
                return newController;
            }),
            editmood: !!props.data
        }
    }

    classes = ['input']


    changeHandler = ({target: {value}}, id) => {
        console.log(value);
        this.setState({
            controllers: this.state.controllers.map(controller => {
                return controller.id === id ? (controller.value = value , controller) : controller
            })
        })
    }


    getProductData = () => {
        this.productData = this.state.controllers.reduce((acc, item) => {
            return {
                ...acc,
                [item.id]: item.value
            }
        }, {})
    }

    sendData = (event) => {
        event.preventDefault();
        const dataToSend = {...this.productData};
        if (!this.state.editmood) {
            dataToSend.liked = false;
            console.log('edit mood false');
            axiosOrders.post('/products.json', dataToSend).then(resp => console.log(resp))
            return;
        }
        const id = this.props.data.id;
        const data = {...this.props.data};
        delete  data.id;
        const mergedData = {...data, ...dataToSend}
        axiosOrders.put(`/products/${id}.json`, mergedData).then(resp => this.props.getData())
    }

    render() {
        this.getProductData();
        const {
            state: {
                controllers,
                editmood
            },
            changeHandler,
            classes,
            sendData,
            productData: {
                productName, productImg, productPrice, preDiscount, productCategory
            }
        } = this;

        return (
            <div className="productEditor">
                <Grid container>
                    <Grid className="Gpadding" item md={8}>
                        <Typography className="subHeader" variant="subheading">Product Editor</Typography>
                        <form onSubmit={sendData}>
                            {controllers.map(controller => <div className={controller.multiline ? 'fullWidth' : 'normal'}><FormController
                                    changeHandler={changeHandler}
                                    payload={{...controller, classes}}
                                /></div>
                            )}
                            <div className="actions">
                                <Button type="submit" className="button" variant="raised" color="primary">
                                    {editmood ? 'Edit' : "Add Item"}
                                </Button>
                                <Button type="button" className="button" variant="raised" classes={{
                                    root: 'restButton',
                                    label: "restLabel"
                                }}>
                                    {editmood ? 'reset' : "Cancel"}
                                </Button>
                            </div>
                        </form>
                    </Grid>
                    <Grid className="Gpadding" item md lg>
                        <ProductCard
                            productName={productName}
                            productImg={productImg}
                            productPrice={productPrice}
                            preDiscount={preDiscount}
                            productCategory={productCategory}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(getData())
    }
}
export default connect(null,mapDispatchToProps)(ProductEditor);