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

firebase.initializeApp({
  'apiKey':            process.env.REACT_APP_API_KEY,
  'authDomain':        process.env.REACT_APP_AUTH_DOMAIN,
  'databaseURL':       process.env.REACT_APP_DATABASE_URL,
  'projectId':         process.env.REACT_APP_PROJECT_ID,
  'storageBucket':     process.env.REACT_APP_STORAGE_BUCKET,
  'messagingSenderId': process.env.REACT_APP_MESSAGING_SENDER_ID,
  'appId':             process.env.REACT_APP_APP_ID,
  'measurementId':     process.env.REACT_APP_MEASUREMENT_ID,
});

/**
 * Render
 */
ReactDOM.render(
  <React.StrictMode>
    <div className="container-iphone">
      <Router>
        <Switch>
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
