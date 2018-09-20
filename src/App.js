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
       <LinkButtonComponent name="Github" link="https://github.com/lfe9142"/>
       <LinkButtonComponent name="LinkedIn" link="https://www.linkedin.com/in/levi-flippo-7443b6145/"/>

      </div>
    );
  }
}

export default App;
