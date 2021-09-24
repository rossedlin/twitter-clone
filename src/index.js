import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

/**
 * Firebase
 */
import firebase from 'firebase/app';
require('firebase/auth');
require('firebase/firestore');


/**
 * Styles
 */
import './assets/scss/custom.scss';

/**
 * Pages
 */
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Compose from './pages/Compose';

/**
 * Firebase
 */
firebase.initializeApp({
  apiKey:            "AIzaSyCq1MQ0DTLOK6heIgzLrJ5FnVSKBUCyUc4",
  authDomain:        "twitter-clone-c935e.firebaseapp.com",
  databaseURL:       "https://twitter-clone-c935e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "twitter-clone-c935e",
  storageBucket:     "twitter-clone-c935e.appspot.com",
  messagingSenderId: "254207818709",
  appId:             "1:254207818709:web:0e5c3aae7d6b5aa3915b5c",
  measurementId:     "G-MV86CVLGXG"
});

/**
 * Render
 */
ReactDOM.render(
  <React.StrictMode>
    <div className="container-iphone">
      <Router>
        <Switch>
          <Route path='/assets' component={() => {
            window.location.href = 'https://firebasestorage.googleapis.com/v0/b/twitter-clone-c935e.appspot.com/o/twitter-app-assets.zip?alt=media&token=30259c1d-76e8-4140-a3f2-d75170807d8e';
            return null;
          }}/>
          <Route path="/login">
            <Login firebase={firebase}/>
          </Route>
          <Route path="/logout">
            <Logout firebase={firebase}/>
          </Route>
          <Route path="/compose">
            <Compose firebase={firebase}/>
          </Route>
          <Route path="/">
            <Home firebase={firebase}/>
          </Route>
        </Switch>
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);

/**
 * If you want to start measuring performance in your app, pass a function
 * to log results (for example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 */
reportWebVitals();
