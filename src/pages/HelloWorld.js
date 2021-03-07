***REMOVED***
***REMOVED***useAuthState} from 'react-firebase-hooks/auth';
***REMOVED***Redirect***REMOVED***

import Header from '../components/Header';
import Footer from '../components/Footer';
import Tweet from '../components/Tweet';
import TweetIcon from '../assets/icon/tweet.svg';

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
    <div className="container border">
      <div className="row">
        <div className="col-12 text-white border-light border-bottom bg-black">
          <Header auth={auth}/>
    ***REMOVED***
        <div className="col-12 my-5 text-white text-center">
          <h1>Hello World</h1>
          <p>{displayName}</p>
    ***REMOVED***
        <div className="col-12 border-light border-top text-center bg-black">
          <Footer/>
    ***REMOVED***
  ***REMOVED***
***REMOVED***
  ***REMOVED***
}

export default HelloWorld;
