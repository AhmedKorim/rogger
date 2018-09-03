import React from 'react'
import EnhancedTabs from "../../UI/EnhancedTabs/EnhancedTabs";
import './Notification.scss';

const Notification = props => {
    return (
        <div className="NotificationMenu">
            <EnhancedTabs
                toolbarClasses={['NotificaitonToolbar']}
                disableRouting
                rootClass='notificationRoot'
                tabRootClass='notificaitonTabRoot'
                indercatorClass='notificationTabIndector'
                paddges={[{label: 'compared',count:0,icon:'compared'}, {label: 'wish list', count:5, icon:'favourite'}, {label: 'orders',count:5,icon:'list'}]}
            >
                <div>compared</div>
                <div>wish list</div>
                <div>orders</div>
            </EnhancedTabs>
        </div>
    )
}
export default Notification