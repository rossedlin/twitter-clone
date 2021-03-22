import React from 'react';

import StarIcon from '../assets/icon/star.svg';
import Icon from './Icon';

/**
 *
 * @return {JSX.Element}
 * @constructor
 */
function Header({user}) {

  const {photoURL} = user;

  return (
    <div className="row header">
      <div className="col-2">
        <a href="#">
          <img src={photoURL}
               alt="Home Image"/>
        </a>
      </div>
      <div className="col-8">
        <h1>Home</h1>
      </div>
      <div className="col-2">
        <Icon Image={StarIcon} Name="Top Tweets" Placement="left" Classes=""/>
      </div>
    </div>
  );
}

export default Header;
