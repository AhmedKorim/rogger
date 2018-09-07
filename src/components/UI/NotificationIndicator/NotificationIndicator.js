import React from 'react'
import './NotificationIndicator.scss';

const NotificationIndicator = ({count}) => count > 0 ? <span className="bilCount">{count}</span> : null;


export default NotificationIndicator