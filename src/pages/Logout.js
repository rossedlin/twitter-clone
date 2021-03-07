***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
  Redirect,
***REMOVED***
import firebase from 'firebase';
import Compose from './Compose';
import App from './App';

***REMOVED***
 *
 * @param firebase
 * @returns {JSX.Element}
 * @constructor
***REMOVED***
function Logout({firebase}) {

  const auth = firebase.auth(***REMOVED***
  auth.signOut(***REMOVED*** //todo - ensure works correctly

  return <Redirect to='/login'/>;
}

export default Logout;
