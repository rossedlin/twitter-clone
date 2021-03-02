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
    <div className="col-12 p-0 fixed-bottom border-light border-top text-center bg-dark">
      <div className="row">
        <div className="col-3">
          <a href="#" className="btn btn-nav">
            <img src={HomeImage} alt="Home Image"/>
          </a>
    ***REMOVED***

        <div className="col-3">
          <a href="#" className="btn btn-nav">
            <img src={HashImage} alt="Home Image"/>
          </a>
    ***REMOVED***

        <div className="col-3">
          <a href="#" className="btn btn-nav">
            <img src={NotificationImage} alt="Home Image"/>
          </a>
    ***REMOVED***

        <div className="col-3">
          <a href="#" className="btn btn-nav">
            <img src={MessageImage} alt="Home Image"/>
          </a>
    ***REMOVED***
  ***REMOVED***
***REMOVED***
  ***REMOVED***
}

export default LeftSidebar;
