import React, {useState} from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Tweet from './Tweet';
import TweetIcon from '../assets/icon/tweet.svg';
***REMOVED***useCollectionData} from 'react-firebase-hooks/firestore';

***REMOVED***
 *
 * @return {JSX.Element}
 * @constructor
***REMOVED***
function Home({firebase, auth}) {

  const firestore = firebase.firestore(***REMOVED***

  const messageRef = firestore.collection('messages'***REMOVED***
  const query = messageRef.orderBy('createdAt', 'desc').limit(25***REMOVED***
  const [messages] = useCollectionData(query, {idField: 'id'}***REMOVED***

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 fixed-bottom border-light border-top text-center bg-black">
          <LeftSidebar auth={auth}/>
    ***REMOVED***
        <div className="col-12 my-5">
          <div>
            {messages && messages.map(msg => <Tweet auth={auth} key={msg.id} message={msg}/>)}
      ***REMOVED***
    ***REMOVED***
        <div className="col-2">
          <div className="fixed-bottom text-right" style={{marginBottom: '5.5rem', marginRight: '1.5rem'}}>
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
