import React, {Fragment} from 'react'
import EnhancedTabs from "../../UI/EnhancedTabs/EnhancedTabs";
import './Notification.scss';
import {connect} from "react-redux";
import List from "@material-ui/core/List/List";
import PerfectScrollbar from "react-perfect-scrollbar";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon/Icon";
import Divider from "@material-ui/core/Divider/Divider";

const Notification = props => {
    const {
        compared,
        liked,
        orders,
        products
    } = props;
    const comparedList = compared.map(comparedItem => products.find(product => product.id === comparedItem.id));
    console.log(comparedList);
    return (
        <div className="NotificationMenu">
            <EnhancedTabs
                toolbarClasses={['NotificaitonToolbar']}
                disableRouting
                rootClass='notificationRoot'
                tabRootClass='notificaitonTabRoot'
                indercatorClass='notificationTabIndector'
                paddges={[{label: 'compared', count: compared.length, icon: 'compared'}, {label: 'wish list', count: liked.length, icon: 'favourite'}, {
                    label: 'orders',
                    count: orders.length,
                    icon: 'list'
                }]}
            >
                <div className="tabView">
                    <PerfectScrollbar>
                        <List component="ul" className="productsList">
                            {comparedList.map((CartItem, index, array) => <Tooltip key={CartItem.id} title="more to page details" placement="bottom-end">
                                    <Fragment>
                                        <ListItem component="li" button className="productsListItem" onClick={void 0}>
                                            <Grid alignItems="center" container className="productItem" justify="center">
                                                <Grid container item xs={10}>
                                                    <Grid container justify="center" alignItems="center">
                                                        <Grid item xs={4}>
                                                            <img src={CartItem.productImg} alt="productName"/>
                                                        </Grid>
                                                        <Grid item container alignItems="center" xs className="itemData">
                                                            <Grid xs={12} item className="cartItemheader">
                                                                <Typography variant="subheading" className="productTitle">
                                                                    {CartItem.productName}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid xs item className="cartItemPrice">
                                                                <Typography variant="subheading" className="productPrice">
                                                                    {CartItem.productPrice}
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid xs={2} item container alignItems="center" justify="center">
                                                    <div className="actionWrapper">
                                                        <div className="buttonFlooter">
                                                            <Tooltip title="remove item from the cart" placement="bottom-end">
                                                                <IconButton className="cartItemButton"
                                                                            onClick={void 0}>
                                                                    <Icon>delete</Icon>
                                                                </IconButton>
                                                            </Tooltip>
                                                        </div>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                        {(array.length > 1 && index < array.length - 1) && <Divider className="divider"/>}
                                    </Fragment>
                                </Tooltip>
                            )}
                        </List>
                    </PerfectScrollbar>
                </div>
                <div>wish list</div>
                <div>orders</div>
            </EnhancedTabs>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        compared: state.user.compared,
        liked: state.user.liked,
        orders: state.user.orders,
        products: state.products.products
    }
}
export default connect(mapStateToProps)(Notification);