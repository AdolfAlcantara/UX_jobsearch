import React, { Component } from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/search/:keyword" component={Search}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
