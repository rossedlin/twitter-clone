import React from 'react';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import Tweet from './Tweet';

function Tweets({firebase}) {
  let auth       = firebase.auth();
  let firestore  = firebase.firestore();
  let messageRef = firestore.collection('messages');
  let query      = messageRef.orderBy('createdAt', 'desc').limit(25);
  let [messages] = useCollectionData(query, {idField: 'id'});

  return (
    <div>
      {messages && messages.map(msg => <Tweet auth={auth} key={msg.id} message={msg}/>)}
    </div>
  )
}

export default Tweets;
