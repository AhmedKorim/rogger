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
                tab={[{label: 'compared'}, {label: 'wish list'}, {label: 'orders'}]}
            >
                <div>compared</div>
                <div>wish list</div>
                <div>orders</div>
            </EnhancedTabs>
        </div>
    )
}
export default Notification