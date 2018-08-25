import React from 'react';
import FormController from "../../../../../components/UI/FormControles/FormControle";
import Grid from "@material-ui/core/Grid/Grid";
import ProductCard from "../../../../../components/layout/ProductCard/ProductCard";
import './ProductEditor.scss';
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";

class ProductEditor extends React.Component {
    state = {
        controllers: [
            {value: '', label: 'Product Name', id: 'productName'},
            {value: '', label: 'Product img', id: 'productImg'},

            {value: '', label: 'Product price', id: 'productPrice'},
            {value: '', label: 'Product price before discount', id: 'preDiscount'},

            {value: '', label: 'Items available', id: 'productAvailability'},
            {value: 'men', type: "select", label: 'Product Category', id: 'productCategory', options: ['men', 'women', 'electronics']},
            {value: '', label: 'Product description', id: 'productDescription', multiline: true},
        ]
    }
    changeHandler = ({target: {value}}, id) => {
        console.log(value);
        this.setState({
            controllers: this.state.controllers.map(controller => {
                return controller.id === id ? (controller.value = value , controller) : controller
            })
        })
    }
    classes = ['input']

    render() {
        const {
            state: {
                controllers
            },
            changeHandler,
            classes
        } = this;
        const {productName, productImg ,productPrice ,preDiscount ,productCategory} = controllers.reduce((acc, item) => {
            return {
                ...acc,
                [item.id]: item.value
            }
        }, {})

        return (
            <div className="productEditor">
                <Grid container>
                    <Grid className="Gpadding" item md={8}>
                        <Typography className="subHeader" variant="subheading">Product Editor</Typography>
                        <form>
                            {controllers.map(controller => <div className={controller.multiline ? 'fullWidth' : 'normal'}><FormController
                                    changeHandler={changeHandler}
                                    payload={{...controller, classes}}
                                /></div>
                            )}
                            <div className="actions">
                                <Button className="button" variant="raised" color="primary">
                                    Add item
                                </Button>
                                <Button type="button" className="button" variant="raised" classes={{
                                    root: 'restButton',
                                    label: "restLabel"
                                }}>
                                    Reset
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

export default ProductEditor;