***REMOVED***
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Tweets from './Tweets';

***REMOVED***
 *
 * @return {JSX.Element}
 * @constructor
***REMOVED***
function Home({auth}) {
  return (
      <div className="row">
        <LeftSidebar auth={auth}/>
        <Tweets/>
        <RightSidebar/>
  ***REMOVED***
  ***REMOVED***
}

export default Home;
