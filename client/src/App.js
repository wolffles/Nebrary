import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';


import Discover from './components/layout/Discover'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} /> 
          <div className="container">
            <Route exact path="/tv" component={Discover} />
          </div>
          <Footer />
        </div>
      </Router> 
    );
  }
}

export default App;
