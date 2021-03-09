import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Redirect} from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Tweet from '../components/Tweet';
import TweetIcon from '../assets/icon/tweet.svg';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
function HelloWorld({firebase}) {

  let auth   = firebase.auth();
  let [user] = useAuthState(auth);

  /**
   * Redirect if no user
   */
  if (user == null) {
    return <Redirect to='/login'/>;
  }

  let {displayName} = auth.currentUser;

  return (
    <div className="container border">
      <div className="row">
        <div className="col-12 text-white border-light border-bottom bg-black">
          <Header auth={auth}/>
        </div>
        <div className="col-12 my-5 text-white text-center">
          <h1>Hello World</h1>
          <p>{displayName}</p>
        </div>
        <div className="col-12 border-light border-top text-center bg-black">
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default HelloWorld;
