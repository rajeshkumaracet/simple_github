import React, {Component} from 'react';
import Github from './Github';
import './App.css';

class App extends Component {

  render(){

    return (
      <div className ="App">
        <Github name="rajeshkumaracet"/>
        <Github name="1hakr"/>
      </div>
    )
  }
}

export default App;




// https://api.github.com/users/
