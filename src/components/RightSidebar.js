***REMOVED***

import StarIcon from '../assets/icon/star.svg';

***REMOVED***
 *
 * @return {JSX.Element}
 * @constructor
***REMOVED***
function RightSidebar({auth}) {

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
        <a href="#">
          <img src={StarIcon} alt="Home Image"/>
        </a>
  ***REMOVED***
***REMOVED***
  ***REMOVED***
}

export default RightSidebar;
