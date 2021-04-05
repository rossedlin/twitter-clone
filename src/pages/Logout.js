import React from 'react';
import {Redirect} from 'react-router-dom';

function Logout({firebase}) {

  const auth = firebase.auth();
  auth.signOut();

  return <Redirect to='/login'/>;
}

export default Logout;
