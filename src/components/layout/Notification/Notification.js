import React from 'react'
import EnhancedTabs from "../../UI/EnhancedTabs/EnhancedTabs";
import './Notification.scss';
import {connect} from "react-redux";
import ItemsList from "./ItemsList";
import {LIKE, MANAGE_COMPARED} from "../../../dux/actions/actionTypes";


const Notification = props => {
    const {
        compared,
        liked,
        orders,
        products
        , toggleCompared,
        toggleLike
    } = props;

    const wishList = liked.map(likedItem => products.find(product => likedItem.id === product.id)) || [];
    const comparedList = compared.map(comparedItem => products.find(product => product.id === comparedItem.id)) || [];
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
                    <ItemsList listItems={comparedList} message="you have no items on compare yet!" deleteBtnclick={toggleCompared}/>
                </div>
                <div className="tabView">
                    <ItemsList listItems={wishList} message="your wish list is empty!" deleteBtnclick={toggleLike}/>
                </div>
                <div>orders</div>
            </EnhancedTabs>
        </div>
    )
};
const mapStateToProps = state => {
    return {
        compared: state.user.compared,
        liked: state.user.liked,
        orders: state.user.orders,
        products: state.products.products
    }
};
const mapDispatchToProps = dispatch => {
    return {
        toggleLike: (id) => dispatch({type: LIKE, payload: {item: {id}}}),
        toggleCompared: (id) => dispatch({type: MANAGE_COMPARED, payload: {item: {id}}}),

    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Notification);