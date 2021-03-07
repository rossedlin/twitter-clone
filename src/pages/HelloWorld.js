***REMOVED***
***REMOVED***useAuthState} from 'react-firebase-hooks/auth';
***REMOVED***Redirect***REMOVED***

***REMOVED***
 *
 * @returns {JSX.Element}
 * @constructor
***REMOVED***
function HelloWorld({firebase}) {

  let auth   = firebase.auth(***REMOVED***
  let [user] = useAuthState(auth***REMOVED***

  ***REMOVED***
   * Redirect if no user
  ***REMOVED***
  if (user == null) {
    return <Redirect to='/login'/>;
  }

  let {displayName} = auth.currentUser;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-white font-weight-bold text-center" style={{fontSize: 36, marginTop: '50%'}}>
          <h1>Hello World</h1>
          <p>{displayName}</p>
    ***REMOVED***
  ***REMOVED***
***REMOVED***
  ***REMOVED***
}

export default HelloWorld;
