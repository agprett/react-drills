import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: ['Milk', 'Cheese', 'Bacon', 'Bread', 'Thyme', 'Sage', 'Basil', 'Potato'],
      words: ''
    }
  }

  display(){
    let shown = this.state.data.filter((e) => {
      return e.includes(this.state.words)
    }).map((e,i) => {
      return <h2 key={i}>{e}</h2>
    })
    return shown
  }

  handleChange(event){
    this.setState({words: event})
  }

  render() {
    return (
      <div className="App">
        <input onChange={event => this.handleChange(event.target.value)}/>
        {this.display()}
      </div>
    );
  }
}

export default App;
