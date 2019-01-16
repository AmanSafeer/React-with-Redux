import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './App.css';
import Input from './input';
import Dashboard from './dashboard'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Link to="/">Registration</Link>
            <Link to ="/dashboard">Dashboard</Link>
            <hr/> 
            <Route exact path="/" component={Input}/>
            <Route path="/dashboard" component={Dashboard}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
