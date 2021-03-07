***REMOVED***

***REMOVED***Redirect***REMOVED***
import Footer from '../components/Footer';
import Tweets from '../components/Tweets';
import TweetIcon from '../assets/icon/tweet.svg';
import Header from '../components/Header';

function Home({firebase}) {

  let auth = firebase.auth(***REMOVED***

  ***REMOVED***
   * Redirect if no user
  ***REMOVED***
  if (auth.currentUser == null) {
    return <Redirect to='/login'/>;
  }

  return (
    <div className="container border">
      <div className="row">
        <div className="col-12 text-white border-light border-bottom bg-black">
          <Header auth={auth}/>
    ***REMOVED***
        <div className="col-12">
          <Tweets firebase={firebase}/>
    ***REMOVED***
        <div className="col-12">
          <div className="text-right" style={{marginBottom: '1.5rem', marginRight: '0.5rem'}}>
            <a href="/compose" className="btn btn-primary rounded-circle p-3">
              <img src={TweetIcon} className="" width="25" alt="Tweet"/>
            </a>
      ***REMOVED***
    ***REMOVED***
        <div className="col-12 border-light border-top text-center bg-black">
          <Footer/>
    ***REMOVED***
  ***REMOVED***
***REMOVED***
  ***REMOVED***
}

export default Home;
