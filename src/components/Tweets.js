***REMOVED***
***REMOVED***useCollectionData} from 'react-firebase-hooks/firestore';
import Tweet from './Tweet';

function Tweets({firebase}) {
  let auth       = firebase.auth(***REMOVED***
  let firestore  = firebase.firestore(***REMOVED***
  let messageRef = firestore.collection('messages'***REMOVED***
  let query      = messageRef.orderBy('createdAt', 'desc').limit(25***REMOVED***
  let [messages] = useCollectionData(query, {idField: 'id'}***REMOVED***

  return (
    <div>
      {messages && messages.map(msg => <Tweet auth={auth} key={msg.id} message={msg}/>)}
***REMOVED***
  )
}

export default Tweets;
