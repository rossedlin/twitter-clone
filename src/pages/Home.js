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
      <div className="container home">
        <div className="row">
          <div className="col-12">
            <Header user={this.user}/>
          </div>
          <div className="col-12">
            <Tweets firebase={this.props.firebase}/>
          </div>
          <div className="col-12">
            <div className="btn-tweet">
              <a href="/compose">
                <img src={TweetIcon} width="25" alt="Button Tweet"/>
              </a>
            </div>
          </div>
          <div className="col-12">
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
