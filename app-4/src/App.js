import React from 'react';
import './App.css';
import Login from './Login.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: '',
      password: ''
    }
  }
  
  render() {
    return (
      <div className="App">
        <Login/>
    </div>
  );
}

}

export default App;
