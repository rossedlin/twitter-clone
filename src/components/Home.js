***REMOVED***
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Tweets from './Tweets';
import TweetIcon from '../assets/icon/tweet.svg';

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
        <div className="col-2">
          <div className="fixed-bottom text-right" style={{marginBottom: "5.5rem", marginRight: "1.5rem"}}>
            <a href="/compose" className="btn btn-primary rounded-circle p-3">
              <img src={TweetIcon} className="" width="25" alt="Tweet"/>
            </a>
      ***REMOVED***
    ***REMOVED***
        <div className="col-12 fixed-top text-white border-light border-bottom bg-black">
          <RightSidebar auth={auth}/>
    ***REMOVED***
  ***REMOVED***
***REMOVED***
  ***REMOVED***
}

export default Home;
