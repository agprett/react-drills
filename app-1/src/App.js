import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      box: ''
    }
  }

  handleChange(event){
    this.setState({box: event})
  }

  render() {
    return (
      <div className="App">
        <input onChange={event => this.handleChange(event.target.value)}/>
        <div>{this.state.box}</div>
      </div>
    );
  }
}

export default App;
