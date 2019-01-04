import React, { Component } from 'react';
import Msg from './Msg';
import Home from './Practice/Home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Msg name='章三' />
        <Home />
      </div> 
    );
  }
}

export default App;
