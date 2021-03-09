import React from 'react';

import {Redirect} from 'react-router-dom';
import Footer from '../components/Footer';
import Tweets from '../components/Tweets';
import TweetIcon from '../assets/icon/tweet.svg';
import Header from '../components/Header';

function Home({firebase}) {

  let auth = firebase.auth();

  /**
   * Redirect if no user
   */
  if (auth.currentUser == null) {
    return <Redirect to='/login'/>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-white border-light border-bottom bg-black">
          <Header auth={auth}/>
        </div>
        <div className="col-12">
          <Tweets firebase={firebase}/>
        </div>
        <div className="col-12">
          <div className="text-right" style={{marginTop: '1.5rem', marginBottom: '1.5rem', marginRight: '0.5rem'}}>
            <a href="/compose" className="btn btn-primary rounded-circle p-3">
              <img src={TweetIcon} className="" width="25" alt="Tweet"/>
            </a>
          </div>
        </div>
        <div className="col-12 border-light border-top text-center bg-black">
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Home;
