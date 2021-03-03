import React, {useRef, useState} from 'react';

***REMOVED***useAuthState} from 'react-firebase-hooks/auth';
***REMOVED***useCollectionData} from 'react-firebase-hooks/firestore';

import Icon from './components/Icon';
import BackIcon from './assets/icon/backArrow.svg';
import Button from './components/Button';

***REMOVED***
 *
 * @return {JSX.Element}
 * @constructor
***REMOVED***
function Compose({firebase}) {

  const auth = firebase.auth(***REMOVED***
  const firestore = firebase.firestore(***REMOVED***

  const messageRef = firestore.collection('messages'***REMOVED***
  const [formValue, setFormValue] = useState(''***REMOVED***

  const sendMessage = async (e) => {
    e.preventDefault(***REMOVED***

    if (formValue.toString().length > 0) {
      const {uid, displayName, photoURL} = auth.currentUser;

      await messageRef.add({
        displayName,
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
      }***REMOVED***
    }

    setFormValue(''***REMOVED***
  };

  return (
    <div className="container">
      <form onSubmit={sendMessage}>
        <div className="row">
          <div className="col-4">
            <div className="m-1">
              <Icon Href="/" Image={BackIcon} Name="Back"/>
        ***REMOVED***
      ***REMOVED***
          <div className="col-4">&nbsp;</div>
          <div className="col-4">
            <Button type={'submit'} Text="Tweet"/>
      ***REMOVED***
          <div className="col-12 text-white font-weight-bold text-center" style={{fontSize: 36, marginTop: '3rem'}}>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
              <textarea className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                        value={formValue}
                        onChange={(e) => setFormValue(e.target.value)}/>
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
      </form>
***REMOVED***
  ***REMOVED***
}

export default Compose;
