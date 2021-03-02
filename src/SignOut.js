***REMOVED***

***REMOVED***
 *
 * @param {firebase.auth.Auth} auth
 *
 * @return {*|JSX.Element}
 * @constructor
***REMOVED***
function SignOut(auth) {
  return (
    <button onClick={() => auth.signOut()}>Sign out</button>
  ***REMOVED***

  // return auth.currentUser && (
  //   <button onClick={() => auth.signOut()}>Sign out</button>
  // ***REMOVED***
}

export default SignOut;
