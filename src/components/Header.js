import React from 'react';

import StarIcon from '../assets/icon/star.svg';
import Icon from './Icon';

/**
 *
 * @return {JSX.Element}
 * @constructor
 */
function Header({auth}) {

  const {uid, photoURL} = auth.currentUser;

  return (
    <div className="row py-2">
      <div className="col-2">
        <a href="#">
          <img src={photoURL} className="img img-fluid rounded-circle"
               alt="Home Image"/>
        </a>
      </div>
      <div className="col-8">
        <h1 style={{fontSize: 18, fontWeight: 'bold'}}>Home</h1>
      </div>
      <div className="col-2">
        <Icon Image={StarIcon} Name="Top Tweets" Placement="left" Classes=""/>
      </div>
    </div>
  );
}

export default Header;
