import React from 'react';
import FormController from "../../../../../components/UI/FormControles/FormControle";
import Grid from "@material-ui/core/Grid/Grid";
import ProductCard from "../../../../../components/layout/ProductCard/ProductCard";
import './ProductEditor.scss';
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import axios from "../../../../../axios/axios";
import {connect} from "react-redux";
import {ADD_ITEM, UPDATE_ITEM} from "../../../../../dux/actions/actionTypes";

const inputSchema = [
    {value: '', label: 'Product Name', id: 'productName'},
    {value: '', label: 'Product img', id: 'productImg', extendable: true, count: 0},

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
            controllers: [...inputSchema].reduce((accumelator, controller) => {
                if (!props.data) return controller;
                const newController = {...controller};
                if (controller.extendable) {
                    const keys = Object.keys(props.data).filter(key => key.indexOf(controller.id) >= 0);
                    const skeleton = {...controller};
                    const extendedControlllers = keys.map((key, index) => ({
                        ...skeleton,
                        extendable: false,
                        added: true,
                        value: props.data[key],
                        baseid: skeleton.id,
                        controlleriIndex: index,
                        id: key,
                        label: skeleton.label + ' ' + index
                    }))
                    const updatedExtendedController = {...controller, count: keys.length}
                    const value = props.data[newController.id];
                    newController.value = value ? value : controller.value
                    return [...accumelator, updatedExtendedController, ...extendedControlllers];
                }
                const value = props.data[newController.id];
                newController.value = value ? value : controller.value
                return [...accumelator, newController];
            }, []),
            editmood: !!props.data.id
        }
    }

    classes = ['input']


    // cahnge controllers on real time
    changeControllers = (id, action, baseid) => {
        const controllers = [...this.state.controllers];
        if (action === 'add') {
            let controllerIndex = 0;
            const extendedController = {
                ...controllers.find((controller, index) => {
                    if (controller.id === id) {
                        controllerIndex = index;
                        return controller;
                    }
                })
            }
            const newController = {
                ...extendedController,
                extendable: false,
                added: true,
                value: '',
                baseid: extendedController.id,
                controlleriIndex: extendedController.count + 1,
                id: extendedController.id + extendedController.count,
                label: extendedController.label + ' ' + (++extendedController.count)
            }
            // adding the new controller to its place
            controllers.splice(controllerIndex + 1, 0, newController);

            // updating the extendable contoller count
            const newControllers = controllers.map(controller => controller.id === id ? extendedController : controller);
            this.setState({controllers: newControllers});
        } else if (action === 'remove') {
            const extendedController = {...controllers.find(controller => controller.id === baseid)};
            const newControllers = controllers.filter(controller => controller.id !== id).map(controller => {
                if (controller.id === extendedController.id) {
                    return {...extendedController, count: extendedController.count -1};
                }
                return controller;
            })
            this.setState({controllers: newControllers})
        }
    }

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
            axios.post('/products.json', dataToSend).then(resp => {
                    this.props.addItem({id: resp.data.name, ...dataToSend})
                }
            )
            return;
        }
        const id = this.props.data.id;
        const data = {...this.props.data};
        delete  data.id;
        const mergedData = {...data, ...dataToSend}
        console.log(mergedData);
        axios.put(`/products/${id}.json`, mergedData).then(resp => {
            this.props.updateIem(id, {...mergedData, id: id})
        })
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
            changeControllers,
            productData: {
                productName, productImg, productPrice, preDiscount, productCategory
            }
        } = this;

        return (
            <div className="productEditor">
                <Grid container>
                    <Grid className="Gpadding" item md={8}>
                        <Typography className="subHeader" variant="subheading"> {this.state.editmood ? 'Edit Product' : 'Add Product'}</Typography>
                        <form onSubmit={sendData}>
                            {controllers.map(controller => <div className={controller.multiline ? 'fullWidth' : 'normal'}><FormController
                                    changeHandler={changeHandler}
                                    changeControllers={changeControllers}
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
                    <Grid className="Gpadding" item container justify="center" alignItems="center" md lg>
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
        updateIem: (id, data) => dispatch({type: UPDATE_ITEM, id, data}),
        addItem: (data) => dispatch({type: ADD_ITEM, data})
    }
}
export default connect(null, mapDispatchToProps)(ProductEditor);