import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter } from 'react-router-dom';

class App extends Component {
  render() {
      return (
        <div className="App">
          <Switch>
              <Route exact path="/" component={Welcome} />
          </Switch>
        </div>
      );
    }
  }

export default App;
