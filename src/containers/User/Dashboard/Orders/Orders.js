import Button from "@material-ui/core/Button/Button";
import Grid from "@material-ui/core/es/Grid/Grid";
import Icon from "@material-ui/core/Icon/Icon";
import Typography from "@material-ui/core/Typography/Typography";
import React, {Fragment} from "react";
import {connect} from "react-redux";
import AkTable from "../../../../components/UI/Table/Table";
import '../../UserCart/UserCart.scss';

class Orders extends React.Component {


    showOrderData = (id) => {
        console.log(id);
    }


    render() {
        const {
            props: {
                orders,
                products
            },

            showOrderData
        } = this;
        let dataTable = [];
        if (orders.length >= 1) {
            dataTable = orders.map(order => {
                const orderDate = new Date(order.date);
                return ({
                    date: ` ${orderDate.getFullYear()}/${orderDate.getMonth() + 1}/${orderDate.getDay()}`,
                    price: order.price,
                    products: order.items.length,
                    id: order.date
                });
            });
        }

        return (
            <div className="userCart">
                <Grid container justify="center" alignItems="flex-start">
                    <Grid item container xs sm={10} justify="center" alignItems="center">
                        <Grid item xs={12}>
                            <Typography className="header" variant="subheading" component="h3"> wish list</Typography>
                        </Grid>
                        <Grid item container xs={11} justify="center">
                            <Grid item xs={12}>
                                <Typography variant="subheading" className="summery" component="p">
                                    {dataTable.length > 1 ?
                                        <Fragment>
                                            you have <span className="cartcount">{dataTable.length}</span> orders in your history
                                        </Fragment>
                                        :
                                        <span className="cartcount"> you dont have any orders yet</span>
                                    }
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <div className="tableWrapper">
                                    {dataTable.length >= 1 &&
                                    <AkTable data={dataTable} action={(id) => <div>
                                        <Button variant="fab" id={id} mini onClick={() => showOrderData(id)} color="primary"><Icon>remove_red_eye</Icon></Button>
                                    </div>}
                                             labels={['date', 'price', 'products']}/>}
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.user.orders,
        info: state.user.info,
        products: state.products.products
    }
};
const mapDispatchToProps = dispatch => {

};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);