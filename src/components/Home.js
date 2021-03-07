import React, {useState} from 'react';
import Footer from './Footer';
import Header from './Header';
import Tweet from './Tweet';
import TweetIcon from '../assets/icon/tweet.svg';
***REMOVED***useCollectionData} from 'react-firebase-hooks/firestore';
import HelloWorld from './HelloWorld';
import Loading from './Loading';
import Login from '../pages/Login';

class Home extends React.Component {
  constructor(props) {
    super(props***REMOVED***
    this.state = {
      loaded: false,
      messages: [],
      name: '',
    };
  }

  ***REMOVED***
   *
  ***REMOVED***
  componentDidMount() {

    setTimeout(function() {
      this.setState({
        loaded: true,
        name: 'Stackoverflow'
      }***REMOVED***
    }.bind(this), 2000***REMOVED***

    // if (this.loadMessages()) {
    //   this.state.loaded = true;
    // }
  }

  ***REMOVED***
   *
   * @returns {*}
  ***REMOVED***
  render() {
    let auth = this.props.firebase.auth(***REMOVED***

    if (this.state.loaded) {
      return <HelloWorld/>;
    }

    return <Loading/>;
  }

  ***REMOVED***
   *
   * @returns {*}
  ***REMOVED***
  loadMessages() {
    let firebase        = this.props.firebase;
    // let auth            = firebase.auth(***REMOVED***
    let firestore       = firebase.firestore(***REMOVED***
    let messageRef      = firestore.collection('messages'***REMOVED***
    let query           = messageRef.orderBy('createdAt', 'desc').limit(25***REMOVED***
    this.state.messages = useCollectionData(query, {idField: 'id'}***REMOVED***

    return true;
  }


}

export default Home;
