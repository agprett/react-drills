import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      data: ['MW', 'Smash Bros', 'Legend of Zelda', 'Shadow of Mordor']
    }
  }

  diplaystuff(){
    let shown = this.state.data.map((e, i) => {
    return <h2 key={i}>{e}</h2>
    })
    return shown
  }

  render() {
    return (
      <div className="App">
        {this.diplaystuff()}
      </div>
    );
  }
}

export default App;
