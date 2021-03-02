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
    <div className="container">
      <div className="row">
        <div className="col-12 fixed-bottom border-light border-top text-center bg-black">
          <LeftSidebar auth={auth}/>
    ***REMOVED***
        <div className="col-12 my-5">
          <Tweets/>
    ***REMOVED***
        <div className="col-12 fixed-top text-white border-light border-bottom bg-black">
          <RightSidebar auth={auth}/>
    ***REMOVED***
  ***REMOVED***
***REMOVED***
  ***REMOVED***
}

export default Home;
