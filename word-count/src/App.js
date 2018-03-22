import React, { Component } from 'react'
import './App.css'

import Landing from './Landing'
import Home from './Home'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={Landing} />
            <Route exact path='/home' component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
