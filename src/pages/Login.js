import TwitterIcon from '../assets/icon/twitter.svg';
***REMOVED***useAuthState} from 'react-firebase-hooks/auth';
***REMOVED***Redirect***REMOVED***
***REMOVED***

***REMOVED***
 *
 * @param firebase
 * @param auth
 * @return {JSX.Element}
 * @constructor
***REMOVED***
function Login({firebase}) {

  let auth = firebase.auth(***REMOVED***
  let [user] = useAuthState(auth***REMOVED***
  let displayName;

  ***REMOVED***
   * Redirect if user
  ***REMOVED***
  if (user) {
    return <Redirect to='/'  />
  }

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
          <p className="text-info">
            Hey there, I'm a Twitter Clone.<br/>
          </p>
          <p className="text-info">
            If you view the <a href="https://twitter.com/" target="_blank">twitter</a> website on your mobile phone,
            you can see I look very similar.
          </p>
          <p className="text-info">
            My purpose is to demonstrate building a <a href="https://firebase.google.com/"
                                                       target="_blank">firebase</a> / <a href="https://reactjs.org/"
                                                                                         target="_blank">react</a> app
            that emulates twitter.
          </p>
          <p className="text-info">
            Normally on the official twitter login you would have a username / password box here.<br/>
            But instead you don't because we're going to redirect you so you can use your real account to sign in.<br/>
          </p>
          <p className="text-info">
            Don't worry, I'm not stealing your data,
            you can check my <a href="https://github.com/rossedlin/twitter-clone"
                                target="_blank">source code</a> here if you don't trust me.<br/>
          </p>
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

export default Login;
