import React from "react";
import {connect} from "react-redux";
import {getUsers} from "../../../../dux/actions/adminActions";

class AdminOrders extends React.Component {

componentDidMount(){
    this.props.getUsersData();
}

    render() {
        const {
            props: {
                orders,

            },
        } = this;

        console.log(orders);
        /* let dataTable = [];
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
         }*/

        return (
            <div className="userCart">
                {/*        <Grid container justify="center" alignItems="flex-start">
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
                                        <Button variant="fab" id={id} mini onClick={() => showOrderData(id)}
                                                color="primary"><Icon>remove_red_eye</Icon></Button>
                                    </div>}
                                             labels={['date', 'price', 'products']}/>}
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>*/}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.admin.orders
    }
};
const mapDispatchToProps = dispatch => {
    return {
        getUsersData: () => dispatch(getUsers())

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrders);