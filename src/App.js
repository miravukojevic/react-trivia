import React, { Component }  from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Setup from './components/Setup';
import { Route,
  Switch } from 'react-router-dom';
  


class App extends Component {
  render() {
      return (
        <div className="App">
          <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/setup" component={Setup} />
          </Switch>
        </div>
      );
    }
  }

export default App;
