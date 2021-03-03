***REMOVED***

import Loading from './components/Loading';
import Home from './components/Home';
import SignIn from './components/SignIn';

class App extends React.Component {
  constructor(props) {
    super(props***REMOVED***
    this.state = {
      loading: true,
      name: '',
    };
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(user => {
        this.setState({
          loading: false,
          name: 'Stackoverflow',
        }***REMOVED***
    }***REMOVED***
  }

  render() {

    let auth = this.props.firebase.auth(***REMOVED***

    if (this.state.loading) {
      return <Loading/>;
    } else {
      if (auth.currentUser) {
        return <Home firebase={this.props.firebase} auth={auth}/>;
      } else {
        return <SignIn firebase={this.props.firebase} auth={auth}/>
      }
    }
  }
}

export default App;
