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
  auth.signOut().then(
    {}
  ***REMOVED***

  // return (
  //   <Router>
  //     <Switch>
  //       <Route path="/logout">
  //         <Logout firebase={firebase}/>
  //       </Route>
  //       <Route path="/compose">
  //         <Compose firebase={firebase}/>
  //       </Route>
  //       <Route path="/">
  //         <App firebase={firebase}/>
  //       </Route>
  //     </Switch>
  //   </Router>
  //   <button onClick={() => auth.signOut()}>Sign out</button>
  // ***REMOVED***
}

export default Logout;
