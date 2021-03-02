***REMOVED***
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import Home from './Home';
import SignIn from './SignIn';

***REMOVED***useAuthState} from 'react-firebase-hooks/auth';

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
          {user ? <Home auth={auth}/> : <SignIn/>}
  ***REMOVED***
  ***REMOVED***
}

export default App;
