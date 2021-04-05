import React from 'react';

import StarIcon from '../assets/icon/star.svg';

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
        <img src={StarIcon} className="btn-icon" alt="Star Icon"/>
      </div>
    </div>
  );
}

export default Header;
