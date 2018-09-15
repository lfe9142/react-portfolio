import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BioComponent from './BioComponent';
import LinkButtonComponent from './LinkButtonComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Levi Flippo</h1>
       <BioComponent/>
       <LinkButtonComponent/>
      </div>
    );
  }
}

export default App;
