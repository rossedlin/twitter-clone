***REMOVED***

import HomeImage from '../assets/icon/home.svg';
import HashImage from '../assets/icon/hash.svg';
import NotificationImage from '../assets/icon/notification.svg';
import MessageImage from '../assets/icon/message.svg';

***REMOVED***
 *
 * @param {firebase.auth.Auth} auth
 *
 * @return {*|JSX.Element}
 * @constructor
***REMOVED***
function LeftSidebar(auth) {
  return (
    <div className="row">
      <div className="col-3">
        <a href="#">
          <img src={HomeImage} className="btn-icon" alt="Home Image"/>
        </a>
  ***REMOVED***

      <div className="col-3">
        <a href="#">
          <img src={HashImage} className="btn-icon" alt="Home Image"/>
        </a>
  ***REMOVED***

      <div className="col-3">
        <a href="#">
          <img src={NotificationImage} className="btn-icon" alt="Home Image"/>
        </a>
  ***REMOVED***

      <div className="col-3">
        <a href="#">
          <img src={MessageImage} className="btn-icon" alt="Home Image"/>
        </a>
  ***REMOVED***
***REMOVED***
  ***REMOVED***
}

export default LeftSidebar;
