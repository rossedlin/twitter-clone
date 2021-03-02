***REMOVED***

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
***REMOVED***useAuthState} from 'react-firebase-hooks/auth';

import Home from './components/Home';
import SignIn from './components/SignIn';

***REMOVED***
 *
 * @return {JSX.Element}
 * @constructor
***REMOVED***
function App({firebase}) {

  const auth = firebase.auth(***REMOVED***
  const [user] = useAuthState(auth***REMOVED***

  return (
      <div className="App">
          {user ? <Home firebase={firebase} auth={auth}/> : <SignIn firebase={firebase} auth={auth}/>}
  ***REMOVED***
  ***REMOVED***
}

export default App;
