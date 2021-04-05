import React from 'react';
import {Redirect} from 'react-router-dom';

import BackIcon from '../assets/icon/backArrow.svg';
import Loading from '../components/Loading';

class Compose extends React.Component {

  constructor(props) {
    super(props);

    this.user    = null;
    this.loading = true;

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(user => {

      this.loading = false;
      if (user) {
        this.user = user;
      }

      this.forceUpdate();
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const firestore  = this.props.firebase.firestore();
    const messageRef = firestore.collection('messages');

    if (this.state.value.toString().length > 0) {
      const {uid, displayName, photoURL} = this.user;

      messageRef.add({
        displayName,
        text: this.state.value,
        createdAt: this.props.firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
      });
    }

    this.setState({
      value: '',
    });
  }

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

  view() {

    const {photoURL} = this.user;

    return (
      <div className="compose">
        <form onSubmit={this.handleSubmit}>

          <div className="compose-header">
            <div className="compose-back">
              <a href="/">
                <img src={BackIcon} height="40" alt="Back Icon"/>
              </a>
            </div>
            <div className="col-4">&nbsp;</div>
            <div className="compose-tweet">
              <button type={'submit'}>Tweet</button>
            </div>
          </div>

          <div className="compose-body">
            <div className="compose-photo">
              <img src={photoURL} className="rounded" height="50" alt="Photo of you"/>
            </div>
            <div className="compose-message">
              <textarea rows="5" placeholder="What's happening?" value={this.state.value} onChange={this.handleChange}/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Compose;
