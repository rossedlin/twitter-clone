import React from 'react';

import BackIcon from '../assets/icon/backArrow.svg';
import Loading from '../components/Loading';
import NameForm from '../components/NameForm';
import {Redirect} from 'react-router-dom';

/**
 *
 * @param firebase
 * @param user
 * @returns {JSX.Element}
 * @constructor
 */
// function Test(firebase, user) {
//
//   const {uid, displayName, photoURL} = user;
//   const firestore                    = firebase.firestore();
//   const messageRef                   = firestore.collection('messages');
//   // const [formValue, setFormValue] = useState('');
//
//   let formValue = '';
//
//   const sendMessage = async (e) => {
//     e.preventDefault();
//
//     if (formValue.toString().length > 0) {
//       const {uid, displayName, photoURL} = auth.currentUser;
//
//       await messageRef.add({
//         displayName,
//         text: formValue,
//         createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//         uid,
//         photoURL,
//       });
//     }
//
//     // setFormValue('');
//   };
// }

/**
 *
 */
class Compose extends React.Component {

  /**
   *
   * @param props
   */
  constructor(props) {
    super(props);

    /**
     *
     * @type {JSX.Element}
     */
    this.user    = null;
    this.loading = true;

    /**
     *
     * @type {{loading: boolean, user: null, value: string}}
     */
    this.state = {
      value: '',
    };

    /**
     *
     */
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   *
   */
  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(user => {

      this.loading = false;
      if (user) {
        this.user = user;
      }

      this.forceUpdate();
    });
  }

  /**
   *
   * @param event
   */
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  /**
   *
   * @param event
   */
  handleSubmit(event) {
    event.preventDefault();

    const firestore  = this.props.firebase.firestore();
    const messageRef = firestore.collection('messages');

    if (this.state.value.toString().length > 0) {
      const {uid, displayName, photoURL} = this.user;

      console.log('Tweeting: ' + this.state.value);

      messageRef.add({
        displayName,
        text: this.state.value,
        createdAt: this.props.firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
      }).then(() => {
        console.log('Sent!');
      });
    }

    this.setState({
      value: '',
    });
  }

  /**
   *
   * @returns {JSX.Element}
   */
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

  /**
   *
   * @returns {JSX.Element}
   */
  hello() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-white font-weight-bold text-center" style={{fontSize: 36, marginTop: '50%'}}>
            Hello from Compose
          </div>
        </div>
      </div>
    );
  }

  /**
   * Old View
   */
  view() {

    const {photoURL} = this.user;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
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
                <img src={photoURL} className="rounded" height="50" alt="Photo of you"/>
              </div>
            </div>
            <div className="col-10 text-white font-weight-bold">
              <textarea style={{width: '300px'}}
                        id="exampleFormControlTextarea1"
                        rows="5"
                        placeholder="What's happening?"
                        value={this.state.value}
                        onChange={this.handleChange}/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Compose;
