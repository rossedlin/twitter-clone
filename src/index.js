import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import firebase from 'firebase/app';
import reportWebVitals from './reportWebVitals';

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
firebase.initializeApp(require('./.env.json'));

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
