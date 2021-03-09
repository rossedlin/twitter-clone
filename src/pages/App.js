import React from 'react';

import Loading from '../components/Loading';
import Home from '../components/Home';
import Login from './Login';
import {Redirect} from 'react-router-dom';
import Footer from '../components/Footer';
import Tweets from '../components/Tweets';
import TweetIcon from '../assets/icon/tweet.svg';
import Header from '../components/Header';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  /**
   *
   */
  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(user => {
      this.setState({
        loading: false,
      });
    });
  }

  /**
   *
   * @returns {JSX.Element}
   */
  render() {

    let auth = this.props.firebase.auth();

    /**
     * Redirect if no user
     */
    if (auth.currentUser == null) {
      return <Redirect to='/login'/>;
    }

    /**
     *
     */
    if (this.state.loading) {
      return <Loading/>;
    } else {
      return this.view();
    }
  }

  /**
   *
   * @returns {JSX.Element}
   */
  view() {
    return (
      <div className="container border">
        <div className="row">
          <div className="col-12 text-white border-light border-bottom bg-black">
            <Header auth={this.props.firebase.auth()}/>
          </div>
          <div className="col-12 my-5">
            <Tweets firebase={this.props.firebase}/>
          </div>
          <div className="col-12">
            <div className="text-right" style={{marginBottom: '1.5rem', marginRight: '0.5rem'}}>
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

export default App;
