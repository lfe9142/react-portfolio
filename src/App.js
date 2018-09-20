import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BioComponent from './BioComponent';
import LinkButtonComponent from './LinkButtonComponent';
import SkillsComponent from './SkillsComponent';

class App extends Component {
  state = {
    tab: 1,
  }

  handleTabButtonClick(newTab) {
      this.setState({tab: newTab});
  }

  showCurrentTab() {
    const currentTab = this.state.tab;
    switch (currentTab) {
        case 1:
            return (
                <div>
                  <BioComponent/>
                </div>
            )
        case 2:
            return (
                <div>
                    <SkillsComponent/>
                </div>
            )   
        case 3:
            return (
                <div>
                    You can contact me here!
                </div>
            )
    }
}


  render() {
    return (
      <div className="App">
       <h1>Levi Flippo</h1>
       <div>
                 <div>
                    <button onClick={() => this.handleTabButtonClick(1)}>About</button>
                    <button onClick={() => this.handleTabButtonClick(2)}>Skills</button>
                    <button onClick={() => this.handleTabButtonClick(3)}>Contact</button>
                </div>

                <div>{this.showCurrentTab()}</div>
            </div>
       
       <LinkButtonComponent name="Github" link="https://github.com/lfe9142"/>
       <LinkButtonComponent name="LinkedIn" link="https://www.linkedin.com/in/levi-flippo-7443b6145/"/>

      </div>
    );
  }
}

export default App;
