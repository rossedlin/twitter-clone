import React from 'react';

import HomeIcon from '../assets/icon/home.svg';
import HashIcon from '../assets/icon/hash.svg';
import NotificationIcon from '../assets/icon/notification.svg';
import MessageIcon from '../assets/icon/message.svg';

/**
 *
 * @return {*|JSX.Element}
 * @constructor
 */
function Footer() {
  return (
    <div className="row footer">
      <div className="col-3">
        <img src={HomeIcon} className="btn-icon" alt="Home Icon"/>
      </div>

      <div className="col-3">
        <img src={HashIcon} className="btn-icon" alt="Hashtags Icon"/>
      </div>

      <div className="col-3">
        <img src={NotificationIcon} className="btn-icon" alt="Notifications Icon"/>
      </div>

      <div className="col-3">
        <img src={MessageIcon} className="btn-icon" alt="Messages Icon"/>
      </div>
    </div>
  );
}

export default Footer;
