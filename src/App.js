import React, { Component } from 'react';

import './App.scss';
import Navbar from './component/navbar.js'

class App extends Component {
  render() {
    return (
      <div id="App">
        {
         	this.props.children
         }

        <Navbar />
      </div>
    );
  }
}

export default App;
