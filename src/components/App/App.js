import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import { HashRouter as Router, Route } from "react-router-dom";
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';

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
        </div>
      </Router>
    );
  }
}

export default App;
