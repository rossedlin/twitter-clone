***REMOVED***

import StarIcon from '../assets/icon/star.svg';
import Icon from './Icon';

***REMOVED***
 *
 * @return {JSX.Element}
 * @constructor
***REMOVED***
function Header({auth}) {

  const {uid, photoURL} = auth.currentUser;

  return (
    <div className="row py-2">
      <div className="col-2">
        <a href="#">
          <img src={photoURL} className="img img-fluid rounded-circle"
               alt="Home Image"/>
        </a>
  ***REMOVED***
      <div className="col-8">
        <h1 style={{fontSize: 18, fontWeight: 'bold'}}>Home</h1>
  ***REMOVED***
      <div className="col-2">
        <Icon Image={StarIcon} Name="Top Tweets" Placement="left" Classes=""/>
  ***REMOVED***
***REMOVED***
  ***REMOVED***
}

export default Header;
