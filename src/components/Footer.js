import React from 'react';

import Icon from './Icon';
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
    <div className="row">
      <div className="col-3">
        <Icon Image={HomeIcon} Name="Home"/>
      </div>

      <div className="col-3">
        <Icon Image={HashIcon} Name="Hashtags"/>
      </div>

      <div className="col-3">
        <Icon Image={NotificationIcon} Name="Notifications"/>
      </div>

      <div className="col-3">
        <Icon Image={MessageIcon} Name="Messages"/>
      </div>
    </div>
  );
}

export default Footer;
