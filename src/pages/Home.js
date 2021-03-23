import React from 'react';

import {Redirect} from 'react-router-dom';
import Footer from '../components/Footer';
import Tweets from '../components/Tweets';
import TweetIcon from '../assets/icon/tweet.svg';
import Header from '../components/Header';
import Loading from '../components/Loading';

class Home extends React.Component {

  /**
   *
   * @param props
   */
  constructor(props) {
    super(props);

    /**
     *
     * @type {firebase.User}
     */
    this.user = null;
    this.loading = true;
  }

  /**
   *
   */
  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(user => {

      this.loading = false;
      if (user) {
        this.user = user;
      }

      this.forceUpdate();
    });
  }

  /**
   *
   * @returns {JSX.Element}
   */
  render() {

    if (!this.loading) {
      if (this.user) {
        return this.view();
      } else {
        return <Redirect to='/login'/>;
      }
    }

    return <Loading/>;
  }

  /**
   * View
   */
  view() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-white border-light border-bottom bg-black">
            <Header user={this.user}/>
          </div>
          <div className="col-12">
            <Tweets firebase={this.props.firebase}/>
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
}

export default Home;
