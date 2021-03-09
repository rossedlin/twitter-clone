import React, {useRef, useState} from 'react';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

import Icon from '../components/Icon';
import BackIcon from '../assets/icon/backArrow.svg';
import Button from '../components/Button';

/**
 *
 * @return {JSX.Element}
 * @constructor
 */
function Compose({firebase}) {

  const auth = firebase.auth();
  const firestore = firebase.firestore();

  const messageRef = firestore.collection('messages');
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
        <div className="row">
          <div className="col-4">
            <div className="m-1">
              <Icon Href="/" Image={BackIcon} Name="Back"/>
            </div>
          </div>
          <div className="col-4">&nbsp;</div>
          <div className="col-4">
            <Button type={'submit'} Text="Tweet"/>
          </div>
          <div className="col-12 text-white font-weight-bold text-center" style={{fontSize: 36, marginTop: '3rem'}}>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
              <textarea className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                        value={formValue}
                        onChange={(e) => setFormValue(e.target.value)}/>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Compose;
