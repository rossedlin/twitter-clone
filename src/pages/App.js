***REMOVED***

import Loading from '../components/Loading';
import Home from '../components/Home';
import Login from './Login';
***REMOVED***Redirect***REMOVED***
import Footer from '../components/Footer';
import Tweets from '../components/Tweets';
import TweetIcon from '../assets/icon/tweet.svg';
import Header from '../components/Header';
***REMOVED***useAuthState} from 'react-firebase-hooks/auth';
***REMOVED***useCollectionData} from 'react-firebase-hooks/firestore';

class App extends React.Component {
  constructor(props) {
    super(props***REMOVED***
    this.state = {
      loading: true,
    };
  }

  ***REMOVED***
   *
  ***REMOVED***
  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(user => {
      this.setState({
        loading: false,
      }***REMOVED***
    }***REMOVED***
  }

  ***REMOVED***
   *
   * @returns {JSX.Element}
  ***REMOVED***
  render() {

    let auth = this.props.firebase.auth(***REMOVED***

    ***REMOVED***
     * Redirect if no user
    ***REMOVED***
    if (auth.currentUser == null) {
      return <Redirect to='/login'/>;
    }

    ***REMOVED***
     *
    ***REMOVED***
    if (this.state.loading) {
      return <Loading/>;
    } else {
      return this.view(***REMOVED***
    }
  }

  ***REMOVED***
   *
   * @returns {JSX.Element}
  ***REMOVED***
  view() {
    return (
      <div className="container border">
        <div className="row">
          <div className="col-12 text-white border-light border-bottom bg-black">
            <Header auth={this.props.firebase.auth()}/>
      ***REMOVED***
          <div className="col-12 my-5">
            <Tweets firebase={this.props.firebase}/>
      ***REMOVED***
          <div className="col-12">
            <div className="text-right" style={{marginBottom: '1.5rem', marginRight: '0.5rem'}}>
              <a href="/compose" className="btn btn-primary rounded-circle p-3">
                <img src={TweetIcon} className="" width="25" alt="Tweet"/>
              </a>
        ***REMOVED***
      ***REMOVED***
          <div className="col-12 border-light border-top text-center bg-black">
            <Footer/>
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
    ***REMOVED***
  }
}

export default App;
