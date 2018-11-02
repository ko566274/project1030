import React, { Component } from 'react';

import './App.scss';


class App extends Component {
  render() {
    return (
      <div id="App">
      
       {
         	this.props.children
        }  
      </div>
    );
  }
}

export default App;
