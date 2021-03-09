import React, {useState} from 'react';
import Footer from './Footer';
import Header from './Header';
import Tweet from './Tweet';
import TweetIcon from '../assets/icon/tweet.svg';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import HelloWorld from './HelloWorld';
import Loading from './Loading';
import Login from '../pages/Login';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      messages: [],
      name: '',
    };
  }

  /**
   *
   */
  componentDidMount() {

    setTimeout(function() {
      this.setState({
        loaded: true,
        name: 'Stackoverflow'
      });
    }.bind(this), 2000);

    // if (this.loadMessages()) {
    //   this.state.loaded = true;
    // }
  }

  /**
   *
   * @returns {*}
   */
  render() {
    let auth = this.props.firebase.auth();

    if (this.state.loaded) {
      return <HelloWorld/>;
    }

    return <Loading/>;
  }

  /**
   *
   * @returns {*}
   */
  loadMessages() {
    let firebase        = this.props.firebase;
    // let auth            = firebase.auth();
    let firestore       = firebase.firestore();
    let messageRef      = firestore.collection('messages');
    let query           = messageRef.orderBy('createdAt', 'desc').limit(25);
    this.state.messages = useCollectionData(query, {idField: 'id'});

    return true;
  }


}

export default Home;
