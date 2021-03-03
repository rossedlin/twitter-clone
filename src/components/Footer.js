***REMOVED***

import Icon from './Icon';
import HomeIcon from '../assets/icon/home.svg';
import HashIcon from '../assets/icon/hash.svg';
import NotificationIcon from '../assets/icon/notification.svg';
import MessageIcon from '../assets/icon/message.svg';

***REMOVED***
 *
 * @return {*|JSX.Element}
 * @constructor
***REMOVED***
function Footer() {
  return (
    <div className="row">
      <div className="col-3">
        <Icon Image={HomeIcon} Name="Home"/>
  ***REMOVED***

      <div className="col-3">
        <Icon Image={HashIcon} Name="Hashtags"/>
  ***REMOVED***

      <div className="col-3">
        <Icon Image={NotificationIcon} Name="Notifications"/>
  ***REMOVED***

      <div className="col-3">
        <Icon Image={MessageIcon} Name="Messages"/>
  ***REMOVED***
***REMOVED***
  ***REMOVED***
}

export default Footer;
