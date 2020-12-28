import React from 'react';
import { connect } from 'react-redux';

import Notifications from 'react-notification-system-redux';

const GlobalNotifications = (props) => {
  //Optional styling
  const style = {
    NotificationItem: {
      // Override the notification item
      // DefaultStyle: { // Applied to every notification, regardless of the notification level
      //   margin: '10px 5px 2px 1px'
      // },
      // success: { // Applied only to the success notification item
      //   color: 'red'
      // }
    },
  };

  // eslint-disable-next-line no-alert
  return <Notifications notifications={props.notifications} style={style} />;
};

// DemoComponent.contextTypes = {
//   store: PropTypes.object
// };

// DemoComponent.propTypes = {
//   notifications: PropTypes.array
// };

export default connect((state) => ({
  notifications: state.notifications,
}))(GlobalNotifications);
