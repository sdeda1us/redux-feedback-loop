import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import { HashRouter as Router, Route } from "react-router-dom";
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <br/>

          <Route exact path='/' component={Feeling}/>
          <Route path ='/understand' component={Understanding}/>
          <Route path ='/support' component={Supported}/>
          <Route path ='/comment' component={Comments}/>
          <Route path ='/review' component={Review}/>
          <Route path ='/success' component={Success}/>
          <Route path ='/admin' component={Admin}/>
        </div>
      </Router>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(App);
