import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import firebase from 'firebase';
import Compose from './Compose';
import App from './App';

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
