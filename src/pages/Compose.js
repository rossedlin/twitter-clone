import React, {useRef, useState} from 'react';

import {useAuthState} from 'react-firebase-hooks/auth';

import BackIcon from '../assets/icon/backArrow.svg';

/**
 *
 * @return {JSX.Element}
 * @constructor
 */
function Compose({firebase}) {

  const auth      = firebase.auth();
  const firestore = firebase.firestore();

  // const {photoURL} = auth.currentUser;
  const messageRef                = firestore.collection('messages');
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    if (formValue.toString().length > 0) {
      const {uid, displayName, photoURL} = auth.currentUser;

      await messageRef.add({
        displayName,
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
      });
    }

    setFormValue('');
  };

  return (
    <div className="container">
      <form onSubmit={sendMessage}>
        <div className="row py-2 border-bottom">
          <div className="col-4">
            <div className="m-1">
              <a href="/">
                <img src={BackIcon} height="40" alt="Back Icon"/>
              </a>
            </div>
          </div>
          <div className="col-4">&nbsp;</div>
          <div className="col-4 text-center">
            <button type={'submit'} className="btn btn-primary m-1">Tweet</button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-2">
            <div className="m-1">
              <a href="/">
                <img src="" className="rounded" height="50" alt="Photo of you"/>
              </a>
            </div>
          </div>
          <div className="col-10 text-white font-weight-bold">
              <textarea style={{width: '300px'}}
                        id="exampleFormControlTextarea1"
                        rows="5"
                        placeholder="What's happening?"
                        value={formValue}
                        onChange={(e) => setFormValue(e.target.value)}/>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Compose;
