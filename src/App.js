import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import LeftSidebar from "./LeftSidebar";
import Main from "./Main";
import RightSidebar from "./RightSidebar";

firebase.initializeApp({
  apiKey: "AIzaSyCq1MQ0DTLOK6heIgzLrJ5FnVSKBUCyUc4",
  authDomain: "twitter-clone-c935e.firebaseapp.com",
  databaseURL: "https://twitter-clone-c935e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "twitter-clone-c935e",
  storageBucket: "twitter-clone-c935e.appspot.com",
  messagingSenderId: "254207818709",
  appId: "1:254207818709:web:0e5c3aae7d6b5aa3915b5c",
  measurementId: "G-MV86CVLGXG",
}***REMOVED***

function App() {
  return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <LeftSidebar/>
        ***REMOVED***
            <div className="col-8">
              <Main/>
        ***REMOVED***
            <div className="col-2">
              <RightSidebar/>
        ***REMOVED***

      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
  ***REMOVED***
}

export default App;
