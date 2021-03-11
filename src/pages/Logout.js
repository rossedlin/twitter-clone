import React from 'react';
import {
  Redirect,
} from 'react-router-dom';

/**
 *
 * @param firebase
 * @returns {JSX.Element}
 * @constructor
 */
function Logout({firebase}) {

  const auth = firebase.auth();
  auth.signOut(); //todo - ensure works correctly

  return <Redirect to='/login'/>;
}

export default Logout;
