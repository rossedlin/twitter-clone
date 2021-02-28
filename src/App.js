***REMOVED***
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import Home from './components/Home';

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
        <div className="container-fluid m-0">
          {/*{user ? 'Home' : 'SignIn'}*/}
          <Home auth={auth}/>
    ***REMOVED***
  ***REMOVED***
  ***REMOVED***
}

export default App;
