import TwitterIcon from '../assets/icon/twitter.svg';

***REMOVED***
 *
 * @param firebase
 * @param auth
 * @return {JSX.Element}
 * @constructor
***REMOVED***
function SignIn({firebase, auth}) {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider(***REMOVED***
    auth.signInWithPopup(provider***REMOVED***
  };

  return (
      <div className="container px-4 py-4">
        <div className="row">
          <div className="col-3">
            <img src={TwitterIcon} alt="Twitter Icon"/>
      ***REMOVED***
          <div className="col-9">&nbsp;</div>
    ***REMOVED***
        <div className="row">
          <div className="col-12 mt-5 text-light">
            <h1 style={{fontSize: '28px', fontWeight: 'bold'}}>
              Log in to Twitter
            </h1>
      ***REMOVED***
          <div className="col-12 mt-5">
            <p className="text-info">This is where the normal username / email and password would go,
              but we're going to login with your google Google Account.</p>
      ***REMOVED***
          <div className="col-12 mt-5">
            <button className="btn btn-primary p-3" style={{width: '100%'}} onClick={signInWithGoogle}>
              Log in
            </button>
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
  ***REMOVED***
}

export default SignIn;
