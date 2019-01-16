import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoginConnect from './storeConnection/loginConnect'
import TodoConnect from './storeConnection/todoConnect';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Route exact path="/" component={LoginConnect}/>
        <Route  path="/home" component={TodoConnect}/>
        </div>
      </Router>
    );
  }
}

export default App;
